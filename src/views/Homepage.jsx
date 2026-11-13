import React from 'react';
import './Homepage.css';

const assets = '/home/';
const projects = [
  { name: 'Kitchen', icon: 'kitchen', href: 'https://kitchen.jamesgrantham.me', description: 'Recipes, shopping and Ferments' },
  { name: 'RC Garage', icon: 'garage', href: 'https://garage.jamesgrantham.me' },
  { name: 'Music', icon: 'music', href: 'https://music.jamesgrantham.me' },
  { name: 'Aquarium', icon: 'aquarium', href: 'https://aquarium.jamesgrantham.me' },
];

export default function Homepage() {
  return (
    <div className="jg-page">
      <a className="jg-skip" href="#main">Skip to content</a>
      <header className="jg-header">
        <p className="jg-specialisms"><span>Change Management<span className="jg-separator"> · </span></span><span>Asset Integrity<span className="jg-separator"> · </span></span><span>Project Engineering</span></p>
        <a className="jg-contact-link" href="#contact">Contact</a>
      </header>
      <main id="main">
        <section className="jg-intro" aria-labelledby="intro-title">
          <div className="jg-hero">
            <div>
              <h1 id="intro-title">James Grantham</h1>
              <p className="jg-tagline">Engineer. Practical thinker. Maker.</p>
              <p className="jg-introduction">Twenty years in engineering taught me how to solve problems in the real world. These days, I also build software to solve them.</p>
            </div>
            <img className="jg-workbench" src={assets + 'workbench.png'} alt="Engineering notebook, pencil and vernier caliper on a workbench" width="279" height="250" />
          </div>
        </section>
        <section className="jg-projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Personal projects</h2>
          <p className="jg-project-description">From personal schedules to RC car maintenance, these are small applications built to make everyday activities simpler. Each is an opportunity to explore an idea, test an approach and create something genuinely useful.</p>
          <div className="jg-project-grid">
            {projects.map(project => {
              const content = <><img src={assets + project.icon + '.png'} alt="" width="76" height="76" /><span>{project.name}</span></>;
              return <a key={project.name} href={project.href} title={project.description}>{content}</a>;
            })}
          </div>
        </section>
        <section className="jg-background" aria-labelledby="experience-title">
          <h2 id="experience-title"><span>Practical experience</span>{' '}<span>Better ways of thinking</span></h2>
          <p>My career has taken me from engineering offices and fabrication yards to more than twenty offshore installations in the North Sea. Working with Oceaneering and Lloyd's Register, I specialised in inspection, asset integrity and project engineering, where sound decisions depend on understanding risk, managing information and getting the details right.</p>
          <p>That experience now shapes how I approach software. Rather than starting with technology, I start with the problem: what needs to happen, what information matters and how the process could work better.</p>
        </section>
        <section className="jg-background" aria-labelledby="tool-title">
          <h2 id="tool-title">Project management tool</h2>
          <p className="jg-section-subtitle"><strong>Engineering experience turned into practical software.</strong></p>
          <p>Managing engineering projects involves a constant flow of estimates, risk assessments, decisions and outstanding work. Too often, the same information is entered repeatedly into disconnected documents and spreadsheets.</p>
          <p>I began developing a project management application to bring those activities into one place, making information easier to maintain, progress easier to follow and decisions easier to make.</p>
          <a className="jg-tool" href="https://projects.jamesgrantham.me">
            <img src={assets + 'engineering.png'} alt="" width="96" height="96" />
            <span><strong>Project management tool</strong></span>
          </a>
        </section>
        <section className="jg-stories" aria-labelledby="stories-title">
          <h2 id="stories-title">Offshore recollections</h2>
          <p className="jg-section-subtitle"><strong>Twenty platforms. Plenty of stories.</strong></p>
          <p>Flights from Shetland sometimes took us closer to Norway than Scotland, with a passport carried in case the weather sent us somewhere other than home.</p>
          <p>One assignment took me to a shut-down platform without electrical power, relying on radios and a satellite phone. The return helicopter flight, through thunderstorms and gale-force winds, ended with a low flight over rough seas.</p>
          <p>Not every assignment involved helicopters. In Hartlepool, I inspected the Minerva platform's helideck while it was still being fabricated, long before the platform went offshore.</p>
        </section>
        <section className="jg-contact" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Get in touch</h2>
          <a className="jg-email" href="mailto:jamesrgrantham@gmail.com">jamesrgrantham@gmail.com</a>
        </section>
      </main>
    </div>
  );
}
