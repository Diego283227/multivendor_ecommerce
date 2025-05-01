import ThemeToggle from "@/components/shared/toggle-theme";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
  <div>

  <div className="w-100 flex justify-end">
    <ThemeToggle/>
  </div>
  <h1 className="font-Barlow text-xl uppercase">Bienvenido usuario</h1>
    <Button variant='default'> Bienvenido</Button>
   
  </div>
  );
}
