// import React from "react";
// import { Navigate, useNavigate } from 'react-router-dom';
// import { Animate } from 'react-simple-animate';
// import './styles.scss';
// import { BsLinkedin } from 'react-icons/bs';
// import { BsGithub } from 'react-icons/bs'
// import { FaHackerrank } from 'react-icons/fa'
// import profileImage from '../../images/calculato.jpg'

// const Home = () => {

//     // onclick button function
//     const navigae = useNavigate();
//     console.log(navigae);
//     const handleNavigateToContact = () => {
//         navigae("/contact");
//     }
//     return (
//         // <div>
//         //     Home Page
//         // </div>

//         <section id="home" className="home">
//             <div className="main">
//                 <div className="main__main-1">
//                     <div className="home__text-wrapper">
//                         <h1>
//                             Hello, <br />
//                         </h1>
//                         <h1 className="home__text-wrapper__h1">
//                             I'm Nikhil Mali<br />
//                         </h1>
//                     </div>
//                     <div className="home__text-wrapper">
//                         <h3>
//                             an enthusiastic and mature coder
//                             with a constant thirst for learning and growth
//                         </h3>
//                     </div>

//                     <Animate
//                         play
//                         duration={1.5}
//                         delay={0.2}
//                         start={{
//                             transform: 'translateY(550px)'
//                         }}
//                         end={{
//                             transform: 'translateX(0px)'
//                         }}
//                     >
//                         <div className="home__contact-me">
//                             <button onClick={handleNavigateToContact}>Hire Me</button>
//                             <a href="https://nikhilnaikportfolio.000webhostapp.com/static/media/NikhilRNaik23.be60c24120394379119a.pdf" download="NikhilMali.pdf" >
//                                 <button>Get Resume</button>
//                             </a>
//                         </div>

//                         <div className="home__icon">
//                             <a href="https://www.linkedin.com/in/nikhil-mali-461193274/" className="icon-link">
//                                 <BsLinkedin size={30} style={{ color: 'yellow' }} />
//                             </a>
//                             <a href="https://www.hackerrank.com/nikhil_mali" className="icon-link">
//                                 <FaHackerrank size={30} style={{ color: 'yellow' }} />
//                             </a>
//                             <a href="https://github.com/NikhilMali-98" className="icon-link">
//                                 <BsGithub size={30} style={{ color: 'yellow' }} />
//                             </a>
//                         </div>
//                     </Animate>
//                 </div>
//                 <div className="main__main-2">
//                     <img src={profileImage} alt=" " />
//                 </div>
//             </div>
//         </section>
//     )
// }
// export default Home;

import React from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import './styles.scss';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FaHackerrank } from 'react-icons/fa';
import ImageSection from './ImageSection';


const Home = () => {
    const navigate = useNavigate();

    const handleNavigateToContact = () => {
        navigate("/contact");
    }

    return (
        <section id="home" className="home">
            <div className="main">
                <div className="main__left">
                    <div className="home__text-wrapper">
                        <h1>Hello,</h1>
                        <h1 className="home__text-wrapper__h1">I'm Nikhil Mali</h1>
                    </div>
                    <div className="home__text-wrapper">
                        <h3>
                            an enthusiastic and mature coder
                            with a constant thirst for learning and growth
                        </h3>
                    </div>

                    <Animate
                        play
                        duration={1.5}
                        delay={0.2}
                        start={{
                            transform: 'translateY(550px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <div className="home__contact-me">
                            <button onClick={handleNavigateToContact}>Hire Me</button>
                            <a href="Resume-Nikhil Mali.pdf" download="Resume-Nikhil Mali.pdf" >
                                <button>Get Resume</button>
                            </a>
                        </div>

                        <div className="home__icon">
                            <a href="https://www.linkedin.com/in/nikhil-mali-461193274/" className="icon-link" target="_blank">
                                <BsLinkedin size={30} style={{ color: 'yellow' }} />
                            </a>
                            <a href="https://www.hackerrank.com/nikhil_mali" className="icon-link" target="_blank">
                                <FaHackerrank size={30} style={{ color: 'yellow' }} />
                            </a>
                            <a href="https://github.com/NikhilMali-98" className="icon-link" target="_blank">
                                <BsGithub size={30} style={{ color: 'yellow' }} />
                            </a>
                        </div>
                    </Animate>
                </div>
                <div className="main__right">
                        <ImageSection /> 
                </div>
            </div>
        </section>
    )
}

export default Home;
                    {/* <img src={profileImage} alt="Profile" /> */}