import { Button } from "@/components/ui/button";

function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Your New App</h1>
      <p className="text-lg text-center">
        This is a bare-bones application. Start building your amazing app here!
      </p>
      <Button variant="primary">Get Started</Button>
    </div>
  );
}

export default Index;