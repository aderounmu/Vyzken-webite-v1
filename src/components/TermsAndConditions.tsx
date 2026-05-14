import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { FileText, Scale, ShieldCheck, ChevronDown } from 'lucide-react';

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
    title: 'Acceptance of Terms',
    content: <p>By installing or using Vyken Guard, you agree to these Terms and Conditions.</p>
  },
  {
    number: '02',
    title: 'Services Description',
    content: (
      <BulletList items={[
        'AI governance monitoring',
        'Data loss prevention (DLP)',
        'Risk detection and reporting'
      ]} />
    )
  },
  {
    number: '03',
    title: 'Authorized Use',
    content: (
      <div className="space-y-3">
        <p>You agree to:</p>
        <BulletList items={[
          'Use the extension for lawful purposes only',
          'Not attempt to reverse-engineer or exploit the system',
          'Ensure compliance with applicable data protection laws'
        ]} />
      </div>
    )
  },
  {
    number: '04',
    title: 'Organizational Responsibility',
    content: (
      <div className="space-y-3">
        <p>If used within an organization:</p>
        <BulletList items={[
          'The organization is responsible for configuring policies',
          'Administrators control visibility of logs and reports'
        ]} />
      </div>
    )
  },
  {
    number: '05',
    title: 'Data Processing',
    content: (
      <div className="space-y-4">
        <p>You retain ownership of your data.</p>
        <p>By using Vyken Guard, you grant Vyken Security limited rights to process data solely for:</p>
        <BulletList items={['Security monitoring', 'Policy enforcement', 'Platform functionality']} />
      </div>
    )
  },
  {
    number: '06',
    title: 'Intellectual Property',
    content: <p>All technology, software, and content are owned by Vyken Security.</p>
  },
  {
    number: '07',
    title: 'Service Availability',
    content: <p>We aim for high uptime but do not guarantee uninterrupted service.</p>
  },
  {
    number: '08',
    title: 'Limitation of Liability',
    content: (
      <div className="space-y-3">
        <p>To the maximum extent permitted by law:</p>
        <BulletList items={[
          'Vyken Security is not liable for indirect or consequential damages',
          'Liability is limited to fees paid (if applicable)'
        ]} />
      </div>
    )
  },
  {
    number: '09',
    title: 'Termination',
    content: (
      <div className="space-y-3">
        <p>We may suspend or terminate access if:</p>
        <BulletList items={['Terms are violated', 'Security risks are identified']} />
      </div>
    )
  },
  {
    number: '10',
    title: 'Indemnification',
    content: (
      <div className="space-y-3">
        <p>You agree to indemnify Vyken Security against claims arising from:</p>
        <BulletList items={['Misuse of the service', 'Violation of laws']} />
      </div>
    )
  },
  {
    number: '11',
    title: 'Governing Law',
    content: <p>These Terms are governed by the laws of the State of Texas, United States.</p>
  },
  {
    number: '12',
    title: 'Updates to Terms',
    content: <p>We may update these Terms at any time. Continued use means acceptance.</p>
  },
  {
    number: '13',
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

const TermsAndConditions: React.FC = () => (
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
            Terms &amp; <br />
            <span className="text-textMuted text-3xl md:text-5xl font-medium tracking-normal block mt-4">
              Conditions
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-textMuted max-w-2xl leading-relaxed">
            Effective April 23, 2026 — Governing the use of Vyken Guard and the Vyken Security platform.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-px mt-16 border border-white/10 rounded-2xl overflow-hidden w-fit"
          >
            {[
              { icon: FileText, label: 'SaaS Ready Terms' },
              { icon: Scale, label: 'Texas Governing Law' },
              { icon: ShieldCheck, label: 'Chrome Extension Ready' }
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
          <p className="text-sm uppercase tracking-[0.2em] text-blue-500 font-bold mb-4">Terms &amp; Conditions</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">Terms of Use</h2>
          <p className="text-textMuted max-w-2xl leading-relaxed">
            By installing or using Vyken Guard, you agree to the following terms. Please read them carefully before
            using our platform.
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

export default TermsAndConditions;
