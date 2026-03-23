import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { Section } from './Section';

export function FinalCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section className="bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl -z-10" />

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to automate your documentation?
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            {/* Join thousands of developers who've reclaimed their time */}
            Stop letting your documentation go stale
            </p>

          <Button variant="primary" href="https://github.com/apps/document-gen" className="text-lg">
            Install GitHub App
            <ArrowRight className="w-6 h-6" />
          </Button>

          <p className="text-gray-500 text-sm mt-6">
            Free for all repos • No credit card required
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>2-minute setup</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>No config required</span>
            </div>
            {/* <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Cancel anytime</span>
            </div> */}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
