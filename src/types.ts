export interface LearningTopic {
  id: string;
  title: string;
  subtitle: string;
  category: 'Communication' | 'Financial' | 'Thinking' | 'Personal' | 'Social';
  icon: string;
  description: string;
  keySkills: string[];
  realWorldPrompt: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  parentThought: string;
  icon: string;
  tag: string;
}

export interface RegistrationFormData {
  parentName: string;
  email: string;
  phone: string;
  childAge: string;
  city: string;
  interests: string[];
  notes?: string;
}

export interface RegistrationRecord extends RegistrationFormData {
  id: string;
  submittedAt: string;
}
