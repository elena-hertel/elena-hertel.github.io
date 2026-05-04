import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {Box, Typography} from '@mui/material';
import Header from './Header'

function WorkExperiencePage() {
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
            Work Experience
          </Typography>
        </Box>
      </div>
      <Timeline position="alternate-reverse">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', fontFamily: 'Courier', fontSize: '18px' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            September 2024 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ backgroundColor: '#F89B9B', width: 10, height: 10}}/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Box
              sx={{
                padding: 2,
                borderRadius: 2,
                border: '3px solid',
                borderColor: '#F8BC9B',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" component="span" sx={{ fontFamily: 'Courier' }}>
                Morningstar
              </Typography>
              <Typography sx={{ fontFamily: 'Courier', fontStyle: 'italic' }}>Associate Software Engineer</Typography>
              <Typography sx={{ fontFamily: 'Courier', fontStyle: 'italic' }} color="text.secondary">Chicago, IL</Typography>
              <ul style={{ marginTop: '10px', fontFamily: 'Courier', color: 'rgba(0, 0, 0, 0.6)', paddingLeft: '20px' }}>
                <li>Working as a full-stack engineer on the Direct Advisory Suite Architecture team, building internal and client-facing AI applications used by financial advisors.</li>
                <li>Designing and building an internal AI-driven support automation system using LangGraph and MCP tools, integrating with Jira to accelerate L1–L3 ticket resolution and reduce manual triage.</li>
                <li>Owned improvements to a production RAG-based chatbot, increasing answer quality by ~20% through custom retrieval pipelines, prompt design, and automated evaluation, while balancing latency and reliability constraints.</li>
                <li>Wrote and maintained custom data ingestion pipelines to keep AI systems synchronized with evolving product documentation, ensuring freshness, traceability, and consistent behavior in production.</li>
                <li>Designed and implemented an internal AI-assisted performance review tool, working closely with People &amp; Culture and Legal teams to define compliant workflows and structured evaluation outputs.</li>
                <li>Built a reusable, JSON schema-driven form framework for chat-based AI interfaces, enabling structured user input and extending a previously chat-only platform for broader internal use.</li>
              </ul>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', fontFamily: 'Courier', fontSize: '18px' }}
            variant="body2"
            color="text.secondary"
          >
            February 2024 - December 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ backgroundColor: '#F89B9B', width: 10, height: 10}}/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Box
              sx={{
                padding: 2,
                borderRadius: 2,
                border: '3px solid',
                borderColor: '#F8BC9B',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" component="span" sx={{ fontFamily: 'Courier' }}>
                Human Computer Integration Lab, University of Chicago
              </Typography>
              <Typography sx={{ fontFamily: 'Courier', fontStyle: 'italic' }}>Researcher - Part-time</Typography>
              <Typography sx={{ fontFamily: 'Courier', fontStyle: 'italic' }} color="text.secondary">Chicago, IL</Typography>
              <ul style={{ marginTop: '10px', fontFamily: 'Courier', color: 'rgba(0, 0, 0, 0.6)', paddingLeft: '20px' }}>
                <li>Built an Apple Watch application in Swift to detect and classify habitual user behaviors using accelerometer and gyroscope data.</li>
                <li>Implemented data processing pipelines and trained activity classification models for future user studies.</li>
              </ul>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', fontFamily: 'Courier', fontSize: '18px' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            June 2023 - August 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ backgroundColor: '#F89B9B', width: 10, height: 10}}/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Box
                sx={{
                  padding: 2,
                  borderRadius: 2,
                  border: '3px solid',
                  borderColor: '#F8BC9B',
                  alignItems: 'center',
                }}
              >
              <Typography variant="h6" component="span" sx = {{fontFamily: 'Courier'}}>
                Hamilton Insurance Group
              </Typography>
              <Typography sx = {{fontFamily: 'Courier', fontStyle: 'italic'}}>Software Development Intern</Typography>
              <Typography color="text.secondary" style={{ marginTop: '15px', fontFamily: 'Courier' }}>
                Worked as full-stack developer on the AI development team. Facilitated implementation of GPT language model to expedite insurance submission processing. Created and modified web components in ReactJS; wrote component tests for deployment pipeline. Wrote functions for document pre-processing and corresponding unit tests in Python.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', fontFamily: 'Courier', fontSize: '18px'  }}
            variant="body2"
            color="text.secondary"
          >
            September 2022 - June 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ backgroundColor: '#F89B9B', width: 10, height: 10}}/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Box
              sx={{
                padding: 2,
                borderRadius: 2,
                border: '3px solid',
                borderColor: '#F8BC9B',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" component="span" sx = {{fontFamily: 'Courier'}}>
                Blinklab
              </Typography>
              <Typography sx = {{fontFamily: 'Courier', fontStyle: 'italic'}}>Clinical Research Associate</Typography>
              <Typography color="text.secondary" style={{ marginTop: '15px', fontFamily: 'Courier' }}>
                Worked for biotech startup utilizing smartphone technology to diagnose and monitor neurological conditions. Performed data collection, normalization, and analysis in R
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', fontFamily: 'Courier', fontSize: '18px'  }}
            variant="body2"
            color="text.secondary"
          >
            June 2022 - September 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ backgroundColor: '#F89B9B', width: 10, height: 10}}/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Box
              sx={{
                padding: 2,
                borderRadius: 2,
                border: '3px solid',
                borderColor: '#F8BC9B',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" component="span" sx = {{fontFamily: 'Courier'}}>
                Janssen Pharmaceuticals (Johnson & Johnson)
              </Typography>
              <Typography sx = {{fontFamily: 'Courier', fontStyle: 'italic'}}>Quality Control Intern</Typography>
              <Typography color="text.secondary" style={{ marginTop: '15px', fontFamily: 'Courier' }}>
                Assisted in execution and documentation of company’s first virtual audit. Designed and developed QR Code PowerApp system to track issuance, location, and archiving of data logbooks.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', fontFamily: 'Courier', fontSize: '18px'  }}
            variant="body2"
            color="text.secondary"
          >
            June 2021 - September 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ backgroundColor: '#F89B9B', width: 10, height: 10}}/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Box
              sx={{
                padding: 2,
                borderRadius: 2,
                border: '3px solid',
                borderColor: '#F8BC9B',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" component="span" sx = {{fontFamily: 'Courier'}}>
                Generation Biotech & Neuropair
              </Typography>
              <Typography sx = {{fontFamily: 'Courier', fontStyle: 'italic'}}>Laboratory Intern</Typography>
              <Typography color="text.secondary" style={{ marginTop: '15px', fontFamily: 'Courier' }}>
                Worked directly with Founder/CEO and Chief Scientist. Designed and executed experiments related to novel DNA sequencing technology and spinal cord repair.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', fontFamily: 'Courier', fontSize: '18px'  }}
            variant="body2"
            color="text.secondary"
          >
            September 2019 - December 2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ backgroundColor: '#F89B9B', width: 10, height: 10}}/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Box
              sx={{
                padding: 2,
                borderRadius: 2,
                border: '3px solid',
                borderColor: '#F8BC9B',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" component="span" sx = {{fontFamily: 'Courier'}}>
                Plug & Play Tech Center
              </Typography>
              <Typography sx = {{fontFamily: 'Courier', fontStyle: 'italic'}}>Food & Beverage Intern</Typography>
              <Typography color="text.secondary" style={{ marginTop: '15px', fontFamily: 'Courier' }}>
                Performed research and outreach to source new startups and corporate partners. Researched and presented findings on novel global food & beverage trends.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default WorkExperiencePage;
