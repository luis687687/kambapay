import StartButton from "../form/start-button";


export default function HomeApresentation({
  className
} : {
  className?:string
}){

  return(
    <div className={className}>
      <h1 className= { " title "}>
        Para Ti <span className={'text-[var(--color-enphase-black)]'}>Kamba</span> <br /> Compras Sem Fronteiras
      </h1>
      <div className={"mb-[20px]"}>
        <span >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores iure ipsa reprehenderit doloremque eius. Laboriosam facilis eligendi consequuntur ratione veritatis libero, rem assumenda eius delectus, ipsam reprehenderit non consectetur corrupti?
        </span>
      </div>
      <StartButton />
    </div>
  )
}