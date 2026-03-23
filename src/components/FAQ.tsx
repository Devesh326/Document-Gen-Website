import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';
import { Section } from './Section';

const faqs = [
  {
    question: 'How does Document-Gen work?',
    answer: 'Document-Gen is a GitHub App that automatically analyzes your codebase when you push changes. It uses advanced AI to understand your architecture, routes, and dependencies, then generates comprehensive documentation in a pull request.',
  },
  {
    question: 'Is my code secure?',
    answer: 'Absolutely. We only access the repositories you explicitly grant permission to. Your code is processed securely and never stored permanently. We follow industry best practices for data security and compliance.',
  },
  {
    question: 'Which languages are supported?',
    answer: 'Document-Gen supports all major programming languages including Python, TypeScript, JavaScript, Go, Java, Ruby, PHP, C#, and more. It works with any framework or stack.',
  },
  {
    question: 'Can I customize the documentation?',
    answer: 'Yes! You can review and edit the generated documentation in the pull request before merging. You can also configure custom templates and formatting preferences.',
  },
  {
    question: 'What happens to my existing README?',
    answer: 'Document-Gen intelligently updates your existing README rather than replacing it. It preserves your custom content while adding or updating relevant sections.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Document-Gen is completely free for private and public repositories with 50 generations per month.',
    // For private repositories and unlimited generations, our Pro plan is just $5/month. Teams can use our Team plan at $15/month with additional features.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="faq" className="bg-gradient-to-b from-black/50 to-black/30">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about Document-Gen
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-left transition-all hover:bg-white/10 hover:border-white/20"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 mt-4 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
