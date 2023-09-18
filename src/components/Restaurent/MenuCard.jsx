import React from 'react'

import "../../styles/menuCard.css"

function MenuCard(props) {
    const {menu} = props;
    return (
        <>
        {menu.map((m,id)=> {
        return(
        <div key={id} >
        <div className="card m-2" style={{width: "18rem"}}>
        <img className="card-img-top" src={m.image} alt="Menu" style={{ height:"200px"}} />
        <div className="card-body">
            <h5 className="card-title"> {m.name} : {m.price} </h5>
            <p className="card-text"> {m.description} </p>
            <a href="#buy" className="btn btn-primary">Order Now</a>
        </div>
        </div>
        </div>
        )
    })}
    </>
    )
}

export default MenuCard;