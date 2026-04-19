import { FileCode2, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const links = [
    // { name: 'Documentation', href: '#' },
    { name: 'GitHub', href: 'https://github.com/document-gen' },
    { name: 'Support: dev.devesh326@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=dev.devesh326@gmail.com&su=Document-Gen%20Support',
    target: '_blank'  // Open in new tab 
    },
  ];


  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <FileCode2 className="w-6 h-6 text-purple-500" />
            <Link className="text-lg font-bold text-white" to="/">
              Document-Gen
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
                key='Privacy-Policy'
                to="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.target || '_self'}  // ✅ Add target support
                rel={link.target ? 'noopener noreferrer' : undefined}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/document-gen"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            {/* <a
              href="https://twitter.com/documentgen"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a> */}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 Document-Gen. Built with ❤️ for developers</p>
          <p className="mt-2">Powered by Gemini AI</p>
        </div>
      </div>
    </footer>
  );
}
