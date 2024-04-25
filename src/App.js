import './App.css'
import Header from './components/Header'
import Cards from'./components/Cards'
import MainContentArea from './components/MainContentArea'

/*each Card data taken as js object */
const cardsData = [
  {
    id:1,
    imageUrl:'https://i.ibb.co/5MvSshD/Screenshot-2024-04-23-200204.png',
    title:'My Saved Library 1',
    dateMonthYear:'dd-mm-yyy',
  },
  {
    id:2,
    imageUrl:'https://i.ibb.co/ZS5zSTV/Screenshot-2024-04-23-182946.png',
    title:'My Saved Library 2',
    dateMonthYear:'dd-mm-yyy',
  },
  {
    id:3,
    imageUrl:'https://i.ibb.co/kDcHxmB/Screenshot-2024-04-23-223829.png',
    title:'My Saved Library 3',
    dateMonthYear:'dd-mm-yyy',
  },
  {
    id:4,
    imageUrl:'https://i.ibb.co/yS0tNSq/Screenshot-2024-04-23-222452.png',
    title:'My Saved Library 4',
    dateMonthYear:'dd-mm-yyy',
  },
  {
    id:5,
    imageUrl:'https://i.ibb.co/Zcsk2SZ/Screenshot-2024-04-23-223749.png',
    title:'My Saved Library 5',
    dateMonthYear:'dd-mm-yyy',
  },
  
]


const App =() =>{
  return(
    <>
    <Header />
      {/* Taking  each cards data using loop by Map method */}
      <div className="container">
            {cardsData.map(eachCard => {
               const {id,imageUrl,title,dateMonthYear} = eachCard
             return(
               <Cards
               key={eachCard}
               id={id} 
               imageUrl={imageUrl} 
               title={title} 
               dateMonthYear={dateMonthYear} 
               /> 
             )
            })}   
        </div>
        
        <MainContentArea />
        

    
    </>
  )
}
export default App;
