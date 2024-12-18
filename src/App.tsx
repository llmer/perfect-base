import { ModalContainer } from "@/components/layout/ModalContainer";
import { MainLayout } from "@/components/layout/MainLayout";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { SearchSection } from "@/components/sections/SearchSection";
import { Separator } from "@/components/ui/separator";

function App() {
  return (
    <MainLayout>
      <ModalContainer title="Application Framework">
        <div className="space-y-4">
          <WelcomeSection />
          <Separator className="my-2" />
        </div>
      </ModalContainer>
    </MainLayout>
  );
}

export default App;