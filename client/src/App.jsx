import { useRef, useState } from 'react'
import { GoogleOAuthProvider } from "@react-oauth/google"
import Canvas from './canvas'

import { Home, Customiser, Posts,Shopit, Confirmed,Register,LogIn} from './pages'
import { BrowserRouter, Link, Route, Routes, useLocation }
    from "react-router-dom"
import { Home_Navabar } from './components'



const App = () => {
 

  return (
    <div className='bg-[#9f8787] '>
<header className='bg-[#ed9e4a] border-8 border-[#ac6a0d] ml-2 mr-2 rounded-full'>
  <Home_Navabar/>
</header>

      <Routes>
        {/* <Route path="/signup" element={<Register/>}/> */}
        {/* <Route path="/" element={<LogIn/>}/> */}
        <Route path="/" element={<Home />}/>
        <Route path="/customise" element={<Customiser/>}/>
        <Route path="/designs" element={<Posts />}/>
        <Route path="/shopit" element={<Shopit />}/>
        <Route path="/confirmed" element={<Confirmed />}/>
      </Routes>
      
    </div>
  );
};


// 682146987015-jsmeqv22o4pcoh9bpnv0s22h1pkatm3d.apps.googleusercontent.com

{/* <GoogleOAuthProvider clientId={process.env.GOOGLE_AUTH_CLIENT_ID_TOKEN}> */}
const AppWithRouter = () => (
   <GoogleOAuthProvider clientId="682146987015-jsmeqv22o4pcoh9bpnv0s22h1pkatm3d.apps.googleusercontent.com">
  <BrowserRouter>
    <App />
  </BrowserRouter>
   </GoogleOAuthProvider>
);

  
  export default AppWithRouter;