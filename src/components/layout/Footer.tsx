import { ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="py-6 px-4 mt-8 border-t">
      <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
        <a
          href="https://github.com/llmer/perfect-base"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground flex items-center gap-1 transition-colors"
        >
          Source
          <ExternalLink className="h-3 w-3" />
        </a>
        <Separator orientation="vertical" className="h-4" />
        <a
          href="https://docs.llmer.com/tos/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground flex items-center gap-1 transition-colors"
        >
          Terms of Service
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </footer>
  );
}