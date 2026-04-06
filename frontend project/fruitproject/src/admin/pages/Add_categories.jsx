import React, { useState } from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'
import { data } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import swal from 'sweetalert';


function Add_categories() {

  const [obj_cate, setData] = useState({
    id: "",
    name: "",
    image: "",
  });

  const changeHandel = (a) => {
    setData({...obj_cate, id:new Date().getTime().toString(), [a.target.name]: a.target.value });
    console.log(obj_cate);
  }

  function validation(){
          var result = true;
  
          if (obj_cate.name== "" || obj_cate.name ==null){
              toast.error('pleas enter your name');
              result = false;
              return false;
          }
          if (obj_cate.image== "" || obj_cate.image ==null){
              toast.error('pleas enter your image');
              result = false;
              return false;
          }
          return result;
      }

  const submitHandel = async (a) => {
    a.preventDefault();
    if(validation()){
    const obj = await axios.post(`http://localhost:3000/categoies`, obj_cate);
    setData({ ...obj_cate, name: "", image: "" });
    swal({
      title: "categories add Success!",
      text: "Your Item success full add!",
      icon: "success",
      buttons: "OK!"
    })
    return false;
    }
  }

  return (
    <div class="wrapper">
      <AHeader />
      <div class="main-panel">
        <div class="content">
          <div class="container-fluid">
            <h4 class="page-title">Add Categories</h4>
            <div className="container py-5">
              <div className="row py-5">
                <form className="col-md-9 m-auto" onSubmit={submitHandel} method="post" role="form">
                  <div className="row">
                    <div className="form-group col-md-12 mb-3">
                      <label htmlFor="inputemail">Name</label>
                      <input type="text" value={obj_cate.name} onChange={changeHandel} className="form-control mt-1" id="name" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group col-md-12 mb-3">
                      <label htmlFor="inputemail">Enter Image URL</label>
                      <input type="url" value={obj_cate.image} onChange={changeHandel} className="form-control mt-1" id="image" name="image" placeholder="Enter Image URL" />
                    </div>

                  </div>

                  <div className="row">
                    <div className="col text-end mt-2">
                      <button type="submit" className="btn btn-success btn-lg px-3">Submit</button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
        <AFooter />
      </div>
    </div>
  )
}

export default Add_categories