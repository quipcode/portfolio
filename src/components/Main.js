import React, { Component } from 'react';
import Header from './header/Header'
import Skills from './skills/Skills'
import Projects from './projects/Projects'
import Experience from './experience/Experience'
import Contact from './contact/Contact'

export default class Main extends Component {
    render(){
        return (
            
            <div>
                <Header/>
                <Skills/>
                <Projects/>
                <Experience/>
                <Contact/>
            </div>
        )
    }
}