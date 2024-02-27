import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useRef } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';// Ensure you have @mui/icons-material installed
import { IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {grey} from "@mui/material/colors";
import './App.css';

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const canvasRef = useRef(null);

  const toggleCanvas = () => {
    setShowCanvas(!showCanvas);
    // Wait for the state update to render, then scroll into view
    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 10);

  };

  const timelineData = [
    {
      title: 'Software Developer - Hack Health',
      description: 'Part-time role focused on developing PosePro, an AI-powered app for learning exercises, using Flask, Spring Boot, and React. Enhanced pose detection accuracy and performance with YOLO on a Linux server. Implemented AWS API Gateway for load balancing and RabbitMQ for request orchestration, significantly improving scalability and reducing load time.',
      url: 'https://github.com/hjl667/pose_pro_flask'
    },
    {
      title: 'Software Developer - Kodee',
      description: 'Developed a real-time language service tool with Spring Boot, React, and MUI. Optimized glossary search speed with hashing and Elasticsearch, and improved speech transcription accuracy by integrating WebSpeech API and LibreTranslate. Increased user engagement by managing secure user logins and glossary operations with JWT, PostgreSQL, and Redis.',
      url: 'https://kodeeinc.com/'
    },
    {
      title: 'Software Developer - The Imaginarium',
      description: 'Part-time developer on an open-source project converting 2D videos to bvh files using PyTorch. Spearheaded the creation of a Flask backend for avatar animation from movement clips, which increased lab funding. Led a team of six in data augmentation and cleaning, contributing to a paper accepted by the IROS conference.',
      url: 'https://arxiv.org/abs/2312.10195'
    },
    {
      title: 'Data Analyst - Saxo Bank',
      description: 'As a full-time Data Analyst, utilized Scrapy crawlers and pytesseract for data extraction and cleaning, reducing error rates significantly. Developed a Spring backend for automated foreign exchange trading alerts,boosting revenue. Supported retail traders with Python-based trading strategies, enhancing customer retention.',
      url: 'https://www.home.saxo'
    }
  ];

  const customTypographyStyle = {
    title: {
      fontSize: '1.20rem', // Adjust the font size as necessary
      fontWeight: 'bold', // Adjust the font weight as necessary
      color: grey, // Adjust the font color as necessary
      marginBottom: '16px', // Adjust the margin as necessary
    },
    description: {
      fontSize: '0.9rem', // Adjust the font size as necessary
      color: 'rgba(0, 0, 0, 0.87)', // Adjust the font color as necessary
      lineHeight: '1.5', // Adjust the line height as necessary
    },
  };

  const customPaperStyle = {
    padding: '38px',
    width: 'auto', // Adjust the width as necessary
    maxWidth: '550px', // Adjust the maximum width as necessary
    minHeight: '200px', // Adjust the minimum height as necessary
  };

  return (
      <>
        <div className="video-background" style={{ position: 'relative' }}>
          <video autoPlay loop muted playsInline style={{width: '100%', height: '100%', objectFit: 'cover'}}>
            <source src={`${process.env.PUBLIC_URL}/animations/warrior_animation.mp4`} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <div className="content">
            <motion.div
                initial={{y: -250, opacity: 0}}
                animate={{y: 120, opacity: 1}} // Adjusted to move down a bit
                transition={{delay: 0.2, duration: 0.8}}
            >
              <Typography
                  variant="h2" // Adjusted for a smaller font size compared to h1
                  component="h1"
                  style={{
                    color: '#FFF',
                    fontFamily: '"Impact", "Helvetica", "Arial", sans-serif', // Example of a different font style
                    fontWeight: 180, // Adjust for desired weight
                    fontSize: 'calc(1.5vw + 1.5rem)', // Responsive font siz
                  }}
              >
                welcome to my home page
              </Typography>
            </motion.div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '300px',
            position: 'absolute',
            bottom: 20,
            width: '100%',
            zIndex: 2
          }}>
            <IconButton onClick={toggleCanvas}
                        style={{color: '#FFF', borderRadius: '50%'}}>
              <ArrowDownwardIcon style={{fontSize: '28px'}}/>
            </IconButton>
          </div>
        </div>
        <AnimatePresence>
          {showCanvas && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="outer-container"
                  ref={canvasRef}
              >
                <Timeline position="alternate">
                  {timelineData.map((item, index) => (
                      <TimelineItem key={index}>
                        <TimelineSeparator>
                          <TimelineDot />
                          {index < timelineData.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent >
                          <Paper elevation={3} sx={customPaperStyle}>
                            <Typography variant="h6" component="h1" style={customTypographyStyle.title}>
                              <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                {item.title}
                              </a>
                            </Typography>
                            <Typography style={customTypographyStyle.description}>
                              {item.description}</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>
                  ))}
                </Timeline>
              </motion.div>
          )}
        </AnimatePresence>
      </>
  );
}

export default App;
