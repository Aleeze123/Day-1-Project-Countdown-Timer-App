import Image from "next/image";
import Countdown from "@/components/count-down"; 

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
  
      <Image 
        src= "/purple.jpeg" 
        alt=" Background Image"
        layout="fill"
        objectFit="cover"
        priority
      />
    
      <div className="absolute inset-0 flex items-center justify-center">
        <Countdown /> 
      </div>
    </div>
  );
}
