import './index.css'

const Cards = ({imageUrl,title,dateMonthYear}) =>{
    return(
        
        <div class="cards-container">
        <div className="cards">
            <img src={imageUrl} alt="saved" className="saved-image"/>
            <h3 className="card-heading">{title}</h3>
            <p className="card-text">{dateMonthYear}</p>
        </div>
     </div>
     
    )

}
export default Cards;


