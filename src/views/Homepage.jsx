import React, { useState } from 'react';
import './Homepage.css';

const assets = '/home/';
const projects = [
  { name: 'Kitchen', icon: 'kitchen', href: 'https://kitchen.jamesgrantham.me', description: 'Recipes, shopping and Ferments' },
  { name: 'RC Garage', icon: 'garage' },
  { name: 'Music', icon: 'music' },
  { name: 'Aquarium', icon: 'aquarium' },
];

export default function Homepage() {
  const [notice, setNotice] = useState('');
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState('');
  async function sendMessage(event) {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true); setFeedback('');
    try {
      const response = await fetch(process.env.REACT_APP_CONTACT_ENDPOINT || 'https://jamesgrantham.herokuapp.com/sendmail', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.get('name'), email: data.get('email'), message: data.get('message') }),
      });
      if (!response.ok) throw new Error('Delivery failed');
      form.reset(); setFeedback('Your message has been sent. Thank you.');
    } catch (_) {
      setFeedback('Your message could not be sent. Please try again, or email jamesrgrantham@gmail.com.');
    } finally { setSending(false); }
  }
  return (
    <div className="jg-page">
      <a className="jg-skip" href="#main">Skip to content</a>
      <header className="jg-header">
        <a className="jg-brand" href="#"><span className="jg-monogram" aria-hidden="true">JG</span><span>James Grantham</span></a>
        <a href="#contact">Contact</a>
      </header>
      <main id="main">
        <section className="jg-intro" aria-labelledby="intro-title">
          <p className="jg-eyebrow">Risk management · Asset integrity · Project engineering</p>
          <div className="jg-hero">
            <div>
              <h1 id="intro-title">James Grantham</h1>
              <p className="jg-tagline">Engineer. Practical thinker. Maker.</p>
              <p className="jg-introduction">A British engineer based in Kuwait, with a background in oil and gas and a curiosity for making things work better.</p>
            </div>
            <img className="jg-workbench" src={assets + 'workbench.png'} alt="Engineering notebook, pencil and vernier caliper on a workbench" width="279" height="250" />
          </div>
        </section>
        <section className="jg-projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Personal projects</h2>
          <div className="jg-project-grid">
            {projects.map(project => {
              const content = <><img src={assets + project.icon + '.png'} alt="" width="76" height="68" /><span>{project.name}</span></>;
              return project.href ? <a key={project.name} href={project.href} title={project.description}>{content}</a> :
                <button key={project.name} type="button" onClick={() => setNotice(project.name)} aria-label={project.name + ' — project information'}>{content}</button>;
            })}
          </div>
          {notice && <div className="jg-notice" role="status"><span>{notice}: a destination has not been connected yet.</span><button type="button" onClick={() => setNotice('')} aria-label="Close project information">×</button></div>}
        </section>
        <section className="jg-background" aria-labelledby="experience-title">
          <h2 id="experience-title">Practical experience. Better ways of thinking.</h2>
          <p>My background is in hands-on oil and gas inspection, asset integrity and project engineering, including roles with Oceaneering and Lloyd’s Register. Offshore assignments have taken me to more than twenty North Sea platforms, from day visits to stays of two or three weeks.</p>
          <p>I identify the problem, define the requirements and design how the work and information should flow. I then build and test the software using AI-assisted development. My project engineering tool brings risk assessments, cost estimates and project records together, reducing repeated data entry and making decisions, expenditure and outstanding work easier to track.</p>
          <button className="jg-tool" type="button" onClick={() => setNotice('Project engineering tool')}>
            <img src={assets + 'engineering.png'} alt="" width="96" height="96" />
            <span><strong>Project engineering tool</strong><span>Risk, costing and project information brought together in one practical workspace.</span></span>
          </button>
        </section>
        <section className="jg-stories" aria-labelledby="stories-title">
          <h2 id="stories-title">Offshore recollections</h2>
          <p>Some trips began in Shetland, heading for installations closer to Norway than Scotland. I carried my passport in case a diversion took us to Norway instead of home.</p>
          <p>One visit was to a shut-down platform with no electrical power, equipped with radios and a satellite phone. The return helicopter flight brought a thunderstorm, gale-force winds and a low flight over the sea. It remains one of my more vivid memories of working offshore.</p>
          <p>Other work happened before an installation ever reached the sea. In Hartlepool, I inspected the Minerva platform’s helideck while it was still being fabricated.</p>
          <p className="jg-interests"><span>Outside work:</span> music, cooking, aquariums and making things.</p>
        </section>
        <section className="jg-contact" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Get in touch</h2>
          <form onSubmit={sendMessage}>
            <div className="jg-fields">
              <label>Name<input name="name" autoComplete="name" required maxLength="120" /></label>
              <label>Email<input name="email" type="email" autoComplete="email" required maxLength="254" /></label>
            </div>
            <label>Message<textarea name="message" rows="3" required maxLength="10000" /></label>
            <button className="jg-send" disabled={sending} type="submit">{sending ? 'Sending…' : 'Send message'}</button>
            <p className="jg-feedback" role="status">{feedback}</p>
          </form>
        </section>
      </main>
      <footer className="jg-footer">jamesgrantham.me</footer>
    </div>
  );
}
