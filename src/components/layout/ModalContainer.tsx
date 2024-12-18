import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ModalContainerProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export function ModalContainer({ children, title, className }: ModalContainerProps) {
  return (
    <Dialog defaultOpen>
      <DialogContent className={cn("sm:max-w-[600px]", className)}>
        <DialogHeader>
          <DialogTitle className="sr-only">{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}