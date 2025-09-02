import type { SlideConfig } from "../types/slide";
import { Slide01Title } from "../slides/slide-01-title";
import { Slide02Overview } from "../slides/slide-02-overview";
import { Slide03IoTApplications } from "../slides/slide-03-iot-applications";
import { Slide04AIOptimization } from "../slides/slide-04-ai-optimization";
import { Slide05IoTAIBenefits } from "../slides/slide-05-iot-ai-benefits";
import { Slide04Collaboration } from "../slides/slide-04-collaboration";
import { Slide05SystemArchitecture } from "../slides/slide-05-system-architecture";
import { Slide06Implementation } from "../slides/slide-06-implementation";
import { Slide07Commercial } from "../slides/slide-07-commercial";
import { Slide08Pricing } from "../slides/slide-08-pricing";
import { Slide09SLA } from "../slides/slide-09-sla";
import { Slide10Outcomes } from "../slides/slide-10-outcomes";
import { Slide11Conclusion } from "../slides/slide-11-conclusion";
import { Slide14PartnershipVisual } from "../slides/slide-14-partnership-visual";
import { Slide15ThankYou } from "../slides/slide-15-thank-you";
import { Slide16ContactUs } from "../slides/slide-16-contact-us";
import { Slide17SolutionOverview } from "../slides/slide-17-solution-overview"; // New comprehensive solution slide
import { IOTIntegration } from "../slides/IOTIntegration"; // New comprehensive solution slide
import { Partnership } from "../slides/Partnership"; // New comprehensive solution slide
import { TechnologyStack } from "../slides/TechnologyStack"; // New comprehensive solution slide
import { CollaborationFramework } from "../slides/CollaborationFramework"; // New comprehensive solution slide
import { SystemArchitecture } from "../slides/SystemArchitecture"; // New comprehensive solution slide
import { ImplementationPlan } from "../slides/ImplementationPlan"; // New comprehensive solution slide
import { ImplementationDetails } from "../slides/ImplementationDetails"; // New comprehensive solution slide
import { MovingForward } from "../slides/MovingForword"; // New comprehensive solution slide
import { CommercialProposal } from "../slides/CommercialProposal"; // New comprehensive solution slide
import { CommercialProposalWithoutValue } from "../slides/CommercialProposalWithoutValue"; // New comprehensive solution slide
import { Slide18Phase2Overview } from "@/slides/Phase2Overview";
import { Slide19AIChatbot } from "@/slides/Slide19AIChatbot";
import { Slide20AIDashcams } from "@/slides/Slide20AIDashcams";
import { Slide21PredictiveAnalytics } from "@/slides/Slide21PredictiveAnalytics";
import { Slide22IoTSensors } from "@/slides/Slide22IoTSensors";
import { Slide24DataAnalytics } from "@/slides/Slide24DataAnalytics";
import { Slide23Phase2Commercial } from "@/slides/Slide23Phase2Commercial";

export const SLIDE_CONFIG: SlideConfig[] = [
  { id: 1, title: "Title Slide", component: Slide01Title },
  { id: 2, title: "Overview", component: Slide02Overview },
  { id: 3, title: "IoT & AI Integration", component: IOTIntegration },
  {
    id: 4,
    title: "IoT Applications in Transportation",
    component: Slide03IoTApplications,
  },
  { id: 5, title: "Partnership Overview", component: Partnership },
  { id: 6, title: "Technology Stack", component: TechnologyStack },
  {
    id: 7,
    title: "AI in Fleet Optimisation",
    component: Slide04AIOptimization,
  },
  {
    id: 8,
    title: "Collaboration Framework",
    component: CollaborationFramework,
  },
  { id: 9, title: "System Architecture", component: SystemArchitecture },
  { id: 10, title: "Implementation Plan", component: ImplementationPlan },
  { id: 11, title: "IoT & AI Benefits", component: Slide05IoTAIBenefits },
  { id: 12, title: "Implementation Details", component: ImplementationDetails },
  { id: 13, title: "Conclusion", component: MovingForward },
  // { id: 14, title: "Commercial Proposal", component: CommercialProposal },
  // {
  //   id: 15,
  //   title: "Pricing Structure",
  //   component: CommercialProposalWithoutValue,
  // },
  { id: 16, title: "Phase 2 Overview", component: Slide18Phase2Overview },
  {
    id: 17,
    title: "AI Chatbot for Fleet Operations",
    component: Slide19AIChatbot,
  },
  {
    id: 18,
    title: "AI-Based Dashcams & Computer Vision",
    component: Slide20AIDashcams,
  },
  {
    id: 19,
    title: "Predictive Analytics & Maintenance",
    component: Slide21PredictiveAnalytics,
  },
  {
    id: 20,
    title: "Advanced IoT Sensor Integration",
    component: Slide22IoTSensors,
  },
  {
    id: 21,
    title: "Historic Data Analytics & Intelligence",
    component: Slide24DataAnalytics,
  },
  // {
  //   id: 22,
  //   title: "Phase 2 Commercial Plan",
  //   component: Slide23Phase2Commercial,
  // },
  // { id: 23, title: "Service Level Agreements", component: Slide09SLA },
  {
    id: 24,
    title: "Anticipated Business Outcomes",
    component: Slide10Outcomes,
  },
  { id: 25, title: "Conclusion", component: Slide11Conclusion },
  {
    id: 26,
    title: "Partnership Excellence",
    component: Slide14PartnershipVisual,
  },
  {
    id: 27,
    title: "Strategic Collaboration Framework",
    component: Slide04Collaboration,
  },
  {
    id: 28,
    title: "System Architecture",
    component: Slide05SystemArchitecture,
  },
  {
    id: 29,
    title: "Complete Solution Architecture",
    component: Slide17SolutionOverview,
  },
  { id: 30, title: "Thank You", component: Slide15ThankYou },
  { id: 31, title: "Connect With Us", component: Slide16ContactUs },
];
