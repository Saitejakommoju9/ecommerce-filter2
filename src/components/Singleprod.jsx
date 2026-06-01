import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function Singleprod(){
    const [product,setProduct]=useState([]);
    const [images,setImages]=useState([]);
    const {id}=useParams();
    const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProduct(data.products[id-1]);
        console.log(product);
    
    };

    useEffect(()=>{
        fetchData();
    },[]);

    const {title,description,thumbnail,rating,stock,shippingInformation,brand,warrantyInformation
,availabilityStatus,minimumOrderQuantity,returnPolicy,price,discountPercentage}=product;
    
    const totalWithDiscount=(discountPercentage*100)+price;
 
    const [likes] = useState(() => Math.floor(Math.random() * 100));
    const [dislikes] = useState(() => Math.floor(Math.random() * 100));

    return(
        <div className=" w-full min-h-screen"> 
            <div className="w-screen lg:fixed lg:border lg:h-150 lg:mx-8 lg:my-6 lg:border-gray-200 lg:shadow-sm lg:w-[42%]">
                <img className="w-full lg:relative lg:left-1/2 lg:-translate-x-1/2 h-80 sm:h-96 lg:h-[450px] object-contain" src={thumbnail}/>
            </div>
            <div className="w-full lg:ml-[50%] lg:w-[48%] p-4 lg:border lg:border-gray-200 lg:shadow-sm">
                <h1 className="py-2">{title}</h1>
                <p className="text-gray-500 py-2">{description}</p>
                <div className="py-2 flex text-2xl">
                    <p className="text-2xl  text-green-300">{discountPercentage}%</p>
                    <p className="px-2  line-through text-gray-500">₹{totalWithDiscount}</p>
                    <p className="px-2">₹{price}</p>
                </div>
                <div className="flex py-2">
                    <button className="bg-green-400 rounded-sm text-white px-1">★{rating}</button>
                    <p className="px-2">In Stock:{stock}</p>
                  
                </div>
                <p className="font-light py-2">Shipping time: {shippingInformation}</p>
                
                <h2 className="font-medium py-2">Product higlights</h2>
                <div className="text-sm py-2">
                    <div className="flex">
                    <p className="py-1 w-30 font-light">Brand</p>
                    <p className="px-4 py-1">{brand}</p>
                    </div>
                    <div className="flex">
                    <p className="py-1 font-light w-30">Warranty</p>
                    <p className="px-4 py-1">{warrantyInformation}</p>
                    </div>
                    <div className="flex">
                    <p className="py-1 w-30 font-light">Stock</p>
                    <p className="px-4 py-1 text-green-500">{availabilityStatus}</p>
                    </div>
                    <div className="flex">
                     <p className="py-1 w-30 font-light">Return Policy</p>
                    <p className="px-4 py-1">{returnPolicy}</p>
                    </div>
                </div>
                <h1 className="py-2 font-bold">Rating & Reviews</h1>
                <div>
                    {product?.reviews?.map((review)=>(
                       
                        <div className="h-50 border-b border-gray-300 my-3">
                        <button className="bg-green-400 text-white rounded-sm px-1">★{review?.rating}</button>
                        <p className="py-2 font-light">Review for:{product.title}</p>
                        <p className="py-2">{review?.comment}</p>
                        <p>{review?.reviewerName} ,Bengaluru</p>
                       
                        <button className="border  border-gray-300 p-2 my-2 rounded-lg font-light ">👍 Helpful for {likes}</button>
                        <button className="border  border-gray-300 p-2 my-2 mx-6 rounded-lg font-light">👎{dislikes}</button>
                        
                        </div>
                    ))}
                </div>
                <div className="fixed bottom-0 lg:w-[48%] w-screen bg-white">
                    <div className="lg:mx-25 flex">
                    <button className="border hover:bg-gray-200 lg:mx-3 mx-4 py-2 w-45  lg:w-45 rounded-xl font-bold border-gray-400">Add to cart</button>
                    <button className="border lg:mx-3 hover:opacity-75 mx-4 py-2 w-45 lg:w-45 rounded-xl border-gray-200 font-bold bg-yellow-300">Buy at ₹{price}</button>
                    </div>
                </div>


            </div>
        </div>
    )

}
export default Singleprod;