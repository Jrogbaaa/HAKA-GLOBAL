import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="text-center px-6">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
          404 Error
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[var(--foreground)] mb-6">
          Page Not Found
        </h1>
        <p className="text-[var(--text-secondary)] max-w-md mx-auto mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" tabIndex={0}>
          <Button variant="secondary" size="lg">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

