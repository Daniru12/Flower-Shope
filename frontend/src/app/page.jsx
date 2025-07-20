import Image from "next/image";
import Header from './components/Header';
import HeroSection from './Components/HeroSection'
import SpecialOfferCard from './components/SpecialOfferCard';
import { PromotionCard } from "./Components/PromotionCard";
import dynamic from 'next/dynamic';
import WhyShopPage from "./components/WhyShopPage";

import Review from "./Components/review";

import WhyShopPage from "./components/WhyShopPage";


const Advertise = dynamic(() => import('./Components/Advertise'), { ssr: false });

export default function Home() {
  return (
    <>
    
      <HeroSection />
      <WhyShopPage />
      <SpecialOfferCard/>
      <PromotionCard/>
      <Advertise/>
      <Review/>
    </>
  )
}
