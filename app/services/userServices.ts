
import {apiFetch} from "./api"

export async function login({
  email, password
}: {
  email: string;
  password: string;
}){

  const response = await apiFetch(
    "/user/login",
    { 
      method: "post",
      body: JSON.stringify({
        email,
        password
      }),
    }
  )
  return response
}

interface ISignUp {
  email:string,
  name:string,
  nicname:string, 
  phone:string,
  password:string
}
export async function signUp(body: ISignUp) {

  const response = await apiFetch("/user", {
    method: "post",
    body: JSON.stringify(body)
  })

  return response
}


export function getProfile(){
  try{
    return JSON.parse(localStorage.getItem("user") || "{}") 
  }
  catch(ex) {
    return null
  }
  
}