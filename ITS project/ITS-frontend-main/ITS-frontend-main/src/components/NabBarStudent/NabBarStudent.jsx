import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NabBarStudent.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const NabBarStudent = ({ studentInfo }) => {
    const [showProfile, setShowProfile] = useState(false); // State to toggle profile details
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/"); // Navigate back to the login page
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.navLeft}>
                Student Dashboard
            </div>
            <div className={styles.navRight}>
                {/* Email - Click to toggle profile details */}
                <p
                    className={styles.profileToggle}
                    onClick={() => setShowProfile(!showProfile)} // Toggle profile visibility
                >
                    {studentInfo.email || "student@example.com"}
                    <span className={styles.arrowIcon}>
                        {showProfile ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                </p>
                {/* Profile Details Dropdown */}
                {showProfile && (
                    <div className={styles.profileDropdown}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><strong>Name</strong></td>
                                    <td>{studentInfo.name || "Not Available"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Internship Domain</strong></td>
                                    <td>{studentInfo.internshipDomain || "Not Available"}</td>
                                </tr>
                                <tr>
                                    <td><strong>College</strong></td>
                                    <td>{studentInfo.college || "Not Available"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Mobile</strong></td>
                                    <td>{studentInfo.mobile || "Not Available"}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className={styles.logoutButton} onClick={handleLogout}>
                            Log Out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NabBarStudent;