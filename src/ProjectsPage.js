import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import {Box, Typography} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import Header from './Header'


function ProjectsPage() {
  return (
    <div>
      <Header></Header>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#F8D49B',
            padding: 2,
            borderRadius: 2,
            textAlign: 'center',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
        <Typography
            variant="h3"
            component="h1"
            align="center"
            sx = {{fontFamily: 'Courier'}}
          >
            Projects
          </Typography>
      </Box>
    </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: '1200px',
            mx: '20px',
            backgroundColor: '#F8BC9B',
            padding: 3,
            borderRadius: 5,
            textAlign: 'center',
            mt: '25px',
            alignItems: 'center',
          }}
        >
          <Typography variant='h4' sx={{fontFamily: 'Courier'}}>EMS Intervention App</Typography>
          <Typography variant='h6' sx={{fontFamily: 'Courier'}}>Wearable intervention for skin picking disorders</Typography>
          <Typography style={{textIndent: '2em', textAlign: 'left', marginTop: '15px', fontFamily: 'Courier' }}>As a researcher in the <b><a href="https://lab.plopes.org/" style={{textDecoration: 'none', color:'black'}}>Human Computer Integration Lab</a></b> at UChicago, I am working on a project to develop a novel electrical muscle stimulation (EMS) based intervention for skin picking and nail biting disorders. The detection is achieved via an Apple Watch application (Swift), and the intervention consists of a TENS unit with the electrodes placed on the arm. Once the skin picking behavior is detected, the EMS will be triggered, causing the hand to move away from the face and thereby interrupting the behavior.</Typography>
          <Typography style={{textIndent: '2em', textAlign: 'left', fontFamily: 'Courier'}}>I used Apple's CreateML Activity Classifier to train a model on face touching behavior using the built-in accelerometer and gyroscope. Once a face touch has been detected, the application updates rolling arrays of acceleromter data which is used to detect skin picking behavior. This prevents the intervention from being triggered unless necessary. Once the hand is no longer detected in a face touch position, the skin picking detection ends, and the activity classifier is reactivated.</Typography>
          <Typography style={{textIndent: '2em', textAlign: 'left', fontFamily: 'Courier'}}>The following video shows the Apple Watch detection mechanism. For the sake of the demonstration, the EMS is not used. Instead, the screen turns red when skin picking is detected.</Typography>
          <div style={{marginTop: '25px'}} className="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/Y5uAQzU1LWE?si=Fs5HmMQgxmaTeX-c" title="Youtube video" allowfullscreen/>
          </div>
        </Box>
        <Box
          sx={{
            maxWidth: '1200px',
            mx: '20px',
            backgroundColor: '#F89B9B',
            padding: 3,
            borderRadius: 5,
            textAlign: 'center',
            mt: '25px',
            alignItems: 'center',
          }}
        >
          <Typography variant='h4' sx={{fontFamily: 'Courier'}}>RhythEMS</Typography>
          <Typography variant='h6' sx={{fontFamily: 'Courier'}}>Wearable Drummstick 'Loop Pedal'</Typography>
          <Typography style={{textIndent: '2em', textAlign: 'left', marginTop: '15px', fontFamily: 'Courier' }}>As a final project for my Human Computer Interaction course, I worked with a partner to design and build a wearable device that allows the user to record a rhythm with a drumstick, and repeat this rhythm indefinitely with EMS. I wrote code in arduino to perform the hit detection (via an accelerometer attached to the end of the drumstick) and for the GUI (on an OLED display). I also designed a 3D printed wearable case for the components.</Typography>
          <Typography style={{textIndent: '2em', textAlign: 'left', fontFamily: 'Courier'}}>The user can interact with the device with three buttons: stop, record, and play. Once the user starts the recording, they can play any rhythm with the drumstick, and press stop. When the user presses play, two EMS electrodes on the forearm will cause the wrist to flex downward in the recorded rhythm, allowing the user to repeat the beat involuntarily. The following video shows the device in action.</Typography>
          <div style={{marginTop: '25px'}} className="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/A-OjZe4ul9s?si=7MGUCpn0DzEFMcjm" title="Youtube video" allowfullscreen></iframe>
          </div>
          <Typography style={{margin: '15px 0px', fontFamily: 'Courier'}}>For more information about the GUI and schematics, please see the following presentation.</Typography>
          <iframe
            src={'/RhythEMSPresentation.pdf'}
            type="application/pdf"
            width="60%"
            height="400px"
          />
        </Box>
        <Box
          sx={{
            maxWidth: '1200px',
            mx: '20px',
            backgroundColor: '#75BDE0',
            padding: 3,
            borderRadius: 5,
            textAlign: 'center',
            my: '25px',
            alignItems: 'center',
          }}
        >
          <Typography variant='h4' sx={{fontFamily: 'Courier'}}>Mobile Theremin</Typography>
          <Typography variant='h6' sx={{fontFamily: 'Courier'}}>iOS Theremin App</Typography>
          <Typography style={{textIndent: '2em', textAlign: 'left', marginTop: '15px', fontFamily: 'Courier' }}>In my Mobile Computing class, I worked with a group to design and develop an iPhone and Apple Watch App (Swift) that simulates the experience of using a Theremin. A Theremin is a musical instrument with one vertical and one horizontal metal component. The user controls the frequency (pitch) of the sound by moving closer or farther from the vertical component, and the volume by moving their other hand closer or farther from the horizontal component.</Typography>
          <Typography style={{textIndent: '2em', textAlign: 'left', fontFamily: 'Courier'}}>Our application requires the user to have an Apple Watch and an iPhone with faceID. The gyroscope on the Apple Watch allows the user to control the frequency by rotating their wrist, while the iPhone TrueDepth Camera allows the user to control the volume by moving their hand relative to the screen.</Typography>
          <Typography style={{textIndent: '2em', textAlign: 'left', fontFamily: 'Courier'}}>I was responsible for reading sensor values from the Apple Watch gyroscope, and sending this data to the paired iPhone in real time to be converted to a frequency value. I also wrote code to read and process data from the TrueDepth camera to control the sound volume. Learning to play a melody on the Mobile Theremin was perhaps the greatest challenge!</Typography>
        </Box>
      </div>
    </div>
  );
}

export default ProjectsPage;
