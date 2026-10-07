import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Nav />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
        <p className="text-sm text-gray-400 font-body mb-12">Last updated: April 2026</p>

        <div className="space-y-8 text-gray-600 font-body leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using any CHERRI GROUP product or service, including CHERRI PICK ("the Service"), you agree to be bound by these Terms and Conditions. If you are a parent or legal guardian allowing a child to use the Service, you accept these terms on behalf of yourself and your child. If you do not agree to these terms, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">2. Service Description</h2>
            <p>
              CHERRI PICK is a personalized math learning platform designed for children ages 5 to 12. The Service provides interactive math exercises using multiple teaching methods. The Service is currently in prototype/beta phase and is provided "as is" for testing and feedback purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">3. Eligibility and Parental Responsibility</h2>
            <p>
              The Service is intended for use by children under the supervision of a parent or legal guardian. By allowing your child to use the Service, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>You are the parent or legal guardian of the child using the Service</li>
              <li>You consent to your child's use of the Service</li>
              <li>You will supervise your child's use of the Service, especially for younger children who may need reading assistance</li>
              <li>You are at least 18 years of age</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">4. Educational Disclaimer</h2>
            <p>
              <strong>The Service is a supplementary educational tool and is not intended to replace formal education, classroom instruction, tutoring, or professional educational guidance.</strong> The teaching methods presented (including but not limited to visual grids, Japanese line methods, Singapore bar models, lattice multiplication, skip counting, and story-based learning) are based on established educational research, but individual results may vary.
            </p>
            <p className="mt-3">
              We make no guarantees, representations, or warranties regarding specific educational outcomes, improvements in test scores, or academic performance. Parents should consult qualified educators for concerns about their child's learning needs.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">5. Prototype/Beta Phase</h2>
            <p>
              The Service is currently in a prototype/beta phase. This means:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Features may be incomplete, experimental, or subject to change without notice</li>
              <li>The Service may contain bugs, errors, or inaccuracies</li>
              <li>Data stored during the prototype phase (in browser localStorage) may be lost when clearing browser data or switching devices</li>
              <li>The Service is provided free of charge during the prototype phase</li>
              <li>We reserve the right to modify, suspend, or discontinue the prototype at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, CHERRI GROUP, ITS FOUNDERS (INCLUDING ANTHRA RAJESH AND RAJESH BALASUBRAMANIYAN), OPERATORS, AFFILIATES, AND CONTRIBUTORS SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Any direct, indirect, incidental, special, consequential, or punitive damages arising from or related to the use of the Service</li>
              <li>Any errors, inaccuracies, or omissions in the educational content provided</li>
              <li>Any loss of data, including learning progress or profile information</li>
              <li>Any reliance placed on the educational content or methods presented</li>
              <li>Any interruption, suspension, or termination of the Service</li>
              <li>Any health effects associated with screen usage</li>
            </ul>
            <p className="mt-3">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">7. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless CHERRI GROUP, its founders, operators, and affiliates from any claims, damages, losses, or expenses (including legal fees) arising from your or your child's use of the Service, your violation of these Terms, or your violation of any rights of any third party.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">8. Intellectual Property</h2>
            <p>
              All content, design, code, graphics, logos, and materials on the Service are the property of CHERRI GROUP and are protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on the Service without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">9. User Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Interfere with or disrupt the Service or its infrastructure</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
              <li>Use automated systems (bots, scrapers) to access the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">10. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or the use of the Service shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">11. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Material changes will be communicated through the Service or via email to registered users. Continued use of the Service after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">12. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining provisions remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">13. Contact</h2>
            <p>For questions about these Terms, contact us at:</p>
            <div className="mt-3 bg-gray-50 rounded-xl p-4">
              <p><strong>CHERRI GROUP</strong></p>
              <p>Email: <a href="mailto:daydream@cherri.group" className="text-cherry hover:underline">daydream@cherri.group</a></p>
              <p>Bengaluru, Karnataka, India</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
