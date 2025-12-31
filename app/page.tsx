'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, RocketLaunch, Star, UsersThree, Sparkle, ShieldCheck } from '@phosphor-icons/react';
import clsx from 'clsx';

const languages = ['en', 'bn'] as const;
type Language = (typeof languages)[number];

const copy: Record<Language, {
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { label: string; value: string }[];
  };
  anchors: string[];
  pillars: { title: string; description: string; icon: React.ReactNode }[];
  modules: { title: string; description: string; badge: string }[];
  mentor: { title: string; body: string; highlights: string[] };
  capabilities: { title: string; items: string[] };
  testimonials: { quote: string; name: string; role: string }[];
  cta: { title: string; subtitle: string; primary: string; secondary: string };
  faq: { question: string; answer: string }[];
  footer: { mission: string; rights: string };
}> = {
  en: {
    hero: {
      title: 'Elevate Your Mindset. Monetize Your Genius.',
      subtitle:
        'Victory with Ash is the Android companion to Ash Mufareh’s invitation-only mentorship movement. Build elite skills, earn with integrity, and transform your future from your phone.',
      primaryCta: 'Download Android App',
      secondaryCta: 'Join the Private Community',
      stats: [
        { label: 'Daily Mindset Labs', value: '60+' },
        { label: 'Earning Pathways', value: '12' },
        { label: 'Global Mentors', value: '30K+' }
      ]
    },
    anchors: ['Curriculum', 'Mentor', 'Experience', 'Testimonials', 'FAQ'],
    pillars: [
      {
        title: 'Mindset Mastery',
        description: 'Guided morning rituals, accountability, and micro-coaching to help you stay grounded and unstoppable every single day.',
        icon: <Sparkle size={28} className="text-gold" />
      },
      {
        title: 'Skill Monetization',
        description: 'Launch high-impact digital offers with plug-and-play funnels, AI-assisted templates, and transparent earning models.',
        icon: <RocketLaunch size={28} className="text-brand-300" />
      },
      {
        title: 'Community Power',
        description: 'Surround yourself with builders who play long-term games. Get feedback, collaborate, and win as a unified force.',
        icon: <UsersThree size={28} className="text-brand-200" />
      }
    ],
    modules: [
      {
        title: 'Momentum Blueprint',
        description: 'A 21-day onboarding sprint that calibrates your habits, tech stack, and income roadmap with daily check-ins.',
        badge: 'Start Strong'
      },
      {
        title: 'Creator Engine',
        description: 'Short-form storytelling vault, battle-tested hooks, and AI-enhanced editing to grow audiences that convert.',
        badge: 'Content Labs'
      },
      {
        title: 'Impact Launchpad',
        description: 'Signature offer builder with pricing strategy, delivery playbooks, and launch calendars ready to deploy.',
        badge: 'Earn'
      },
      {
        title: 'Leadership Circle',
        description: 'Weekly live mentorship with Ash, VIP masterminds, and private audio rooms to cement your leadership voice.',
        badge: 'Lead'
      }
    ],
    mentor: {
      title: 'Guided by Ash Mufareh',
      body: 'The visionary behind ONPASSIVE now brings the same principle-driven leadership to your pocket. Ash distills decades of entrepreneurial wisdom into daily, actionable mentorship so you can unlock unstoppable momentum.',
      highlights: [
        'Two decades of scaling principled, tech-driven companies',
        'Global community architect with philanthropy at the core',
        'Obsessed with building ethical wealth and human potential'
      ]
    },
    capabilities: {
      title: 'What You Can Do Inside the App',
      items: [
        'Stream on-demand immersive sessions while earning badges that unlock new income tiers.',
        'Submit growth missions and receive AI-assisted feedback trained on Ash’s frameworks.',
        'Host private watch parties, co-build funnels, and close deals with live accountability squads.',
        'Track wellness, learning, and revenue KPIs in one intuitive dashboard designed for Android.'
      ]
    },
    testimonials: [
      {
        quote:
          'I replaced hesitation with conviction. The daily audio mentorship and mission tracker rewired how I execute—wins feel inevitable now.',
        name: 'Najia Rahman',
        role: 'Community Builder, Dhaka'
      },
      {
        quote:
          'From zero digital products to a sold-out cohort in 8 weeks. The launchpad templates did 80% of the heavy lifting.',
        name: 'David Thompson',
        role: 'Educator, Toronto'
      },
      {
        quote:
          'Victory with Ash turned my ideas into dependable income streams. The community alone is worth the commitment.',
        name: 'Angela Martinez',
        role: 'Growth Strategist, Austin'
      }
    ],
    cta: {
      title: 'Own Your Next Breakthrough',
      subtitle: 'Your Android device becomes a high-performance command center for mindset, monetization, and momentum.',
      primary: 'Get the APK',
      secondary: 'Preview Curriculum'
    },
    faq: [
      {
        question: 'Is Victory with Ash really free to join?',
        answer:
          'Yes. Core membership and the Android app are free. Premium unlocks for masterminds and revenue share programs are optional and invite-only.'
      },
      {
        question: 'Do I need prior experience to start earning?',
        answer:
          'No. The curriculum meets you where you are. We walk you through product ideation, storytelling, marketing, and ethical sales—step by step.'
      },
      {
        question: 'How often is new content released?',
        answer:
          'Fresh playbooks, mind labs, and live mentorship sessions drop weekly so you are always operating with the latest strategies.'
      },
      {
        question: 'Can I access the community on desktop?',
        answer:
          'Absolutely. Your account syncs across devices so you can continue your missions on desktop, tablet, or web when convenient.'
      }
    ],
    footer: {
      mission:
        'Victory with Ash fuels principled leaders who build wealth with integrity, uplift their families, and amplify goodness worldwide.',
      rights: '© ' + new Date().getFullYear() + ' Victory with Ash. All rights reserved.'
    }
  },
  bn: {
    hero: {
      title: 'মাইন্ডসেট উন্নত করুন, প্রতিভাকে আয়ে পরিণত করুন',
      subtitle:
        'অ্যাশ মুফারেহের আমন্ত্রণ-ভিত্তিক মেন্টরশিপ আন্দোলনের অ্যান্ড্রয়েড সঙ্গী এখন আপনার হাতে। দক্ষতা গড়ে তুলুন, নৈতিকভাবে আয় করুন এবং আপনার ভবিষ্যৎকে বদলে দিন।',
      primaryCta: 'অ্যান্ড্রয়েড অ্যাপ ডাউনলোড করুন',
      secondaryCta: 'প্রাইভেট কমিউনিটিতে যোগ দিন',
      stats: [
        { label: 'দৈনিক মাইন্ডসেট ল্যাব', value: '৬০+' },
        { label: 'আয়ের পথ', value: '১২' },
        { label: 'গ্লোবাল মেন্টর', value: '৩০K+' }
      ]
    },
    anchors: ['কারিকুলাম', 'মেন্টর', 'অভিজ্ঞতা', 'টেস্টিমোনিয়াল', 'প্রশ্নোত্তর'],
    pillars: [
      {
        title: 'মাইন্ডসেট মাস্টারি',
        description: 'প্রতিদিনের গাইডেড রিচুয়াল, অ্যাকাউন্টেবিলিটি এবং মাইক্রো কোচিং আপনাকে স্থির ও অক্লান্ত রাখে।',
        icon: <Sparkle size={28} className="text-gold" />
      },
      {
        title: 'স্কিল মনিটাইজেশন',
        description: 'ডিজিটাল অফার লঞ্চ করুন রেডি-টু-গো ফানেল, এআই টেমপ্লেট এবং স্বচ্ছ আয়ের মডেলের সহায়তায়।',
        icon: <RocketLaunch size={28} className="text-brand-300" />
      },
      {
        title: 'কমিউনিটি পাওয়ার',
        description: 'দীর্ঘমেয়াদি খেলা যারা খেলে তাদের সাথে থাকুন। ফিডব্যাক নিন, সহযোগিতা করুন এবং একসাথে জয় করুন।',
        icon: <UsersThree size={28} className="text-brand-200" />
      }
    ],
    modules: [
      {
        title: 'মোমেন্টাম ব্লুপ্রিন্ট',
        description: '২১ দিনের অনবোর্ডিং স্প্রিন্ট যা অভ্যাস, টেক স্ট্যাক এবং আয়ের রোডম্যাপ সেট করে।',
        badge: 'শুরু'
      },
      {
        title: 'ক্রিয়েটর ইঞ্জিন',
        description: 'শর্ট-ফর্ম গল্প, যুদ্ধ-পরীক্ষিত হুক এবং এআই এডিটিং দিয়ে দ্রুত অডিয়েন্স গড়ুন।',
        badge: 'কনটেন্ট ল্যাব'
      },
      {
        title: 'ইমপ্যাক্ট লঞ্চপ্যাড',
        description: 'সিগনেচার অফার বিল্ডার, প্রাইসিং স্ট্র্যাটেজি এবং লঞ্চ ক্যালেন্ডার এখন প্রস্তুত।',
        badge: 'আয়'
      },
      {
        title: 'লিডারশিপ সার্কেল',
        description: 'সাপ্তাহিক লাইভ মেন্টরশিপ, ভিআইপি মাস্টারমাইন্ড এবং প্রাইভেট অডিও রুমে আপনার নেতৃত্ব কণ্ঠ তৈরি করুন।',
        badge: 'লিড'
      }
    ],
    mentor: {
      title: 'অ্যাশ মুফারেহের প্রত্যক্ষ নেতৃত্ব',
      body: 'ONPASSIVE-এর স্বপ্নদ্রষ্টা এখন একই নীতিনিষ্ঠ নেতৃত্বকে আপনার পকেটে নিয়ে এসেছে। দীর্ঘ অভিজ্ঞতা থেকে খাঁটি উপদেশ দিয়ে অ্যাশ আপনার গতিকে unstoppable করে তোলে।',
      highlights: [
        'দুই দশকের টেক-চালিত কোম্পানি গড়ার অভিজ্ঞতা',
        'গ্লোবাল কমিউনিটি নির্মাতা যার কেন্দ্রে দাতব্যতা',
        'নৈতিক সম্পদ ও মানব সম্ভাবনা তৈরিতে নিবেদিত'
      ]
    },
    capabilities: {
      title: 'অ্যাপের মাধ্যমে কী করতে পারবেন',
      items: [
        'অন-ডিমান্ড সেশন স্ট্রিম করুন এবং ব্যাজ আনলক করুন যা নতুন আয়ের স্তর খুলে দেয়।',
        'গ্রোথ মিশন জমা দিন এবং অ্যাশ-এর ফ্রেমওয়ার্কে প্রশিক্ষিত এআই ফিডব্যাক পান।',
        'প্রাইভেট ওয়াচ পার্টি হোস্ট করুন, ফানেল তৈরি করুন এবং লাইভ অ্যাকাউন্টেবিলিটিতে ডিল ক্লোজ করুন।',
        'একটি ইন্টুইটিভ ড্যাশবোর্ডে ওয়েলনেস, লার্নিং ও আয়ের কিপিআই ট্র্যাক করুন।'
      ]
    },
    testimonials: [
      {
        quote:
          'দ্বিধা বদলে গেছে দৃঢ়তায়। দৈনিক অডিও মেন্টরশিপ এবং মিশন ট্র্যাকার আমাকে প্রতিদিন জিততে শিখিয়েছে।',
        name: 'নাজিয়া রহমান',
        role: 'কমিউনিটি বিল্ডার, ঢাকা'
      },
      {
        quote:
          '৮ সপ্তাহে শূন্য থেকে সোল্ড-আউট কোহর্ট। লঞ্চপ্যাড টেমপ্লেট আমার কাজের বড় অংশ সহজ করেছে।',
        name: 'ডেভিড থম্পসন',
        role: 'শিক্ষক, টরন্টো'
      },
      {
        quote:
          'ভিক্টরি উইথ অ্যাশ আমার ধারণাগুলোকে নির্ভরযোগ্য আয়ে পরিণত করেছে। কমিউনিটিটাই মূল্যবান।',
        name: 'অ্যাঞ্জেলা মার্টিনেজ',
        role: 'গ্রোথ স্ট্র্যাটেজিস্ট, অস্টিন'
      }
    ],
    cta: {
      title: 'আপনার পরবর্তী ব্রেকথ্রু এখনই',
      subtitle: 'আপনার অ্যান্ড্রয়েড ডিভাইস হবে মাইন্ডসেট, মনিটাইজেশন এবং মোমেন্টামের কমান্ড সেন্টার।',
      primary: 'এপিকে নিন',
      secondary: 'কারিকুলাম দেখুন'
    },
    faq: [
      {
        question: 'ভিক্টরি উইথ অ্যাশ কি সত্যিই ফ্রি?',
        answer:
          'জি হ্যাঁ। মূল সদস্যপদ এবং অ্যান্ড্রয়েড অ্যাপ সম্পূর্ণ ফ্রি। প্রিমিয়াম মাস্টারমাইন্ড ও রেভিনিউ শেয়ার প্রোগ্রাম আমন্ত্রণভিত্তিক এবং ঐচ্ছিক।'
      },
      {
        question: 'পূর্ব অভিজ্ঞতা ছাড়াই কি আয় সম্ভব?',
        answer:
          'অবশ্যই। কারিকুলাম আপনাকে ধাপে ধাপে নিয়ে যায়—আইডিয়া, স্টোরিটেলিং, মার্কেটিং এবং নৈতিক সেলস সব শেখানো হয়।'
      },
      {
        question: 'নতুন কনটেন্ট কত ঘনঘন দেয়া হয়?',
        answer:
          'প্রতিটি সপ্তাহে নতুন প্লেবুক, মাইন্ড ল্যাব এবং লাইভ মেন্টরশিপ যোগ হয় যেন আপনি সর্বশেষ কৌশলে কাজ করতে পারেন।'
      },
      {
        question: 'ডেস্কটপ থেকে কি এক্সেস করা যাবে?',
        answer:
          'হ্যাঁ। আপনার অ্যাকাউন্ট সব ডিভাইসে সিঙ্ক হয়, ফলে ডেস্কটপ বা ওয়েবেও মিশন চালিয়ে যেতে পারবেন।'
      }
    ],
    footer: {
      mission:
        'ভিক্টরি উইথ অ্যাশ নীতিনিষ্ঠ নেতাদের তৈরি করে যারা পরিবারকে উত্থিত করে এবং বিশ্বে মঙ্গল ছড়ায়।',
      rights: '© ' + new Date().getFullYear() + ' Victory with Ash. সর্বস্বত্ব সংরক্ষিত।'
    }
  }
};

const heroBackground = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80';
const mentorImage = 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80';

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="section-container mb-10 text-center">
      <motion.h2
        className="text-3xl font-heading font-semibold text-white md:text-4xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          className="mt-3 text-base text-slate-200 md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const text = useMemo(() => copy[language], [language]);

  return (
    <main className="relative overflow-hidden">
      <motion.header
        className="sticky top-0 z-50 border-b border-white/10 bg-deep/80 backdrop-blur"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="section-container flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Image src="/icon.svg" alt="Victory with Ash" width={36} height={36} className="rounded-lg" />
            <div>
              <p className="font-heading text-lg font-semibold tracking-wide">Victory with Ash</p>
              <p className="text-xs text-slate-300">Android Elite | Built for impact</p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-200 md:flex">
            {text.anchors.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {languages.map((code) => (
              <button
                key={code}
                onClick={() => setLanguage(code)}
                className={clsx(
                  'rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest transition',
                  code === language ? 'bg-white text-deep' : 'bg-transparent text-slate-200 hover:border-white/60'
                )}
              >
                {code === 'en' ? 'EN' : 'BN'}
              </button>
            ))}
          </div>
        </div>
      </motion.header>

      <section className="relative overflow-hidden bg-grid-glow pb-24 pt-20" id="hero">
        <Image
          src={heroBackground}
          alt="Community"
          fill
          priority
          className="-z-10 object-cover opacity-20"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-deep via-deep/95 to-indigo-950/90" />
        <div className="section-container">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-200">
              <ShieldCheck size={16} />
              {language === 'en' ? 'Mission-Driven Mentorship' : 'মিশন-ড্রিভেন মেন্টরশিপ'}
            </span>
            <h1 className="mt-6 text-4xl font-heading font-semibold leading-tight text-white md:text-5xl">
              {text.hero.title}
            </h1>
            <p className="mt-4 text-base text-slate-200 md:text-lg">{text.hero.subtitle}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-brand-300 px-6 py-3 text-sm font-semibold text-deep shadow-lg shadow-brand-500/30 transition hover:scale-[1.03]">
                <PlayCircle size={20} weight="fill" />
                {text.hero.primaryCta}
              </button>
              <button className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60">
                <ArrowRight size={20} />
                {text.hero.secondaryCta}
              </button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 text-left text-white backdrop-blur">
              {text.hero.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/5 p-3 text-center">
                  <p className="text-2xl font-heading font-semibold text-brand-200">{stat.value}</p>
                  <p className="text-xs text-slate-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="curriculum" className="relative border-t border-white/5 bg-gradient-to-b from-deep to-indigo-950/80 py-20">
        <SectionTitle
          title={language === 'en' ? 'A Curriculum Engineered for High Performers' : 'হাই পারফর্মারদের জন্য ডিজাইন করা কারিকুলাম'}
          subtitle={language === 'en' ? 'Structured pathways keep you consistent, creative, and profitable.' : 'নিয়মিত, সৃজনশীল ও লাভজনক থাকার জন্য গঠিত পথ।'}
        />
        <div className="section-container grid gap-6 md:grid-cols-2">
          {text.modules.map((module) => (
            <motion.div
              key={module.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center rounded-full border border-brand-400/40 bg-brand-400/10 px-3 py-1 text-xs uppercase tracking-wide text-brand-200">
                {module.badge}
              </span>
              <h3 className="mt-4 text-2xl font-heading font-semibold text-white">{module.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">{module.description}</p>
              <ArrowRight size={20} className="absolute bottom-6 right-6 text-brand-200 transition-transform group-hover:translate-x-1" />
            </motion.div>
          ))}
        </div>
      </section>

      <section id="mentor" className="relative border-t border-white/5 bg-gradient-to-b from-indigo-950/80 via-deep to-deep py-20">
        <div className="section-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <SectionTitle title={text.mentor.title} />
            <p className="text-sm text-slate-200 md:text-base">{text.mentor.body}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-100">
              {text.mentor.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <Star size={20} weight="fill" className="mt-0.5 text-gold" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="relative h-96 w-72 overflow-hidden rounded-[36px] border border-white/15 bg-white/10 shadow-[0_0_60px_rgba(116,70,255,0.35)] backdrop-blur">
              <Image src={mentorImage} alt="Ash Mufareh" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="relative border-t border-white/5 bg-gradient-to-b from-deep to-indigo-950/70 py-20">
        <SectionTitle
          title={text.capabilities.title}
          subtitle={
            language === 'en'
              ? 'Every interaction is crafted for mobile-first, focused builders who execute on the go.'
              : 'প্রতিটি ইন্টারঅ্যাকশন মোবাইল ফার্স্ট নির্মাতাদের জন্য তৈরি যারা চলার পথে কাজ সম্পন্ন করে।'
          }
        />
        <div className="section-container grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <motion.ul
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {text.capabilities.items.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-100 backdrop-blur">
                <ShieldCheck size={22} className="mt-0.5 text-brand-200" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
          <motion.div
            className="relative mx-auto w-full max-w-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="relative rounded-[40px] border border-white/15 bg-gradient-to-br from-brand-500/40 via-transparent to-brand-300/40 p-4">
              <div className="relative h-[520px] overflow-hidden rounded-[26px] bg-[#0d0a1a]">
                <div className="absolute inset-x-0 top-0 h-12 rounded-b-[20px] bg-gradient-to-b from-white/10 to-transparent" />
                <div className="relative z-10 flex flex-col gap-6 p-6 text-slate-100">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-brand-200">Daily Mission</p>
                    <h4 className="mt-2 text-xl font-heading text-white">Calibrate Your Focus</h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-300">
                      {language === 'en'
                        ? 'Complete the 7-minute clarity sprint before 9 AM and submit a 30-second voice reflection.'
                        : 'সকাল ৯টার আগে ৭ মিনিটের ক্ল্যারিটি স্প্রিন্ট শেষ করে ৩০ সেকেন্ডের ভয়েস রিফ্লেকশন রেকর্ড করুন।'}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">Progress</p>
                    <p className="mt-2 text-3xl font-heading text-brand-200">82%</p>
                    <p className="text-xs text-slate-300">
                      {language === 'en'
                        ? 'You are 2 missions away from unlocking Momentum Week rewards.'
                        : 'মোমেন্টাম উইক রিওয়ার্ড আনলক করতে আরও ২টি মিশন বাকি।'}
                    </p>
                  </div>
                  <div className="space-y-2 text-xs text-slate-300">
                    <p className="uppercase tracking-[0.3em] text-brand-200">Squad Check-ins</p>
                    <div className="flex gap-3">
                      {[0, 1, 2].map((index) => (
                        <div key={index} className="flex-1 rounded-xl border border-white/10 bg-white/5 p-3">
                          <p className="text-[11px] font-semibold text-white">
                            {['Mindset Lab', 'Creator Pod', 'Launch Hub'][index]}
                          </p>
                          <p className="text-[10px] text-slate-300">
                            {language === 'en'
                              ? ['Live in 2h', 'Files shared', 'Closes in 5h'][index]
                              : ['২ ঘন্টায় লাইভ', 'ফাইল শেয়ার করা হয়েছে', '৫ ঘন্টায় বন্ধ হবে'][index]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -left-8 bottom-12 h-20 w-20 rounded-full bg-brand-400/40 blur-2xl" />
              <div className="absolute -right-6 top-10 h-24 w-24 rounded-full bg-brand-200/30 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-gradient-to-b from-indigo-950/70 to-deep py-20" id="testimonials">
        <SectionTitle
          title={language === 'en' ? 'Builders Winning with Integrity' : 'যারা সততার সাথে জিতে চলেছেন'}
          subtitle={
            language === 'en'
              ? 'Stories from members who turned commitment into tangible results.'
              : 'সদস্যদের গল্প যারা প্রতিশ্রুতি দিয়ে বাস্তব ফল পেয়েছেন।'
          }
        />
        <div className="section-container grid gap-6 md:grid-cols-3">
          {text.testimonials.map((testimonial) => (
            <motion.figure
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-100 backdrop-blur"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <p className="text-sm leading-relaxed text-slate-200">“{testimonial.quote}”</p>
              <figcaption className="mt-6">
                <p className="font-heading text-base text-white">{testimonial.name}</p>
                <p className="text-xs text-slate-400">{testimonial.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section id="faq" className="relative border-t border-white/5 bg-gradient-to-b from-deep to-indigo-950/80 py-20">
        <SectionTitle
          title={language === 'en' ? 'Questions, Answered' : 'প্রশ্নের উত্তর'}
          subtitle={
            language === 'en'
              ? 'Everything you need to know to start your Victory with Ash journey.'
              : 'ভিক্টরি উইথ অ্যাশ যাত্রা শুরু করতে যা জানা দরকার।'
          }
        />
        <div className="section-container mx-auto max-w-4xl space-y-4">
          {text.faq.map((item) => (
            <motion.details
              key={item.question}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-100 backdrop-blur"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-white">
                <div className="flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <ArrowRight size={20} className="text-brand-200 transition-transform group-open:rotate-90" />
                </div>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">{item.answer}</p>
            </motion.details>
          ))}
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-gradient-to-b from-indigo-950/70 via-deep to-deep py-20" id="cta">
        <div className="section-container">
          <motion.div
            className="relative overflow-hidden rounded-[48px] border border-white/10 bg-gradient-to-br from-brand-500/30 via-brand-300/20 to-transparent p-10 text-center shadow-[0_0_60px_rgba(212,59,251,0.25)]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-heading font-semibold text-white md:text-4xl">{text.cta.title}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-200">{text.cta.subtitle}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-deep transition hover:scale-[1.03]">
                <ArrowRight size={20} />
                {text.cta.primary}
              </button>
              <button className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60">
                <PlayCircle size={20} weight="fill" />
                {text.cta.secondary}
              </button>
            </div>
            <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-brand-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-16 h-60 w-60 rounded-full bg-brand-200/20 blur-3xl" />
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-deep py-10 text-slate-300" id="footer">
        <div className="section-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl text-sm leading-relaxed">
            {text.footer.mission}
          </div>
          <div className="text-xs text-slate-500">{text.footer.rights}</div>
        </div>
      </footer>
    </main>
  );
}
