import './Page.css';

function MakeAppointment() {
  return (
    <main className="page">
      <section className="page-content">
        <h1>Make an Appointment</h1>
        <p>
          To schedule an appointment with Dr. Sammy Wu, please use the contact information below. This page can later include a form or link to your practice’s scheduling system.
        </p>
        <div className="contact-block">
          <p><strong>Email:</strong> <a href="mailto:drsammywu@gmail.com">drsammywu@gmail.com</a></p>
          <p>Include your name, preferred contact method, and brief reason for the visit.</p>
        </div>
      </section>
    </main>
  );
}

export default MakeAppointment;
