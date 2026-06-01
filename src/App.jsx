import Head from "./components/Head";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Singleprod from "./components/Singleprod";
const App=()=>{
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/product/:id",
      element:<Singleprod/>
    }

  ])
  return(
    <RouterProvider router={router}/>
      
     
    
  ) ;

}
export default App