import React, {useState,useEffect } from 'react';
import { Loader,Card,FormField } from '../components';
import { Link } from "react-router-dom";
import Typing from 'react-typing-effect';

function FirstPage() {
//   const [loading,setLoading] = useState(false);
//   const [allPosts,setAllPosts]= useState([]);
//   const [searchText,setSearchText]= useState(null);
//   const [searchTimeout, setSearchTimeout] = useState(null);
//   const [searchedResults, setSearchedResults] = useState(null);
//   const RenderCards = ({ data, title }) => {
//     if (data?.length > 0) {
//       return (
//         data.map((post) => <Card key={post._id} {...post} />)
//       );
//     }
  
//     return (
//       <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
//     );
//   };
//   const handleSearchChange = (e) => {
//      clearTimeout(searchTimeout);
//      setSearchText(e.target.value);

//     setSearchTimeout(
//       setTimeout(() => {
//         const searchResult = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));
//         setSearchedResults(searchResult);
//       }, 500),
//     );
//   };
//   const fetchPosts = async () => {
//     setLoading(true);

//     try {
//       const response = await fetch('https://generateimage-ki6q.onrender.com/api/v1/post', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         const result = await response.json();
//         setAllPosts(result.data.reverse());
//       }
//     } catch (err) {
//       alert(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(()=>{
//     fetchPosts();
//   },[]);
const [isHovered, setIsHovered] = useState(false);
const [isHovered2, setIsHovered2] = useState(false);
const [showText, setShowText] = useState(false);
useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 1000);
  }, []);
  


  return (
    <div className="flex flex-wrap h-screen w-scrren  gap-5 justify-center items-center  ">
     <Link to="/home" >
    <div
      className="h-[70vh] w-full  bg-cover bg-center relative rounded-lg cursor-pointer "
      style={{ backgroundImage: `url("https://source.unsplash.com/random?artificial%20intelligence")` }}
    >
      <div
        className={`absolute inset-0 bg-black opacity-50 transition-opacity duration-500 ease-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

      </div>
      <div className="h-full w-full flex flex-col justify-center items-center p-5">
        <h1 className={`text-white p-5 text-4xl font-bold transition-all duration-500 ease-out ${isHovered ? 'opacity-70' : 'opacity-100'}`}>البحث في الصور الموجودة</h1>
      </div>
    </div>

    </Link>
    
    <Link to="/create-post" >
      <div
      className="h-[70vh] w-full  bg-cover bg-center relative rounded-lg cursor-pointer"
      style={{ backgroundImage: `url("https://source.unsplash.com/random?artificial%20intelligence")` }}
    >
      <div
        className={`absolute inset-0 bg-black opacity-50 transition-opacity duration-500 ease-out ${isHovered2 ? 'opacity-100' : 'opacity-0'}`}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      ></div>
      <div className="h-full w-full flex flex-col justify-center items-center p-5">
        <h1 className={`text-white text-4xl p-5 font-bold transition-all duration-500 ease-out ${isHovered2 ? 'opacity-70' : 'opacity-100'}`}>انشاء صور بالذكاء الاصطناعي</h1>
      </div>
    </div>
    </Link>
  </div>
);
}








  


export default FirstPage