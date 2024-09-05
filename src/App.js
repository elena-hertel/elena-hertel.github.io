import React from 'react';
import './App.css';
import './index.css';
import { Link } from 'react-router-dom';
import { Routes, Route, useNavigate} from "react-router-dom";
import WorkExperiencePage from './WorkExperiencePage';
import ProjectsPage from './ProjectsPage';
import Header from './Header'
import ResumePage from './ResumePage'
import InterestsPage from './InterestsPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function Home() {
  let navigate =useNavigate();

  return (
      <div
        className="App"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          boxSizing: 'border-box',
          paddingBottom: '25px'
        }}
      >
        <Header/>

        {isMobile && (
          <p style={{ 
            textAlign: 'center', 
            fontFamily: 'Courier', 
            fontSize: 'clamp(12px, 1.5vw, 20px)', 
            color: '#FF0000',
            marginTop: '10px' 
          }}>
            For best experience, view on Desktop. Mobile version coming soon.
          </p>
        )}
        
        <svg
          viewBox="0 0 100 100"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: '-1',
            overflow: 'visible',
            width: '100vw',
            height: '100vh'
          }}
        >
          <circle cx="0" cy="15" r="50" fill="#F8D49B" />
          <circle cx="130" cy="125" r="50" fill="#F89B9B" />
        </svg>
        <div 
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            margin: '25px',
            flex: 1
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              maxWidth: '50vw'
            }}
          >
            <h1 style={{ fontFamily: 'Courier', fontSize: '6vw', textAlign: 'left'}}>
              Hi, I'm Elena
            </h1>
            <h4 style={{fontFamily: 'Courier', fontSize: 'clamp(17px, 1.7vw, 25px)', textAlign: 'left', marginTop: '10vh'}}>
              I recently graduated from the University of Chicago, with a double major in Computer Science and Biology.
            </h4>
            <h4 style={{fontFamily: 'Courier', fontSize: 'clamp(17px, 1.7vw, 25px)', textAlign: 'left', marginTop: '3vh'}}>
              I am currently working in the <b><a href="https://lab.plopes.org/" style={{textDecoration: 'none', color: "#75BDE0"}}> Human Computer Integration Lab </a></b> under Pedro Lopes. I am working on a <b><button style={{all: 'unset', color: "#75BDE0", cursor: 'pointer'}} onClick={() => navigate('/projects')}>project</button></b> involving electrical muscle stimulation (EMS) as an intervention mechanism for dermatillomania.
            </h4>
            <h4 style={{fontFamily: 'Courier', fontSize: 'clamp(17px, 1.7vw, 25px)', textAlign: 'left', marginTop: '3vh'}}>
              When I am not working, I <b><button style={{all: 'unset', color: "#75BDE0", cursor: 'pointer'}} onClick={() => navigate('/interests')}>enjoy</button></b> spending time outdoors, cooking, and crocheting.
            </h4>
          </div>
          <img src={'/headshot.png'} style={{borderRadius: '50%', width: '30vw', height: '30vw', marginRight: '30px'}}/>
        </div>
        <div
          style={{
            display: 'flex',
            width: '100vw',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            padding: '0px 25px',
          }}
        >
          <h6 style={{fontFamily: 'Courier', fontSize: 'clamp(12px, 1vw, 20px)'}}>
            Website designed and built by Elena Hertel using React.js
          </h6>
          <div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <FontAwesomeIcon icon={faEnvelope} size="1.8x" style={{marginRight:'20px'}}/>
              <img src={'/email.png'} style={{width: '18vw', margin: 0, padding: '25px 0px'}}/>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <FontAwesomeIcon icon={faPhone} size="1.8x" style={{marginRight:'20px'}}/>
              <img src={'/number.png'} style={{width: '11vw', margin:0}}/>
            </div>
          </div>
        </div>
      </div>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work-experience" element={<WorkExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/interests" element={<InterestsPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </div>
  );
}

export default App;
