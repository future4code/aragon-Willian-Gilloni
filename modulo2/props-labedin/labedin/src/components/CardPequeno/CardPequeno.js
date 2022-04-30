import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return (
        <div className="pequenocard-container">
                        <img src={ props.imagem } />
                <p>{ props.email }</p>
                <p>{ props.endereco }</p>
            </div>
    )
}

export default CardPequeno;