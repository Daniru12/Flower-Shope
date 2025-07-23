import Image from "next/image";

import HeroSection from './components/HeroSection'
import SpecialOfferCard from './components/SpecialOfferCard';
import { PromotionCard } from "./components/PromotionCard";
import dynamic from 'next/dynamic';
import Review from "./components/review";
import Footer from "./components/Footer";
import WhyShopPage from "./components/WhyShopPage";


const Advertise = dynamic(() => import('./components/Advertise'), { ssr: false });

export default function Home() {
  return (
    <div>
    
    
      <HeroSection />
      <WhyShopPage />
      <SpecialOfferCard/>
      <PromotionCard/>
      <Advertise/>
      <Review/>
      <Footer/>
    </div>
  )
}
