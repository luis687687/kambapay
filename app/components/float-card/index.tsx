import Card1 from "../card-1"
import SoftGradientTwo from "../soft-gradients/soft-grandient-two"
import styles from "./styles.module.css"


export default function FloatCard(){

  return(
    <div className={styles.area+ " mb-[100px] "}>
       <SoftGradientTwo />
      <div className={styles.areaflex+" relative"}>
      
        {
          Array(4).fill(1).map(
            (e,i) => <Card1 key={i} />
          )
        }
      </div>
    </div>
  )
}