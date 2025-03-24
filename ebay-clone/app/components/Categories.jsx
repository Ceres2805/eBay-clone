// components/Categories.js
const categories = [
  { name: "Luxury", image: "/luxury.png" },
  { name: "Sneakers", image: "/sneakers.png" },
  { name: "P&A", image: "/pa.png" },
  { name: "Refurbished", image: "/refurbished.png" },
  { name: "Trading Cards", image: "/trading-cards.png" },
  { name: "Pre-loved Luxury", image: "/pre-loved-luxury.png" },
  { name: "Toys", image: "/toys.png" },
];

export default function Categories() {
  return (
    <section className="p-10">
      <h2 className="text-2xl font-bold mb-6 text-left ml-2 mt-3">Explore Popular Categories</h2>
      <div className="flex justify-around mb-12">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center text-center p-2">
            <div className="bg-[#f4f4f4] rounded-full h-38.5 w-38.5 flex items-center justify-center text-sm overflow-hidden hover:bg-[#ebebeb]">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover p-4"
              />
            </div>
            <div className="mt-2">
              <strong>{category.name}</strong>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center bg-[#055643] rounded-2xl ml-2 p-9">
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-1 text-left">There's is a deal for you, too</h2>
          <p>Don't miss a chance to save on items you've been looking for.</p>
        </div>
        <button className="ml-auto bg-white text-[#055643] px-6 py-2 rounded-full font-bold">
          Explore now
        </button>
      </div>
    </section>
  );
}