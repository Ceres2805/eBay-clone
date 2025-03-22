// components/MoneyBack.js
export default function MoneyBack() {
  return (
    <section
    className="flex flex-row items-center p-10 bg-gray-100 h-80"
    style={{ backgroundImage: "url('/footer-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
    <div className="ml-2 text-white">
    <h2 className="text-3xl font-bold">Get your order or your money back</h2>
    <p className="mt-2">Shop confidently with eBay Money Back Guarantee.</p>
    <button className="mt-4 bg-white text-black px-6 py-2 rounded-full font-bold">Learn more</button>
    </div>
    </section>
  );
  }