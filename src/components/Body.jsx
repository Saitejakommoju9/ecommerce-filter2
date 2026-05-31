import { useEffect, useState } from "react";
import Products from "./Products";
import Categories from "./Categories";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const[width,setWidth]=useState(window.innerWidth);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(products);
    } else {
      const result = products.filter((item) =>
        selectedCategories.includes(item.category)
      );
      setFilteredProducts(result);
    }
  }, [selectedCategories, products]);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
    setFilteredProducts(data.products);
  };

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

  return (
    <div className="flex">
      
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
