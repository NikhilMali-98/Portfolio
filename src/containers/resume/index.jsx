import React from "react";
import { BsSlack } from 'react-icons/bs';
import { HiMiniDocumentText } from "react-icons/hi2";
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import  './styles.scss';
import {data} from './utill';
import {MdWork} from 'react-icons/md'
import 'react-vertical-timeline-component/style.min.css'

const Resume = () => {
    return (
        // <div>
        //     Resume Page
        // </div>

        <section id="resume" className="resume">
            <PageHeaderContent HeaderText="My Resume"
                icon={<HiMiniDocumentText size={40} />} />

            <div className="timeline"> 
                <div className="timeline__education">
                     <h3 className="timeline__education__headert-text">Education</h3>
                     <VerticalTimeline layout={'1-col'}
                     lineColor="var(--yellow-theme-main-color)">
                            {
                            data.education.map((item,i)=>(
                                    <VerticalTimelineElement
                                    key={i}
                                    className="timeline__education__vertical-timeline-element"
                                    contentStyle={{
                                        background:'none',
                                        color:'var(--yellow-theme-sub-text-color)',
                                        border:'1.5px solid var(--yellow-theme-sub-text-color)'
                                    }}
                                    date="2023-Present"
                                    icon={<MdWork/>}
                                    iconStyle={{
                                        background: '#181818',
                                        color: 'var(--yellow-theme-main-color)',
                                    }}
                                    >
                                        <div className="vertical-timeline-element-title-wrapper">
                                            <h3 className="vertical-timeline-element-titile">
                                                {item.title}
                                            </h3>
                                            <h4 className="vertical-timeline-element-subTitile">
                                                 {item.subTitle}
                                            </h4>
                                        </div>
                                        <p className="vertical-timeline-element-description">
                                                 {item.description}
                                            </p>
                                    </VerticalTimelineElement>
                                ))
                            }
                     </VerticalTimeline>
                </div>
                <div className="timeline__experiance">
                    <h3 className="timeline__experiance__headert-text">Experiance</h3>
                    <VerticalTimeline layout={'1-col'}
                     lineColor="var(--yellow-theme-main-color)">
                            {
                            data.experiance.map((item,i)=>(
                                    <VerticalTimelineElement
                                    key={i}
                                    className="timeline__education__vertical-timeline-element"
                                    contentStyle={{
                                        background:'none',
                                        color:'var(--yellow-theme-sub-text-color)',
                                        border:'1.5px solid var(--yellow-theme-sub-text-color)'
                                    }}
                                    date="2023-Present"
                                    icon={<MdWork/>}
                                    iconStyle={{
                                        background: '#181818',
                                        color: 'var(--yellow-theme-main-color)',
                                    }}>
                                        <div className="vertical-timeline-element-title-wrapper">
                                            <h3 className="vertical-timeline-element-titile">
                                                {item.title}
                                            </h3>
                                            <h4 className="vertical-timeline-element-subTitile">
                                                 {item.subTitle}
                                            </h4>                                
                                        </div>
                                        <p className="vertical-timeline-element-description">
                                                 {item.description}
                                            </p>
                                    </VerticalTimelineElement>
                                ))
                            }
                     </VerticalTimeline>
                </div>
            </div>
        </section>
    )
}
export default Resume;