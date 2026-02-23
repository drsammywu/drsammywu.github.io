import { useState } from 'react';
import './Page.css';

const experience = [
  {
    title: 'Director of Cancer Rehabilitation Medicine',
    organization: 'Burke Rehabilitation',
    logo: 'burke-logo.png',
    type: 'Full-time',
    dates: 'September 2025 – Present',
    duration: '6 months',
    location: 'Burke Rehabilitation Hospital / White Plains Hospital Center for Cancer Care',
    detail: 'Assistant Professor of Physical Medicine & Rehabilitation at Albert Einstein College of Medicine, Montefiore Health System',
  },
  {
    title: 'Fellow',
    organization: 'Memorial Sloan Kettering Cancer Center',
    logo: 'msk-logo.png',
    dates: 'July 2024 – June 2025',
    duration: '1 year',
    detail: 'Cancer Rehabilitation Fellowship',
  },
  {
    title: 'Resident',
    organization: 'NewYork-Presbyterian Hospital',
    logo: 'nyp-logo.png',
    dates: 'July 2021 – June 2024',
    duration: '3 years',
    location: 'Columbia/Cornell',
    detail: 'Physical Medicine and Rehabilitation',
  },
  {
    title: 'Resident',
    organization: 'Lenox Hill Hospital',
    logo: 'lenox-hill-logo.png',
    dates: 'June 2020 – June 2021',
    duration: '1 year 1 month',
    detail: 'Internal Medicine – Preliminary Year',
  },
];

const doctorPhotoPath = `${process.env.PUBLIC_URL}/images/dr-wu.jpeg`;

function About() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <main className="page">
      <section className="page-content">
        <h1>About Dr. Sammy Wu</h1>

        <div className="about-intro">
          <div className="about-photo-wrap">
            {!photoError ? (
              <img
                src={doctorPhotoPath}
                alt="Dr. Sammy Wu"
                className="about-photo"
                onError={() => setPhotoError(true)}
              />
            ) : (
              <div className="about-photo-placeholder" aria-hidden="true">
                <span className="about-photo-placeholder-text">Your photo here</span>
                <span className="about-photo-placeholder-hint">Add <code>images/dr-wu.jpeg</code> in the <code>public</code> folder</span>
              </div>
            )}
          </div>
          <div className="about-intro-text">
            <p><strong>Dr. Sammy Wu</strong> is a physician specializing in <strong>Physical Medicine and Rehabilitation</strong>, with a focus on <strong>cancer rehabilitation</strong>. He is <strong>Director of Cancer Rehabilitation Medicine at Burke Rehabilitation</strong> and <strong>Assistant Professor of PM&R at Albert Einstein College of Medicine</strong>, dedicated to improving functional outcomes and quality of life for patients during and after cancer treatment.</p>
          </div>
        </div>
        <p className="about-intro-after">Dr. Wu completed his <strong>Cancer Rehabilitation Fellowship at Memorial Sloan Kettering Cancer Center</strong> and his <strong>PM&R residency at NewYork-Presbyterian Hospital (Columbia/Cornell)</strong>, with clinical experience at <strong>Columbia University Irving Medical Center, Weill Cornell Medicine, Hospital for Special Surgery</strong>, and other leading institutions. He completed his <strong>Internal Medicine internship at Northwell Health – Lenox Hill Hospital</strong>.</p>

        <p>A graduate of <strong>Albert Einstein College of Medicine</strong>, Dr. Wu earned his <strong>Doctor of Medicine</strong> with <em>Distinction in Research in Clinical Investigation</em> and a <strong>Bachelor of Science in Integrative Neuroscience, Magna Cum Laude, from Binghamton University</strong>. His research focuses on <strong>rehabilitation interventions for cancer patients</strong>, including bracing for posture, pain, and function, and the role of rehabilitation in palliative care. His work has been published in <em>PM&R</em> and <em>Current Physical Medicine and Rehabilitation Reports</em>.</p>
        <p>He is actively involved in <strong>mentorship, medical education, and leadership</strong>, including the <strong>American Academy of PM&R Cancer Rehabilitation Physician Consortium</strong>, where he organizes educational panels for trainees, and has presented at national conferences on cancer rehabilitation, post-mastectomy pain, and assessment in physical medicine.</p>

        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((item, index) => (
            <article key={index} className="timeline-item">
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="timeline-logo-wrap">
                    <span className="timeline-logo-fallback" aria-hidden="true">
                      {item.organization.charAt(0)}
                    </span>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/experience/${item.logo}`}
                      alt=""
                      className="timeline-logo"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <div className="timeline-card-header-text">
                    <h3 className="timeline-title">{item.title}</h3>
                    <span className="timeline-org">{item.organization}</span>
                  </div>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-dates">{item.dates}</span>
                  {item.duration && (
                    <span className="timeline-duration"> · {item.duration}</span>
                  )}
                </div>
                {/* {item.type && (
                  <p className="timeline-type">{item.type}</p>
                )} */}
                {item.location && (
                  <p className="timeline-location">{item.location}</p>
                )}
                {item.detail && (
                  <p className="timeline-detail">{item.detail}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="page-contact"><strong>Contact:</strong> <a href="mailto:drsammywu@gmail.com">drsammywu@gmail.com</a></p>
      </section>
    </main>
  );
}

export default About;
