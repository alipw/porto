import React from 'react';
import './Projects.css';

// Project data - you can replace this with your actual projects
const projectsData = [
  {
    id: 1,
    title: 'High-Performance API Gateway',
    description: 'A scalable API gateway built with Node.js and TypeScript that handles 5M+ daily requests. Features include rate limiting, request validation, caching, and comprehensive logging.',
    tags: ['Node.js', 'TypeScript', 'Redis', 'Docker', 'Kubernetes'],
    imageUrl: 'https://placehold.co/600x400/6366f1/ffffff?text=API+Gateway',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 2,
    title: 'Distributed Task Scheduler',
    description: 'A robust task scheduling system designed for microservices architectures. Ensures reliable task execution with fault tolerance, retry mechanisms, and distributed locking.',
    tags: ['Go', 'PostgreSQL', 'RabbitMQ', 'gRPC', 'Prometheus'],
    imageUrl: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Task+Scheduler',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 3,
    title: 'Real-time Data Processing Pipeline',
    description: 'A high-throughput data processing system that handles streaming data with sub-second latency. Implements complex event processing and analytics on real-time data streams.',
    tags: ['Kafka', 'Java', 'Spring Boot', 'Elasticsearch', 'AWS'],
    imageUrl: 'https://placehold.co/600x400/ec4899/ffffff?text=Data+Pipeline',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 4,
    title: 'Algorithm Visualization Platform',
    description: 'An educational platform that visualizes complex algorithms and data structures. Built to help others learn competitive programming concepts through interactive demonstrations.',
    tags: ['React', 'TypeScript', 'D3.js', 'Algorithms', 'Data Structures'],
    imageUrl: 'https://placehold.co/600x400/10b981/ffffff?text=Algorithm+Viz',
    demoUrl: '#',
    codeUrl: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="section-underline"></div>
        </div>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
                <div className="project-links">
                  <a href={project.demoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.codeUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span className="project-tag" key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="center-button">
          <a href="https://github.com/yourusername" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 