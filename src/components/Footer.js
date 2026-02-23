import './Footer.css';

/**
 * Footer configuration – replace placeholder values with your practice details.
 * Do not deploy with "[...]" placeholders in production.
 */
const footerConfig = {
  practiceName: 'Burke Outpatient Physician Practice',
  doctorName: 'Dr. Sammy Wu',
  credentials: 'MD',
  address: {
    line1: '785 Mamaroneck Avenue',
    line2: 'Building 4, 1st Floor',
    city: 'White Plains',
    state: 'NY',
    zip: '10605',
  },
  phone: '(914) 597-2332',
  fax: '(914) 597-2794',
  officeHours: {
    mondayTuesday: 'White Plains Hospital',
    wednesdayFriday: 'Burke Rehabilitation Hospital',
  },
  copyrightYear: 2026,
  burkeProfileUrl: 'https://www.burke.org/find-a-doctor/profile/sammy-wu/',
  /** URLs for patient and legal pages – replace # with real paths when pages exist */
  links: {
    requestAppointment: '/#/appointment',
    patientPortal: '#',
    telehealth: '#',
    payBill: '#',
    newPatientForms: '#',
    prescriptionRefill: '#',
    insuranceAccepted: '#',
    privacyPolicy: '#',
    termsOfUse: '#',
    accessibilityStatement: '#',
    nondiscriminationNotice: '#',
    noticeOfPrivacyPractices: '#',
  },
};

function formatAddress(addr) {
  const parts = [addr.line1, addr.line2, addr.city, `${addr.state} ${addr.zip}`];
  return parts.filter(Boolean).join(', ');
}

function Footer() {
  const fullAddress = formatAddress(footerConfig.address);
  const doctorWithCredentials = `${footerConfig.doctorName}, ${footerConfig.credentials}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: footerConfig.practiceName,
    description: 'Physical Medicine and Rehabilitation, Cancer Rehabilitation',
    address: {
      '@type': 'PostalAddress',
      streetAddress: footerConfig.address.line2
        ? `${footerConfig.address.line1}, ${footerConfig.address.line2}`
        : footerConfig.address.line1,
      addressLocality: footerConfig.address.city,
      addressRegion: footerConfig.address.state,
      postalCode: footerConfig.address.zip,
    },
    telephone: footerConfig.phone,
    faxNumber: footerConfig.fax,
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '00:00', closes: '00:00' },
    ],
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-emergency">
        <p className="footer-emergency-text">
          If you are experiencing a medical emergency, call 911 immediately. Do not use this website or any online forms to communicate urgent medical needs.
        </p>
      </div>

      <div className="footer-inner">
        <section className="footer-section footer-practice" aria-labelledby="footer-practice-heading">
          <h2 id="footer-practice-heading" className="footer-heading">Practice Information</h2>
          <address className="footer-address">
            <span className="footer-practice-name">{footerConfig.practiceName}</span>
            <span className="footer-doctor">{doctorWithCredentials}</span>
            <span className="footer-address-block">
              {footerConfig.address.line1}
              {footerConfig.address.line2 && <><br />{footerConfig.address.line2}</>}
              <br />
              {footerConfig.address.city}, {footerConfig.address.state} {footerConfig.address.zip}
            </span>
            <span className="footer-tel">
              <a href={`tel:${footerConfig.phone.replace(/\D/g, '')}`}>{footerConfig.phone}</a>
            </span>
            {footerConfig.fax && (
              <span className="footer-fax">Fax: {footerConfig.fax}</span>
            )}
          </address>
        </section>

        <section className="footer-section footer-hours" aria-labelledby="footer-hours-heading">
          <h2 id="footer-hours-heading" className="footer-heading">Office Hours</h2>
          <dl className="footer-hours-list">
            <div className="footer-hours-row">
              <dt>Monday – Tuesday</dt>
              <dd>{footerConfig.officeHours.mondayTuesday}</dd>
            </div>
            <div className="footer-hours-row">
              <dt>Wednesday – Friday</dt>
              <dd>{footerConfig.officeHours.wednesdayFriday}</dd>
            </div>
          </dl>
        </section>

        <section className="footer-section footer-patient-links" aria-labelledby="footer-patient-heading">
          <h2 id="footer-patient-heading" className="footer-heading">Patient Resources</h2>
          <nav className="footer-nav" aria-label="Patient resources">
            <ul className="footer-links">
              <li><a href={footerConfig.links.requestAppointment}>Request Appointment</a></li>
              {/* <li><span className="footer-text-only">Patient Portal Login</span></li>
              <li><span className="footer-text-only">Telehealth Visit</span></li>
              <li><span className="footer-text-only">Pay Bill</span></li>
              <li><span className="footer-text-only">New Patient Forms</span></li>
              <li><span className="footer-text-only">Prescription Refill Request</span></li>
              <li><span className="footer-text-only">Insurance Accepted</span></li> */}
            </ul>
          </nav>
        </section>

        <section className="footer-section footer-legal" aria-labelledby="footer-legal-heading">
          <h2 id="footer-legal-heading" className="footer-heading">Legal &amp; Compliance</h2>
          <nav className="footer-nav footer-legal-nav" aria-label="Legal and compliance">
            <ul className="footer-links">
              <li><a href={footerConfig.links.privacyPolicy}>Privacy Policy</a></li>
              <li><a href={footerConfig.links.termsOfUse}>Terms of Use</a></li>
              <li><a href={footerConfig.links.accessibilityStatement}>Accessibility Statement (ADA)</a></li>
              <li><a href={footerConfig.links.nondiscriminationNotice}>Nondiscrimination Notice</a></li>
              <li><a href={footerConfig.links.noticeOfPrivacyPractices}>Notice of Privacy Practices (HIPAA)</a></li>
            </ul>
          </nav>
          <p className="footer-disclaimer">
            The information provided on this website is for general informational purposes only and is not intended as medical advice. Always consult your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
        </section>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {footerConfig.copyrightYear} Sammy Wu, MD. All rights reserved.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </footer>
  );
}

export default Footer;
