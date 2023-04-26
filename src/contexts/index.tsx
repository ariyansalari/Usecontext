import { Todotype } from "@/types/Todo";
import { createContext, ReactElement, useState} from "react";
import React from "react";

export const Store=createContext({
    todoList:[],
    setTodolist:()=>{},
} as{
    todoList:Todotype[];
    setTodolist:React.Dispatch<React.SetStateAction<Todotype[]>>;
});

export const Storeprovider=({children}:{children:ReactElement})=>{
const [todoList,setTodolist]=useState<Todotype[]>([]);
 
const storevalues={
    todoList:todoList,
    setTodolist:setTodolist,
};
return <Store.Provider value={storevalues}>{children}</Store.Provider>;
}