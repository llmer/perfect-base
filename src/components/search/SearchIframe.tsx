import { cn } from "@/lib/utils";

interface SearchIframeProps {
  query: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
}

export function SearchIframe({ query, isOpen, onOpenChange, className }: SearchIframeProps) {
  if (!isOpen) return null;
  
  return (
    <div className={cn("absolute z-50 mt-2 w-full max-w-md rounded-lg border bg-background shadow-lg", className)}>
      <iframe
        src={`https://search.llmer.com${query ? `?q=${encodeURIComponent(query)}` : ''}`}
        className="w-full h-[400px] rounded-lg"
        title="Search Results"
      />
    </div>
  );
}