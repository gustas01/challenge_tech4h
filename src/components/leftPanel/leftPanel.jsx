import React, { useEffect, useState } from "react";
import './leftPanel.css'

export default function LeftPanel(){

    const [cityData, setCityData] = useState({})
    
    useEffect(() => {
        // setar os dados vindos do back no state aqui
    })

    return (
        <section className="wholeLeftPanel">
            <form action="/" method="POST" className="formSearch">
                <input type="text" placeholder="Digite o nome da cidade"/>
                <button type="submit">Pesquisar</button>
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