import React, { useState } from 'react'
import {useEffect} from "react"
import { useHistory } from 'react-router-dom'
const Productdetail = (props) => {
    const idData = props.match.params.product
   const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${idData}`)
        .then(res=>res.json())
        .then(json=>setProduct(json))
    }, [])

   const history = useHistory()
    return (

        <div className="container my-5 py-5">
          <button className="btn btn-warning" onClick={() => history.goBack()}>Back</button>
            <div className="row">
                <div className="col-sm-12 col-md-6" >
                    <img style={{height:"400px"}} src={product.image} alt="" />
                </div>
                <div className="col-sm-12 col-md-6 my-5">
                    <h1 style={{color:"tomato"}}>{product.title}</h1>
                    <h4>Price : ${product.price}</h4>
                    <p>{product.category}</p>
                    <p>{product.description}</p>
                    <button className="btn btn-warning lg">ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default Productdetail
