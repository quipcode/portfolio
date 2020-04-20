import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css'
import '../../assets/images/computer-icons-software-developer.png'
import Background1 from  '../../assets/images/computer-icons-software-developer.png';
import Background2 from '../../assets/images/Clipart-Email-9158026.png'
import WorkIcon from '@material-ui/icons/Work';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import CloudIcon from '@material-ui/icons/Cloud';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import SchoolIcon from '@material-ui/icons/School';









export default function Experience(){
    return(
        <div className="main" id="experience">
        <React.Fragment>
            <header></header>
            <div className="heading experience-heading">
            <h2>Work Experience & Education</h2>
            <p>Previous jobs and my qualifications</p>
            </div>
        <VerticalTimeline className="timeline-classy">
        <VerticalTimelineElement
                className="vertical-timeline-element--work "
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<CloudIcon />}
            >
                
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
                className="vertical-timeline-element--work timeline-element-classy"
                contentStyle={{ background: 'rgb(33, 150, 243)', "color": '#fff', backgroundImage: `url(${Background1})`, backgroundSize: "contain" , backgroundRepeat: "no-repeat"}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work timeline-element-classy2"
                contentStyle={{ background: 'rgb(33, 150, 243)', "color": '#fff', backgroundImage: `url(${Background2})`, backgroundSize: "contain" , backgroundRepeat: "no-repeat", backgroundPosition: "right"}}
                date="2010 - 2011"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                ////icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
            </VerticalTimelineElement> */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2019 - "
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Support Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Infosys</h4>
                <p>
                Provide functional and technical software application support to clients
                </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2017 - 2019"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title"> Product Specialist</h3>
                <h4 className="vertical-timeline-element-subtitle">CornerStoneOnDemand</h4>
                <p>
                Provide functional and technical software application support to clients
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2016 - 2017"
                iconStyle={{ background: 'rgb(0,158,75)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title"> Field Technician</h3>
                <h4 className="vertical-timeline-element-subtitle"> Charter</h4>
                <p>
                Performed cable installation, reconnects, and upgrades for customers who seek
internet, video, and phone services
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2016 - 2017"
                iconStyle={{ background: 'rgb(0,158,75)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title"> IT Technician</h3>
                <h4 className="vertical-timeline-element-subtitle">Mibura</h4>
                <p>
                Provide technical assistance and support for incoming queries and issues
related to computer systems, software, and hardware 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2016"
                iconStyle={{ background: 'rgb(0,158,75)', color: '#fff' }}
                
                // iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">General Assembly</h3>
                <h4 className="vertical-timeline-element-subtitle">Web Development Immersive</h4>
                
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2014 - 2015"
                iconStyle={{ background: 'rgb(49,23,1)' , color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(49,23,1)' }}
                contentStyle={{ "color": 'black'}}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Drilling Fluids Specialist</h3>
                <h4 className="vertical-timeline-element-subtitle">M-I SWACO, A Schlumberger Company</h4>
                <p>
                Maintained drilling fluid properties via chemical and physical treatment as
dictated by the operator/mud program
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2012 - 2014"
                iconStyle={{ background: 'rgb(49,23,1)' , color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(49,23,1)' }}
                contentStyle={{ "color": 'black'}}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Chemist</h3>
                <h4 className="vertical-timeline-element-subtitle">Pharmavite</h4>
                <p>
                Executed physical and chemical analyses of various products and samples utilizing wet chemistry and instrumentation such
as NIR, FTIR, UV-Visible, GC, UPLC and HPLC
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2012"
                iconStyle={{ background: 'rgb(49,23,1)' , color: '#fff' }}
                // iconStyle={{ background: 'rgb(233, 30, 99)' , color: '#fff' }}
                // contentStyle={{"color": "#fff";}}
                contentStyle={{ "color": 'black'}}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Chemistry</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelors Degree</h4>
                {/* <p>
                Creative Direction, Visual Design
                </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
            // rgb(49,23,1)
            iconStyle={{ background: 'rgb(49,23,1)', color: '#fff' }}
                // iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<KeyboardArrowUpIcon />}
            />
        </VerticalTimeline>
        </React.Fragment>
        </div>
    )
}
