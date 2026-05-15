import React from 'react'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { CgProfile } from "react-icons/cg";

const Navbar = ({ onExportPDF }) => {
  return (
    <>
      <Toaster />
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <button className="navbar-brand" style={{ background: 'none', border: 'none', color: 'white' }} disabled>
            Task Manager
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="btn btn-outline-success mx-1" aria-current="page" to="/">All Task</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-danger mx-1" aria-current="page" to="/add">Add Task</Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile"
                  className="mx-1 d-flex align-items-center text-decoration-none"
                  style={{ color: '#ffc801', padding: '0.375rem 0.75rem', borderRadius: '0.25rem', transition: 'color 0.2s ease'}}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#ffc801')}
                >
                  <CgProfile size={18} className="me-1" />
                  User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar