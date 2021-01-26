import React, { useState } from "react";
import Foot from "./Foot";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [data,setData]=useState({
    Name:'',
    Mobile:'',
    Email:'',
    Msg:''
  });

  

  const inputEvnt =(event) =>{
  
     const {name,value} = event.target;
    setData((preVal) =>{
      return {
        ...preVal,
        [name]:value
      }
    
    })
  }
  const formSubmit =(e) =>{  
 //console.log(`Name -${data.Name} Mobile no -${data.Mobile} Email - ${data.Email} Mssage - ${data.Msg}`)
       axios.post('http://localhost:5000/create_user',data)
       .then(res =>{
          if(res.status === 201){
            toast.success('Sucessfully !!');
           
            }
          })
         .catch(err=>{
          toast.warning('Error !!');
       })
       e.preventDefault();
       e.target[0].value=null
       e.target[1].value=null
       e.target[2].value=null
       e.target[3].value=null
      };

  return (
    <>
     
      <div className="my-3">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container">
              <ToastContainer />
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit} autoComplete="off">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name please"
                name="Name"
                value={data.Name}
                onChange={inputEvnt}
                required={true}
                
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mobile No</label>
              <input
                type="number"
                className="form-control"
                id="mobile"
                placeholder="Mobile No"
                name="Mobile"
                value={data.Mobile}
                onChange={inputEvnt}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email@example.com"
                name="Email"
                value={data.Email}
                onChange={inputEvnt}
                required={true}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                id="Textarea"
                rows="3"
                name="Msg"
                value={data.Msg}
                onChange={inputEvnt}
                required={true}
               
              ></textarea>
            </div>
            <div className="col-6">
              <button className="btn btn-outline-primary" style={{borderRadius:"19px"}} type="submit">
                Submit 
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default Contact;
