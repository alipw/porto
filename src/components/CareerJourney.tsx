import React from 'react';
import './CareerJourney.css';

const CareerJourney: React.FC = () => {
  const careerMilestones = [
    {
      year: '2023 - Present',
      role: 'Senior Backend Engineer',
      company: 'Tech Innovations Inc.',
      description: 'Leading the development of highly scalable microservices architecture. Optimized system performance and reduced latency by 40%. Mentoring junior developers and establishing best practices for the backend team.'
    },
    {
      year: '2020 - 2023',
      role: 'Backend Developer',
      company: 'DataFlow Systems',
      description: 'Designed and implemented efficient monolith applications with a focus on security and performance. Reduced database query times by 60% through optimization techniques. Collaborated with cross-functional teams to deliver complex features.'
    },
    {
      year: '2018 - 2020',
      role: 'Full-Stack Developer',
      company: 'WebSolutions Co.',
      description: 'Developed full-stack applications with a growing focus on backend technologies. Implemented RESTful APIs and database schemas. Participated in code reviews and contributed to architectural decisions.'
    },
    {
      year: '2016 - 2018',
      role: 'Junior Developer',
      company: 'StartUp Innovations',
      description: 'Started career working on various aspects of web development. Discovered passion for backend development and system architecture. Participated in competitive programming contests to enhance problem-solving skills.'
    }
  ];

  return (
    <section id="career" className="career-journey section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Career Journey</h2>
          <div className="section-underline"></div>
        </div>
        
        <div className="timeline">
          {careerMilestones.map((milestone, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-year">{milestone.year}</div>
                <h3 className="timeline-role">{milestone.role}</h3>
                <h4 className="timeline-company">{milestone.company}</h4>
                <p className="timeline-description">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="career-highlights">
          <h3>Career Highlights</h3>
          <ul>
            <li>Designed and implemented a high-performance backend system that handles 10M+ daily requests</li>
            <li>Reduced infrastructure costs by 35% through efficient code optimization</li>
            <li>Achieved top 5% ranking in several international competitive programming contests</li>
            <li>Mentored 15+ junior developers who have gone on to successful careers</li>
            <li>Contributed to open-source projects focused on backend performance optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CareerJourney; 