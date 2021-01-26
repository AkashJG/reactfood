import React from "react";
import { NavLink } from "react-router-dom";


const Common = (props) => {
  return (
    <>
      <section id="header"  style={{marginTop:90}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1>
                {props.point} <strong className="brand-name">Food Wood</strong>
                </h1> 
                <h2 className="my-3" style={{fontFamily:'initial',fontSize:'revert'}}>
                {props.name}
                </h2>
                <h2 className="my-3">
                  {props.etc}
                </h2>
                
                <div className="mt-3">
                  <NavLink to={props.visit} style={{borderRadius:"19px"}} className="btn btn-outline-info">{props.btnname}</NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={props.imgsrc} className="img-fluid animated" alt="" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
