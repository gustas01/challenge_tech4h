import './App.css';
import LeftPanel from './components/leftPanel/leftPanel'
import RightPanel from './components/rightPanel/rightPanel'
import Header from './components/header/header'
import Footer from './components/footer/footer';
import axios from 'axios'
import {useEffect, useState} from 'react'

function App() {

  //rightPanel States
  const [recentlyCities, setrecentlyCities] = useState([])
  const [popularCities, setPopularCities] = useState([])

useEffect(() => {
    updateData()      
},[])
  
 
 function updateData(){
      try{
          axios.get('/recentlySearchedCitiesDatas').then(response => setrecentlyCities(response.data))
          axios.get('/popularCitiesData').then(response => setPopularCities(response.data))
      }catch(error){
          console.log(error)
      }
    }




  return (
    <section className="globalContainer">
      <Header/>      

      <div className="panels">
        <LeftPanel updateRightPanel={updateData} />
        <RightPanel recentlyCities={recentlyCities} popularCities={popularCities}/>
      </div>

      <Footer/>
    </section>
    )
}

export default App;
