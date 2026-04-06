import React, { useEffect, useState } from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'
import axios from 'axios';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

function Manage_categories() {

  useEffect(() => {
    fetch_data();
  }, []);

  const [data, setdata] = useState([]);

  const fetch_data = async () => {
    const obj = await axios.get(`http://localhost:3000/categoies`);
    setdata(obj.data)
  }

  const delete_data = async (id) => {
    const obj = await axios.delete(`http://localhost:3000/categoies/${id}`);
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
    name:"",
    image: ""
  });

  const editHandel = async (id) => {
    const obj = await axios.get(`http://localhost:3000/categoies/${id}`);
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
    const obj = await axios.put(`http://localhost:3000/categoies/${edit_cate.id}`, edit_cate);
    setEdit_cate({ ...edit_cate, name: "", image: "" });
    toast.success('Categories Updated success');
    fetch_data();
    return false;
  }

  return (
    <div class="wrapper">
      <AHeader />
      <div class="main-panel">
        <div class="content">
          <div class="container-fluid">
            <h4 class="page-title">Manage Categories</h4>
            <div class="row">
              <div class="col-md-12">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Categories Name</th>
                      <th>Categories Image</th>
                      <th className='text-centre'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((value, index, arr) => {
                        return (
                          <tr>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
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
                              <input type="text" value={edit_cate.name} onChange={changeHandel} className="form-control mt-1" id="name" name="name" placeholder="Enter your name" />
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

export default Manage_categories