import { useEffect, useState } from "react";
import Products from "./Products";
import Categories from "./Categories";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
 
  const[input,setInput]=useState("");

  useEffect(() => {
    fetchData();
  }, []);

 useEffect(() => {
  let result = products;

  if (input) {
    result = result.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
  }

  if (selectedCategories.length > 0) {
    result = result.filter((item) =>
      selectedCategories.includes(item.category)
    );
  }

  setFilteredProducts(result);
}, [selectedCategories, products, input]);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
    console.log(products);
    setFilteredProducts(data.products);
  };

  

  return (
    <div className="flex">
      <input
      type="text"
      placeholder="Search.."
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      className="absolute left-1/2 -translate-x-1/2 bg-white h-8 w-60 md:w-90 my-4 px-2 outline-none rounded"
      />
      
      <div className="fixed hidden sm:block top-15 left-0 w-24 md:w-40 bg-gray-200 h-full overflow-y-auto">
        <Categories
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </div>

      <div className="fixed sm:hidden block top-18 left-11">
        <Categories
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </div>
    

      <div className="my-8  sm:ml-15  md:ml-64 flex mt-25 sm:mt-10 flex-2 flex-wrap md:flex-wrap justify-center bg-white ">
        {filteredProducts.map((prod) => (
          <Products key={prod.id} Pdata={prod} />
        ))}
      </div>
    </div>
  );
};

export default Body;
