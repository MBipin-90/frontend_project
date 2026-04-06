import React, { useEffect, useState } from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'
import axios from 'axios';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

function Add_product() {
  useEffect(() => {
    fetch_data();
  }, []);

  const [cate, setCate] = useState([]);
  const fetch_data = async () => {
    const obj = await axios.get(`http://localhost:3000/categoies`);
    setCate(obj.data)
  }

  //Add New Object in API (INSERT)  
  const [obj_cate, setData] = useState({
    id: "",
    cate_id: "",
    name: "",
    price: "",
    disc_price: "",
    sdesc: "",
    ldesc: "",
    image: "",
    stock: ""
  });

  const changeHandel = (a) => {
    setData({ ...obj_cate, id: new Date().getTime().toString(), [a.target.name]: a.target.value }); //a.target is the HTML element that triggered the event
    console.log(obj_cate);
  }

  function validation() {
    var result = true;

    if (obj_cate.name == "" || obj_cate.name == null) {
      toast.error('pleas enter your name');
      result = false;
      return false;
    }
    if (obj_cate.sdesc == "" || obj_cate.sdesc == null) {
      toast.error('pleas enter your shot description');
      result = false;
      return false;
    }
    if (obj_cate.ldesc == "" || obj_cate.ldesc == null) {
      toast.error('pleas enter your long description');
      result = false;
      return false;
    }
    if (obj_cate.price == "" || obj_cate.price == null) {
      toast.error('pleas enter your price');
      result = false;
      return false;
    }
    if (obj_cate.disc_price == "" || obj_cate.disc_price == null) {
      toast.error('pleas enter your discount price');
      result = false;
      return false;
    }
    if (obj_cate.image == "" || obj_cate.image == null) {
      toast.error('pleas enter your image');
      result = false;
      return false;
    }
    if (obj_cate.stock == "" || obj_cate.stock == null) {
      toast.error('pleas enter your stock');
      result = false;
      return false;
    }
    return result;
  }

  const submitHandel = async (a) => {
    a.preventDefault();
    if (validation()) {
      const obj = await axios.post(`http://localhost:3000/products`, obj_cate);
      setData({ ...obj_cate, cate_id: "", name: "", price: "", disc_price: "", sdesc: "", ldesc: "", image: "", stock: "" });
      swal({
        title: "product add Success!",
        text: "Your Item success full product add success!",
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
            <h4 class="page-title">Add Product</h4>
            <div className="container py-5">
              <div className="row py-5">
                {/* Form declaration , calling function -- submitHandel */}
                <form className="col-md-9 m-auto" onSubmit={submitHandel} method="post" role="form">
                  <div className="row">
                    <div className="form-group col-md-12 mb-3">
                      <label htmlFor="inputemail">Select Categories<span className='text-danger'>*</span></label>
                      <select type="text" value={obj_cate.cate_id} onChange={changeHandel} className="form-control mt-1" name="cate_id">
                        <option value="">--------- Select Categories ----------</option>
                        {
                          cate.map((value) => {
                            return (
                              <option value={value.id}>
                                {value.name}
                              </option>
                            )
                          })
                        }

                      </select>
                    </div>
                    <div className="form-group col-md-12 mb-3">
                      <label htmlFor="inputemail">Name <span className='text-danger'>*</span></label>
                      <input type="text" value={obj_cate.name} onChange={changeHandel} className="form-control mt-1" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group col-md-12 mb-3">
                      <label htmlFor="inputemail">Short Description<span className='text-danger'>*</span></label>
                      <textarea type="text" value={obj_cate.sdesc} onChange={changeHandel} className="form-control mt-1" name="sdesc"></textarea>
                    </div>
                    <div className="form-group col-md-12 mb-3">
                      <label htmlFor="inputemail">Long Description<span className='text-danger'>*</span></label>
                      <textarea type="text" value={obj_cate.ldesc} onChange={changeHandel} className="form-control mt-1" name="ldesc"></textarea>
                    </div>
                    <div className="form-group col-md-12 mb-3">
                      <label htmlFor="inputemail">Price<span className='text-danger'>*</span></label>
                      <input type="number" value={obj_cate.price} onChange={changeHandel} className="form-control mt-1" name="price" placeholder="Enter Price" />
                    </div>
                    <div className="form-group col-md-12 mb-3">
                      <label htmlFor="inputemail">Discounted Price</label>
                      <input type="number" value={obj_cate.disc_price} onChange={changeHandel} className="form-control mt-1" name="disc_price" placeholder="Enter Discounted Price" />
                    </div>
                    <div className="form-group col-md-12 mb-3">
                      <label htmlFor="inputemail">Enter Image URL<span className='text-danger'>*</span></label>
                      <input type="url" value={obj_cate.image} onChange={changeHandel} className="form-control mt-1" id="image" name="image" placeholder="Enter Image URL" />
                    </div>
                    <div className="form-group col-md-12 mb-3">
                      <label htmlFor="inputemail">Stock<span className='text-danger'>*</span></label>
                      <input type="text" value={obj_cate.stock} onChange={changeHandel} className="form-control mt-1" id="stock" name="stock" placeholder="Stock" />
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
            {/* <div class="row">
              <div class="col-md-12">
                <form action="/action_page.php">
                  <div className="mb-3 mt-3">
                    <label htmlFor="text">Product Name:</label>
                    <input type="text" className="form-control" id="text" placeholder="Enter Categories Name" name="cate_name" />
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="text">Product Image:</label>
                    <input type="url" className="form-control" id="text" placeholder="Enter Categories Image URL" name="cate_img" />
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="text">Product Price:</label>
                    <input type="url" className="form-control" id="text" placeholder="Enter Categories Image URL" name="cate_img" />
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="text">Product Discount Price:</label>
                    <input type="url" className="form-control" id="text" placeholder="Enter Categories Image URL" name="cate_img" />
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="text">Product Short Description:</label>
                    <input type="url" className="form-control" id="text" placeholder="Enter Categories Image URL" name="cate_img" />
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="text">Product Long Description:</label>
                    <input type="url" className="form-control" id="text" placeholder="Enter Categories Image URL" name="cate_img" />
                  </div>
                  <from>
                  <div className="mb-3 mt-3">
                    <label htmlFor="text">Product Stock:</label>
                    <label><input type='radio' className='from-conyrol' name='fruit' value='Instock'/></label>
                  </div>
                  </from>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>

              </div>
            </div> */}
          </div>
        </div>
        <AFooter />
      </div>
    </div>
  )
}

export default Add_product