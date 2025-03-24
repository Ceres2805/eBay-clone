// components/Hero.js
export default function Hero() {
    return (
      <section
      className="flex flex-row items-center justify-between pl-18 bg-[#f7f7f7] h-90">
      <div className="ml-1.5">
        <h2 className="text-3xl font-bold">Pokémon, I choose you!</h2>
        <p className="mt-2">Take charge of your destiny on Pokémon Day.</p>
        <button className="mt-4 bg-black text-white px-6 py-2 rounded-full font-bold">Shop Pokémon</button>
      </div>
      <div className="h-130 flex items-center justify-end">
        <img src="/pokemon.jpg" alt="Pokémon" className="h-full object-contain ml-auto" />
      </div>
      </section>
    );
  }