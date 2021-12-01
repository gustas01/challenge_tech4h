import React from "react";
import './rightPanel.css'


export default function RightPanel({recentlyCities, popularCities}){

    return (
        <section className="wholeRightPanel">
            
            <div className="maisBuscadas">
                <h3>Cidades mais buscadas</h3>
                {popularCities.map((city, index) => {                    
                        return <p key={index}> {city.name}</p>
                })
            }
            
            </div>

            <div className="ultimasBuscadas">
                <h3>Buscas recentes</h3>
                {recentlyCities.map((name, index) => {
                        return <p key={index}> {name} </p>
                    })
                }
                
            </div>
        </section>
    )
}