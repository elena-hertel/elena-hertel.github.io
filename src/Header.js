import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import {motion} from 'framer-motion';
import {useState} from 'react';
import './App.css'
import { useNavigate } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    let navigate =useNavigate();

    return (
        <div className='Menu'>
            <motion.div
                transition={{layout: { duration: 0.5, type: 'spring' }}}
                layout
                onMouseEnter={() => setIsOpen(!isOpen)}
                onMouseLeave={() => setIsOpen(false)}
                className='card'
            >
                <motion.h2 layout="position">
                    <FontAwesomeIcon icon={faBars} size="1.5x" style={{margin:10}}/>
                </motion.h2>
                {isOpen && (
                    <motion.div
                        className='menu-items'
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.5}}
                    >
                        <h5 style={{ fontFamily: 'Courier', marginLeft: '3rem'}}>
                            <span class="underlineHover">
                                <button style={{all: 'unset'}} onClick={() => navigate('/')}>Home</button>
                            </span>
                        </h5>
                        <h5 style={{ fontFamily: 'Courier'}}>
                            <span class="underlineHover">
                                <button style={{all: 'unset'}} onClick={() => navigate('/work-experience')}>Work Experience</button>
                            </span>
                        </h5>
                        <h5 style={{ fontFamily: 'Courier'}}>
                            <span class="underlineHover">
                                <button style={{all: 'unset'}} onClick={() => navigate('/projects')}>Projects</button>
                            </span>
                        </h5>
                        <h5 style={{ fontFamily: 'Courier'}}>
                            <span class="underlineHover">
                                <button style={{all: 'unset'}} onClick={() => navigate('/interests')}>Interests</button>
                            </span>
                        </h5>
                        <h5 style={{ fontFamily: 'Courier'}}>
                            <span class="underlineHover">
                                <button style={{all: 'unset'}} onClick={() => navigate('/resume')}>Resume</button>
                            </span>
                        </h5>
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}

export default Header;