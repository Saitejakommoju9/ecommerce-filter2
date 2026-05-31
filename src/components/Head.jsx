import { useState } from "react";

const Head = () => {
    const[input,setInput]=useState("");
  return (
    <div className="fixed top-0 left-0 w-screen bg-blue-500 h-15 shadow-2xl flex items-center px-5">
      
      <input
        type="text"
        placeholder="Search.." onChange={(e)=>setInput(e.target.value)}
        className="bg-white h-8 w-60 md:w-90 mx-auto px-2 outline-none rounded"
      />

      

    </div>
  );
};

export default Head;