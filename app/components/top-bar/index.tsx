import LimitedArea from "../limited-area";
import Menu from "./menu";
import styles from "./styles.module.css"


export default function TopBar(){


  return (
    <LimitedArea className={"flex row justify-between items-center pr-[calc(var(--space)*4)] "+styles.area}>
      <div className="icon w-20 h-20 rounded-full bg-black"/>
      <Menu className={"flex-1"}/>
      <div className={"w-10 h-10 bg-white rounded-full "} style={{boxShadow: "#00000038 3px 12px 20px"}}/>
    </LimitedArea>
  )
}