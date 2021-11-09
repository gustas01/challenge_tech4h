import React, {useState, useEffect} from "react";
import './rightPanel.css'
import axios from 'axios'

export default function RightPanel(){

    const [cityData, setCityData] = useState()

    useEffect(() => {
        axios.get('/contato').then(response => setCityData(response.data))

    },[])


console.log('state = ', cityData)

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
                <h3>Cidades buscadas recentemente</h3>
                <p>{cityData?.[0].name}</p>
                <p>{cityData?.[1].name}</p>
                <p>{cityData?.[2].name}</p>
                <p>{cityData?.[3].name}</p>
                <p>{cityData?.[4].name}</p>
                
            </div>
        </section>
    )
}