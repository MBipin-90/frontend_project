import React from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'
function Dashboard() {
  return (
    <div>
      <style>
        {`
        body {
  background: #f5f7fb;
  font-family: 'Poppins', sans-serif;
}

.page-title {
  font-weight: 600;
  margin-bottom: 25px;
}

/* Glass Cards */
.glass-card {
  padding: 25px;
  border-radius: 18px;
  color: #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-8px) scale(1.02);
}

.glass-card p {
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 8px;
}

.glass-card h2 {
  font-size: 32px;
  font-weight: 700;
}

/* Gradients */
.gradient-blue {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
}

.gradient-purple {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.gradient-green {
  background: linear-gradient(135deg, #43e97b, #38f9d7);
}

.gradient-orange {
  background: linear-gradient(135deg, #fa709a, #fee140);
}

/* Beauty Cards */
.beauty-card {
  background: #ffffff;
  padding: 25px;
  border-radius: 18px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.08);
}

.beauty-card h5 {
  font-weight: 600;
  margin-bottom: 15px;
}

/* Chart */
.chart-beauty {
  height: 260px;
  background: linear-gradient(135deg, #fdfbfb, #ebedee);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
}

/* Activity */
.activity-beauty {
  list-style: none;
  padding: 0;
  margin: 0;
}

.activity-beauty li {
  padding: 12px 0;
  font-size: 14px;
  border-bottom: 1px dashed #eee;
}

.activity-beauty li:last-child {
  border-bottom: none;
}
        `}
      </style>
    <div className="wrapper">
      <AHeader />

      <div className="main-panel">
        <div className="content container-fluid">
          <h4 className="page-title">Dashboard</h4>

          {/* Beautiful Stat Cards */}
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className="glass-card gradient-blue">
                <p>Total Users</p>
                <h2>1,245</h2>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="glass-card gradient-purple">
                <p>Revenue</p>
                <h2>$12,430</h2>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="glass-card gradient-green">
                <p>Orders</p>
                <h2>320</h2>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="glass-card gradient-orange">
                <p>Pending</p>
                <h2>18</h2>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="row mt-5">
            <div className="col-md-8">
              <div className="beauty-card">
                <h5>Sales Analytics</h5>
                <div className="chart-beauty">
                  Beautiful Chart Area
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="beauty-card">
                <h5>Recent Activity</h5>
                <ul className="activity-beauty">
                  <li>✨ New user registered</li>
                  <li>💳 Payment completed</li>
                  <li>📦 Order delivered</li>
                  <li>⏳ Approval pending</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <AFooter />
      </div>
    </div>
    </div>
  )
}

export default Dashboard