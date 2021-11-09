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

console.log(popularCities)

    return (
        <section className="wholeRightPanel">
            
            <div className="maisBuscadas">
                <h3>Cidades mais buscadas</h3>
                <p>Teófilo Otoni</p>
                <p>Governador Valadares</p>
                <p>Nova Iorque</p>
                <p>Londres</p>
                <p>Seoul</p>
            </div>

            <div className="ultimasBuscadas">
                <h3>Buscas recentes</h3>
                {recentlyCities.map((val, index) => {
                    if(index < 5)
                    return <p key={index} >{val.name}</p>})
                }
                
            </div>
        </section>
    )
}