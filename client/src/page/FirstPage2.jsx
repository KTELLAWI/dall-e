import React, {useState,useEffect } from 'react';
import { Loader,Card,FormField } from '../components';

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

  return (
    <section className=' grid grid-cols-2 mx-auto'>
    <div className=' flex  bg-green-500 justify-center items-center text-white text-xs font-bold'>
البحث عن صورة موجودة
    </div>
    <div className=' '>
انشاء صورة بالذكاء الاصطناعي
    </div>

    </section>
  )
}

export default FirstPage