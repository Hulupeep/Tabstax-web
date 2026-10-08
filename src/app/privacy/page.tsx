import type { Metadata } from "next";
import {
  COMPANY,
  LegalList,
  LegalPage,
  LegalSection,
  MailLink,
} from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Flout Ltd collects, uses, and protects personal data when you use HeyStax and heystax.ai.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="8 October 2026"
      intro={
        <>
          <p>
            This Privacy Policy explains how {COMPANY.legalName} (&ldquo;Flout
            Labs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses,
            shares, and protects personal data when you visit heystax.ai or use
            the HeyStax web app, command-line tools, browser extension, MCP
            server, and related services (together, the &ldquo;Service&rdquo;).
          </p>
          <p>
            We are the data controller for the personal data described in this
            policy. Questions or requests can be sent to{" "}
            <MailLink email={COMPANY.privacyEmail} />.
          </p>
        </>
      }
    >
      <LegalSection id="who-we-are" heading="1. Who we are">
        <p>
          {COMPANY.legalName}, trading as {COMPANY.tradingName}, is a company
          registered in Ireland (company number {COMPANY.registrationNumber})
          with its registered office at {COMPANY.address}.
        </p>
        <p>
          Privacy contact: <MailLink email={COMPANY.privacyEmail} />
          <br />
          General contact: <MailLink email={COMPANY.adminEmail} />
        </p>
      </LegalSection>

      <LegalSection id="data-we-collect" heading="2. Data we collect">
        <p>We collect the following categories of personal data:</p>
        <LegalList
          items={[
            <>
              <strong>Account data</strong> &mdash; your name, email address,
              password (stored only as a secure hash), workspace and team
              membership, and account preferences.
            </>,
            <>
              <strong>Content you add</strong> &mdash; the stax, projects,
              goals, dates, people, next actions, records, notes, and other
              material you or your connected agents create in the Service. This
              may include personal data about other people (for example, a
              colleague&rsquo;s name or email address).
            </>,
            <>
              <strong>Agent and integration data</strong> &mdash; instructions
              you give to agents, the actions agents take on your behalf,
              audit-log entries, and the access tokens or identifiers needed to
              connect third-party tools you choose to link (such as AI
              assistants, MCP clients, or messaging apps).
            </>,
            <>
              <strong>Billing data</strong> &mdash; your plan, billing address,
              and payment history. Card details are collected and stored by our
              payment processor, Stripe; we never see or store your full card
              number.
            </>,
            <>
              <strong>Technical and usage data</strong> &mdash; IP address,
              browser and device type, log files, timestamps, error reports,
              and how features of the Service are used.
            </>,
            <>
              <strong>Communications</strong> &mdash; messages you send us,
              support requests, and feedback.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="how-we-use-data" heading="3. How we use data and our legal bases">
        <p>
          Under the EU General Data Protection Regulation (GDPR), we rely on
          the following legal bases:
        </p>
        <LegalList
          items={[
            <>
              <strong>To provide the Service</strong> (performance of a
              contract) &mdash; creating your account, storing and syncing your
              content, running agents you instruct, connecting the integrations
              you enable, and providing support.
            </>,
            <>
              <strong>To take payment and keep financial records</strong>{" "}
              (contract and legal obligation) &mdash; processing subscriptions
              and meeting Irish tax and accounting requirements.
            </>,
            <>
              <strong>To keep the Service secure and reliable</strong>{" "}
              (legitimate interests) &mdash; preventing abuse and fraud,
              debugging, monitoring performance, and enforcing our Terms of
              Service.
            </>,
            <>
              <strong>To improve the Service</strong> (legitimate interests)
              &mdash; understanding, in aggregate, which features are used so
              we can make them better.
            </>,
            <>
              <strong>To send service messages</strong> (contract) &mdash;
              account verification, security alerts, billing notices, and
              important changes. Product news is sent only where you have
              consented or where permitted by law, and you can unsubscribe at
              any time.
            </>,
            <>
              <strong>To comply with the law</strong> (legal obligation)
              &mdash; responding to lawful requests from authorities and
              exercising or defending legal claims.
            </>,
          ]}
        />
        <p>We do not sell your personal data, and we do not use it for third-party advertising.</p>
      </LegalSection>

      <LegalSection id="ai-processing" heading="4. AI and agent processing">
        <p>
          HeyStax uses large language model providers to power agents and
          AI-assisted features. When you ask an agent to act, the relevant
          parts of your content and instructions are sent to the AI provider to
          generate a response. We use these providers under commercial terms
          that do not permit them to use your content to train their general
          models, and we do not use your content to train AI models of our own.
        </p>
        <p>
          When you connect HeyStax to a third-party AI assistant or MCP client
          (for example Claude, ChatGPT, Cursor, or Codex), that client can read
          and write the stax you authorise. Data you share with a third-party
          client is also governed by that provider&rsquo;s own privacy policy.
        </p>
        <p>
          Agents may take actions you request, such as drafting or sending
          messages. Every agent action is recorded in your audit log so you can
          see what happened and when.
        </p>
      </LegalSection>

      <LegalSection id="sharing" heading="5. Who we share data with">
        <p>
          We share personal data only with service providers that help us run
          the Service, under written contracts that require them to protect it
          and use it only on our instructions. These include:
        </p>
        <LegalList
          items={[
            "Supabase — database, authentication, and file storage",
            "Vercel — website and application hosting",
            "Stripe — payment processing and subscription billing",
            "Resend — transactional email delivery",
            "Anthropic and other AI model providers — agent and AI features",
            "Google — web fonts loaded on heystax.ai",
            "YouTube (privacy-enhanced mode) — embedded product videos",
          ]}
        />
        <p>
          We may also disclose data to professional advisers, to a buyer or
          successor in the event of a merger or sale of the business (subject
          to this policy), or where required by law or to protect the rights,
          property, or safety of our users or others. Other members of your
          team or workspace can see content you share with them.
        </p>
      </LegalSection>

      <LegalSection id="transfers" heading="6. International transfers">
        <p>
          Some of our service providers are located, or process data, outside
          the European Economic Area (EEA), including in the United States.
          Where we transfer personal data outside the EEA, we rely on an
          adequacy decision (such as the EU&ndash;US Data Privacy Framework)
          or the European Commission&rsquo;s Standard Contractual Clauses,
          together with additional safeguards where appropriate.
        </p>
      </LegalSection>

      <LegalSection id="retention" heading="7. How long we keep data">
        <LegalList
          items={[
            "Account data and content are kept for as long as your account is active.",
            "If you delete your account, we delete or anonymise your content within 30 days, except where we must keep it for legal reasons. Encrypted backups are overwritten within a further 90 days.",
            "Billing and tax records are kept for 6 years, as required by Irish law.",
            "Security and server logs are generally kept for up to 12 months.",
          ]}
        />
      </LegalSection>

      <LegalSection id="cookies" heading="8. Cookies and similar technologies">
        <p>
          The heystax.ai marketing website does not use advertising or
          cross-site tracking cookies. Loading the site sends your IP address
          to Google to serve web fonts, and playing an embedded video loads
          content from YouTube in privacy-enhanced mode.
        </p>
        <p>
          The HeyStax app uses strictly necessary cookies and local storage to
          keep you signed in and remember your settings. These are required for
          the Service to work and do not require consent. If we introduce
          optional analytics cookies, we will ask for your consent first.
        </p>
      </LegalSection>

      <LegalSection id="your-rights" heading="9. Your rights">
        <p>Under the GDPR you have the right to:</p>
        <LegalList
          items={[
            "access the personal data we hold about you;",
            "correct inaccurate or incomplete data;",
            "have your data erased;",
            "restrict or object to our processing, including processing based on legitimate interests and any direct marketing;",
            "receive your data in a portable, machine-readable format;",
            "withdraw consent at any time, where we rely on consent.",
          ]}
        />
        <p>
          To exercise any of these rights, email{" "}
          <MailLink email={COMPANY.privacyEmail} />. We will respond within one
          month. We may need to verify your identity before acting on a
          request.
        </p>
        <p>
          You also have the right to complain to the Irish Data Protection
          Commission (
          <a
            href="https://www.dataprotection.ie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber hover:text-terracotta underline underline-offset-2"
          >
            www.dataprotection.ie
          </a>
          ) or to the supervisory authority where you live. We would appreciate
          the chance to address your concern first.
        </p>
      </LegalSection>

      <LegalSection id="content-about-others" heading="10. Personal data you add about others">
        <p>
          If you add information about other people to HeyStax, such as
          contacts or colleagues, you are responsible for making sure you are
          entitled to do so. Where you use HeyStax on behalf of an organisation,
          that organisation may be the controller of that data and we process
          it on its behalf. Contact us at{" "}
          <MailLink email={COMPANY.privacyEmail} /> if you need a data
          processing agreement.
        </p>
      </LegalSection>

      <LegalSection id="security" heading="11. Security">
        <p>
          We use industry-standard measures to protect personal data,
          including encryption in transit (TLS) and at rest, access controls,
          row-level security in our database, and audit logging. No system is
          perfectly secure. If we become aware of a personal data breach that
          affects you, we will notify you and the Data Protection Commission as
          the law requires.
        </p>
      </LegalSection>

      <LegalSection id="children" heading="12. Children">
        <p>
          The Service is not intended for anyone under 16, and we do not
          knowingly collect personal data from children. If you believe a child
          has given us personal data, contact us and we will delete it.
        </p>
      </LegalSection>

      <LegalSection id="changes" heading="13. Changes to this policy">
        <p>
          We may update this policy from time to time. The &ldquo;last
          updated&rdquo; date at the top shows when it last changed. If we make
          material changes, we will notify you by email or in the Service
          before they take effect.
        </p>
      </LegalSection>

      <LegalSection id="contact" heading="14. Contact us">
        <p>
          {COMPANY.legalName}
          <br />
          {COMPANY.address}
          <br />
          Privacy: <MailLink email={COMPANY.privacyEmail} />
          <br />
          General: <MailLink email={COMPANY.adminEmail} />
        </p>
      </LegalSection>
    </LegalPage>
  );
}
