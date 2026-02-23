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
        <h2 className="contact-block-heading">White Plains Hospital</h2>
          <p className="contact-address">
          WPH at Cancer Rehabilitation Medicine<br/>
          2 Longview Avenue<br/>
          White Plains, New York 10601
          </p>
          <br></br>
          <h2 className="contact-block-heading">Burke Outpatient Physician Practice</h2>
          <p className="contact-address">
            785 Mamaroneck Avenue<br />
            Building 4, 1st Floor<br />
            White Plains, NY 10605
          </p>
          <p><strong>Main:</strong> <a href="tel:+19145972332">(914) 597-2332</a></p>
          <p><strong>Fax:</strong> (914) 597-2794</p>

          <p>
            For more information, view Dr. Wu's profile on {' '}
            <a href="https://www.burke.org/find-a-doctor/profile/sammy-wu/" target="_blank" rel="noopener noreferrer">
              Burke Rehabilitation
            </a>&nbsp;or&nbsp; 
            <a href="https://doctors.wphospital.org/providers/1174150247/sammy-wu" target="_blank" rel="noopener noreferrer">
              White Plains Hospital
            </a> 
            .
          </p>
        </div>
      </section>
    </main>
  );
}

export default MakeAppointment;
