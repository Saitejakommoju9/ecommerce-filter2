import { useEffect, useState } from "react";
import Products from "./Products";
import Categories from "./Categories";
import Head from "./Head";
import { Link } from "react-router-dom";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showData,setShowData]=useState(false);
  const [prodName,setProdName]=useState("");
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
}, [selectedCategories, products, input, prodName]);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
    console.log(products);
    setFilteredProducts(data.products);
  };

  const handleMouseEnter=()=>{
    setShowData(true);
  }

  const handleMouseLeave=()=>{
    setShowData(false);
  }
  console.log(prodName);
  console.log(filteredProducts);

  

  return (
    
    <div className="flex bg-gray-100   min-h-screen">
      <Head/>
      <div className="fixed left-1/2 -translate-x-1/2">
      <input
      type="text"
      placeholder="Search.."
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      onClick={handleMouseEnter}
      
      
      className="absolute left-1/2 -translate-x-1/2 bg-white h-8 w-60 md:w-90 my-4 px-2 outline-none rounded"
      />
      </div>
      <div>
        {
          showData &&
           <div className="absolute fixed left-1/2 overflow-y-scroll -translate-x-1/2 max-h-75 top-15 w-60 md:w-90 bg-white">
            {
              products.map((prod)=>(
                <Link key={prod.id}  onClick={() => setShowData(false)} to={"/product/"+prod.id}>
                  <li  className="list-none px-3 py-2 font-bold hover:bg-gray-300" >
                    {prod.title}
                  </li>
                </Link>

              ))
            }


          </div>
        }
        
      </div>
      
      <div className="fixed hidden opacity-70 sm:block top-15 left-0 w-24 md:w-40 bg-white opacity-75 h-full overflow-y-auto">
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
    

      <div className="my-8 bg-gray-100 mt-25 sm:mt-10 sm:ml-15 md:ml-64 flex flex-wrap justify-center gap-4">
        {filteredProducts.map((prod) => (
          <Link
            key={prod.id}
            to={"/product/" + prod.id}
            className="w-[45%] sm:w-52 md:w-56"
          >
            <Products Pdata={prod} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
