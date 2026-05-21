"use client";

import { useEffect, useMemo, useState } from "react";
import { Loader2, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/careers/hero-section";
import {
  sendMessage,
  startSession,
  type Citation,
  type QuizQuestion,
} from "@/lib/scoping-api";

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
  citations?: Citation[];
};

export default function ScopingPage() {
  const [sessionId, setSessionId] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string>("");
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);

  useEffect(() => {
    let isMounted = true;

    const initialize = async () => {
      try {
        const session = await startSession("website-visitor");
        if (!isMounted) return;
        setSessionId(session.sessionId);
        setMessages([
          {
            role: "assistant",
            content: session.openingMessage.content,
          },
        ]);
      } catch (err) {
        if (!isMounted) return;
        setError("Unable to connect to the scoping backend.");
      }
    };

    initialize();
    return () => {
      isMounted = false;
    };
  }, []);

  const canSend = useMemo(() => input.trim().length > 0 && !isSending, [input, isSending]);

  const handleSend = async () => {
    const nextMessage = input.trim();
    if (!nextMessage || !sessionId) return;

    setError("");
    setIsSending(true);
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: nextMessage }]);

    try {
      const response = await sendMessage(sessionId, nextMessage);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.chunk,
          citations: response.citations,
        },
      ]);
      setQuizQuestions(response.quizQuestions);
    } catch {
      setError("Message failed. Please retry.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <HeroSection
        eyebrow="Sydek RAG Scoping"
        title="Build your project scope with AI-guided discovery"
        highlightedWord="AI-guided discovery"
        subtitle="Describe your idea, validate assumptions, and get grounded scoping guidance powered by Sydek knowledge."
      />
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 h-[70vh] flex flex-col">
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-secondary" />
                Scoping Chat
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto space-y-4 p-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`rounded-xl border p-3 ${
                    message.role === "assistant"
                      ? "bg-muted/40"
                      : "bg-secondary/10 border-secondary/20"
                  }`}
                >
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    {message.role}
                  </p>
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  {message.citations && message.citations.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {message.citations.map((citation, idx) => (
                        <div key={idx} className="text-xs p-2 rounded border bg-card">
                          <p className="font-medium">{citation.title}</p>
                          <p className="text-muted-foreground">{citation.excerpt}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
            <div className="border-t p-4 flex gap-2">
              <Input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Tell us your product idea, target users, and constraints..."
                onKeyDown={(event) => {
                  if (event.key === "Enter" && canSend) {
                    event.preventDefault();
                    handleSend();
                  }
                }}
              />
              <Button onClick={handleSend} disabled={!canSend}>
                {isSending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </div>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Adaptive Quiz</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quizQuestions.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    Quiz questions appear here when the system needs to clarify your requirements.
                  </p>
                ) : (
                  quizQuestions.map((question) => (
                    <div key={question.id} className="space-y-2">
                      <p className="font-medium">{question.prompt}</p>
                      <div className="flex flex-wrap gap-2">
                        {question.options.map((option) => (
                          <Badge key={option.id} variant="outline">
                            {option.label}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scoping Notes</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>1. Provide business problem and target users.</p>
                <p>2. Mention key features and constraints.</p>
                <p>3. Confirm priority: speed, quality, or budget.</p>
              </CardContent>
            </Card>

            {error && (
              <Card className="border-destructive/40">
                <CardContent className="pt-6 text-sm text-destructive">{error}</CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
