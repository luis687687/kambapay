


export default function SoftGradientTwo() {


  return (
    <div className="w-full h-full overflow-hidden absolute" >
   

    <div 
        style={{
          backgroundColor: "darkblue",
          right: "12%",
          position: "absolute",
          opacity: "0.3"
          
        }}
        className="w-60 rounded-full h-50  mt-[-110px] absolute"
      />

       <div 
        style={{
          backgroundColor: "pink",
          left: "20%",
          position: "absolute",
          
          top: "50%",
          borderRadius: "30px",
          opacity: "0.6"
          
        }}
        className="w-[30%] h-25   absolute"
      />

       <div 
        style={{
          backgroundColor: "orange",
          left: "40%",
          position: "absolute",
          opacity: "0.6",
          top: "50%",
          borderRadius: "30px",
          
        }}
        className="w-[30%] h-20   absolute"
      />
    
    </div>
  )
}