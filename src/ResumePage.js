import React from 'react';
import Header from './Header'

function ResumePage () {
    return (
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
            <Header></Header>
            <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <iframe
                    src={'/resume.pdf'}
                    type="application/pdf"
                    height="100%"
                    width ="90%"
                />
            </div>
        </div>
    )
}

export default ResumePage;