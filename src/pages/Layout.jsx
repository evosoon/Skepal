import { Outlet } from "react-router-dom";
import NavigationBar from "../components/navigation/NavigationBar";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/components", label: "Components" },
  { to: "/layouts", label: "Layouts" },
  { to: "/palettes", label: "Palettes" },
  { to: "/playground", label: "Playground" },
];

export default function Layout() {
  return (
    <div className="min-h-screen bg-skepal-bg">
      <NavigationBar logo="Skepal" items={navItems} />
      <main className="max-w-[1400px] mx-auto px-6 py-6">
        <Outlet />
      </main>
    </div>
  );
}
