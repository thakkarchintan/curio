import { useState, useEffect, FormEvent } from 'react';
import { RegistrationFormData, RegistrationRecord } from '../types';
import { CITIES, AGE_GROUPS, LEARNING_TOPICS } from '../data/curioData';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Send, User, Mail, Phone, MapPin, Calendar } from 'lucide-react';

interface RegistrationSectionProps {
  externalSelectedInterests?: string[];
}

export default function RegistrationSection({ externalSelectedInterests }: RegistrationSectionProps) {
  const [formData, setFormData] = useState<RegistrationFormData>({
    parentName: '',
    email: '',
    phone: '',
    childAge: AGE_GROUPS[1], // Default to 12-13 years
    city: CITIES[0], // Default Bengaluru
    interests: [],
    notes: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<RegistrationRecord | null>(null);

  // Sync external selected interests from Quiz or clicks if provided
  useEffect(() => {
    if (externalSelectedInterests && externalSelectedInterests.length > 0) {
      setFormData((prev) => ({
        ...prev,
        interests: Array.from(new Set([...prev.interests, ...externalSelectedInterests]))
      }));
    }
  }, [externalSelectedInterests]);

  // Load existing registration from localStorage if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem('curio_parent_registration');
      if (saved) {
        setSubmittedRecord(JSON.parse(saved));
      }
    } catch {
      // Ignore local storage errors
    }
  }, []);

  const toggleInterest = (topicTitle: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(topicTitle);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((item) => item !== topicTitle)
          : [...prev.interests, topicTitle]
      };
    });
  };

  const validate = () => {
    const errs: Partial<Record<keyof RegistrationFormData, string>> = {};
    if (!formData.parentName.trim()) {
      errs.parentName = 'Please enter your name';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = 'Please enter a valid mobile number';
    }
    if (!formData.childAge) {
      errs.childAge = "Please select child's age";
    }
    if (!formData.city) {
      errs.city = 'Please choose your city';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief processing
    setTimeout(() => {
      const record: RegistrationRecord = {
        ...formData,
        id: 'CURIO-' + Math.floor(100000 + Math.random() * 900000),
        submittedAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })
      };

      try {
        localStorage.setItem('curio_parent_registration', JSON.stringify(record));
      } catch {
        // Fallback
      }

      setSubmittedRecord(record);
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section
      id="register-section"
      className="py-16 md:py-24 bg-stone-900 text-white relative overflow-hidden"
    >
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-400/20">
            Priority Access
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mb-3 text-balance">
            Your child will learn a lot at school.
          </h2>
          <p className="text-xl sm:text-2xl font-bold font-display text-amber-400 mb-4">
            Give them a chance to learn beyond it.
          </p>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            Join the Curio community and be the first to know about upcoming programs, workshops and learning experiences in your city.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-stone-950/80 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xs">
          {submittedRecord ? (
            /* Instant Confirmation State */
            <div
              id="registration-success-state"
              className="py-6 text-center animate-in fade-in zoom-in-95 duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-1">
                Interest Received • Ref {submittedRecord.id}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
                Thank you, {submittedRecord.parentName}.
              </h3>
              <p className="text-sm text-stone-300 max-w-md mx-auto leading-relaxed mb-6">
                Your interest has been logged for <strong className="text-white">{submittedRecord.city}</strong> for cohort <strong className="text-white">{submittedRecord.childAge}</strong>. We will notify you directly when upcoming pilot workshops open.
              </p>

              {/* Summary details */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-stone-900 border border-stone-800 text-left text-xs text-stone-300 mb-6 space-y-2">
                <div className="flex justify-between">
                  <span className="text-stone-400">Email:</span>
                  <span className="font-medium text-white">{submittedRecord.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Mobile:</span>
                  <span className="font-medium text-white">{submittedRecord.phone}</span>
                </div>
                {submittedRecord.interests.length > 0 && (
                  <div>
                    <span className="text-stone-400 block mb-1.5">Selected Interests:</span>
                    <div className="flex flex-wrap gap-1">
                      {submittedRecord.interests.map((item, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-stone-800 text-amber-300 font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => {
                    localStorage.removeItem('curio_parent_registration');
                    setSubmittedRecord(null);
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors cursor-pointer"
                >
                  Register another child / edit details
                </button>
              </div>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} id="curio-registration-form" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Parent Name */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                    Parent's Full Name <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      id="input-parent-name"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full pl-10 pr-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-sm text-white placeholder:text-stone-500 focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>
                  {errors.parentName && (
                    <p className="text-xs text-rose-400 mt-1">{errors.parentName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      id="input-parent-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. priya@example.com"
                      className="w-full pl-10 pr-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-sm text-white placeholder:text-stone-500 focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                    Mobile Number <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      id="input-parent-phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full pl-10 pr-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-sm text-white placeholder:text-stone-500 focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Child's Age / Grade */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                    Child's Age / Grade <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      id="select-child-age"
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-sm text-white focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors cursor-pointer"
                    >
                      {AGE_GROUPS.map((age) => (
                        <option key={age} value={age} className="bg-stone-900 text-white">
                          {age}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* City */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                    Your City <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      id="select-city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-sm text-white focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors cursor-pointer"
                    >
                      {CITIES.map((c) => (
                        <option key={c} value={c} className="bg-stone-900 text-white">
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Optional: What would you most like your child to learn? */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2.5">
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider">
                    What would you most like your child to learn? <span className="text-stone-500 font-normal">(Optional)</span>
                  </label>
                  <span className="text-[11px] text-stone-400">
                    Select all that apply
                  </span>
                </div>

                {/* Quick-tap interest tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {LEARNING_TOPICS.map((topic) => {
                    const isSelected = formData.interests.includes(topic.title);
                    return (
                      <button
                        type="button"
                        key={topic.id}
                        onClick={() => toggleInterest(topic.title)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-400 text-stone-950 font-semibold shadow-xs'
                            : 'bg-stone-900 text-stone-300 border border-stone-800 hover:border-stone-700'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {topic.title}
                      </button>
                    );
                  })}
                </div>

                {/* Freeform comments/notes */}
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any specific questions or areas of interest you'd like us to address?"
                  className="w-full p-3.5 bg-stone-900 border border-stone-800 rounded-xl text-xs text-white placeholder:text-stone-500 focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="submit-register-interest-btn"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-99 text-stone-950 font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Registering your interest...</span>
                  ) : (
                    <>
                      <span>REGISTER MY INTEREST</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-stone-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Your information is strictly private. We never share parent details or spam.</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
