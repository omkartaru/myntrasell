import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../App.css"
import Hero from "./Hero"
const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products') //yes
            .then(res => res.json()) //minaj 
            .then((json) => setData(json))//

    }, [])

    console.log(data)
    return (
<>
        <Hero/>
        <div className="ui grid " id="cards" >
           

                {
                    data.map(minaj => {
                        return (
                            <Link to={`/products/${minaj.id}`} >
                             <div  key={minaj.id} className="four wide column" >
                            <div className="ui card" >
                            <div className="image" style={{height:"250px", overflow:"hidden"}} >
                                  <img src={minaj.image}/>
                            </div>

                                <div className="content" >
                                    <a className="header" style={{color:"grey"}}>{minaj.title}</a>
                                    <div >
                                        <p style={{color:"red"}}>Price : $ {minaj.price}</p>
                                    </div>
                                    
                                </div>
                                <div className="extra content">
                                   
                                     <button className="ui yellow button">Add to cart</button>
                                </div>
                            </div>
                        </div>
                      
                            </Link>
                        )
                    })
                }
            </div>
  
</>
    )
}

export default Home
