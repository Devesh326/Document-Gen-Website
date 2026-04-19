import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from '../components/Section';
import ScrollToTop from '../components/ScrollToTop';

export function PrivacyPolicy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  ScrollToTop();

  return (
    <Section id="privacy-policy" className="py-20 md:py-32 bg-black">
      <div ref={ref} className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last Updated: April 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-12 text-gray-300"
        >
          <Section className="!py-0">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
              <p className="leading-relaxed">
                Document-Gen is a GitHub App that analyzes your repositories and automatically generates or updates README documentation using AI.
              </p>
              <p className="leading-relaxed">
                This Privacy Policy explains what data we access, how we use it, and your rights when using Document-Gen.
              </p>
              <p className="leading-relaxed">
                By installing or using Document-Gen, you agree to this policy.
              </p>
            </div>
          </Section>

          <hr className="border-white/10" />

          <Section className="!py-0">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. Information We Access</h2>
              <p className="leading-relaxed">
                Document-Gen only accesses data necessary to provide its functionality.
              </p>

              <div className="space-y-4 ml-4 border-l border-purple-500/30 pl-4">
                <div>
                  <h3 className="font-semibold text-white mb-2">GitHub Data</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3">•</span>
                      <span>Repository metadata (name, structure, file paths)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3">•</span>
                      <span>Selected source code files from repositories where the app is installed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3">•</span>
                      <span>Commit metadata (e.g., changed files)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-2">Usage Data</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3">•</span>
                      <span>Basic logs (errors, performance, execution status)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-2">What We Do NOT Collect</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3">•</span>
                      <span>Passwords or authentication secrets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3">•</span>
                      <span>Private personal data outside GitHub</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3">•</span>
                      <span>Any data from repositories you have not explicitly granted access to</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          <hr className="border-white/10" />

          <Section className="!py-0">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. How We Use Information</h2>
              <p className="leading-relaxed">
                We use the accessed data strictly to:
              </p>
              <ul className="space-y-2 ml-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Analyze repository structure and code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Generate or update README documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Create pull requests in your repository</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Improve system performance and reliability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Debug issues and provide support</span>
                </li>
              </ul>
              <p className="leading-relaxed pt-2">
                We do <span className="font-semibold">not</span> use your data for advertising or profiling.
              </p>
            </div>
          </Section>

          <hr className="border-white/10" />

          <Section className="!py-0">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Data Storage & Retention</h2>
              <ul className="space-y-2 ml-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Repository data is processed temporarily and is <span className="font-semibold">not permanently stored</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Generated outputs (e.g., README content) are stored only within your repository</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Logs may be retained for a limited period for debugging and reliability</span>
                </li>
              </ul>
            </div>
          </Section>

          <hr className="border-white/10" />

          <Section className="!py-0">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Third-Party Services</h2>
              <p className="leading-relaxed">
                Document-Gen relies on trusted third-party services:
              </p>
              <ul className="space-y-2 ml-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span><span className="font-semibold">GitHub</span> – for repository access and pull request creation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span><span className="font-semibold">AI Providers (e.g., Gemini, Groq)</span> – for generating documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span><span className="font-semibold">Hosting Infrastructure (e.g., Vercel)</span> – for running the service</span>
                </li>
              </ul>
              <p className="leading-relaxed pt-2">
                These services may process data as required to perform their functions.
              </p>
              <p className="leading-relaxed">
                We do <span className="font-semibold">not sell or share your data</span> with third parties for marketing purposes.
              </p>
            </div>
          </Section>

          <hr className="border-white/10" />

          <Section className="!py-0">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">6. GitHub Permissions</h2>
              <p className="leading-relaxed">
                Document-Gen only accesses repositories where you install the app.
              </p>
              <p className="leading-relaxed">
                Permissions are limited to:
              </p>
              <ul className="space-y-2 ml-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Reading repository contents (for analysis)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Creating pull requests (to deliver generated documentation)</span>
                </li>
              </ul>
              <p className="leading-relaxed pt-2">
                The app does <span className="font-semibold">not access unrelated repositories or user data</span>.
              </p>
            </div>
          </Section>

          <hr className="border-white/10" />

          <Section className="!py-0">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">7. Data Security</h2>
              <p className="leading-relaxed">
                We implement reasonable security measures to protect your data.
              </p>
              <p className="leading-relaxed">
                However, no system can guarantee absolute security. By using Document-Gen, you acknowledge this risk.
              </p>
            </div>
          </Section>

          <hr className="border-white/10" />

          <Section className="!py-0">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">8. User Control & Data Removal</h2>
              <p className="leading-relaxed">
                You are in full control of your data:
              </p>
              <ul className="space-y-2 ml-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>You can uninstall Document-Gen at any time from your GitHub account</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Once uninstalled, the app immediately loses access to your repositories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>No further data processing will occur after removal</span>
                </li>
              </ul>
            </div>
          </Section>

          <hr className="border-white/10" />

          <Section className="!py-0">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">9. Children's Privacy</h2>
              <p className="leading-relaxed">
                Document-Gen is not intended for use by individuals under the age of 13.
              </p>
            </div>
          </Section>

          <hr className="border-white/10" />

          <Section className="!py-0">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">10. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time.
              </p>
              <p className="leading-relaxed">
                Changes will be reflected by updating the "Last Updated" date.
              </p>
              <p className="leading-relaxed">
                Continued use of Document-Gen after changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </Section>

          <hr className="border-white/10" />

          <Section className="!py-0">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">11. Contact</h2>
              <p className="leading-relaxed">
                For questions or concerns about this policy, contact:
              </p>
              <p className="font-mono text-purple-400">
                support@document-gen.ai
              </p>
            </div>
          </Section>
        </motion.div>
      </div>
    </Section>
  );
}
