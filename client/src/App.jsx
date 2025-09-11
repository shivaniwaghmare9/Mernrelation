
//========================================================ONE-TO-ONE RELATION======================================================
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Layout from "./Layout";
// import Home from "./Pages/Home";
// import Registration from "./Pages/Registration";
// import Display from "./Pages/Display";
// const App=()=>{
//    return(
//     <>
//     <BrowserRouter>
//     <Routes>
//         <Route path="/" element={<Layout/>}>
//           <Route index element={<Home/>}/>
//           <Route path="home" element={<Home/>}/>
//           <Route path="registration" element={<Registration/>}/>
//           <Route path="display" element={<Display/>}/>

//         </Route>
//     </Routes>
//     </BrowserRouter>
//     </>
//    )
// }
// export default App;



//========================================================ONE-TO-MANY RELATION====================================================================

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Layout";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Display from "./Pages/Display";
import Addmore from "./Pages/Addmore";
const App=()=>{
   return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="registration" element={<Registration/>}/>
          <Route path="display" element={<Display/>}/>
          <Route path="addmore/:id" element={<Addmore/>}/>

        </Route>
    </Routes>
    </BrowserRouter>
    </>
   )
}
export default App;