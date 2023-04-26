import { ButtonHTMLAttributes } from "react";

interface Ibutton extends ButtonHTMLAttributes<HTMLButtonElement>{
    text:string;
}
export const Buttons = (proms:Ibutton) => {
    return ( 
        <button {...proms} className={`${proms.className} bg-blue-400 text-white font-bold p-2 m-2`}>{proms.text}</button>
     );
}

