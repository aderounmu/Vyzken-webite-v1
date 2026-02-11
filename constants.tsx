import { FileText, ShieldAlert, Users, MailWarning } from 'lucide-react';
import { ServiceItem } from './types';

export const HERO_CONTENT = {
  header: "Protect Your Business with Expert Cybersecurity Advisory",
  intro: "Our consulting services help organizations of all sizes identify risks, implement security best practices, and transform raw data into actionable intelligence. We focus on advisory, strategy, and detection design — without the operational burden of 24/7 monitoring."
};

export const SERVICES: ServiceItem[] = [
  {
    id: "policy",
    title: "Security Policy & Documentation Development",
    overview: "We help organizations define and implement security policies and procedures aligned with industry standards and compliance requirements.",
    deliverables: [
      "Information Security Policy",
      "Acceptable Use Policy",
      "Incident Response Plan",
      "AI/Data Handling Policies"
    ],
    benefits: [
      "Audit-ready documentation",
      "Reduced operational risk",
      "Clear governance for staff"
    ],
    icon: FileText,
    visualType: 'list'
  },
  {
    id: "vulnerability",
    title: "Vulnerability Management",
    overview: "Identify, prioritize, and understand vulnerabilities in your systems through automated scanning and risk-based reporting.",
    deliverables: [
      "Monthly vulnerability scans",
      "Executive & technical reports",
      "Risk prioritization guidance",
      "Trend analysis"
    ],
    benefits: [
      "Focus on critical vulnerabilities",
      "Clear actionable recommendations",
      "Supports compliance requirements"
    ],
    icon: ShieldAlert,
    visualType: 'chart'
  },
  {
    id: "training",
    title: "Security Awareness Training",
    overview: "Reduce human-driven risk with recurring employee training and regular security bulletins.",
    deliverables: [
      "Quarterly training sessions",
      "Monthly awareness bulletins",
      "Training metrics & feedback"
    ],
    benefits: [
      "Improved security culture",
      "Reduced social engineering risks",
      "Audit readiness"
    ],
    icon: Users,
    visualType: 'calendar'
  },
  {
    id: "phishing",
    title: "Phishing Simulation Service",
    overview: "Reduce the risk of phishing attacks by testing employee awareness through safe, realistic simulated campaigns. Complements training by reinforcing learning.",
    deliverables: [
      "Customized simulation campaigns",
      "Employee response analytics",
      "Follow-up recommendations",
      "Executive summary of trends"
    ],
    benefits: [
      "Identify high-risk employees",
      "Reinforce training practically",
      "Measurable improvements"
    ],
    icon: MailWarning,
    visualType: 'flow'
  }
];