import HeroSection from '@/components/HeroSection'
import MainSection from '@/components/MainSection'
import GashaWAFSection from "@/components/GashaWAFSection";
import GashaVPNSection from "@/components/GashaVPNSection";
import NisirSIEMSection from "@/components/NisirSIEMSection"
import  EnyumaSection from "@/components/EnyumaSection"
export default function Gasha() {
  return (
    <>
      <HeroSection />
      <MainSection />
      <GashaWAFSection />
      <GashaVPNSection/>
      <NisirSIEMSection/>
      < EnyumaSection/>
    </>
  );
}
