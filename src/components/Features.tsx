import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Bot, RefreshCw, Globe, Network, Gauge } from 'lucide-react';
import { Card } from './Card';
import { Section } from './Section';

const features = [
  {
    icon: Zap,
    title: 'Zero Setup',
    description: 'Install the GitHub App and you\'re done. No config files, no learning curve.',
  },
  {
    icon: Bot,
    title: 'AI That Understands',
    description: 'Analyzes your architecture, routes, and dependencies to generate accurate docs.',
  },
  {
    icon: RefreshCw,
    title: 'Always Up-to-Date',
    description: 'Auto-updates on every push. New endpoints get documented, deleted code gets removed.',
  },
  {
    icon: Globe,
    title: 'Any Stack',
    description: 'Python, TypeScript, Go, Java, Ruby, PHP—works with all major languages and frameworks.',
  },
  {
    icon: Network,
    title: 'Architecture Diagrams',
    description: 'Automatic dependency graphs and Mermaid diagrams included.',
  },
  {
    icon: Gauge,
    title: '10x Faster',
    description: 'What takes hours manually happens in seconds.',
  },
];

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="features" className="bg-black/30">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything you need
          </h2>
          <p className="text-xl text-gray-400">
            Built for modern development teams who value their time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
