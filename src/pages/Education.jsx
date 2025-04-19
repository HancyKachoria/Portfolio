import React from 'react';

function Education() {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        <div className="education-item">
          <h3>University of Texas at Arlington</h3>
          <p>Bachelor of Science in Biology (Pre-Med Track), Freshman</p>
          <ul>
            <li>Relevant Coursework: Genetics, Cell Biology, Chemistry, Anatomy & Physiology</li>
            <li>Projects: DNA Extraction Lab, Human Body Model Project</li>
          </ul>
        </div>
        <div className="education-item">
          <h3>Nirma University (Research Assistant)</h3>
          <p>Research experience in genetics and laboratory techniques</p>
        </div>
      </div>
    </section>
  );
}

export default Education; 