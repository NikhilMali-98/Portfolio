import React from "react";
import {BiSolidContact} from 'react-icons/bi';
import PageHeaderContent from "../../components/pageHeaderContent";
import './styles.scss'
import {Animate} from "react-simple-animate"

const Contact=()=>{
    return(
        // <div>
        //     Contact Page
        // </div>

        <section id="contact" className="contact">
        <PageHeaderContent HeaderText="My Contact"
            icon={<BiSolidContact size={40} />} />

            <div className="contact__content">
                <Animate
                play
                duration={1}
                delay={0}
                start={
                    {
                        transform:"translateX(-200px)"
                    }
                }
                end={
                    {
                        transform:"translateX(0px)"
                    }
                } 
                >
                    <h3 className="contact__content__header-text">Contact me</h3>

                </Animate>

                <Animate
                play
                duration={1}
                delay={0}
                start={
                    {
                        transform:"translateX(-200px)"
                    }
                }
                end={
                    {
                        transform:"translateX(0px)"
                    }
                } 
                >
                    <div className="contact__content__form">
                        <div className="contact__content__form__control-wrapper">
                            <div className="name">
                                <input required name="name" className="iname" type="{'text'}"></input>
                                <label htmlFor="name" className="lname">Name :</label>
                            </div>
                            <div className="email">
                            <input required name="email" className="iemail" type="{'text'}"></input>
                                <label htmlFor="email" className="lemail">Email :</label>
                            </div>
                            <div className="description">
                            <textarea required rows={5} name="description" className="idescription" type="{'text'}"></textarea>
                                <label htmlFor="description" className="ldescription">Description :</label>
                            </div>
                        </div>
                        <button>Submit</button>
                    </div>
                </Animate>
            </div>
    </section>
    )
}
export default Contact;