import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Boxes } from "lucide-react";

export function WelcomeSection() {
  return (
    <Card className="border-none shadow-none bg-muted/50">
      <CardHeader className="space-y-1 pb-4">
        <div className="flex items-center gap-2">
          <Boxes className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">Built with React, Tailwind CSS,
          and shadcn/ui</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum adipiscing aut ea do labore? Enim nisi commodo et ut nostrud consectetur exercitation amet? Consequat lorem laboris et ea ad quia amet. Ullamco aliqua ea ullamco adipiscing dolore aut consequat quis!
        </p>
      </CardContent>
    </Card>
  );
}