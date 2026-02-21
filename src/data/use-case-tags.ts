// Industry + role tags for each use case slug.
// Kept separate from use-cases.ts to avoid touching the large data file.

export const INDUSTRIES = [
  "Technology & Engineering",
  "Business & Consulting",
  "Journalism & Media",
  "Research & Academia",
  "Creative & Design",
  "Legal & Compliance",
  "Marketing & Sales",
  "Education",
  "Healthcare",
  "Entrepreneurship",
  "Operations",
  "Personal & Life",
  "ADHD & Neurodivergent",
] as const;

export const ROLES = [
  "Developer / Engineer",
  "Manager / Team Lead",
  "Founder / CEO",
  "Consultant / Advisor",
  "Researcher / Analyst",
  "Journalist / Reporter",
  "Designer / Creative",
  "Sales & Marketing",
  "Freelancer / Solo",
  "Student",
  "Healthcare Worker",
  "Legal Professional",
  "Operations Lead",
  "Caregiver / Parent",
] as const;

export type Industry = (typeof INDUSTRIES)[number];
export type Role = (typeof ROLES)[number];

export interface UseCaseTags {
  industries: Industry[];
  roles: Role[];
}

export const USE_CASE_TAGS: Record<string, UseCaseTags> = {
  "consultant-three-clients": {
    industries: ["Business & Consulting"],
    roles: ["Consultant / Advisor"],
  },
  "neurodivergent-builder": {
    industries: ["ADHD & Neurodivergent", "Entrepreneurship"],
    roles: ["Founder / CEO", "Freelancer / Solo"],
  },
  "sales-rep-whale-account": {
    industries: ["Marketing & Sales", "Business & Consulting"],
    roles: ["Sales & Marketing"],
  },
  "scrum-master-standup": {
    industries: ["Technology & Engineering"],
    roles: ["Manager / Team Lead"],
  },
  "nd-parent-school-chaos": {
    industries: ["ADHD & Neurodivergent", "Personal & Life"],
    roles: ["Caregiver / Parent"],
  },
  "sme-owner-six-apps": {
    industries: ["Entrepreneurship", "Business & Consulting"],
    roles: ["Founder / CEO"],
  },
  "corporate-manager-12-saas": {
    industries: ["Business & Consulting"],
    roles: ["Manager / Team Lead"],
  },
  "devops-production-incident": {
    industries: ["Technology & Engineering"],
    roles: ["Developer / Engineer", "Operations Lead"],
  },
  "emergency-manager-gas-leak": {
    industries: ["Operations"],
    roles: ["Operations Lead"],
  },
  "personal-finances-taxes": {
    industries: ["Personal & Life"],
    roles: ["Caregiver / Parent"],
  },
  "product-manager-three-streams": {
    industries: ["Technology & Engineering", "Business & Consulting"],
    roles: ["Manager / Team Lead"],
  },
  "sales-engineer-two-demos": {
    industries: ["Technology & Engineering", "Marketing & Sales"],
    roles: ["Sales & Marketing", "Consultant / Advisor"],
  },
  "csm-renewal-day": {
    industries: ["Business & Consulting", "Technology & Engineering"],
    roles: ["Consultant / Advisor", "Sales & Marketing"],
  },
  "data-analyst-three-execs": {
    industries: ["Research & Academia", "Business & Consulting"],
    roles: ["Researcher / Analyst"],
  },
  "startup-founder-board-prep": {
    industries: ["Entrepreneurship"],
    roles: ["Founder / CEO"],
  },
  "devops-postmortem-to-reliability": {
    industries: ["Technology & Engineering"],
    roles: ["Developer / Engineer", "Operations Lead"],
  },
  "emergency-manager-gas-to-storm": {
    industries: ["Operations"],
    roles: ["Operations Lead"],
  },
  "corporate-manager-back-to-back": {
    industries: ["Business & Consulting"],
    roles: ["Manager / Team Lead"],
  },
  "ux-researcher-sessions-synthesis": {
    industries: ["Technology & Engineering", "Research & Academia"],
    roles: ["Researcher / Analyst", "Designer / Creative"],
  },
  "marketing-lead-launch": {
    industries: ["Marketing & Sales"],
    roles: ["Sales & Marketing", "Manager / Team Lead"],
  },
  "agency-founder-three-clients": {
    industries: ["Business & Consulting", "Creative & Design"],
    roles: ["Founder / CEO", "Consultant / Advisor"],
  },
  "solo-developer-indie-hacker": {
    industries: ["Technology & Engineering", "Entrepreneurship"],
    roles: ["Developer / Engineer", "Freelancer / Solo"],
  },
  "real-estate-agent": {
    industries: ["Business & Consulting"],
    roles: ["Sales & Marketing", "Freelancer / Solo"],
  },
  "doctor-clinic-lab-results": {
    industries: ["Healthcare"],
    roles: ["Healthcare Worker"],
  },
  "teacher-classes-parent-meeting": {
    industries: ["Education"],
    roles: ["Manager / Team Lead"],
  },
  "conference-organizer": {
    industries: ["Operations", "Business & Consulting"],
    roles: ["Operations Lead", "Manager / Team Lead"],
  },
  "wedding-photographer": {
    industries: ["Creative & Design"],
    roles: ["Freelancer / Solo", "Designer / Creative"],
  },
  "youtuber-streamer": {
    industries: ["Creative & Design", "Journalism & Media"],
    roles: ["Freelancer / Solo", "Designer / Creative"],
  },
  "ngo-program-manager": {
    industries: ["Research & Academia", "Operations"],
    roles: ["Manager / Team Lead", "Researcher / Analyst"],
  },
  "recruiter-interview-loop": {
    industries: ["Business & Consulting"],
    roles: ["Manager / Team Lead", "Consultant / Advisor"],
  },
  "public-defender-court": {
    industries: ["Legal & Compliance"],
    roles: ["Legal Professional"],
  },
  "manufacturing-ops-manager": {
    industries: ["Operations"],
    roles: ["Operations Lead", "Manager / Team Lead"],
  },
  "film-editor-feature-trailer": {
    industries: ["Creative & Design", "Journalism & Media"],
    roles: ["Designer / Creative", "Freelancer / Solo"],
  },
  "hospital-social-worker": {
    industries: ["Healthcare", "Legal & Compliance"],
    roles: ["Healthcare Worker"],
  },
  "festival-ops-lead": {
    industries: ["Operations", "Creative & Design"],
    roles: ["Operations Lead", "Manager / Team Lead"],
  },
  "hr-generalist-grievance-offer-policy": {
    industries: ["Legal & Compliance", "Business & Consulting"],
    roles: ["Legal Professional", "Manager / Team Lead"],
  },
  "investment-analyst-earnings": {
    industries: ["Research & Academia", "Business & Consulting"],
    roles: ["Researcher / Analyst"],
  },
  "city-planner-transport-housing": {
    industries: ["Research & Academia", "Legal & Compliance"],
    roles: ["Researcher / Analyst", "Operations Lead"],
  },
  "policy-lobbyist-committee-hearing": {
    industries: ["Legal & Compliance"],
    roles: ["Legal Professional", "Consultant / Advisor"],
  },
  "remote-founder-pitch-hire-roadmap": {
    industries: ["Entrepreneurship", "Technology & Engineering"],
    roles: ["Founder / CEO"],
  },
  "emergency-vet-crisis": {
    industries: ["Healthcare"],
    roles: ["Healthcare Worker", "Operations Lead"],
  },
  "airline-ops-controller-storm": {
    industries: ["Operations"],
    roles: ["Operations Lead"],
  },
  "construction-foreman": {
    industries: ["Operations"],
    roles: ["Operations Lead", "Manager / Team Lead"],
  },
  "financial-planner-client-reviews": {
    industries: ["Business & Consulting"],
    roles: ["Consultant / Advisor"],
  },
  "dungeon-master-campaigns": {
    industries: ["Personal & Life", "Creative & Design"],
    roles: ["Freelancer / Solo"],
  },
  "vet-clinic-owner-three-hats": {
    industries: ["Healthcare", "Entrepreneurship"],
    roles: ["Founder / CEO", "Healthcare Worker"],
  },
  "penetration-tester-engagements": {
    industries: ["Technology & Engineering"],
    roles: ["Developer / Engineer", "Consultant / Advisor"],
  },
  "university-lecturer-split": {
    industries: ["Education", "Research & Academia"],
    roles: ["Researcher / Analyst", "Manager / Team Lead"],
  },
  "genealogy-hobbyist": {
    industries: ["Personal & Life"],
    roles: ["Freelancer / Solo"],
  },
  "parent-multi-country-trip": {
    industries: ["Personal & Life"],
    roles: ["Caregiver / Parent"],
  },
  "laid-off-accountability-crew": {
    industries: ["Personal & Life", "Business & Consulting"],
    roles: ["Freelancer / Solo", "Consultant / Advisor"],
  },
  "bootstrapper-one-customer-at-a-time": {
    industries: ["Entrepreneurship"],
    roles: ["Founder / CEO", "Sales & Marketing"],
  },
  "caregiver-ageing-parent": {
    industries: ["Healthcare", "Personal & Life"],
    roles: ["Caregiver / Parent"],
  },
  "recently-sober-recovery": {
    industries: ["Healthcare", "Personal & Life"],
    roles: ["Caregiver / Parent"],
  },
  "community-organizer-tenant-group": {
    industries: ["Legal & Compliance", "Personal & Life"],
    roles: ["Operations Lead"],
  },
  "planning-big-move-abroad": {
    industries: ["Personal & Life"],
    roles: ["Caregiver / Parent"],
  },
  "artist-hobby-to-shop": {
    industries: ["Creative & Design", "Entrepreneurship"],
    roles: ["Freelancer / Solo", "Designer / Creative"],
  },
  "young-adult-uni-side-hustle": {
    industries: ["Education", "Entrepreneurship"],
    roles: ["Student", "Freelancer / Solo"],
  },
  "retiree-second-act": {
    industries: ["Personal & Life"],
    roles: ["Freelancer / Solo"],
  },
  "youth-college-applications": {
    industries: ["Education"],
    roles: ["Student"],
  },
  "failing-student-triage": {
    industries: ["Education"],
    roles: ["Student"],
  },
  "procrastinator-quiet-alarms": {
    industries: ["Personal & Life"],
    roles: ["Freelancer / Solo"],
  },
  "preparing-for-surgery": {
    industries: ["Healthcare", "Personal & Life"],
    roles: ["Caregiver / Parent"],
  },
  "funeral-planning-while-grieving": {
    industries: ["Personal & Life", "Legal & Compliance"],
    roles: ["Caregiver / Parent"],
  },
  "executor-estate-paperwork": {
    industries: ["Legal & Compliance", "Personal & Life"],
    roles: ["Legal Professional", "Caregiver / Parent"],
  },
  "midlife-quiet-crisis": {
    industries: ["Personal & Life"],
    roles: ["Consultant / Advisor"],
  },
  "professor-running-for-senate": {
    industries: ["Legal & Compliance", "Education"],
    roles: ["Legal Professional", "Researcher / Analyst"],
  },
  "gardener-food-two-years": {
    industries: ["Personal & Life"],
    roles: ["Freelancer / Solo"],
  },
  "actor-returning-after-20-years": {
    industries: ["Creative & Design"],
    roles: ["Freelancer / Solo", "Designer / Creative"],
  },
  "climate-anxious-engineer-resilience": {
    industries: ["Technology & Engineering"],
    roles: ["Developer / Engineer"],
  },
  "night-nurse-secretly-writing-novel": {
    industries: ["Healthcare", "Creative & Design"],
    roles: ["Healthcare Worker", "Freelancer / Solo"],
  },
  "adhd-tab-hoarder-external-memory": {
    industries: ["ADHD & Neurodivergent"],
    roles: ["Freelancer / Solo", "Researcher / Analyst"],
  },
  "adhd-task-initiation-paralysis": {
    industries: ["ADHD & Neurodivergent"],
    roles: ["Freelancer / Solo"],
  },
  "adhd-context-switching-tax": {
    industries: ["ADHD & Neurodivergent"],
    roles: ["Manager / Team Lead", "Freelancer / Solo"],
  },
  "adhd-project-graveyard": {
    industries: ["ADHD & Neurodivergent", "Creative & Design"],
    roles: ["Designer / Creative", "Freelancer / Solo"],
  },
  "adhd-needs-external-accountability": {
    industries: ["ADHD & Neurodivergent"],
    roles: ["Freelancer / Solo"],
  },
  "adhd-fired-new-job-onboarding": {
    industries: ["ADHD & Neurodivergent", "Business & Consulting"],
    roles: ["Freelancer / Solo"],
  },
  "adhd-time-blindness-where-did-day-go": {
    industries: ["ADHD & Neurodivergent"],
    roles: ["Freelancer / Solo", "Manager / Team Lead"],
  },
  "adhd-decision-paralysis-frozen": {
    industries: ["ADHD & Neurodivergent"],
    roles: ["Freelancer / Solo"],
  },
  "adhd-remote-work-no-structure": {
    industries: ["ADHD & Neurodivergent", "Technology & Engineering"],
    roles: ["Developer / Engineer", "Freelancer / Solo"],
  },
  "adhd-freelancer-deadline-juggler": {
    industries: ["ADHD & Neurodivergent"],
    roles: ["Freelancer / Solo"],
  },
  "adhd-student-cant-start-assignment": {
    industries: ["ADHD & Neurodivergent", "Education"],
    roles: ["Student"],
  },
  "adhd-medication-afternoon-cliff": {
    industries: ["ADHD & Neurodivergent"],
    roles: ["Freelancer / Solo", "Developer / Engineer"],
  },
  "journalist-collaborative-article": {
    industries: ["Journalism & Media"],
    roles: ["Journalist / Reporter", "Manager / Team Lead"],
  },
  "adhd-productivity-app-fatigue": {
    industries: ["ADHD & Neurodivergent"],
    roles: ["Freelancer / Solo"],
  },
};
