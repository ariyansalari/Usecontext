import  ReactDOM  from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App"
import { Storeprovider } from "./contexts"
const root=ReactDOM.createRoot(document.getElementById("root")as HTMLElement)

root.render(
<BrowserRouter>
<Storeprovider>
<App/>
</Storeprovider>
</BrowserRouter>

)