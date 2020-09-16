import React from 'react';
import Sidebar from './Sidebar';
import Contact from './Contact';

const Contact2 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar/>
          </div>
          <div className="col-md-10">
            <Contact/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact2
