import Image from "next/image";
import Header from './components/Header';
import HeroSection from './Components/HeroSection'
import { SpecialOfferCard } from "./Components/specialOffers";
import { PromotionCard } from "./Components/PromotionCard";

export default function Home() {
  return (
    <>
    
      <HeroSection />
      <SpecialOfferCard/>
      <PromotionCard/>
    </>
  )
}
