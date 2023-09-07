import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from 'react-icons/bs';
import './styles.scss';
import { Animate } from 'react-simple-animate';
import { DiApple, DiAndroid, DiDatabase } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'


const personalDetails = [
    {
        label: "Name",
        Value: "Nikhil Mali"
    },
    {
        label: "Age",
        Value: "25"
    },
    {
        label: "Address",
        Value: "Nashik"
    },
    {
        label: "Email",
        Value: "malinikhil191198@gmail.com"
    },
    {
        label: "Contact",
        Value: "+91 9960728207"
    },
];

const jobSummary = 'I am a Engineer who likes computers, Coding, and Programming. I am always interested to learn new skills related to Computer Science. Currently pursuing C-DAC at MET IIT Nashik. Also, I am having 3 Year work experience related to Construction Site & Planning - Sanctioning Building, Bungalow, Industrial sheds, etc.';


const About = () => {
    return (
        // <div>
        //     About Page
        // </div>
        <section id="about" className="about">
            <PageHeaderContent HeaderText="About Me"
                icon={<BsInfoCircleFill size={40} />} />

            <div className="about__content">
                <div className="about__content_personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={0.2}
                        start={{
                            transform: 'translateX(-900px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }} >

                        <h3>Java Devloper</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={0.2}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }} >
                        <h3 className="personalInformationHeader">Personal Information</h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title">{item.label}</span>
                                    <span className="value">{item.Value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>


                <div className="about__content_serviceWrapper">

                    <Animate
                        play
                        duration={1.5}
                        delay={0.2}
                        start={{
                            transform: 'translateX(600px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }} >

                        <div className="about__content_serviceWrapper__inner-content">
                            <div>
                                <FaDev size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiApple size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                        </div>
                        </Animate>

                </div>


            </div>
        </section>
    )
}



export default About;