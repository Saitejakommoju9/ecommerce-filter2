import { useEffect, useState } from "react";

const Categories = ({ selectedCategories, setSelectedCategories }) => {

  const[width,setWidth]=useState(window.innerWidth);
  const[dropDown,setDropdown]=useState(false);

  const categories=["beauty", "fragrances", "furniture","groceries"];
  const handleChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter(item => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleButton=()=>{
    setDropdown(!dropDown);
  }

  useEffect(()=>{
    //console.log(window.innerWidth);
    const handleWidthChange=()=>{
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize",handleWidthChange);

    return ()=>{
      window.removeEventListener("resize",handleWidthChange);
    }
  },[window.innerWidth]);

 
final draft
  return (
    width<640 ?( 
    <div className="cursor-pointer ">
      <button onClick={handleButton} className="text-white opacity-70  bg-black border  rounded-md p-1 font-bold text-lg hover:opacity-70">Filters {dropDown ?"▲":"▼"}</button>
      {dropDown &&
      <div className="flex flex-col bg-black opacity-60 text-white p-2 rounded-sm -ml-2 font-bold">
        {categories.map((category) => (
        <label key={category}>
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => handleChange(category)}
          />
          <span className="font-bold text-xs md:text-lg mx-1">{category}</span>
        </label>
      ))}

        
      </div>
      }

    </div>):(
    <div className="flex flex-col w-36 py-56 pl-2 fixed ">
      <h2 className="text-xs md:text-lg">CATEGORIES</h2>

      

      {categories.map((category) => (
        <label key={category}>
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => handleChange(category)}
          />
          <span className="font-bold text-xs md:text-lg mx-1">{category}</span>
        </label>
      ))}
    </div>
    )
  );
};

export default Categories;
