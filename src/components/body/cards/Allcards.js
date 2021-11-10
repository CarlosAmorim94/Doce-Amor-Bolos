import React from 'react'
import '../cards/allCards/Cards.css'
import Cards from './allCards/Cards'
import img1 from '../../../img/cake1.jpeg'
import img2 from '../../../img/cake2.jpeg'
import img3 from '../../../img/cake3.jpeg'
import img4 from '../../../img/cake4.jpeg'
import img5 from '../../../img/cake5.jpeg'
import img6 from '../../../img/cake6.jpeg'
import img7 from '../../../img/cake7.jpeg'
import img8 from '../../../img/cake8.jpeg'
import img9 from '../../../img/cake9.jpeg'
import img10 from '../../../img/cake10.jpeg'
import img11 from '../../../img/cake11.jpeg'
import img12 from '../../../img/cake12.jpeg'
import img13 from '../../../img/cake13.jpeg'
import img14 from '../../../img/cake14.jpeg'
import img15 from '../../../img/cake15.jpeg'
import img16 from '../../../img/cake16.jpeg'
import img17 from '../../../img/cake17.jpeg'
import img18 from '../../../img/cake18.jpeg'
import img19 from '../../../img/cake19.jpeg'
import img20 from '../../../img/cake20.jpeg'
import img21 from '../../../img/cake21.jpeg'
import img22 from '../../../img/cake22.jpeg'
import img23 from '../../../img/cake23.jpeg'
import img24 from '../../../img/cake24.jpeg'


export default function Allcards() {

    const cakes = [
        {id: 'cake1', img: img1},
        {id: 'cake2', img: img2},
        {id: 'cake3', img: img3},
        {id: 'cake4', img: img4},
        {id: 'cake5', img: img5},
        {id: 'cake6', img: img6},
        {id: 'cake7', img: img7},
        {id: 'cake8', img: img8},
        {id: 'cake9', img: img9},
        {id: 'cake10', img: img10},
        {id: 'cake11', img: img11},
        {id: 'cake12', img: img12},
        {id: 'cake13', img: img13},
        {id: 'cake14', img: img14},
        {id: 'cake15', img: img15},
        {id: 'cake16', img: img16},
        {id: 'cake17', img: img17},
        {id: 'cake18', img: img18},
        {id: 'cake19', img: img19},
        {id: 'cake20', img: img20},
        {id: 'cake21', img: img21},
        {id: 'cake22', img: img22},
        {id: 'cake23', img: img23},
        {id: 'cake24', img: img24},
    ]

    return (
        <div id="all_cards">
           <ul class="cards" >
              {cakes.map((item)=>{ return(
                  <li key={item.id}><Cards img={item.img} /></li>
              )})}
           </ul>
           

        </div>
    )
}
