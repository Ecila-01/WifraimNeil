import React, { useState } from 'react';
import './App.css';
import batasImg from './assets/projects/batas.png';
import ccsdImg from './assets/projects/ccsd.png';
import dripcheckImg from './assets/projects/dripcheck.png';

function App() {
  const [activeProject, setActiveProject] = useState(null);
  
  // 1. TOP-LEVEL STATE FOR THE TERMINAL CONTACT FORM
  const [formStatus, setFormStatus] = useState("IDLE"); // IDLE, SUBMITTING, SUCCESS, ERROR

  const projects = [
    {
      id: 'dripcheck',
      title: (
        <>
          <span>[ DripCheck ]</span>
          <span>Digital Closet & Outfit Planner</span>
        </>
      ),
      tech: 'React Native (Expo), Node.js, Express, MongoDB, Cloudinary, Resend API',
      shortDesc: 'A full-stack mobile solution to manage your digital wardrobe, coordinate daily styles, and track outfit metrics, originally developed as a senior university project.',
      longDesc: (
        <>
          <p><strong>Product Overview:</strong> DripCheck is a modern lifestyle and personal organization mobile app designed to digitize wardrobe management. Originally engineered as a comprehensive university mobile app project, the application solves the common daily dilemma of outfit planning by turning a user's physical clothing collection into a highly organized, searchable digital closet that keeps their daily style fresh.</p>
          <br />
          <p><strong>Core Capabilities:</strong></p>
          <ul style={{ paddingLeft: '1.2rem' }}>
            <li><strong>Smart Digital Closet:</strong> Enables users to instantly take photos of their clothing, crop them, and catalog them into clean, searchable categories. This media flow is driven by a seamless Cloudinary API integration for rapid image hosting.</li>
            <li><strong>Two-Factor Account Verification:</strong> Secures user authentication using traditional passwords fortified by mandatory One-Time Password (OTP) verification tokens sent via the Resend API during account registration and password recovery pipelines.</li>
            <li><strong>MERN Stack Performance:</strong> Built from the ground up utilizing an Express and Node.js REST API layer alongside a dynamic MongoDB database, ensuring the mobile interface loads user wardrobes instantly with zero lag.</li>
            <li><strong>Monorepo Ecosystem & Web Presence:</strong> Managed as a single, organized codebase containing the mobile application alongside a fully responsive promotional landing page built with React, Vite, and Tailwind CSS hosted on Vercel.</li>
          </ul>
        </>
      ),
      img: dripcheckImg,
      github: 'https://github.com/Ecila-01/DripCheck_MOBILE'
    },
    {
      id: 'ccsd',
      title: (
        <>
          <span>[ CCSD System ]</span>
          <span>Workflow Scheduling Hub</span>
        </>
      ),
      tech: 'React.js, Node.js, Express.js, MySQL, RESTful APIs, Git',
      shortDesc: 'A dual-portal administrative web platform featuring a comprehensive appointment scheduling system and real-time workflow management infrastructure.',
      longDesc: (
        <>
          <p><strong>Product Overview:</strong> The CCSD Appointment System is a dynamic web application engineered to streamline and centralize organizational scheduling operations. Built to eliminate manual booking bottlenecks and double-booking errors, this platform provides an interactive scheduling ecosystem that balances queue management, optimizes client routing, and registers system state changes securely in real time.</p>
          <br />
          <p><strong>Core Capabilities:</strong></p>
          <ul style={{ paddingLeft: '1.2rem' }}>
            <li><strong>Segregated Role Architecture:</strong> Features completely independent user and administrator portals, enforcing strict access controls and ensuring secure data boundaries based on administrative privileges.</li>
            <li><strong>Real-Time Workflow Orchestration:</strong> Equips system administrators with a comprehensive dashboard layout to monitor active appointments, update booking statuses, and manage daily operational workflows on the fly.</li>
            <li><strong>Interactive Schedule Management:</strong> Provides clients with a fluid interface to dynamically request, modify, or cancel time slots while strict backend validation rule checks automatically prevent resource conflicts.</li>
            <li><strong>Transactional Consistency:</strong> Backed by an optimized relational database schema handled via a secure Express API server, ensuring robust data modification logging and rapid response times for concurrent CRUD requests.</li>
          </ul>
        </>
      ),
      img: ccsdImg,
      github: 'https://github.com/Ecila-01/CCSD-System'
    },
    {
      id: 'batas',
      title: (
        <>
          <span>[ Batas AI ]</span>
          <span>Intelligent Ordinance Analysis Platform</span>
        </>
      ),
      tech: 'Python, LangChain, Node.js, Express, Qdrant Cloud, MongoDB Atlas, Docker',
      shortDesc: 'A production-ready Retrieval-Augmented Generation (RAG) platform built to index, search, and analyze local government ordinances using Gemini 2.5 Flash.',
      longDesc: (
        <>
          <p><strong>Product Overview:</strong> Batas AI is an intelligent legal analysis platform designed to simplify how citizens and local officials interact with municipal legislation. Recognizing that local government ordinances are often dense, scattered, or stuck in unsearchable scanned PDF formats, this application transforms raw legal documents into an interactive, conversational intelligence ecosystem.</p>
          <br />
          <p><strong>Core Capabilities:</strong></p>
          <ul style={{ paddingLeft: '1.2rem' }}>
            <li><strong>Universal Ordinance Search:</strong> Allows users to upload legal PDFs from any Philippine municipality and query them instantly through an intuitive chat interface, breaking down dense legal phrasing into plain text answers.</li>
            <li><strong>Intelligent Document Processing:</strong> Features an automated fallback system that reads clean digital text and heavily smudged or scanned paper documents with equal accuracy, ensuring older municipal records are completely accessible.</li>
            <li><strong>Verifiable Source Citations:</strong> Every single AI-generated answer includes interactive citation badges linked directly back to the exact section of the original official document, ensuring full legal transparency and preventing misinformation.</li>
            <li><strong>Context-Aware Intelligence:</strong> The system automatically flags specific ordinance numbers or context within user questions to prioritize the correct legal records, isolating data on a per-session basis to keep user inquiries private.</li>
          </ul>
        </>
      ),
      img: batasImg,
      github: 'https://github.com/Ecila-01/Batas-AI'
    },
  ];

  const closeModal = () => setActiveProject(null);

  // 2. CLEANLY ISOLATED ASYNCHRONOUS FORM SUBMISSION HANDLER
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("SUBMITTING");
    
    const form = e.target;
    const data = new FormData(form);
    
    data.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      
      const result = await response.json();
      
      if (result.success) {
        setFormStatus("SUCCESS");
        form.reset();
      } else {
        setFormStatus("ERROR");
      }
    } catch (error) {
      setFormStatus("ERROR");
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Player 1: Wifraim Neil San Miguel</h1>
        <p>Full-Stack Developer <span className="blink">_</span></p>
      </header>

      <main>
        {/* INVENTORY SECTION */}
        <section className="section">
          <h2>&gt; INVENTORY</h2>
          <ul className="inventory">
            <li><span className="bullet-arrow"></span> JavaScript</li>
            <li><span className="bullet-arrow"></span> Python</li>
            <li><span className="bullet-arrow"></span> Java</li>
            <li><span className="bullet-arrow"></span> PHP</li>
            <li><span className="bullet-arrow"></span> React.js / Native</li>
            <li><span className="bullet-arrow"></span> Node.js / Express</li>
            <li><span className="bullet-arrow"></span> Laravel</li>
            <li><span className="bullet-arrow"></span> Angular</li>
            <li><span className="bullet-arrow"></span> LangChain</li>
            <li><span className="bullet-arrow"></span> MongoDB</li>
            <li><span className="bullet-arrow"></span> MySQL</li>
            <li><span className="bullet-arrow"></span> Qdrant</li>
            <li><span className="bullet-arrow"></span> Cloudinary CDN</li>
            <li><span className="bullet-arrow"></span> Pandas / NumPy</li>
            <li><span className="bullet-arrow"></span> Matplotlib / Seaborn</li>
            <li><span className="bullet-arrow"></span> Docker</li>
            <li><span className="bullet-arrow"></span> Git</li>
          </ul>
        </section>


        {/* SAVE FILES SECTION */}
        <section className="section">
          <h2>&gt; SAVE FILES</h2>
          <div className="grid">
            {projects.map((proj) => (
              <div 
                key={proj.id} 
                className="card" 
                onClick={() => setActiveProject(proj)}
              >
                <h3>{proj.title}</h3>
                <p>{proj.shortDesc}</p>
                <br/>
                <p className="blink" style={{fontSize: '0.6rem', color: 'var(--text-dim)'}}>
                  [ CLICK TO INSPECT ]
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTINUE? (CONTACT) SECTION */}
        <section className="section">
          <h2>&gt; CONTINUE? (Contact)</h2>
          <div className="card">
            <p style={{ marginBottom: '1.5rem' }}>Ready to deploy me to your team?</p>
            
            {/* CONDITIONAL RENDERING REFACTOR BASED ON STATE STATE MACHINE */}
            {formStatus === "SUCCESS" ? (
              <div className="terminal-alert success-box">
                <h3>[ TRANSMISSION SUCCESSFUL ]</h3>
                <br />
                <p className="blink">&gt; DATA RECEIVED BY PLAYER 1.</p>
                <p>&gt; ENCRYPTED SIGNAL SENT TO INBOX.</p>
                <br />
                <button 
                  onClick={() => setFormStatus("IDLE")} 
                  className="form-submit-btn" 
                  style={{ width: 'auto', padding: '0.5rem 1rem' }}
                >
                  [ SEND ANOTHER MESSAGE ]
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleFormSubmit}
                action="https://api.web3forms.com/submit" 
                method="POST"
                className="terminal-form"
              >
                <div className="form-group">
                  <label>&gt; INPUT_NAME:</label>
                  <input type="text" name="name" required placeholder="PLAYER 2" disabled={formStatus === "SUBMITTING"} />
                </div>

                <div className="form-group">
                  <label>&gt; INPUT_EMAIL:</label>
                  <input type="email" name="email" required placeholder="PLAYER2@PLAY.COM" disabled={formStatus === "SUBMITTING"} />
                </div>

                <div className="form-group">
                  <label>&gt; INPUT_MESSAGE:</label>
                  <textarea name="message" required rows="4" placeholder="ENTER MISSION DETAILS..." disabled={formStatus === "SUBMITTING"}></textarea>
                </div>

                <button type="submit" className="form-submit-btn" disabled={formStatus === "SUBMITTING"}>
                  {formStatus === "SUBMITTING" ? "[ TRANSMITTING... ]" : "[ TRANSMIT MESSAGE ]"}
                </button>

                {formStatus === "ERROR" && (
                  <p style={{ color: 'var(--accent)', fontSize: '0.65rem', marginTop: '1rem', textAlign: 'center' }}>
                    &gt; ERROR: TRANSMISSION FAILED. PLEASE TRY AGAIN.
                  </p>
                )}
              </form>
            )}

            <div className="contact-links" style={{ marginTop: '2rem', borderTop: '1px dashed var(--text-dim)', paddingTop: '1.5rem' }}>
              <p>Direct Link: <a href="mailto:wiporamirez.01@gmail.com">wiporamirez.01@gmail.com</a></p>
              <p>GitHub: <a href="https://github.com/Ecila-01" target="_blank" rel="noreferrer">github.com/Ecila-01</a></p>
            </div>
          </div>
        </section>
      </main>

      {/* MODAL OVERLAY PORTAL */}
      {activeProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>X</button>
            
            <h3>{activeProject.title}</h3>
            <span className="modal-tech">Tech Stack // {activeProject.tech}</span>
            
            <div className="modal-body">
              <div className="modal-left">
                {activeProject.img && (
                  <div className="crt-image-wrapper">
                    <img 
                      src={activeProject.img} 
                      alt={`${activeProject.title} screenshot`} 
                      className="retro-screenshot" 
                    />
                  </div>
                )}
              </div>

              <div className="modal-right">
                <div className="modal-desc">
                  {activeProject.longDesc}
                </div>
                
                {activeProject.github && (
                  <div style={{ marginTop: 'auto', paddingTop: '1.5rem', width: '100%' }}>
                    <a 
                      href={activeProject.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="repo-link-btn"
                    >
                      [ ACCESS SOURCE CODE ]
                    </a>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default App;