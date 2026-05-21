export type Citation = {
  documentId: string;
  title: string;
  excerpt: string;
};

export type QuizOption = {
  id: string;
  label: string;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
  allowMultiple?: boolean;
};

export type SendMessageResult = {
  chunk: string;
  done: boolean;
  citations: Citation[];
  quizQuestions: QuizQuestion[];
};

const baseUrl =
  process.env.NEXT_PUBLIC_SCOPING_API_BASE_URL ?? "http://localhost:8080";

export async function startSession(visitorId: string) {
  const response = await fetch(`${baseUrl}/v1/scoping/sessions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ visitorId }),
  });

  if (!response.ok) {
    throw new Error("Failed to start session");
  }

  const data = await response.json();
  return {
    sessionId: data.sessionId as string,
    openingMessage: data.openingMessage as { role: string; content: string },
  };
}

export async function sendMessage(
  sessionId: string,
  message: string
): Promise<SendMessageResult> {
  const response = await fetch(`${baseUrl}/v1/scoping/sessions/${sessionId}:message`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId, message }),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  const raw = await response.text();
  return parseGatewayMessage(raw);
}

function parseGatewayMessage(raw: string): SendMessageResult {
  const lines = raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  let lastPayload: any = null;
  for (const line of lines) {
    try {
      lastPayload = JSON.parse(line);
    } catch {
      // Some grpc-gateway responses come as a single JSON object; fallback below.
    }
  }

  if (!lastPayload) {
    try {
      lastPayload = JSON.parse(raw);
    } catch {
      throw new Error("Unexpected gateway response format");
    }
  }

  const payload = (lastPayload.result ?? lastPayload) as any;
  return {
    chunk: payload.chunk ?? "",
    done: payload.done ?? true,
    citations: payload.citations ?? [],
    quizQuestions: payload.quizQuestions ?? [],
  };
}
