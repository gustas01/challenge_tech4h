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
                <p>Cidade 1</p>
                <p>Cidade 2</p>
                <p>Cidade 3</p>
                <p>Cidade 4</p>
                <p>Cidade 5</p>
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