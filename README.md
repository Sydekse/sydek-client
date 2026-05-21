# Sydek Client

Next.js frontend for Sydek website and RAG scoping page.

## Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Configure gateway base URL:

   ```bash
   NEXT_PUBLIC_SCOPING_API_BASE_URL=http://localhost:8080
   ```

3. Start development server:

   ```bash
   pnpm dev
   ```

## RAG Scoping Page

- Route: `/scoping`
- Navbar CTA (`Start Growing`) now links to `/scoping`
- Expects backend gRPC-Gateway endpoints under `/v1/scoping/*`
