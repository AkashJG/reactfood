import React from "react";
import Card from './Card'
import Menudata from './Menudata'

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Menu</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
             {
               Menudata.map((val,index)=>{
                 return <Card 
                   key={index}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  price={val.price}
                  category={val.category}
                 
                 />
               })
             }
           

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
