import React from 'react';
import { NavLink } from 'react-router-dom';


const Card =(props) =>{
    const myStyle={ 
        width:'100%', 
        height:'200px', 
        }; 
    return (
        <>
         <div className="col-md-4 mx-auto">
                <div className="card">
                  <img src={props.imgsrc} style={myStyle} className="card-img-top" alt={props.imgsrc} />
                  <div className="card-body" >
                    <img src={props.category} style={{width:'25px'}} alt={props.category}/>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                      {props.price}
                    </p>
                    <NavLink to="/" style={{borderRadius:"15px"}} className="btn btn-outline-success">
                      Add
                    </NavLink>
                  </div>
                </div>
              </div>
        </>

    );
};

export default Card;