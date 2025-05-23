import { useEffect } from "react";
import StartButton from "../form/start-button";
import styles from "./styles.module.css";


export default function HomeApresentation({
  className
} : {
  className?:string
}){


  return(
    <div className={className}>
      <TitleHome className={styles.area}/>
      <div className={"mb-[20px]"} data-aos="zoom-in"
        data-aos-duration="1000"
        
      >
        <span >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores iure ipsa reprehenderit doloremque eius. Laboriosam facilis eligendi consequuntur ratione veritatis libero, rem assumenda eius delectus, ipsam reprehenderit non consectetur corrupti?
        </span>
      </div>
      <StartButton />
    </div>
  )
}


export const TitleHome = ({
  className
} : {
  className?:string
}) => {
  return (
    <h1 className= { " title " + className} 
    
    data-aos="fade-down"
    data-aos-duration="1000">
    Para Ti <span className={'text-[var(--color-enphase-black)] '}>Kamba</span> <br /> Compras Sem Fronteiras
  </h1>
  )
} 