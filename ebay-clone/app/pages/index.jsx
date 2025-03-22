// pages/index.js
import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import MoneyBack from '../components/MoneyBack';
import LowerHeader from '../components/LowerHeader';
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div>
      <TopHeader />
      <Header />
      <LowerHeader />
      <Hero />
      <Categories />
      <MoneyBack />
      <Footer />
    </div>
  );
}