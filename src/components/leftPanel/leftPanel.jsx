import React, { useState } from "react";
import './leftPanel.css'
import axios from 'axios'

export default function LeftPanel(){

    const [cityName, setCityName] = useState('')
    const [cityData, setCityData] = useState()


    function handleChange(e){
        setCityName(e.target.value)
    }

    async function handleClick(e){
        e.preventDefault()

        try{
            const response = await axios.post('/', {cityName})
            setCityData(response.data)
        }catch(error){
            console.log(error)
        }
    }

    return (
        <section className="wholeLeftPanel">
            <form  className="formSearch">
                <input type="text" name="cityName" placeholder="Digite o nome da cidade" onChange={handleChange}/>
                <button type="submit" onClick={handleClick}>Pesquisar</button>
            </form>
           
            <div className="cityInfos">
                <p htmlFor="">Cidade: {cityData?.[0].name}</p>
                <p htmlFor="">País: {cityData?.[0].country}</p>
                <p htmlFor="">Temperatura atual: {(cityData?.[0].mainTemp ? (cityData?.[0].mainTemp).toFixed(2) + '°C' : '')}</p>
                <p htmlFor="">Umidade: {cityData?.[0].humidity ? cityData?.[0].humidity + '%' : ''} </p>
                <p htmlFor="">Clima: {cityData?.[0].weather}</p>
            </div>
            

        </section>
    )
}