import React, { Component } from 'react';
import Header from './header/Header'
import Skills from './skills/Skills'
import Projects from './projects/Projects'

export default class Main extends Component {
    render(){
        return (
            
            <div>
                <Header/>
                <Skills/>
                <Projects/>
            </div>
        )
    }
}