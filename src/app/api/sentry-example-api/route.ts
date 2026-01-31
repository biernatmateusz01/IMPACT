import * as Sentry from "@sentry/nextjs";
export const dynamic = "force-static";

class SentryExampleAPIError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "SentryExampleAPIError";
  }
}

// A faulty API route to test Sentry's error monitoring
export function GET() {
  Sentry.logger.info("Sentry example API called");
  const err = new SentryExampleAPIError(
    "This error is raised on the backend called by the example page.",
  );
  Sentry.captureException(err);
  return new Response(err.message, { status: 500 });
}
