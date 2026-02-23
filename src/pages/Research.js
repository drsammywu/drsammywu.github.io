import './Page.css';

function Research() {
  return (
    <main className="page">
      <section className="page-content">
        <h1>Research</h1>
        <p>
          Dr. Wu’s research focuses on rehabilitation interventions for cancer patients, including the impact of bracing on posture, pain, and function, and the role of rehabilitation in palliative care.
        </p>

        <h2 className="section-title">Publications</h2>
        <ul className="research-list">
          <li>
            Wu S, Emos MR, Chang P, et al. The Importance of Rehab in Treating Cancer and Palliative Care Patients. <em>Curr Phys Med Rehabil Rep</em> 13, 17 (2025).{' '}
            <a href="https://doi.org/10.1007/s40141-025-00489-3" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/s40141-025-00489-3</a>
          </li>
          <li>
            Wu S, De Vries K, Millán IS, Syrkin G. Comparing apples to oranges: Bringing basic physics to the bedside. <em>PM&amp;R: The Journal of Injury, Function and Rehabilitation</em>. 2024;16:1052-1055.{' '}
            <a href="https://doi.org/10.1002/pmrj.13135" target="_blank" rel="noopener noreferrer">https://doi.org/10.1002/pmrj.13135</a>
          </li>
          <li>
            Chowdhury N, Wu S. Lower extremity disorders in cancer. In: Stubblefield MD, ed. <em>Cancer Rehabilitation: Principles and Practice</em>. 3rd ed. New York, NY: Demos Medical Publishing; 2025:623-633.
          </li>
          <li>
            Chang P, Wu S, Emos MR. Identification, Evaluation, and Management of Post-breast Surgery Pain Syndrome. <em>Curr Phys Med Rehabil Rep</em> (2024).{' '}
            <a href="https://doi.org/10.1007/s40141-024-00438-6" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/s40141-024-00438-6</a>
          </li>
        </ul>

        <h2 className="section-title">Presentations</h2>
        <ul className="research-list">
          <li>Wu S, Vemulapally V, Isidro T. “Newly Diagnosed Multiple Myeloma Presenting as Lumbar Radiculitis.”</li>
          <li>Wu S, Beckley A, Orosa R, Gonzalez B. “Early Utilization of Tumor Treating Fields Therapy with Temozolomide and Radiation Therapy for Newly Diagnosed Glioblastoma.”</li>
          <li>Wu S, de Vries K, Syrkin G, Custodio C, Lin C. “Metastatic Bladder Cancer with Lesions to Bilateral Hips and Thoracic Spinal Cord Compression.”</li>
          <li>Wu S, Reilly J, Paul C. “A Striking Presentation of Post-Viral Myositis in an Immunocompromised Cancer Patient.”</li>
        </ul>
      </section>
    </main>
  );
}

export default Research;
