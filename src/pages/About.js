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
            <p><strong>Sammy Wu, MD</strong> is a board-certified physician in <strong>Physical Medicine &amp; Rehabilitation</strong> who specializes in <strong>Cancer Rehabilitation</strong>. He is the Director of Cancer Rehabilitation Medicine at the Burke Outpatient Physician Practice and an Assistant Professor of Physical Medicine and Rehabilitation at Albert Einstein College of Medicine.</p>
          </div>
        </div>
        <p className="about-intro-after">Dr. Wu’s clinical focus is in neuromusculoskeletal medicine and evaluating cancer patients who have physical impairments and/or disabilities related to their cancer or their treatments. These impairments can include neuropathy, musculoskeletal disorders, cancer-related fatigue, gait difficulty, lymphedema, trismus, spasticity, spinal cord injury, brain injury, and amputation among other conditions. Dr. Wu’s goals are to improve function (strength, endurance, mobility, range of motion), improve quality of life, and manage pain for cancer patients so that they can return to the hobbies/activities that they love best. Dr. Wu believes in collaborative and comprehensive cancer care. He works closely with oncologists, physical, occupational, speech, and lymphedema therapists, and supportive care services (acupuncture, nutrition, palliative care) to create a holistic rehabilitation plan. When indicated, Dr. Wu may incorporate medications, bracing, or ultrasound-guided injections as part of the treatment plan.</p>

        <p>Dr. Wu treats patients throughout their cancer journey, whether it is creating a rehabilitation exercise plan to optimize strength before cancer treatment (chemotherapy, immunotherapy, radiation therapy, surgery, bone marrow transplantation) or optimizing function during survivorship.</p>

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

        <p className="page-contact"><strong>Contact:</strong> <a href="tel:+19145972332">(914) 597-2332</a></p>
      </section>
    </main>
  );
}

export default About;
