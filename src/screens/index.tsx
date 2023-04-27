import { Store } from "@/contexts";
import { useContext } from "react";
import { Todotype } from "@/types/Todo";
 export const Login = () => {
     
         const {todoList}= useContext(Store)
         return(
                <>
        {todoList.map(({title,desc}:Todotype)=>(
                <div>

                        <h1>{title}</h1>
                        <p>{desc}</p>
                </div>
        ))}
        </>
        )
 }
  

  
 
