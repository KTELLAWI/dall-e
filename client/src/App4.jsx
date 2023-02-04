import React from 'react';
//import { BrowserRouter, Link} from 'react-router-dom';
 import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
//import  CreatePost  from './page';
//import { CreatePost } from './page';
//import { CreatePost } from './page';

// import { logo } from './assets';
 import  Home from './page/Home';
import Noon from './page/Noon';
 //import CreatePost from './page/CreatePost';

function App4() {
  return (
   <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
    <Link to="/">
    <img src="https://th.bing.com/th/id/R.dcab58f4b7db0150bb8a78e50d29aac1?rik=4JYV05cHB%2bxIqg&pid=ImgRaw&r=0" alt="logo" className="w-28 object-contain" />

    </Link>

    <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
  </header>
  <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create-post" element={<Noon/>} />

    
    </Routes>
  </main>

   </BrowserRouter>
  )
}

export default App4