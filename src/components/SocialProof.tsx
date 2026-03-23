import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Users, GitFork } from 'lucide-react';
import { Section } from './Section';

const stats = [
  { icon: Star, value: '12.5K', label: 'GitHub Stars' },
  { icon: Users, value: '50K+', label: 'Developers' },
  { icon: GitFork, value: '1M+', label: 'Docs Generated' },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Senior Developer @ TechCorp',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&w=100&h=100',
    content: 'Document-Gen saved us countless hours. Our documentation is always up-to-date now.',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO @ StartupXYZ',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&w=100&h=100',
    content: 'This tool is a game-changer. The AI-generated docs are incredibly accurate and comprehensive.',
  },
  {
    name: 'Emily Thompson',
    role: 'Engineering Lead @ DevCo',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&w=100&h=100',
    content: 'Best investment we made. New team members onboard 3x faster with automatically updated docs.',
  },
];

export function SocialProof() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section className="bg-black/30">
      <div ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Loved by developers worldwide
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-300 italic">&quot;{testimonial.content}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
