import Image from "next/image";
import Header from './components/Header';
import HeroSection from './Components/HeroSection'
import SpecialOfferCard from './components/SpecialOfferCard';
import { PromotionCard } from "./Components/PromotionCard";
import dynamic from 'next/dynamic';
import Review from "./Components/review";

const Advertise = dynamic(() => import('./Components/Advertise'), { ssr: false });

export default function Home() {
  return (
    <>
    
      <HeroSection />
      <SpecialOfferCard/>
      <PromotionCard/>
      <Advertise/>
      <Review/>
    </>
  )
}
