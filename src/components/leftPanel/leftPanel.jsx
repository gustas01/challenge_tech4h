import React, { useState } from "react";
import './leftPanel.css'
import axios from 'axios'

export default function LeftPanel(){

    const [cityName, setCityName] = useState('')
    const [cityData, setCityData] = useState({})


    function handleChange(e){
        setCityName(e.target.value)
    }

    async function handleClick(e){
        e.preventDefault()

        try{
            const response = await axios.post('/', {cityName})
            setCityData(response.data)
            console.log(cityData)
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
                <p htmlFor="">Cidade: {cityData?.name}</p>
                <p htmlFor="">País: {cityData.sys?.country}</p>
                <p htmlFor="">Temperatura atual: {(cityData.main?.temp - 273)}</p>
                <p htmlFor="">Umidade: {cityData.main?.humidity}</p>
                <p htmlFor="">Clima: {cityData.weather?[0].description}</p>
            </div>

        </section>
    )
}