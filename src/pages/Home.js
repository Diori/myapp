import React from 'react'
import data from '../data';
import {Link} from 'react-router-dom';

function home (props) {
    return (
        
      <div className="App-corp">
      <div className="contenue-prod">
        <ul className="produits">
          {
            data.produits.map(produit => 
              <li className="produit" key={produit.id}>
                  <Link to={'/produit/'+ produit.id}>
                  <img className="prod-img" src={produit.image} alt = "pas d'image"></img>
                  </Link>
            
            <div className="prod-nom">
            <Link to={'/produit/'+ produit.id}>{produit.nom}</Link>
            </div>
            <div className="prod-cool">{produit.description}</div>
            <div className="prod-prix">${produit.prix}</div>
            <div className="prod-vue">{produit.aimer} j'aimes ({produit.vue} vues)</div>
            
          </li>)
          }
          
        </ul>
      </div>
    </div>

    )
}

export default home
