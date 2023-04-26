import { InputHTMLAttributes } from "react";

interface Itextfield extends InputHTMLAttributes<HTMLInputElement>{
    type:string;
}
export const Textfield = (proms:Itextfield) => {
    return ( 
        <input {...proms} className={`${proms.className} p-2`} type={proms.type} />
     );
}
 
