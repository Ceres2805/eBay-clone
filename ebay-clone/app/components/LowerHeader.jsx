// components/Header.js

export default function LowerHeader() {
    return (
      <header className="flex justify-center items-center py-2.5 px-10 bg-white text-xs">
        <ul>
            {[
                { label: "Explore (New!)" },
                { label: "Saved" },
                { label: "Electronics", expandable: true },
                { label: "Motors", expandable: true },
                { label: "Fashion", expandable: true },
                { label: "Collectibles and Art", expandable: true },
                { label: "Sports", expandable: true },
                { label: "Health & Beauty", expandable: true },
                { label: "Industrial equipment", expandable: true },
                { label: "Home & Garden", expandable: true },
                { label: "Deals" },
                { label: "Sell", expandable: true },
            ].map((item, index) => (
                <li key={index} className="inline-block mx-2 mb-5">
                    <a href="#" className="text-gray-700 hover:text-blue-800 hover:underline">
                        {item.label}
                        {item.expandable && <span className="ml-1"></span>}
                    </a>
                </li>
            ))}
        </ul>
      </header>
    );
  }