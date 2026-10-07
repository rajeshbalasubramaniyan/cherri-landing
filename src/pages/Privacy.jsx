import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Nav />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 font-body mb-12">Last updated: April 2026</p>

        <div className="space-y-8 text-gray-600 font-body leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">1. Who We Are</h2>
            <p>
              CHERRI GROUP ("we," "us," or "our") is a brand initiative by Anthra Rajesh, operated and moderated by Rajesh Balasubramaniyan, based in Bengaluru, India. CHERRI PICK is our first product, a personalized math learning platform designed for children ages 5 to 12.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">2. Our Commitment to Children's Privacy</h2>
            <p>
              We take children's privacy extremely seriously. We are committed to complying with the Children's Online Privacy Protection Act (COPPA) in the United States, the Digital Personal Data Protection Act, 2023 (DPDP Act) in India, and the UK Age Appropriate Design Code (Children's Code) where applicable.
            </p>
            <p className="mt-3">
              <strong>We do not knowingly collect personal information from children without verifiable parental consent.</strong>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">3. Information We Collect</h2>

            <h3 className="font-bold text-gray-800 mt-4 mb-2">3.1 Prototype Phase (Current)</h3>
            <p>During the current prototype phase, CHERRI PICK stores the following data locally on the user's device (browser localStorage) only:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Child's display name (first name only, chosen by the child)</li>
              <li>Age selection</li>
              <li>Learning style preference</li>
              <li>Avatar selection</li>
              <li>Interest categories selected</li>
              <li>Learning progress (problems solved, methods used, XP earned)</li>
            </ul>
            <p className="mt-3">
              <strong>This data is stored entirely on the user's device and is never transmitted to our servers.</strong> We cannot access, view, or retrieve this data. Clearing browser data removes it completely.
            </p>

            <h3 className="font-bold text-gray-800 mt-4 mb-2">3.2 Waitlist</h3>
            <p>
              If a parent voluntarily submits their email address to join our waitlist, we collect only that email address. This email is stored locally in the browser during the prototype phase. In the full version, waitlist emails will be stored securely and used solely to notify parents about product availability.
            </p>

            <h3 className="font-bold text-gray-800 mt-4 mb-2">3.3 What We Do NOT Collect</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>We do not collect full names, surnames, or family names of children</li>
              <li>We do not collect email addresses, phone numbers, or contact information from children</li>
              <li>We do not collect location data, device identifiers, or IP addresses</li>
              <li>We do not collect photographs, audio, or biometric data</li>
              <li>We do not use cookies for tracking or advertising purposes</li>
              <li>We do not use any third-party analytics, advertising, or tracking SDKs</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">4. Parental Consent</h2>
            <p>
              In the full version of CHERRI PICK, we will require verifiable parental consent before any child can create a profile or use the platform. Parents will be required to create an account and explicitly authorize their child's use of the service. No data about a child will be collected or stored without prior parental consent.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">5. How We Use Information</h2>
            <p>Any information collected is used solely to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Personalize the learning experience for the child</li>
              <li>Track learning progress within the application</li>
              <li>Notify waitlisted parents about product updates (email only)</li>
            </ul>
            <p className="mt-3">We do not sell, rent, share, or disclose any personal information to third parties for any purpose, including advertising or marketing.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">6. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect any data we process. In the full version, all data will be encrypted in transit (TLS 1.3) and at rest (AES-256). Our infrastructure will be hosted on servers located in India (Mumbai region) to comply with data localization requirements under the DPDP Act.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">7. Data Retention and Deletion</h2>
            <p>
              We retain personal data only as long as necessary to provide the service. Parents may request deletion of their child's data at any time by contacting us. Upon receiving a valid deletion request, we will delete all associated data within 72 hours for COPPA-covered data, and within 30 days for all other data as required by the DPDP Act.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">8. Third-Party Services</h2>
            <p>
              We do not integrate any third-party services that collect data from children. We do not display advertisements. We do not use behavioral tracking or targeted content systems on any child-facing surfaces of our platform.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">9. Parental Rights</h2>
            <p>Parents and legal guardians have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Review any personal information collected about their child</li>
              <li>Request deletion of their child's personal information</li>
              <li>Refuse further collection or use of their child's information</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:daydream@cherri.group" className="text-cherry hover:underline">daydream@cherri.group</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify registered users of any material changes via email. Continued use of the service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
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
