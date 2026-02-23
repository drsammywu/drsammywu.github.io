import './Page.css';

function MakeAppointment() {
  return (
    <main className="page">
      <section className="page-content">
        <h1>Make an Appointment</h1>
        <p>
          To schedule an appointment with Dr. Sammy Wu, please use the information below and call the office directly.
        </p>
        <div className="contact-block">
          <h2 className="contact-block-heading">Burke Outpatient Physician Practice</h2>
          <p className="contact-address">
            785 Mamaroneck Avenue<br />
            Building 4, 1st Floor<br />
            White Plains, NY 10605
          </p>
          <p><strong>Main:</strong> <a href="tel:+19145972332">(914) 597-2332</a></p>
          <p><strong>Fax:</strong> (914) 597-2794</p>

          <p>
            For more information and to view Dr. Wu’s profile, visit:{' '}
            <a href="https://www.burke.org/find-a-doctor/profile/sammy-wu/" target="_blank" rel="noopener noreferrer">
              Burke Rehabilitation — Find a Doctor: Sammy Wu
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default MakeAppointment;
