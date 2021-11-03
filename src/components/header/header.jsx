import React from "react";
import './header.css'
import {MdOutlineLocationCity} from 'react-icons/md'

export default function Header(){
    return (
        <header className="wholeHeader">
            <h1> <MdOutlineLocationCity/> Cidade Climas</h1>
        </header>
    )
}