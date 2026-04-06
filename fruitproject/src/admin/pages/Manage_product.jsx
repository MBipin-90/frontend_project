import React, { useEffect, useState } from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'
import axios from 'axios';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

function Manage_product() {
  useEffect(() => {
    fetch_data();
  }, []);

  const [data, setdata] = useState([]);

  const fetch_data = async () => {
    const obj = await axios.get(`http://localhost:3000/products`);
    setdata(obj.data)
  }

  const delete_data = async (id) => {
    const obj = await axios.delete(`http://localhost:3000/products/${id}`);
    fetch_data();
    swal({
      title: "Delete Success!",
      text: "Your Item success full Delete!",
      icon: "success",
      buttons: "OK!"
    })
    return false;
  }

  // edit 

  const [edit_cate, setEdit_cate] = useState({
    id: "",
    name: "",
    image: "",
    disc_price: "",
    sdesc: "",
    ldesc: "",
    stock: ""
  });

  const editHandel = async (id) => {
    const obj = await axios.get(`http://localhost:3000/products/${id}`);
    console.log(obj.data);
    setEdit_cate(obj.data);
    return false;
  }

  const changeHandel = (e) => {
    setEdit_cate({ ...edit_cate, [e.target.name]: e.target.value });
    console.log(edit_cate);
  }

  const submitHandel = async (e) => {
    e.preventDefault();
    const obj = await axios.put(`http://localhost:3000/products/${edit_cate.id}`, edit_cate);
    setEdit_cate({ ...edit_cate, name: "", image: "" });
    toast.success('Product Updated success');
    fetch_data();
    return false;
  }

  return (
    <div class="wrapper">
      <AHeader />
      <div class="main-panel">
        <div class="content">
          <div class="container-fluid">
            <h4 class="page-title">Manage Product</h4>
            <div class="row">
              <div class="col-md-12">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Categoies Id</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Discount Price</th>
                      <th>Short Desc</th>
                      <th>Long Desc</th>
                      <th>Stock</th>
                      <th>Product Image</th>
                      <th className='text-centre'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((value, index, arr) => {
                        return (
                          <tr>
                            <td>{value.id}</td>
                            <td>{value.cate_id}</td>
                            <td>{value.name}</td>
                            <td>{value.price}</td>
                            <td>{value.disc_price}</td>
                            <td>{value.sdesc}</td>
                            <td>{value.ldesc}</td>
                            <td><span className='badge bg-success p-2 '>{value.stock}</span></td>
                            <td><img src={value.image} width="50px" alt="" /></td>
                            <td className='text-centre'>
                              <button className='btn btn-primary me-2' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editHandel(value.id)}>Edit</button>
                              <button className='btn btn-danger me-2' onClick={() => delete_data(value.id)}>Delete</button>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>

                <div className="modal" id="myModal">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      {/* Modal Header */}
                      <div className="modal-header">
                        <h4 className="modal-title">Edit Categories</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                      </div>
                      {/* Modal body */}
                      <div className="modal-body">
                        <form className="col-md-9 m-auto" method="post" role="form">
                          <div className="row">

                            <div className="form-group col-md-12 mb-3">
                              <label htmlFor="inputemail">Name</label>
                              <input type="text" value={edit_cate.name} onChange={changeHandel} className="form-control mt-1" id="name" name="name" placeholder="Enter your Name" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                              <label htmlFor="inputemail">Discount Price</label>
                              <input type="text" value={edit_cate.disc_price} onChange={changeHandel} className="form-control mt-1" id="disc_price" name="disc_price" placeholder="Enter your Discount Price" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                              <label htmlFor="inputemail">Short Description</label>
                              <input type="text" value={edit_cate.sdesc} onChange={changeHandel} className="form-control mt-1" id="sdesc" name="sdesc" placeholder="Enter your Short Description" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                              <label htmlFor="inputemail">Long Description</label>
                              <input type="text" value={edit_cate.ldesc} onChange={changeHandel} className="form-control mt-1" id="ldesc" name="ldesc" placeholder="Enter your Long Description" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                              <label htmlFor="inputemail">Stock</label>
                              <input type="text" value={edit_cate.stock} onChange={changeHandel} className="form-control mt-1" id="stock" name="stock" placeholder="InStock / OutStock" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                              <label htmlFor="inputemail">Enter Image URL</label>
                              <input type="url" value={edit_cate.image} onChange={changeHandel} className="form-control mt-1" id="image" name="image" placeholder="Enter Image URL" />
                            </div>

                          </div>

                          <div className="row">
                            <div className="col text-end mt-2">
                              <button type="submit" className="btn btn-success btn-lg px-3" data-bs-dismiss="modal" onClick={submitHandel}>Submit</button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* Modal footer */}
                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <AFooter />
      </div>
    </div>
  )
}

export default Manage_product