
import './index.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'


const MainContentArea = () => {
  
    return(
        <>
        <div className="main-content-bg-container">
            
            <div className="main-content-first-container">
              
                <div className="carousel-cards-container" id="cardsContainer">
                    {/*first main content card */}
                    <FontAwesomeIcon icon={faCircleArrowLeft} id="leftArrow"/>
                    
                    <div className="main-content-cards-in-carsouel">
                        <img src="https://i.ibb.co/kBFXBLJ/Screenshot-2024-04-24-144207-removebg-preview.png" className="card1-image" alt="main card1" />
                        <h3 className="main-content-card-heading">State Of Markets</h3>
                        <p className="main-content-card-text">The Market capitalisation of Indian stocks crossed USS$4.5 trillion in january</p>
                    </div>

                    {/*second main -content card */}
                    <div className="main-content-cards-in-carsouel">
                        <img src="https://i.ibb.co/LNB7nT9/Screenshot-2024-04-24-153946-removebg-preview.png" className="main-content-card-image" alt="main card1" />
                        <h3 className="main-content-card-heading">The Central Capex Surge</h3>
                        <p className="main-content-card-text">The last few years have seen a very substainal step up in capital</p>
                    </div>

                    {/*third main -content card */}
                    <div className="main-content-cards-in-carsouel">
                        <img src="https://i.ibb.co/7nx1nxC/Screenshot-2024-04-24-154534.png" className="main-content-card-image" alt="main card1" />
                        <h3 className="main-content-card-heading">Direct Taxes and Business Cycle</h3>
                        <p className="main-content-card-text">The share of direct taxes in total tax collections of the Central Government is</p>
                    </div>

                    {/*fourth main -content card */}
                    <div className="main-content-cards-in-carsouel">
                        <img src="https://i.ibb.co/FqSxmrb/Screenshot-2024-04-24-154917-removebg-preview.png" className="main-content-card-image" alt="main card1" />
                        <h3 className="main-content-card-heading">Banking Monitor</h3>
                        <p className="main-content-card-text">'Credit growth has remained brandly stable in recent weeks at just</p>
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} id="rightArrow"  />
                    </div>
                  {/*dots */ }
                  <div className="dots">
                    <button className="dot-button"></button>
                    <button className="selected-dot-button"></button>
                    <button className="dot-button"></button>
                    <button className="dot-button"></button>
                    <button className="dot-button"></button>
                    <button className="dot-button"></button>
                    <button className="dot-button"></button>
                  </div>
                {/*view button */}
                  <div className="text-center">
                    <button className="button">View More</button>
                    </div>
                 </div> 
            <div className="recent-release-container col-4">
                <div className="release-top-container">
                    <h3 className="release-heading">Recent Releases</h3>
                    {/*Here using the Select and option for drop down menu */}
                    <div clssName="selected-values">
                    <select>
                        <option  value="1">India</option>

                    </select>
                    </div>

                </div>
                <hr className="m-3"/>
                <div className="feb-container">
                    <div className="dot-and-line-container">
                        <button className="dot-button"></button>
                        <button className="straight-line"></button>
                    </div>
                    <div className="side-feb-container">
                        <h3 className="release-heading">Feburary 12, 2024</h3>
                        <h2 className="industrial-heading">Industrial Production</h2>
                        <p className="industrial-text">Index of Industrial Production (IIP) grew by <br/>
                        3.8% YoY in December, as compared to a <br />
                        5.1% YoY growth in the same month last year. <br />
                         Electricity has seen the slowest growth of <br />
                         1.2% YoY in December as compared to 10.4% <br />
                         YoY growth in the same month last year.</p>
                    </div>
                </div>
                {/*last release feb container  */}
                <div className="feb-container">
                    <div className="dot-and-line-container">
                        <button className="dot-button"></button>
                        <button className="straight-line"></button>
                    </div>
                    <div className="side-feb-container">
                        <h3 className="release-heading">Feburary 12, 2024</h3>
                        <h2 className="industrial-heading">CPI Inflation</h2>
                        <p className="industrial-text">India's Inflation eased to 5.1% in Jan, a 60 <br />
                        basis points decrese from the previous <br />
                        month. Consumer Food Price Index (CFPI) <br />
                        declined from 9.5% in Dec 23 to 8.3% in</p>
                    </div>
                </div>
             </div>
           </div>
        </> 
    )
}
export default MainContentArea