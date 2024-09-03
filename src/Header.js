import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import {motion} from 'framer-motion';
import {useState} from 'react';
import './App.css'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

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
                                <a href="/" style={{textDecoration: 'none', color:'black'}}> Home </a>
                            </span>
                        </h5>
                        <h5 style={{ fontFamily: 'Courier'}}>
                            <span class="underlineHover">
                                <a href="/work-experience" style={{textDecoration: 'none', color:'black'}}> Work Experience </a>
                            </span>
                        </h5>
                        <h5 style={{ fontFamily: 'Courier'}}>
                            <span class="underlineHover">
                                <a href="/projects" style={{textDecoration: 'none', color:'black'}}> Projects </a>
                            </span>
                        </h5>
                        <h5 style={{ fontFamily: 'Courier'}}>
                            <span class="underlineHover">
                                <a href="/interests" style={{textDecoration: 'none', color: 'black'}}> Interests</a>
                            </span>
                        </h5>
                        <h5 style={{ fontFamily: 'Courier'}}>
                            <span class="underlineHover">
                                <a href="/resume" style={{textDecoration: 'none', color: 'black'}}> Resume</a>
                            </span>
                        </h5>
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}

export default Header;