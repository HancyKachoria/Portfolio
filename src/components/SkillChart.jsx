import React from 'react';

function SkillChart({ skills }) {
  return (
    <div className="skill-chart">
      {skills.map((skill) => (
        <div key={skill.name} className="skill-bar">
          <span className="skill-name">{skill.name}</span>
          <div className="bar-bg">
            <div className="bar-fill" style={{ width: skill.level + '%' }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillChart; 