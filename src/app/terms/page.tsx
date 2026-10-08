import type { Metadata } from "next";
import Link from "next/link";
import {
  COMPANY,
  LegalList,
  LegalPage,
  LegalSection,
  MailLink,
} from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of HeyStax, provided by Flout Ltd, Ireland.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="8 October 2026"
      intro={
        <>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) are an agreement
            between you and {COMPANY.legalName}, trading as{" "}
            {COMPANY.tradingName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;), a
            company registered in Ireland (company number{" "}
            {COMPANY.registrationNumber}) with its registered office at{" "}
            {COMPANY.address}.
          </p>
          <p>
            They govern your use of heystax.ai and the HeyStax web app,
            command-line tools, browser extension, MCP server, agents, and
            related services (together, the &ldquo;Service&rdquo;). By creating
            an account or using the Service, you agree to these Terms. If you
            use the Service on behalf of an organisation, you confirm you are
            authorised to bind it, and &ldquo;you&rdquo; includes that
            organisation.
          </p>
        </>
      }
    >
      <LegalSection id="eligibility" heading="1. Eligibility and accounts">
        <LegalList
          items={[
            "You must be at least 16 years old to use the Service.",
            "You must give accurate account information and keep it up to date.",
            "You are responsible for keeping your login credentials and API tokens secure and for all activity under your account. Tell us promptly at admin@floutlabs.com if you suspect unauthorised access.",
          ]}
        />
      </LegalSection>

      <LegalSection id="the-service" heading="2. The Service">
        <p>
          HeyStax is a shared work graph for people and AI agents. We may add,
          change, or remove features over time. We will give reasonable notice
          before removing a feature that is material to a paid plan. Some
          features may be labelled beta or preview; these are provided for
          evaluation and may change or be withdrawn.
        </p>
      </LegalSection>

      <LegalSection id="agents" heading="3. AI agents and your responsibility">
        <p>
          The Service lets AI agents read your content and take actions you
          authorise, such as drafting or sending messages, creating tasks, or
          updating records. You acknowledge that:
        </p>
        <LegalList
          items={[
            "AI output can be inaccurate, incomplete, or inappropriate. You are responsible for reviewing output and actions before relying on them, especially for legal, financial, medical, or other important decisions.",
            "You are responsible for the actions you instruct or permit agents to take, including messages sent to third parties in your name.",
            "Agent actions are recorded in an audit log, and you can revoke an agent's or integration's access at any time.",
          ]}
        />
      </LegalSection>

      <LegalSection id="your-content" heading="4. Your content">
        <p>
          You keep all rights in the content you and your agents put into the
          Service (&ldquo;Your Content&rdquo;). You grant us a worldwide,
          non-exclusive, royalty-free licence to host, store, copy, process,
          transmit, and display Your Content only as needed to provide,
          secure, and support the Service for you. This licence ends when Your
          Content is deleted from the Service, subject to our backup and legal
          retention periods described in our{" "}
          <Link href="/privacy" className="text-amber hover:text-terracotta underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
        <p>
          You confirm that you have the rights needed to upload Your Content
          and that it does not infringe anyone else&rsquo;s rights or the law.
          We do not use Your Content to train AI models. You can export Your
          Content while your account is active.
        </p>
      </LegalSection>

      <LegalSection id="acceptable-use" heading="5. Acceptable use">
        <p>You must not use the Service to:</p>
        <LegalList
          items={[
            "break any law or infringe anyone's rights, including privacy and intellectual property rights;",
            "send spam, unsolicited bulk messages, or deceptive communications, including through agents;",
            "upload malware or attempt to gain unauthorised access to the Service, other accounts, or connected systems;",
            "harass, threaten, defraud, or harm others;",
            "probe, scan, overload, or disrupt the Service, or bypass rate limits, usage limits, or security controls;",
            "reverse engineer the Service except where the law allows despite this restriction;",
            "resell or provide the Service to third parties without our written permission;",
            "use the Service to build a competing product using our non-public interfaces.",
          ]}
        />
        <p>
          We may suspend or limit access if we reasonably believe you have
          breached this section, and we will tell you why unless the law or
          security concerns prevent us.
        </p>
      </LegalSection>

      <LegalSection id="third-party" heading="6. Third-party services">
        <p>
          The Service works with third-party tools you choose to connect, such
          as AI assistants, MCP clients, email providers, and messaging apps.
          Your use of those tools is governed by their own terms and privacy
          policies. We are not responsible for third-party services, and
          connecting them means you authorise us to exchange data with them
          on your behalf.
        </p>
      </LegalSection>

      <LegalSection id="fees" heading="7. Plans, fees, and billing">
        <LegalList
          items={[
            "Some features require a paid plan. Prices and plan limits are shown in the Service before you buy.",
            "Paid plans are billed in advance on a recurring basis (monthly or annually) through our payment processor, Stripe, and renew automatically until cancelled.",
            "You can cancel at any time in your account settings. Cancellation takes effect at the end of the current billing period, and you keep access until then.",
            "Except where required by law or stated otherwise, fees already paid are non-refundable.",
            "Prices include or exclude VAT as shown at checkout. We may change prices with at least 30 days' notice; changes apply from your next renewal.",
            "If payment fails, we may suspend paid features until the balance is paid.",
          ]}
        />
      </LegalSection>

      <LegalSection id="consumer-rights" heading="8. EU consumer rights">
        <p>
          If you are a consumer in the EU, you normally have a right to
          withdraw from a contract for digital services within 14 days of
          purchase. When you start a paid plan and ask us to begin providing
          the Service immediately, you acknowledge that you lose the right of
          withdrawal once the Service has been fully performed, and that if you
          withdraw within 14 days, you may be charged for the portion of the
          Service already provided. To withdraw, email{" "}
          <MailLink email={COMPANY.adminEmail} />.
        </p>
        <p>
          Nothing in these Terms affects your statutory rights as a consumer
          under Irish or EU law.
        </p>
      </LegalSection>

      <LegalSection id="ip" heading="9. Our intellectual property">
        <p>
          The Service, including its software, design, and the HeyStax name and
          logos, is owned by us or our licensors and protected by intellectual
          property laws. We grant you a limited, non-exclusive,
          non-transferable licence to use the Service in line with these Terms.
          If you send us feedback or suggestions, we may use them without any
          obligation to you.
        </p>
      </LegalSection>

      <LegalSection id="termination" heading="10. Suspension and termination">
        <p>
          You can stop using the Service and delete your account at any time.
          We may suspend or end your access if you materially breach these
          Terms, if required by law, or if we stop offering the Service. Where
          reasonable, we will give you notice and an opportunity to export Your
          Content first. If we end the Service for reasons other than your
          breach, we will refund any prepaid fees for the unused period.
        </p>
        <p>
          Sections that by their nature should survive termination (including
          Your Content licence limits, disclaimers, limitation of liability, and
          governing law) will survive.
        </p>
      </LegalSection>

      <LegalSection id="disclaimers" heading="11. Disclaimers">
        <p>
          We work hard to keep the Service available and reliable, but it is
          provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To the
          extent permitted by law, we make no warranties beyond those expressly
          stated in these Terms, including warranties of merchantability,
          fitness for a particular purpose, or that the Service will be
          uninterrupted or error-free, or that AI output will be accurate.
        </p>
      </LegalSection>

      <LegalSection id="liability" heading="12. Limitation of liability">
        <p>
          Nothing in these Terms limits or excludes liability for death or
          personal injury caused by negligence, fraud or fraudulent
          misrepresentation, or any other liability that cannot be limited or
          excluded under Irish law.
        </p>
        <p>
          Subject to that, and to the extent permitted by law: (a) we are not
          liable for any indirect or consequential loss, or for loss of
          profits, revenue, business, goodwill, or data; and (b) our total
          liability arising out of or in connection with the Service or these
          Terms in any 12-month period is limited to the greater of the fees
          you paid us in that period or &euro;100.
        </p>
        <p>
          If you are a consumer, we are responsible for loss or damage you
          suffer that is a foreseeable result of our breach of these Terms or
          our failure to use reasonable care and skill.
        </p>
      </LegalSection>

      <LegalSection id="indemnity" heading="13. Indemnity">
        <p>
          If you use the Service for business purposes, you agree to indemnify
          us against claims, losses, and costs arising from Your Content, your
          breach of these Terms, or actions taken by agents on your
          instruction, except to the extent caused by our own breach or
          negligence.
        </p>
      </LegalSection>

      <LegalSection id="changes" heading="14. Changes to these Terms">
        <p>
          We may update these Terms from time to time. If a change is material,
          we will notify you by email or in the Service at least 30 days before
          it takes effect. If you do not agree, you can cancel before the
          change applies. Continuing to use the Service after that date means
          you accept the updated Terms.
        </p>
      </LegalSection>

      <LegalSection id="general" heading="15. General">
        <LegalList
          items={[
            "These Terms, together with our Privacy Policy and any plan terms shown at purchase, are the entire agreement between you and us about the Service.",
            "You may not transfer your rights under these Terms without our consent. We may transfer ours to a successor to our business, and will tell you if we do.",
            "If any part of these Terms is found unenforceable, the rest remains in effect.",
            "Our failure to enforce a right is not a waiver of it.",
            "We are not liable for delays or failures caused by events beyond our reasonable control.",
          ]}
        />
      </LegalSection>

      <LegalSection id="law" heading="16. Governing law and disputes">
        <p>
          These Terms are governed by the laws of Ireland, and the courts of
          Ireland have exclusive jurisdiction over any dispute. If you are a
          consumer living elsewhere in the EU, you also benefit from any
          mandatory consumer protections of the country where you live and may
          bring proceedings in your local courts.
        </p>
        <p>
          Before starting formal proceedings, please contact us so we can try
          to resolve the issue informally.
        </p>
      </LegalSection>

      <LegalSection id="contact" heading="17. Contact">
        <p>
          {COMPANY.legalName}
          <br />
          {COMPANY.address}
          <br />
          Company number {COMPANY.registrationNumber}
          <br />
          Email: <MailLink email={COMPANY.adminEmail} />
          <br />
          Privacy: <MailLink email={COMPANY.privacyEmail} />
        </p>
      </LegalSection>
    </LegalPage>
  );
}
