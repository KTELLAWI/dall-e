import React from 'react';
//import { BrowserRouter, Link} from 'react-router-dom';
 import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
//import  CreatePost  from './page';
//import { CreatePost } from './page';
//import { CreatePost } from './page';

// import { logo } from './assets';
 import  Home from './page/Home';
import Noon from './page/Noon';
import  FirstPage from './page/FirstPage';
 //import CreatePost from './page/CreatePost';

function App4() {
  return (
   <BrowserRouter>
    <header className="w-full flex itemes-center justify-center   bg-black sm:px-8 px-4 py-4   shadow-lg shadow-indigo-500/50  ">
    <Link to="/">
    
    <img src="https://cdn.freebiesupply.com/logos/large/2x/openai-logo-black-and-white.png" alt="logo" className="w-40 object-contain shadow-md shadow-indigo-500/50 " />

    </Link>

    {/* <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link> */}
  </header>
  <main className="sm:p-8 px-4 py-8 w-full bg-black min-h-[calc(100vh-73px)]">
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/create-post" element={<Noon/>} />
    <Route path="/" element={<FirstPage/>} />

    
    </Routes>
  </main>

   </BrowserRouter>
  )
}

export default App4