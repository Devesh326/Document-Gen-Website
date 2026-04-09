import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  ReactCompareSlider,
} from 'react-compare-slider';
import mermaid from 'mermaid';
import { Section } from './Section';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

// ============================================================================
// CONTENT
// ============================================================================

const beforeContent = `# backend-api

REST API for user management

## Description

This is a backend API I built for handling users and authentication. It uses Node.js and PostgreSQL.

## How to run

Install the dependencies and run it:

\`\`\`
npm install
npm start
\`\`\`

Make sure you have a .env file with your database credentials.

## Endpoints

- /api/auth/login
- /api/auth/register
- /api/users

`;

const afterContent = `# 🚀 Backend API

Production-ready REST API built with Express and TypeScript.

## ✨ Features

- 🔐 JWT Authentication with refresh tokens
- ⚡ Rate limiting and request throttling
- 📊 PostgreSQL with Prisma ORM
- 🔄 Real-time updates via WebSockets
- 🚀 Auto-scaling with Docker

## 🛠️ Tech Stack

- **Runtime:** Node.js 20
- **Language:** TypeScript
- **Framework:** Express.js
- **Database:** PostgreSQL + Redis
- **ORM:** Prisma
- **Auth:** JWT + bcrypt

## 📦 Installation

\`\`\`bash
# Clone repository
git clone https://github.com/user/backend-api

# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Run migrations
npx prisma migrate dev

# Start development server
npm run dev
\`\`\`

## 🌐 API Endpoints

### Authentication
- \`POST /api/auth/login\` - User login
- \`POST /api/auth/register\` - Create account
- \`POST /api/auth/refresh\` - Refresh token

### Users
- \`GET /api/users\` - List users
- \`GET /api/users/:id\` - Get user details
- \`PUT /api/users/:id\` - Update user

## 📊 Architecture

\`\`\`mermaid
graph LR
    A[Client] -->|HTTP| B[API Gateway]
    B --> C[Auth Service]
    B --> D[User Service]
    C --> E[(PostgreSQL)]
    D --> E
    D --> F[(Redis Cache)]
\`\`\`

## 📁 Project Structure

\`\`\`
src/
├── controllers/    # Request handlers
├── models/         # Prisma schemas
├── services/       # Business logic
├── middleware/     # Auth, validation
└── routes/         # API routes
\`\`\`

## 📄 License

MIT License - see LICENSE file for details`;

// ============================================================================
// MERMAID DIAGRAM COMPONENT
// ============================================================================

const MermaidDiagram = ({ chart }: { chart: string }) => {
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    // Initialize mermaid
    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      themeVariables: {
        primaryColor: '#a855f7',
        primaryTextColor: '#fff',
        primaryBorderColor: '#7c3aed',
        lineColor: '#6366f1',
        secondaryColor: '#3b82f6',
        tertiaryColor: '#1e40af',
        background: '#0d1117',
        mainBkg: '#0d1117',
        secondBkg: '#1a1f2e',
        textColor: '#e5e7eb',
        fontSize: '14px',
      },
    });
  }, []);

  useEffect(() => {
    const renderDiagram = async () => {
      try {
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg: renderedSvg } = await mermaid.render(id, chart);
        setSvg(renderedSvg);
        setError(false);
      } catch (err) {
        console.error('Mermaid rendering error:', err);
        setError(true);
      }
    };

    renderDiagram();
  }, [chart]);

  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 my-4">
        <p className="text-red-400 text-sm">Failed to render diagram</p>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="bg-white/5 rounded-lg p-8 my-4 flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading diagram...</div>
      </div>
    );
  }

  return (
    <div
      className="my-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg p-6 overflow-x-auto border border-purple-500/20"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

// ============================================================================
// MARKDOWN RENDERER
// ============================================================================

interface MarkdownRendererProps {
  content: string;
  dimmed?: boolean;
}

const MarkdownRenderer = ({ content, dimmed = false }: MarkdownRendererProps) => {
  return (
    <div className={`prose prose-invert max-w-none ${dimmed ? 'opacity-60' : ''}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-white mt-0 mb-4 border-b border-white/10 pb-2">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold text-white mt-8 mb-3 border-b border-white/10 pb-2">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold text-white mt-6 mb-2">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-gray-300 mb-4 leading-7">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="space-y-2 mb-4 ml-6">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="space-y-2 mb-4 ml-6 list-decimal">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-gray-300 leading-7">{children}</li>
          ),
          code: ({ node, inline, className, children, ...props }: any) => {
            const codeString = String(children).replace(/\n$/, '');
            
            // Check if it's a mermaid diagram
            if (className === 'language-mermaid') {
              return <MermaidDiagram chart={codeString} />;
            }

            const match = /language-(\w+)/.exec(className || '');

            return !inline && match ? (
              <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
                className="rounded-lg my-4 text-sm"
                customStyle={{
                  padding: '1rem',
                  backgroundColor: '#0d1117',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                {...props}
              >
                {codeString}
              </SyntaxHighlighter>
            ) : (
              <code
                className="bg-white/10 text-purple-400 px-1.5 py-0.5 rounded text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            );
          },
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-purple-400 hover:text-purple-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-400 my-4">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border border-white/10">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-white/10 px-4 py-2 bg-white/5 text-left font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-white/10 px-4 py-2">{children}</td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

// ============================================================================
// README CONTAINER
// ============================================================================

interface ReadmeContainerProps {
  content: string;
  label: string;
  dimmed?: boolean;
}

const ReadmeContainer = ({ content, label, dimmed = false }: ReadmeContainerProps) => {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-black/50 backdrop-blur-sm flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-sm text-gray-400 ml-3 font-mono">README.md</span>
        </div>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            dimmed
              ? 'bg-gray-700/50 text-gray-400'
              : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
          }`}
        >
          {label}
        </span>
      </div>

      {/* Content - scrollable */}
      <div className="flex-1 overflow-y-auto p-6 bg-[#0d1117]">
        <MarkdownRenderer content={content} dimmed={dimmed} />
      </div>
    </div>
  );
};

// ============================================================================
// CUSTOM SLIDER HANDLE
// ============================================================================

const CustomHandle = () => (
  <div className="relative w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 shadow-lg">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform z-10">
      <div className="flex gap-1">
        <div className="w-0.5 h-6 bg-gray-400"></div>
        <div className="w-0.5 h-6 bg-gray-400"></div>
      </div>
    </div>
  </div>
);

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function Demo() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showAfter, setShowAfter] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Section id="demo" className="bg-gradient-to-b from-black/50 to-black/30">
      <div ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            See The Transformation
          </h2>
          <p className="text-xl text-gray-400">
            From bare minimum to comprehensive documentation
          </p>
        </motion.div>

        {/* Desktop: Comparison Slider */}
        {!isMobile ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6 max-w-6xl mx-auto mb-8"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <div className="bg-gradient-to-b from-white/5 to-transparent p-4 border-b border-white/5">
                <h3 className="text-sm font-semibold text-gray-400">BEFORE</h3>
              </div>
              <div className="bg-black/80 p-6 overflow-auto h-96">
                <MarkdownRenderer content={beforeContent} />
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10">
              <div className="bg-gradient-to-b from-purple-500/10 to-transparent p-4 border-b border-white/5">
                <h3 className="text-sm font-semibold text-purple-300">AFTER</h3>
              </div>
              <div className="bg-black/80 p-6 overflow-auto h-96">
                <MarkdownRenderer content={afterContent} />
              </div>
            </div>
          </motion.div>
        ) : (
          // Mobile: Toggle View
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12"
          >
            {/* Toggle Buttons */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setShowAfter(false)}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                  !showAfter
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                Before 😕
              </button>
              <button
                onClick={() => setShowAfter(true)}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                  showAfter
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                After ✨
              </button>
            </div>

            {/* Content */}
            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black">
              <div style={{ height: '600px' }}>
                <ReadmeContainer
                  content={showAfter ? afterContent : beforeContent}
                  label={showAfter ? 'After ✨' : 'Before 😕'}
                  dimmed={!showAfter}
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Transform your documentation in seconds
          </p>
          <Button variant="primary" href="https://github.com/apps/document-gen">
            Install GitHub App
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}