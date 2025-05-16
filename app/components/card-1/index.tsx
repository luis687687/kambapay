export default function Card1(){

  return(
    <div className="w-full max-w-[300px] " style={{
      borderRadius: "10px",
      padding: "var(--space)",
      backdropFilter: "blur(30px)",
      boxShadow: "#99989830 0px 0px 19px",
      background: "rgba(255,255,255, 0.4)"
    }}>
      <div className={"w-[50px] h-[50px] bg-[var(--color-enphase-black)] rounded-full "}/>
      <h2 className={"title text-[11px] "} style={{
        fontSize: "18px"
      }}> 
        Título
      </h2>
      <span style={{
        fontSize: "12px"
      }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quam rem illo.
      </span>
    </div>
  )
}