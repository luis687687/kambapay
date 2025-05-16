


export default function SoftGradientOne () {


  return (
    <div className="w-full h-full overflow-hidden absolute" >
      
      <div 
        style={{
          backgroundColor: "#21f3d3",
          opacity: "0.2"
        }}
        className="w-80 rounded-full h-50  mt-[-30px] ml-[-50px] absolute"
      />

    <div 
        style={{
          backgroundColor: "#21f3d3",
          right: "150px",
          position: "absolute",
          transform: "scale(1.2)",
          opacity: "0.2"
        }}
        className="w-100 rounded-full h-80  mt-[-110px] absolute"
      />

       <div 
        style={{
          backgroundColor: "pink",
          left: "20%",
          position: "absolute",
          transform: "scale(1.2)",
          top: "40%",
          borderRadius: "30px",
          opacity: "0.6"
        }}
        className="w-80 h-40   absolute"
      />

       <div 
        style={{
          backgroundColor: "orange",
          left: "60%",
          position: "absolute",
          transform: "scale(1.1)",
          top: "70%",
          borderRadius: "30px",
          opacity: "0.6"
        }}
        className="w-30 h-30   absolute"
      />
    
    </div>
  )
}