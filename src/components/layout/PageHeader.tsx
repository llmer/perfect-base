import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.open(`https://search.llmer.com?q=${encodeURIComponent(query)}`, '_blank');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && query.trim()) {
      window.open(`https://search.llmer.com?q=${encodeURIComponent(query)}`, '_blank');
    }
  };

  return (
    <div className={cn("flex justify-between items-center gap-6", className)}>
      <div className="flex-1">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground/90 transition-colors">
          {title}
        </h1>
        {description && (
          <p className="text-sm text-muted-foreground mt-1 font-medium">
            {description}
          </p>
        )}
      </div>
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <div className="relative group">
          <Input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-[200px] bg-background/50 border-muted-foreground/20 transition-all duration-200 focus:w-[300px] focus:bg-background"
          />
          <Button 
            type="submit" 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
          >
            <Search className="h-4 w-4 text-muted-foreground/70 group-hover:text-foreground/70 transition-colors" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </form>
    </div>
  );
}