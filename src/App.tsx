import Layout from "./layout";
import { Routes, Route } from "react-router-dom";
  import { Homescreen } from "./screens/Home";
import { Login } from "./screens";
export const App = () => {
    return ( 
        <>
        <Layout>
       <Routes>
        <Route element={<Homescreen/>} path="/"/>
        <Route element={<Login/>} path="/Login"/>
       </Routes>
        </Layout>
        </>
     );
}