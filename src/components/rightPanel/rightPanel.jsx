import React from "react";
import './rightPanel.css'

export default function RightPanel(){


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
                <p>Teófilo Otoni</p>
                <p>Governador Valadares</p>
                <p>Nova Iorque</p>
                <p>Londres</p>
                <p>Seoul</p>
            </div>
        </section>
    )
}