import Image from "next/image";

import HeroSection from './Components/HeroSection'
import SpecialOfferCard from './components/SpecialOfferCard';
import { PromotionCard } from "./Components/PromotionCard";
import dynamic from 'next/dynamic';
import Review from "./Components/review";
import Footer from "./Components/Footer";
import WhyShopPage from "./components/WhyShopPage";


const Advertise = dynamic(() => import('./Components/Advertise'), { ssr: false });

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
