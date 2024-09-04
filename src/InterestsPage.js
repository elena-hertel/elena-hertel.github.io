import React, { useState, useEffect, useRef } from 'react';
import {Box, Typography} from '@mui/material';
import Header from './Header'


function InterestsPage () {
    const circlesData = [
        {
            text: "I have always been passionate about nature and wildlife.",
            image: "/wildlife.png",
            color: "#F8BC9B"
        },
        {
            text: "I love exploring the outdoors, whether it be...",
            image: "/nature.png",
            color: "#F89B9B"
        },
        {
            text: "hiking,",
            image: "/hiking.png",
            color: "#75BDE0"
        },
        {
            text: "fishing,",
            image: "/fishing.png",
            color: "#F8D49B"
        },
        {
            text: "snowboarding,",
            image: "/snowboard.png",
            color: "#F8BC9B"
        },
        {
            text: "or most recently, running a 120 mile relay race through the woods!",
            image: "/ragnar.png",
            color: "#F89B9B"
        },
        {
            text: "Over my gap year, I even spent 6 months at Critter Care Wildlife Society rehabilitating orphaned and injured wildlife.",
            image: "/racoon.png",
            color: "#75BDE0"
        },
        // {
        //     text: "While there I had the privilege of raising 4 orphaned raccoons,",
        //     image: "/babyRacoon.png",
        //     color: "#F8D49B"
        // },
        // {
        //     text: "8 skunks,",
        //     image: "/skunks.png",
        //     color: "#F8BC9B"
        // },
        // {
        //     text: "and dozens of squirrels, bunnies, and other animals.",
        //     image: "/bunnies.png",
        //     color: "#F89B9B"
        // },
        {
            text: "A newfound passion of mine is camping.",
            image: "/camp.png",
            color: "#F8D49B"
        },
        {
            text: "It started when I signed up to lead a group of incomming freshmen on a four day backpacking trip in Manistee Michigan.",
            image: "/pop.png",
            color: "#F8BC9B"
        },
        {
            text: "And this past summer I camped along a four day road trip from Chicago to Berkeley.",
            image: "/camping.png",
            color: "#F89B9B"
        },
        // {
        //     text: "Stopping in the Badlands,",
        //     image: "/badlands.png",
        //     color: "#F89B9B"
        // },
        // {
        //     text: "and Yellowstone,",
        //     image: "/yellowstone.png",
        //     color: "#75BDE0"
        // },
        {
            text: "Something else I enjoy doing in my spare time is crocheting, specifically amigurumi.",
            image: "/hippo.png",
            color: "#75BDE0"
        },
        {
            text: "And I have even made some designs of my own!",
            image: "/cinnamonBun.png",
            color: "#F8D49B"
        },
        // {
        //     text: "and once I even made a little mini-me.",
        //     image: "/miniMe.png",
        //     color: "#75BDE0"
        // }
    ]

    return (
        <div>
            <Header/>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
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
                        Interests
                    </Typography>
                </Box>
                <Typography style = {{fontFamily: 'Courier', padding: '25px'}}>
                    Hover over the circles
                </Typography>
            </div>
            <div
                style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                padding: '20px',
                }}
            >
                {circlesData.map((circle, index) => (
                <div
                    key={index}
                    className="circle"
                    style={{
                        display: 'inline-flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        backgroundColor: circle.color,
                        borderRadius: '50%',
                        padding: '20px',
                        textAlign: 'center',
                        fontFamily: 'Courier',
                        fontSize: 'clamp(18px, 3vw, 25px)',
                        minWidth: '300px',
                        maxWidth: '450px',
                        wordWrap: 'break-word',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        marginTop: index % 2 === 0 ? '0px' : '30px',
                        aspectRatio: '1 / 1',
                        color: '#000',
                        overflow: 'hidden',
                        transition: 'background-color 0.5s ease-in-out, color 0.5s ease-in-out'
                    }}
                    onMouseEnter={(e) => {
                        const img = e.currentTarget.querySelector('.circle-image');
                        const text = e.currentTarget.querySelector('.circle-text');
                        img.style.opacity = 1;
                        text.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                        const img = e.currentTarget.querySelector('.circle-image');
                        const text = e.currentTarget.querySelector('.circle-text');
                        img.style.opacity = 0;
                        text.style.color = '#000';
                    }}
                >
                    <div className="circle-image"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${circle.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 0,
                            transition: 'opacity 0.5s ease-in-out',
                        }}
                    ></div>
                    <div className="circle-text"
                        style={{
                            position: 'relative',
                            zIndex: 1,
                            transition: 'color 0.5s ease-in-out',
                        }}
                    >
                        {circle.text}
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default InterestsPage;