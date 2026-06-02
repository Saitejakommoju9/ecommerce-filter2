const Products = (props) => {
    const { title, price, rating, images } = props.Pdata;  
    return (
        <>
        <div className=" my-5 mx-3  sm:mx-1 md:mx-1 hover:shadow-xl">
            <img src={images[0]} alt={title} className="w-sm" />
            <div className="hover:shadow-md hover:bg-white  mx-4">
            <h2 className="font-bold ">{title}</h2>
            <p>Price: ₹{price}</p>
            <p>Rating: {rating}</p>
            </div>
        </div>
        </>
    );
}
export default Products;
