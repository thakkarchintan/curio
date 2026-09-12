import { LearningTopic, FaqItem, BenefitItem } from '../types';

export const PARENT_PROVOCATIONS = [
  {
    highlight: "Exam answers vs. Real voices",
    quote: "They can write a 500-word exam answer. Can they explain an idea to ten people with confidence?",
    topic: "Communication & Public Speaking"
  },
  {
    highlight: "Formulas vs. Real decisions",
    quote: "Your child knows how to solve textbook equations. Can they solve an ambiguous real-world problem?",
    topic: "Critical Thinking"
  },
  {
    highlight: "Math vs. Money sense",
    quote: "They learn simple interest formulas in school. Do they understand how money, debt, and value work in life?",
    topic: "Financial Literacy"
  },
  {
    highlight: "Preparation vs. Reality",
    quote: "They spend years preparing for a career. Do they understand how modern teams and workplaces actually operate?",
    topic: "Entrepreneurship & Practical Skills"
  },
  {
    highlight: "Grades vs. Resilience",
    quote: "They are praised for high scores. Do they know how to handle failure, rejection, or unfamiliar situations?",
    topic: "Emotional Intelligence & Confidence"
  }
];

export const PROBLEM_COMPARISON = {
  school: [
    "Academic knowledge & rote recall",
    "Exams, marks & percentage ranks",
    "Standardized textbooks",
    "Defined answers with a single right key",
    "Fixed, syllabus-bound curriculum"
  ],
  curio: [
    "Real-world practical skills",
    "Confident spoken communication",
    "Financial understanding & smart habits",
    "Independent decision-making & trade-offs",
    "Unshakable self-confidence & expression",
    "Hands-on challenges & simulations",
    "Critical thinking & questioning assumptions",
    "Social awareness & emotional resilience"
  ]
};

export const LEARNING_TOPICS: LearningTopic[] = [
  {
    id: 'communication',
    title: 'Communication & Public Speaking',
    subtitle: 'Speak clearly. Express ideas. Build confidence.',
    category: 'Communication',
    icon: 'MessageSquareQuote',
    description: 'Help children move past stage fear to articulate their ideas cogently, listen actively, and advocate for themselves with composure.',
    keySkills: ['Structuring an argument', 'Body language & voice projection', 'Storytelling', 'Handling impromptu questions'],
    realWorldPrompt: 'Pitching a club idea to school leaders or presenting a solution in front of peers.'
  },
  {
    id: 'financial-literacy',
    title: 'Money & Financial Literacy',
    subtitle: 'Understand money, saving, budgeting and basic investing concepts.',
    category: 'Financial',
    icon: 'Wallet',
    description: 'Demystifying currency, understanding where money comes from, how pricing works, compounding, budgeting, and avoiding impulsive consumerism.',
    keySkills: ['Budget allocation', 'Needs vs. wants', 'How credit & interest function', 'Basic investing fundamentals'],
    realWorldPrompt: 'Managing a monthly personal budget and evaluating real household purchase trade-offs.'
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    subtitle: 'Learn how ideas become businesses and how problems become opportunities.',
    category: 'Financial',
    icon: 'Rocket',
    description: 'Teaching children to spot unmet problems, design simple solutions, understand basic unit economics, and test hypotheses in the real world.',
    keySkills: ['Customer empathy', 'Prototype design', 'Cost vs. value pricing', 'Creating a 2-minute pitch'],
    realWorldPrompt: 'Designing a micro-venture or campus initiative to solve an everyday friction point.'
  },
  {
    id: 'critical-thinking',
    title: 'Critical Thinking & Problem Solving',
    subtitle: 'Question assumptions. Think logically. Solve unfamiliar problems.',
    category: 'Thinking',
    icon: 'Brain',
    description: 'Equipping young minds to identify cognitive biases, interrogate evidence, distinguish fact from persuasion, and tackle open-ended dilemmas.',
    keySkills: ['Root-cause analysis', 'Spotting logical fallacies', 'Evaluating conflicting viewpoints', 'Framework thinking'],
    realWorldPrompt: 'Analyzing real news headlines or breaking down an environmental crisis in their own city.'
  },
  {
    id: 'confidence',
    title: 'Confidence & Self-Expression',
    subtitle: 'Develop self-awareness, confidence and the ability to express yourself authentically.',
    category: 'Personal',
    icon: 'Sparkles',
    description: 'Nurturing inner security, recognizing individual personal strengths, overcoming fear of judgment, and finding an authentic voice.',
    keySkills: ['Positive self-talk', 'Embracing constructive feedback', 'Personal boundaries', 'Creative expression'],
    realWorldPrompt: 'Participating in unscripted role-play scenarios and defending a personal belief respectfully.'
  },
  {
    id: 'decision-making',
    title: 'Decision Making',
    subtitle: 'Understand choices, trade-offs, consequences and goal setting.',
    category: 'Thinking',
    icon: 'Compass',
    description: 'Moving beyond impulsive gut reactions to structured decision frameworks: evaluating short-term discomfort versus long-term rewards.',
    keySkills: ['Opportunity cost calculation', 'Risk assessment', 'Decision matrix tools', 'Goal milestone planning'],
    realWorldPrompt: 'Navigating simulated real-life dilemmas involving peer pressure, time conflicts, and ethics.'
  },
  {
    id: 'time-management',
    title: 'Time Management',
    subtitle: 'Prioritise better. Manage procrastination. Build productive habits.',
    category: 'Personal',
    icon: 'Clock',
    description: 'Moving from parent-enforced study schedules to self-directed time ownership, energy management, and focus rituals in a distraction-filled era.',
    keySkills: ['Eisenhower priority matrix', 'Overcoming task paralysis', 'Focus blocks & deep work', 'Weekly planning rituals'],
    realWorldPrompt: 'Designing a balanced self-governed weekly timetable covering academics, hobbies, and downtime.'
  },
  {
    id: 'digital-citizenship',
    title: 'Digital Citizenship',
    subtitle: 'Understand social media, digital footprints, online behaviour and digital safety.',
    category: 'Social',
    icon: 'ShieldCheck',
    description: 'Preparing teenagers to navigate online algorithms, avoid toxic comparison traps, protect privacy, and build a positive digital presence.',
    keySkills: ['Digital footprint awareness', 'Algorithmic literacy', 'Handling online hostility & cyberbullying', 'Information verification'],
    realWorldPrompt: 'Conducting an audit of personal digital exposure and recognizing engagement-engineering tactics.'
  },
  {
    id: 'civic-responsibility',
    title: 'Civic & Social Responsibility',
    subtitle: 'Understand responsibility, community and the world around you.',
    category: 'Social',
    icon: 'Globe',
    description: 'Instilling an active sense of community duty, understanding how local governance operates, and seeing oneself as an agent of positive change.',
    keySkills: ['Community asset mapping', 'Understanding public utilities', 'Civic dialogue', 'Volunteer leadership'],
    realWorldPrompt: 'Investigating a neighborhood waste or water challenge and proposing practical civic solutions.'
  },
  {
    id: 'emotional-intelligence',
    title: 'Emotional Intelligence',
    subtitle: 'Understand emotions, resilience, stress and healthy ways of responding.',
    category: 'Personal',
    icon: 'HeartHandshake',
    description: 'Helping children identify emotional triggers, build resilience after setbacks, de-escalate stress, and cultivate internal equilibrium.',
    keySkills: ['Emotional labeling', 'Grounding techniques', 'Reframing negative spirals', 'Empathy building'],
    realWorldPrompt: 'Simulated high-pressure scenarios where staying calm determines the group outcome.'
  },
  {
    id: 'interpersonal-skills',
    title: 'Interpersonal Skills',
    subtitle: 'Empathy, communication, conflict resolution and healthy boundaries.',
    category: 'Social',
    icon: 'Users',
    description: 'Teaching teenagers how to collaborate across differing personalities, resolve peer disputes with dignity, and build trust-based relationships.',
    keySkills: ['Active reflective listening', 'De-escalating friction', 'Collaborative consensus', 'Assertive boundary setting'],
    realWorldPrompt: 'Mediating a simulated conflict between team members during a time-sensitive group task.'
  },
  {
    id: 'life-etiquette',
    title: 'Life & Social Etiquette',
    subtitle: 'Dining etiquette, social behaviour and navigating unfamiliar environments.',
    category: 'Communication',
    icon: 'Award',
    description: 'Instilling natural poise in diverse social situations—from formal introductions and dining manners to networking and professional courtesy.',
    keySkills: ['First impressions & handshakes', 'Table & dining manners', 'Respectful conversation etiquette', 'Adapting to formal spaces'],
    realWorldPrompt: 'A simulated formal reception and seated collaborative dinner experience.'
  }
];

export const TRADITIONAL_VS_CURIO = [
  {
    traditional: 'Learn from textbooks',
    curio: 'Learn through experiences',
    note: 'Active simulation over passive reading'
  },
  {
    traditional: 'Teacher-led lecture',
    curio: 'Practitioner-led mentorship',
    note: 'Led by experts who live the subject'
  },
  {
    traditional: 'Right answers for the test',
    curio: 'Questions & diverse perspectives',
    note: 'In the real world, problems have trade-offs'
  },
  {
    traditional: 'Academic test scores',
    curio: 'Real-world capability & poise',
    note: 'Measurable ability to act and execute'
  },
  {
    traditional: 'Mostly classroom-confined',
    curio: 'Interactive & experiential lab',
    note: 'Workshops, debates, role-plays & challenges'
  },
  {
    traditional: 'Fixed, rigid curriculum',
    curio: 'Evolving learning experiences',
    note: 'Updated for modern changes & technologies'
  },
  {
    traditional: 'Memorize abstract concepts',
    curio: 'Apply concepts immediately',
    note: 'Hands-on practice that cements understanding'
  }
];

export const PRACTITIONER_PROFILES = [
  {
    role: 'Entrepreneurs & Founders',
    focus: 'Problem-solving, value creation, risk handling & grit',
    quote: 'Bringing an idea from napkin sketch to a working project.'
  },
  {
    role: 'Finance Professionals',
    focus: 'Real capital, cash flow, compounding & mindful spending',
    quote: 'Teaching children how money flows in families, companies, and markets.'
  },
  {
    role: 'Communication & Media Experts',
    focus: 'Voice modulation, storytelling, presence & public speaking',
    quote: 'Giving young people the confidence to be heard in any room.'
  },
  {
    role: 'Organizational Leaders',
    focus: 'Decision frameworks, team negotiation & ethical leadership',
    quote: 'Guiding teenagers to lead by listening and executing together.'
  },
  {
    role: 'Creative & Tech Practitioners',
    focus: 'Digital awareness, creative design & system thinking',
    quote: 'Helping students see technology as builders, not just passive consumers.'
  }
];

export const PARENT_BENEFITS: BenefitItem[] = [
  {
    id: 'confidence',
    title: 'Confidence',
    description: 'Help your child become more comfortable expressing ideas, standing their ground respectfully, and navigating unfamiliar social settings without anxiety.',
    parentThought: '“Will my child have the courage to speak up when it matters?”',
    icon: 'Sun',
    tag: 'Self-Expression'
  },
  {
    id: 'real-world-awareness',
    title: 'Real-World Awareness',
    description: 'Expose children to how money, businesses, institutions, and people actually work—bridging the gap between theoretical knowledge and everyday life.',
    parentThought: '“Do they know what happens outside school walls?”',
    icon: 'Eye',
    tag: 'Life Literacy'
  },
  {
    id: 'independent-thinking',
    title: 'Independent Thinking',
    description: 'Encourage children to question assumptions, analyze underlying motives, weigh trade-offs, and form their own well-reasoned viewpoints.',
    parentThought: '“Can they think for themselves when peer pressure hits?”',
    icon: 'Lightbulb',
    tag: 'Critical Reasoning'
  },
  {
    id: 'practical-skills',
    title: 'Practical Skills',
    description: 'Develop capabilities that are immediately useful outside school: managing time, budgeting pocket money, structuring an email, and organizing tasks.',
    parentThought: '“Are they learning things that prepare them for independence?”',
    icon: 'Wrench',
    tag: 'Immediate Utility'
  },
  {
    id: 'self-awareness',
    title: 'Self-Awareness',
    description: 'Help children understand their natural strengths, curiosities, emotional triggers, and growth areas in a supportive, non-judgmental environment.',
    parentThought: '“Does my child know who they are and what they care about?”',
    icon: 'Compass',
    tag: 'Personal Growth'
  }
];

export const CURIO_CYCLE = [
  {
    step: '01',
    label: 'LEARN',
    title: 'Encounter Core Concept',
    description: 'Introduce a foundational principle through relatable real-world stories, case studies, and counter-intuitive questions.'
  },
  {
    step: '02',
    label: 'EXPERIENCE',
    title: 'Participate & Simulate',
    description: 'Engage through interactive simulations, crisis scenarios, debates, negotiation challenges, and hands-on exercises.'
  },
  {
    step: '03',
    label: 'REFLECT',
    title: 'Internalize & Question',
    description: 'Facilitated group retrospectives: What worked? Where did we stumble? What would we do differently next time?'
  },
  {
    step: '04',
    label: 'APPLY',
    title: 'Bring It to Everyday Life',
    description: 'Micro-experiments and real-life missions to practice at home, in school, and in social interactions.'
  }
];

export const EXPERIENCE_JOURNEY = [
  {
    number: '01',
    name: 'DISCOVER',
    headline: 'Encounter a new idea or real-world problem',
    detail: 'A provocative scenario or authentic dilemma sparks curiosity and breaks routine textbook thinking.'
  },
  {
    number: '02',
    name: 'EXPLORE',
    headline: 'Discuss, question and understand perspectives',
    detail: 'Facilitated dialogue unpacks different viewpoints, trade-offs, and ethical angles in small cohorts.'
  },
  {
    number: '03',
    name: 'EXPERIENCE',
    headline: 'Participate through simulations and role-play',
    detail: 'Children step into the shoes of decision-makers, communicators, and builders in dynamic activities.'
  },
  {
    number: '04',
    name: 'REFLECT',
    headline: 'Understand what was learned and how it applies',
    detail: 'Guided self-evaluation connects the experience back to their own personal strengths and habits.'
  },
  {
    number: '05',
    name: 'APPLY',
    headline: 'Take the learning back into everyday life',
    detail: 'Concrete take-home micro-habits that transform knowledge into permanent personal capability.'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Is Curio a replacement for school?',
    answer: 'No. Curio is designed as supplementary learning that complements formal schooling. School does vital work in academic subjects, syllabus knowledge, and exam preparation. Curio focuses on the life skills, financial mindset, communication, and decision-making that conventional curricula typically cannot fit into classroom timetables. School + Curio = a more complete education.',
    category: 'Philosophy'
  },
  {
    id: 'faq-2',
    question: 'What age group is Curio for?',
    answer: 'Initially, Curio is being designed for children broadly around 10–16 years old (typically Classes 6–10). Specific programs will have narrower, age-appropriate cohort groupings (e.g. 10–12 years and 13–16 years) so conversations and exercises match developmental stages.',
    category: 'Eligibility'
  },
  {
    id: 'faq-3',
    question: 'Is Curio online or offline?',
    answer: 'The initial concept is strongly focused on in-person, experiential learning. We believe communication, public presence, body language, peer collaboration, and simulations thrive best when young people are in the same room interacting face-to-face.',
    category: 'Format'
  },
  {
    id: 'faq-4',
    question: 'Who teaches the sessions?',
    answer: 'Curio intends to bring in credible practitioners, industry professionals, and topic specialists—such as entrepreneurs, finance professionals, public speaking coaches, and community leaders—who live and breathe their craft, supported by experienced youth facilitators.',
    category: 'Faculty'
  },
  {
    id: 'faq-5',
    question: 'What subjects does Curio teach?',
    answer: 'Curio focuses on practical, real-world areas including Communication & Public Speaking, Money & Financial Literacy, Entrepreneurship, Critical Thinking, Confidence & Self-Expression, Decision Making, Digital Citizenship, Time Management, and Emotional Intelligence.',
    category: 'Curriculum'
  },
  {
    id: 'faq-6',
    question: 'Is this academic tutoring or tuition?',
    answer: 'No. Curio is explicitly not academic tutoring, syllabus coaching, or exam preparation. There are no homework assignments or memorization drills. Everything is interactive, simulation-based, and focused on real-world capabilities.',
    category: 'Philosophy'
  },
  {
    id: 'faq-7',
    question: 'How long is a Curio program?',
    answer: 'The format is evolving and designed around experiences rather than rigid semesters. Curio may offer weekend immersive workshops (1–2 days) as well as multi-week modular journeys held in small cohorts.',
    category: 'Format'
  },
  {
    id: 'faq-8',
    question: 'Where will Curio operate?',
    answer: 'The initial pilot is expected to focus on a Tier-1 Indian city (such as Bengaluru or Mumbai), with expansion to other cities as the learning model develops. Registering your interest helps us gauge demand in your city.',
    category: 'Locations'
  }
];

export const CITIES = [
  'Bengaluru',
  'Mumbai',
  'Delhi NCR (Gurugram / Noida)',
  'Hyderabad',
  'Pune',
  'Chennai',
  'Kolkata',
  'Ahmedabad',
  'Other City'
];

export const AGE_GROUPS = [
  '10 - 11 years (Class 5 - 6)',
  '12 - 13 years (Class 7 - 8)',
  '14 - 16 years (Class 9 - 10)',
  'Other / Exploring in advance'
];
