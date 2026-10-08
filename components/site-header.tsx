import Link from "next/link";
import { Hexagon } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-card backdrop-blur">
      <div className="mx-auto flex h-14 items-center gap-4 px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Hexagon className="size-5" aria-hidden="true" />
          <span>Belajar+</span>
        </Link>
      </div>
    </header>
  );
}
