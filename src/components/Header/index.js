import './index.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import SideBar from '../SideBar'


const Header = () => {
    return(
        //using the shorthand fragment element to return single single jsx element
        <>
        
        <div className="top-container">
            <SideBar />
            <div className="top-two-containers">
            <div className="wishes-container">
                <h1 className="wishes-heading">Good Afternoon, Akshay</h1>
                <p  className="wishes-text">We are subscribed to Retail plan.</p>
           
                </div>
            
           
            <div className="date-time-container">
            <FontAwesomeIcon icon={faCalendar} className="font-icons" />
            <h1 className="date-time-heading">Today, 14 Feburary</h1>
            <FontAwesomeIcon icon={faClock} className="font-icons" />
            <h1 className="date-time-heading">16:42</h1>
            <FontAwesomeIcon icon={faBell} className="font-icons" />
            </div>
            </div>
            </div>

           
           
        </>

    )
}
export default Header;