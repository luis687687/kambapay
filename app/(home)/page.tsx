import AdvantageSection from "../components/advantage-section";
import ComparisonSection from "../components/comparison-section";
import CTA from "../components/cta";
import DemoSection from "../components/demo-section";
import DepoimentSection from "../components/depoiment-section";
import FeaturesSection from "../components/feature-section";
import FinalCTASection from "../components/final-cta-section";
import FloatCard from "../components/float-card";
import HeroSection from "../components/hero-section";
import HomeTop from "../components/home-top";
import LimitedArea from "../components/limited-area";
import SplitContentSection from "../components/split-section";
import StepSection from "../components/steps-section";


export default function Home(){


  return(
   <LimitedArea>
    <HomeTop />
    {/* <FloatCard /> */}
    <HeroSection />
    <SplitContentSection />
    <FeaturesSection />
    
    <DemoSection />
    <ComparisonSection />
    <FinalCTASection />
   </LimitedArea>
  )
}