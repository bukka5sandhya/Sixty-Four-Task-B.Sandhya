import './index.css'
// Here importing the useState hook for updating the state
import React ,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {faDisplay} from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { faCity } from '@fortawesome/free-solid-svg-icons'
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'


const SideBar = () => {
    const [isOpen,setIsOpen]  = useState(true)
    return(
        <>
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <nav>
        <img src="https://i.ibb.co/Wpdg0rG/Screenshot-2024-04-23-204841.png" alt="Screenshot-2024-04-23-204841"/>
       </nav>
         {isOpen? <nav>
        <img src="https://i.ibb.co/Wpdg0rG/Screenshot-2024-04-23-204841.png" alt="Screenshot-2024-04-23-204841"/>
         <a href="#Search">
         <i className="font-sidebar-icons"> <FontAwesomeIcon icon={faMagnifyingGlass}/></i>
            <span>Search</span>
          </a>
      <a href="#desktop">
      <i className="font-sidebar-icons"><FontAwesomeIcon icon={faDisplay} /></i>
      <span>Desktop</span>
      </a>
       <a href="#question">
      <i className="font-sidebar-icons"><FontAwesomeIcon icon={faCircleQuestion} /></i>
      <span>Question</span>
      </a>
      <a href="#calendar">
      <i className="font-sidebar-icons"><FontAwesomeIcon icon={faCalendarDay} /></i>
      <span>Calendar</span>
      </a>
      <a href="#city">
      <i className="font-sidebar-icons"><FontAwesomeIcon icon={faCity} /></i>
      <span>City</span>
      </a>
      <a href="#dollars">
      <i className="font-sidebar-icons"><FontAwesomeIcon icon={faCircleDollarToSlot} /></i>
      <span>Dollars</span>
      </a>
      
      <a href="#headphones">
      <i className="font-sidebar-icons"><FontAwesomeIcon icon={faHeadphones} /></i>
      <span>Contact</span>
      </a>

      <div className="settings-container">
      <a href="#seetings">
      <i className="font-sidebar-icons"><FontAwesomeIcon icon={faGear} /></i>
      <span>Settings</span>
      </a>
      </div>
      </nav>

      : null}
       < div id="#body">
       <div id="#content">Content</div>
      </div>
         <button onClick={() => setIsOpen(!isOpen)}>
        {/* Icon here */}
       
        
       </button>
       </div>
        </>
    )
}
export default SideBar;