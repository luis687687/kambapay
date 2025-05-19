"use client";
import Image from "next/image";
import HomeApresentation, { TitleHome } from "../home-apresentation";
import image from "../../../assets/Hero2.png"
import styles from "./styles.module.css";
import  AOS  from "aos";

import { useEffect } from "react";

export default function HomeTop(){


  return(
    <div className=" ">
      <TitleHome className={styles.title}/>
      <div className={"flex row justify-between items-end w-full h-full "+styles.container}> 
        <HomeApresentation className={"mt-[40px] w-full max-w-[444px] flex-1"}/>
        <div className={"flex-1 "+styles.imageContainer}>
          <Image 
            src = {image}
            width={1076}
            height={975}
            alt={"Pessoa de óculos segurando um telemóvel"}
            className={"w-[500px]  "+styles.image}
            data-aos="fade-up"
          />
        </div>
        
      </div>

    </div>
  )
}