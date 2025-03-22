// components/Hero.js
export default function Hero() {
    return (
      <section
      className="flex flex-row items-center p-10 bg-gray-100 h-80"
      style={{ backgroundImage: "url('/pokemon.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="ml-2">
      <h2 className="text-3xl font-bold">Pokémon, I choose you!</h2>
      <p className="mt-2">Take charge of your destiny on Pokémon Day.</p>
      <button className="mt-4 bg-black text-white px-6 py-2 rounded-full font-bold">Shop Pokémon</button>
      </div>
      </section>
    );
  }