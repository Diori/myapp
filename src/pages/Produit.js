import React from 'react'
import data from '../data';
import home from './Home';
import {Link} from 'react-router-dom';
import './Produit.css';
//<>


function Produit(props) {
    const produit = data.produits.find(x => x.id === props.match.params.id);
    return (
        <div className="">
            <div className="contenuu-prod">
            <Link to={'/'}>Back</Link>
                <div className="img-prod">
                    <img  src={produit.image} alt = "pas d'image"></img>
                </div>
                <div className="info-prod">
                    <ul>
                        <li><div className="prod-nom">{produit.nom}</div></li>            
                        <li><div className="prod-cool">{produit.description}</div></li>
                        <li><div className="prod-prix">${produit.prix}</div></li>
                        <li> <div className="prod-vue">{produit.aimer} j'aimes ({produit.vue} vues)</div></li>
                    </ul>                             
                </div>
                <div className="action">
                    <ul>
                        <li> Prix : {produit.prix}</li>            
                        <li>statu:</li>
                        <li>Quantité : 
                            <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            </select>
                        </li>
                        <li>
                        <button> Ajouter au pannier</button> </li>
                    </ul>                 

                </div>

            </div>
        </div>
    )
}

export default Produit
