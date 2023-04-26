import { Store } from "@/contexts";
import { useContext } from "react";

 export const Login = () => {
     
         const {todoList}= useContext(Store)
         console.log(todoList)
    return <h1>salam</h1>
 }
  

  
 
