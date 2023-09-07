import React, { useState } from "react";
import { BiSolidUserDetail } from 'react-icons/bi';
import PageHeaderContent from "../../components/pageHeaderContent";
import cal from '../../images/earth.jpg'
import cal1 from '../../images/calculato.jpg'
import cal2 from '../../images/images (1).jpg'
import cal3 from '../../images/download.jpg'
import cal4 from '../../images/emi.jpg'
import cal5 from '../../images/online shop.jpg'
import cal6 from '../../images/seat book.png'
import cal7 from '../../images/to do.png'
import cal8 from '../../images/moon.jpg'
import cal9 from '../../images/coming soon.jpg'
import './styles.scss'

const portfolioData = [
    {
        id: 2,
        name: "Car Washing Centre",
        P: "Coming Soon",
        image: cal9,
        link:''
    },
    {
        id: 2,
        name: "E-Shopper",
        P: "simple E-commerce web portal",
        image: cal5,
        link:'https://nikhilmali-98.github.io/E-Shopper-Website/'
    },
    {
        id: 2,
        name: "ResumeGram ",
        P: "Clone web portal for login",
        image: cal2,
        link:'https://nikhilmali-98.github.io/ResumeGram/'
    },
    {
        id: 3,
        name: "To-Do List",
        P: "To-Do List for storage task",
        image: cal7,
        link:'https://nikhilmali-98.github.io/To-Do-List/'
    },
    {
        id: 3,
        name: "Simple Calculator",
        P: " ",
        image: cal1,
        link:'https://nikhilmali-98.github.io/Simple-Calculator/'
    },
    {
        id: 3,
        name: "Ticket Booking",
        P: "Simple ticket booking page",
        image: cal6,
        link:'https://nikhilmali-98.github.io/Ticket-Booking/'
    },
    {
        id: 3,
        name: "SI, Discount, Weight Cal.",
        P: " ",
        image: cal4,
        link:'https://nikhilmali-98.github.io/S_Interest-Discount-Weight_calculator/'
    },
    {
        id: 3,
        name: "Earth-Moon Rotation",
        P: "Created a simple animation",
        image: cal8,
        link:'https://nikhilmali-98.github.io/Earth-Moon-Rotation/'
    }
]


const filterData = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'Web Portal'
    },
    {
        filterId: 3,
        label: 'Practice'
    }
]

const Portfolio = () => {

    const [filterValue,selfFilteredValue] = useState(1)
    function handleFilter(curentId){
        selfFilteredValue(curentId)
    };

    console.log(filterValue);

    const filterItems= filterValue===1 ? portfolioData:portfolioData.filter(item=>item.id === filterValue)

    console.log(filterItems);

    const [hoverValue,setHoverValue]=useState(null)
    function handleHover (index){
        setHoverValue(index)
    }

    console.log(hoverValue);
    
    return (
        // <div>
        //     Portfolio Page
        // </div>

        <section id="portfolio" className="portfolio">
            <PageHeaderContent HeaderText="My Portfolio"
                icon={<BiSolidUserDetail size={40} />} />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {
                        filterData.map((item) => (
                            <li className={item.filterId === filterValue ? 'active' : ''} onClick={()=>handleFilter(item.filterId)} key={item.filterId}>
                                {
                                    item.label
                                }
                            </li>
                        ))
                    }
                </ul>
                <div className="portfolio__content__cards">
                        { filterItems.map((item,index)=>(
                                <div className="portfolio__content__cards__item" 
                                key={`cardItem${item.name.trim()}`}
                                onMouseEnter={()=>handleHover(index)}
                                onMouseLeave={()=>handleHover(null)}
                                >
                                    <div className="portfolio__content__cards__item__img-wrapper" >
                                        <a>
                                            <img alt="dummy data" src={item.image}></img>
                                        </a>
                                    </div>
                                    <div className="overlay">
                                            {
                                                index === hoverValue && (
                                                    <div>
                                                        <p>{item.name}</p>
                                                        <button onClick={() => window.location.href = item.link}>Visit</button><br/>
                                                        <p id="tage">{item.P}</p>
                                                    </div>
                                                )
                                            }
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </div>
        </section>
    )
}
export default Portfolio;