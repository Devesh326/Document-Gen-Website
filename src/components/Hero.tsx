import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './Button';

const floatingSnippets = [
  { text: 'npm install', top: '10%', left: '10%', delay: 0 },
  { text: 'git push origin main', top: '20%', right: '15%', delay: 0.2 },
  { text: 'README.md', top: '60%', left: '8%', delay: 0.4 },
  { text: 'API Documentation', top: '70%', right: '10%', delay: 0.6 },
  { text: 'async function generate()', top: '40%', left: '5%', delay: 0.8 },
  { text: 'architecture diagram', top: '80%', right: '20%', delay: 1 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

      <div className="absolute inset-0 overflow-hidden">
        {floatingSnippets.map((snippet, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              delay: snippet.delay,
            }}
            className="absolute text-gray-500/30 font-mono text-sm blur-sm"
            style={{
              top: snippet.top,
              left: snippet.left,
              right: snippet.right,
            }}
          >
            {snippet.text}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your code documented,{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              automatically
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            AI-powered documentation that writes itself. Install once, never manually update readme again.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="primary" href="https://github.com/apps/document-gen">
              Install GitHub App
              <ArrowRight className="w-5 h-5" />
            </Button>
            {/* <Button variant="ghost">
              <Play className="w-5 h-5" />
              View Demo
            </Button> */}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-left font-mono text-sm">
                <div className="text-gray-400 mb-2">$ git push origin main</div>
                <div className="text-green-400">✓ Code pushed successfully</div>
                <div className="text-purple-400 mt-2">🤖 Document-Gen analyzing changes...</div>
                <div className="text-blue-400 mt-1">📝 Creating pull request with documentation...</div>
                <div className="text-green-400 mt-2">✨ Done! PR #123 created with complete docs</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-500"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
