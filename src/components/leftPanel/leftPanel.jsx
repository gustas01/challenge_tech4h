import React, { useState } from "react";
import './leftPanel.css'
import axios from 'axios'

export default function LeftPanel({updateRightPanel}){
    
    const [cityName, setCityName] = useState('')
    const [cityData, setCityData] = useState()


    function handleChange(e){
        setCityName(e.target.value)
    }

    async function onUpdate(e){
        e.preventDefault()
        
        try{
            const response = await axios.post('/', {cityName})
            if(Object.keys(response.data).length === 0){
                alert("Cidade inválida!")
                return
            }
            setCityData(response.data)
            updateRightPanel()
        }catch(error){
            console.log(error)
        }
    }



    return (
        <section className="wholeLeftPanel">
            <form  className="formSearch">
                <input type="text" name="cityName" placeholder="Digite o nome da cidade" onChange={handleChange}/>
                <button type="submit" onClick={onUpdate}>Pesquisar</button>
            </form>
           
            <div className="cityInfos">
                <p htmlFor="">Cidade: {cityData?.name}</p>
                <p htmlFor="">País: {cityData?.country}</p>
                <p htmlFor="">Temperatura atual: {(cityData?.mainTemp ? (cityData?.mainTemp).toFixed(2) + '°C' : '')}</p>
                <p htmlFor="">Umidade: {cityData?.humidity ? cityData?.humidity + '%' : ''} </p>
                <p htmlFor="">Clima: {cityData?.weather}</p>
            </div>
            

        </section>
    )
}