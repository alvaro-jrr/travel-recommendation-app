import { PlaneIcon } from "lucide-react";

import { cn } from "~/lib/utils";

export function NavBar({ className }: { className?: string }) {
  return (
    <nav className={cn("border-b", className)}>
      <div className="container">
        <div className="flex items-center gap-2">
          <PlaneIcon className="h-6 w-6" />

          <span className="font-medium">tripify</span>
        </div>
      </div>
    </nav>
  );
}
