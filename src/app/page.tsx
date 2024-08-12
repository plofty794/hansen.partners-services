import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import MarqueeLogo from "@/components/MarqueeLogo";
import StagingAndPreparation from "@/components/StagingAndPreparation";
import Networks from "../components/Networks";
import WorkWithUs from "@/components/WorkWithUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StagingAndPreparation />
      <HowItWorks />
      <MarqueeLogo />
      <Networks />
      <WorkWithUs />
    </>
  );
}
