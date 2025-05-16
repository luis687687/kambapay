import Image from "next/image";
import HomeApresentation from "../home-apresentation";
import image from "../../../assets/Hero2.png"

export default function HomeTop(){

  return(
    <div className="flex row justify-between">
      <HomeApresentation className={"mt-[40px]"}/>
      <Image 
        src = {image}
        width={1076}
        height={975}
        alt={"Pessoa de óculos segurando um telemóvel"}
        className="w-[500px]"
      />
    </div>
  )
}