const Categories = ({ selectedCategories, setSelectedCategories }) => {

  const handleChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter(item => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="flex flex-col w-36 py-56 pl-2">
      <h2>CATEGORIES</h2>

      {["beauty", "fragrances", "furniture"].map((category) => (
        <label key={category}>
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => handleChange(category)}
          />
          <span className="font-bold text-xs mx-1">{category}</span>
        </label>
      ))}
    </div>
  );
};

export default Categories;
