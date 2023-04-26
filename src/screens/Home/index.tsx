import { Buttons } from "@/components/Button";
import { Textfield } from "@/components/textfield";
import { Store } from "@/contexts";
import { Todotype } from "@/types/Todo";
import {ChangeEvent, FormEvent, useContext, useState}  from "react";
import { toast } from 'react-toastify';


export const Homescreen = () => {
    const [Addtodo,setTodo]=useState<Todotype>(
      {
        title:"",
        desc:""
      }
    )
   const {todoList,setTodolist}=useContext(Store)
    const handler=(e:FormEvent<HTMLFormElement>)=>{
     e.preventDefault()
     if(!Addtodo.title) return toast.error("Error 404 ! Amir nabashid")
     

       setTodolist([...todoList,Addtodo])
     
    }

    return ( 
        <form action="" onSubmit={(e:FormEvent<HTMLFormElement>)=>handler(e)}>

            <Textfield onChange={(e:ChangeEvent<HTMLInputElement>)=>setTodo({
              ...Addtodo,
            title:e.target.value,
            })
            } className="bg-slate-400" type="text"/>
             <Textfield onChange={(e:ChangeEvent<HTMLInputElement>)=>setTodo({
              ...Addtodo,
            desc:e.target.value,
            })
            } className="bg-slate-400" type="text"/>
          <Buttons text="Add task"/>
        </form>
     );
}
