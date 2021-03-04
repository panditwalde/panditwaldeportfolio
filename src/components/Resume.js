import React from 'react';

import Bar from './Bar';
import { motion } from 'framer-motion'
import { tools, languages } from './data/resume_data'


const Resume = () => {

    const resume_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="container resume"

            variants={resume_variants}
            initial="hidden"
            animate="visible"
            exit="exit"

        >
            <div className="row">
            <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                             Bachelor of Computer Science
                        </h5>
                        <p className="resume-card__name">
                            Yashwantrao Chavan College Sillod (2013-2016)
                        </p>
                        <p className="resume-card__details">I  have completed Bachelor of Computer Science  first class  in  Bamu University   </p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading" style={{paddingTop:'30px'}}>
                        
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Master Of Computer Application
                        </h5>
                        <p className="resume-card__name">
                            ASM IMBR college pune (2016-2019)
                        </p>
                        <p className="resume-card__details">I  had done   Master Of Computer Application  first class  in  Pune University   </p>
                    </div>
                </div>
              
            </div>

            <div className="row">
            <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Fellowship
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            ( Java + ReactJs )
                        </h5>
                        <p className="resume-card__name">
                            Bridgelabz Solution LLP(Aug 2019 - Jan 2021)
                        </p>
                        <p className="resume-card__details"> create Keep Fundoo is like a Google Keep. In which we can easily create notes and collaborate with people on notes and lists.We can easily create new note, pin notes, set reminder to notes etc. using spring boot & reactjs</p>
                    </div>
                </div>
            
            </div>

            <div className="row">
          
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                           Software Trainee
                        </h5>
                        <p className="resume-card__name">
                            Teachchef software pvt ltd (feb 2020 - June 2020)
                        </p>
                        <p className="resume-card__details">I work as a Full Stack Developer in Teachchef software and  worked same technoliges like spring boot & react js</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading"  style={{paddingTop:'30px'}}>
                        
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            MERN Stack Developer
                        </h5>
                        <p className="resume-card__name">
                            FSM Education pvt ltd (present)
                        </p>
                        <p className="resume-card__details">I am currently  Working in  FSM equcation Pvt Ltd  As Mern Stack Developer   </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Back End
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                           Front End
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;