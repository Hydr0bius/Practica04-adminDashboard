import React from 'react';
import "./Sidebar.css";
import {personsImgs} from "../../utils/images";
import {navigationLinks} from "../../data/data";

const Sidebar = () =>{
    return(
        <div className={'sidebar'}>
            <div className="user-info">
                <div className="info-img img-fit-cover">
                    <img src={personsImgs.person_two} alt="profile" />
                </div>
                <span className='info-name'>alice-doe</span>
            </div>
            <nav className="navigation">
                <ul className="nav-list">
                    {
                        navigationLinks.map((navigationLinks)=>(
                            <li className='nav-item' key={navigationLinks.id}>
                                <a href="#" className={'nav-link'}>
                                    <img src={navigationLinks.image} className='nav-link-icon' alt={navigationLinks.title}/>
                                    <span className='nav-link-text'>{navigationLinks.title}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar