import { Outlet } from "react-router-dom";
import { Package2 } from "lucide-react";

function SharedLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center space-x-2">
          <Package2 className="h-6 w-6" />
          <span className="text-xl font-bold">MyApp</span>
        </div>
      </header>
      <main className="flex flex-1 justify-center items-center bg-gray-100">
        <Outlet />
      </main>
      <footer className="p-4 bg-gray-800 text-white text-center">
        © 2023 MyApp. All rights reserved.
      </footer>
    </div>
  );
}

export default SharedLayout;