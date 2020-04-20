import React, { Component , useEffect, useRef, useState  } from 'react';
import Header from './header/Header'
import Skills from './skills/Skills'
import Projects from './projects/Projects'
import Experience from './experience/Experience'
import Contact from './contact/Contact'

export default function Main(){
    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
        if (ref.current) {
        setSticky(ref.current.getBoundingClientRect().top <= 0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    // render(){
        return (
            
            <React.Fragment>
                    <div  className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
                    <Header  />
                    </div>
                    
                
               
                <Skills/>
            
            
                <Projects/>
              
              
                <Experience/>
                <Contact/>
                </React.Fragment>
         
        )
    // }
}