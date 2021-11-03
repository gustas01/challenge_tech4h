import React, { useEffect, useState } from "react";
import './leftPanel.css'

export default function LeftPanel(){

    const [cityData, setCityData] = useState({})
    
    useEffect(() => {
        // setar os dados vindos do back no state aqui
    })

    return (
        <section className="wholePanel">
            <form action="/" method="POST" className="formSearch">
                <input type="text" placeholder="Digite o nome da cidade"/>
                <button type="submit">Pesquisar</button>
            </form>

            <div className="cityInfos">
                {/* aqui fazer um map com as informçãoes das cidades vindas do back*/}
                <label htmlFor="">Cidade</label>
                <label htmlFor="">País</label>
                <label htmlFor="">Temperatura atual</label>
                <label htmlFor="">Umidade</label>
                <label htmlFor="">Clima</label>
            </div>

        </section>
    )
}