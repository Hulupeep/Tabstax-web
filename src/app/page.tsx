import { Hero } from "@/components/Hero";
import { VideoSection } from "@/components/VideoSection";
import { TheProblem } from "@/components/TheProblem";
import { ThreeParts } from "@/components/ThreeParts";
import { JobNextAction } from "@/components/JobNextAction";
import { JobAttention } from "@/components/JobAttention";
import { JobFocus } from "@/components/JobFocus";
import { JobCapture } from "@/components/JobCapture";
import { JobTeams } from "@/components/JobTeams";
import { ThreePromises } from "@/components/ThreePromises";
import { UseCaseTeaser } from "@/components/UseCaseTeaser";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <TheProblem />
      <ThreeParts />
      <JobNextAction />
      <JobAttention />
      <JobFocus />
      <JobCapture />
      <JobTeams />
      <ThreePromises />
      <UseCaseTeaser />
      <Pricing />
      <FinalCTA />
    </>
  );
}
