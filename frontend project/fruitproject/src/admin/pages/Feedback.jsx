import React from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'

function Feedback() {
  return (
    <div class="wrapper">
      <AHeader />
      <div class="main-panel">
        <div class="content">
          <div class="container-fluid">
            <h4 class="page-title">Manage Feedback</h4>
            <div class="row">
              <div class="col-md-12">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Categories Name</th>
                      <th>Categories Image</th>
                      <th>Comment</th>
                      <th className='text-centre'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Bipin</td>
                      <td>bipin1234@gmail.com</td>
                      <td>Importent Fruit</td>
                      <td><img src="https://www.w3schools.com/bootstrap5/img_avatar3.png" width="50px" alt="" /></td>
                      <td>Hello</td>
                      <td className='text-centre'>
                        <button className='btn btn-primary me-2'>Edit</button>
                        <button className='btn btn-danger me-2'>Delete</button>
                      </td>
                    </tr>
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

export default Feedback