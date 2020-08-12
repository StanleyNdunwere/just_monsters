import React, { Component } from 'react'
import './card.css'
import star from '../card-list/img/star.png'
import monster from '../card-list/img/monster.png'
import monster1 from '../card-list/img/monster1.png'
import monster2 from '../card-list/img/monster2.png'
import monster3 from '../card-list/img/monster3.png'
import monster4 from '../card-list/img/monster4.png'

class CardList extends Component {
  constructor() {
    super()
  this.monsterImage = [
      star,
      monster,
      monster1,
      monster2,
      monster3,
      monster4,
      monster2,
      monster1,
      monster4,
      monster1,
      monster3,
      monster4,
    ]
  }
  

  render() {
   
    let count = 0;
    return (
      <div className="card-list-container">
        {
          this.props.monsters.map((monster) => {
            count += 1;
            return <div className="card-item" key ={monster.id}>
              <img className = "monster-img" src={this.monsterImage[count]} alt="this is a monster" />
              <div className="name-box">
                <p>{monster.name}</p>
              </div>
              <div className="email-box">
                <p>{monster.email}</p>
              </div>
            </div>
          }
          )

        }


      </div>
    )
  }

}
export default CardList



