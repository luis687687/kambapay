import { transform } from "next/dist/build/swc/generated-native";


export default function SoftGradientOne () {


  return (
    <div className="w-full h-full overflow-hidden relative">
      <div 
        style={{
          backgroundColor: "#21f3d3"
        }}
        className="w-80 rounded-full h-50  mt-[-30px] ml-[-50px] absolute"
      />

    <div 
        style={{
          backgroundColor: "#21f3d3",
          right: "40px",
          position: "absolute",
          transform: "scale(1.2)"
        }}
        className="w-60 rounded-full h-80  mt-[-110px] absolute"
      />

    </div>
  )
}