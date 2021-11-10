import React, {useState, useEffect} from "react";
import './rightPanel.css'
import axios from 'axios'


export default function RightPanel(){

    const [recentlyCities, setrecentlyCities] = useState([])
    const [popularCities, setPopularCities] = useState([])


    useEffect(() => {
        axios.get('/recentlySearchedCitiesDatas').then(response => setrecentlyCities(response.data))
        axios.get('/popularCitiesData').then(response => setPopularCities(response.data))
        
        
    },[])


    return (
        <section className="wholeRightPanel">
            
            <div className="maisBuscadas">
                <h3>Cidades mais buscadas</h3>
                {popularCities.map((city, index) => {
                    if(index < 5) 
                        return <p key={index}> {city.name}</p>
                        return ''
                })
            }
            
            </div>

            <div className="ultimasBuscadas">
                <h3>Buscas recentes</h3>
                {recentlyCities.map((name, index) => {
                    if(index < 5)
                        return <p key={index}> {name} </p>
                        return ''
                    })
                }
                
            </div>
        </section>
    )
}