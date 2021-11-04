import React, { useState } from "react";
import './leftPanel.css'
import axios from 'axios'

export default function LeftPanel(){

    const [cityData, setCityData] = useState({})

    function handleClick(e){
        e.preventDefault()

        axios.get('/').then((dados) => {
            setCityData(dados.data)
            console.log(dados.data)
        })
    }

    return (
        <section className="wholeLeftPanel">
            <form method="POST" className="formSearch">
                <input type="text" name="cityName" placeholder="Digite o nome da cidade"/>
                <button type="submit" onClick={handleClick}>Pesquisar</button>
            </form>

            <div className="cityInfos">
                {/* aqui fazer um map com as informçãoes das cidades vindas do back*/}
                <p htmlFor="">Cidade</p>
                <p htmlFor="">País</p>
                <p htmlFor="">Temperatura atual</p>
                <p htmlFor="">Umidade</p>
                <p htmlFor="">Clima</p>
            </div>

        </section>
    )
}