import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Shield, Lock, Eye, ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
} as Variants;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
} as Variants;

interface Section {
  number: string;
  title: string;
  content: React.ReactNode;
}

const Accordion: React.FC<{ section: Section }> = ({ section }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={itemVariants} className="border-b border-white/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-8 text-left group"
      >
        <div className="flex items-center gap-6">
          <span className="text-xs font-mono text-blue-500 tracking-widest w-6">{section.number}</span>
          <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
            {section.title}
          </span>
        </div>
        <ChevronDown
          size={18}
          className={`text-textMuted shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[800px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
      >
        <div className="pl-12 text-base text-textMuted leading-relaxed space-y-4">
          {section.content}
        </div>
      </div>
    </motion.div>
  );
};

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
        {item}
      </li>
    ))}
  </ul>
);

const sections: Section[] = [
  {
    number: '01',
    title: 'Introduction',
    content: (
      <p>
        Welcome to Vyken Security. This Privacy Policy explains how we collect, use, and protect information when you
        use the Vyken Guard browser extension and platform. Vyken Guard is designed to help organizations prevent
        sensitive data exposure and enforce AI governance policies.
      </p>
    )
  },
  {
    number: '02',
    title: 'Information We Collect',
    content: (
      <div className="space-y-6">
        <div>
          <p className="text-white font-medium mb-3">Browser Extension Data</p>
          <p className="mb-3">The Vyken Guard browser extension may process:</p>
          <BulletList items={[
            'User inputs entered into supported websites (e.g., AI tools, web forms)',
            'Webpage content necessary for detecting sensitive data exposure',
            'Interaction data related to security monitoring'
          ]} />
          <p className="mt-4 text-blue-400 text-sm font-medium">
            This data is processed solely for security analysis and policy enforcement.
          </p>
        </div>
        <div>
          <p className="text-white font-medium mb-3">Account &amp; Business Information</p>
          <BulletList items={['Name, email, organization name', 'Login credentials (if applicable)']} />
        </div>
        <div>
          <p className="text-white font-medium mb-3">Automatically Collected Data</p>
          <BulletList items={['IP address', 'Device and browser type', 'Usage logs and analytics']} />
        </div>
      </div>
    )
  },
  {
    number: '03',
    title: 'How We Use Information',
    content: (
      <BulletList items={[
        'Detect sensitive data exposure (PII, financial data, proprietary data)',
        'Enforce organizational security policies',
        'Generate security alerts and reports',
        'Improve platform performance and detection accuracy'
      ]} />
    )
  },
  {
    number: '04',
    title: 'Data Storage and Retention',
    content: (
      <BulletList items={[
        'We do not permanently store sensitive user inputs unless required for reporting or explicitly configured by the organization.',
        'Logs and analytics are retained only as necessary for service functionality and compliance.'
      ]} />
    )
  },
  {
    number: '05',
    title: 'Data Sharing',
    content: (
      <div className="space-y-4">
        <p className="text-white font-medium">We do NOT sell user data.</p>
        <p>We may share data:</p>
        <BulletList items={[
          'With secure backend services required for functionality',
          'With authorized organization administrators',
          'If required by law'
        ]} />
      </div>
    )
  },
  {
    number: '06',
    title: 'Data Security',
    content: (
      <BulletList items={[
        'Encryption in transit and at rest',
        'Role-based access control',
        'Continuous monitoring and logging'
      ]} />
    )
  },
  {
    number: '07',
    title: 'User Control and Rights',
    content: (
      <div className="space-y-3">
        <p>Users may:</p>
        <BulletList items={[
          'Request access or deletion of their data',
          'Contact us for data-related inquiries'
        ]} />
        <p className="mt-4">
          Contact:{' '}
          <a href="mailto:info@vykensecurity.com" className="text-blue-400 hover:text-blue-300 transition-colors">
            info@vykensecurity.com
          </a>
        </p>
      </div>
    )
  },
  {
    number: '08',
    title: 'Third-Party Services',
    content: (
      <p>
        Vyken Guard may integrate with third-party platforms (e.g., AI tools). We are not responsible for third-party
        privacy practices.
      </p>
    )
  },
  {
    number: '09',
    title: 'Chrome Extension Permissions Disclosure',
    content: (
      <div className="space-y-4">
        <p>Vyken Guard may request permissions such as:</p>
        <ul className="space-y-3">
          {[
            { perm: 'activeTab', desc: 'to analyze user input for security risks' },
            { perm: 'storage', desc: 'to store settings and configurations' },
            { perm: 'scripting', desc: 'to enforce security policies in browser sessions' }
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
              <span>
                <span className="font-mono text-blue-400 text-sm">{item.perm}</span>
                <span className="text-textMuted"> — {item.desc}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="text-blue-400 text-sm font-medium">
          These permissions are used strictly for security and functionality purposes.
        </p>
      </div>
    )
  },
  {
    number: '10',
    title: 'Changes to This Policy',
    content: <p>We may update this Privacy Policy. Updates will be posted on this page.</p>
  },
  {
    number: '11',
    title: 'Contact Information',
    content: (
      <div className="space-y-1">
        <p className="text-white font-medium">Vyken Security</p>
        <p>
          Email:{' '}
          <a href="mailto:info@vykensecurity.com" className="text-blue-400 hover:text-blue-300 transition-colors">
            info@vykensecurity.com
          </a>
        </p>
        <p>Website: vykensecurity.com</p>
      </div>
    )
  }
];

const PrivacyPolicy: React.FC = () => (
  <motion.div initial="hidden" animate="visible" className="pt-20 bg-background text-textMain min-h-screen">
    {/* Hero */}
    <section className="py-32 md:py-48 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div variants={containerVariants}>
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Legal &amp; Compliance</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500"
          >
            Privacy <br />
            <span className="text-textMuted text-3xl md:text-5xl font-medium tracking-normal block mt-4">
              Policy
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-textMuted max-w-2xl leading-relaxed">
            Effective April 23, 2026 — How Vyken Security collects, uses, and protects your information.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-px mt-16 border border-white/10 rounded-2xl overflow-hidden w-fit"
          >
            {[
              { icon: Shield, label: 'Chrome Extension Compliant' },
              { icon: Lock, label: 'Encrypted Data Handling' },
              { icon: Eye, label: 'Full Transparency' }
            ].map(({ icon: Icon, label }, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-4 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                <Icon size={16} className="text-blue-500" />
                <span className="text-sm text-textMuted whitespace-nowrap">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Content */}
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-500 font-bold mb-4">Privacy Policy</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">How We Protect Your Data</h2>
          <p className="text-textMuted max-w-2xl leading-relaxed">
            Vyken Guard is built with a privacy-first approach. Below is a complete disclosure of what we collect,
            why we collect it, and how it's protected.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-white/10 rounded-2xl overflow-hidden"
        >
          {sections.map((section) => (
            <Accordion key={section.number} section={section} />
          ))}
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-32 px-6 bg-white/[0.02] border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-500 font-bold mb-3">Questions?</p>
            <h3 className="text-2xl md:text-4xl font-bold leading-tight">Get in touch with our team</h3>
          </div>
          <a
            href="mailto:info@vykensecurity.com"
            className="shrink-0 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95"
          >
            Contact Vyken Security
          </a>
        </motion.div>
      </div>
    </section>
  </motion.div>
);

export default PrivacyPolicy;
