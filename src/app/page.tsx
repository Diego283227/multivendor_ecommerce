import ThemeToggle from "@/components/shared/toggle-theme";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
  <div className="p-5">

  <div className="w-100 flex gap-x-5 justify-end">
      <UserButton/>
    <ThemeToggle/>

  </div>
  <h1 className="font-Barlow text-xl ">Home Page</h1>
   
   
   
  </div>
  );
}
