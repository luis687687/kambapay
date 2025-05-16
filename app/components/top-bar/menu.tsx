import Link from "next/link"
import styles from "./styles.module.css"

export default function Menu({
  className
} : {
  className?:string
}){

  return(
    <ul className={styles.menu+" "+className}>
      {
        Array(4).fill(1).map(
          (e, i) => <li key={i}>
            <Link href={""}>Menu</Link>
            </li>
        )
      }
    </ul>
  )
}