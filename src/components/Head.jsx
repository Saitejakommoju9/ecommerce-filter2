const Head = () => {
  return (
    <div className="fixed top-0 left-0 w-screen bg-blue-500 h-15 shadow-2xl flex items-center px-5">
      
      <input
        type="text"
        placeholder="Search.."
        className="bg-white h-8 w-34 md:w-64 px-2 outline-none rounded"
      />

      <nav className="ml-auto">
        <ul className="flex gap-5">
          <li>Home</li>
          <li>Contact</li>
          <li>Login</li>
          <li>Cart</li>
        </ul>
      </nav>

    </div>
  );
};

export default Head;