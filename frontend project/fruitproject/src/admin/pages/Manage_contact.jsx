import React, { useEffect, useState } from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'
import axios from 'axios';

function Manage_contact() {
  useEffect(() => {
    fetch_data();
  }, []);

  const [data, setdata] = useState([]);

  const fetch_data = async () => {
    const obj = await axios.get(`http://localhost:3000/contact`);
    setdata(obj.data)
  }

  const delete_data = async (id) => {
    const obj = await axios.delete(`http://localhost:3000/contact/${id}`);
    fetch_data();
    alert('dlelet succes');
    return false;
  }

  return (
    <div class="wrapper">
      <AHeader />
      <div class="main-panel">
        <div class="content">
          <div class="container-fluid">
            <h4 class="page-title">Manage Contact</h4>
            <div class="row">
              <div class="col-md-12">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone no.</th>
                      <th>Message</th>
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
                            <td>{value.email}</td>
                            <td>{value.phone}</td>
                            <td>{value.Message}</td>
                            <td className='text-centre'>
                              <button className='btn btn-primary me-2'>Edit</button>
                              <button className='btn btn-danger me-2' onClick={() => delete_data(value.id)}>Delete</button>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <AFooter />
      </div>
    </div>
  )
}

export default Manage_contact