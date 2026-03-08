import { Hero } from "@/components/Hero";
import { PainStrip } from "@/components/PainStrip";
import { IndividualValue } from "@/components/IndividualValue";
import { StaxModel } from "@/components/StaxModel";
import { WorksEverywhere } from "@/components/WorksEverywhere";
import { FastKickoff } from "@/components/FastKickoff";
import { MotionLayer } from "@/components/MotionLayer";
import { AudienceSplit } from "@/components/AudienceSplit";
import { VideoSection } from "@/components/VideoSection";
import { QuickStart } from "@/components/QuickStart";
import { UseCaseTeaser } from "@/components/UseCaseTeaser";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PainStrip />
      <IndividualValue />
      <StaxModel />
      <WorksEverywhere />
      <FastKickoff />
      <MotionLayer />
      <AudienceSplit />
      <VideoSection />
      <QuickStart />
      <UseCaseTeaser />
      <Pricing />
      <FinalCTA />
    </>
  );
}
