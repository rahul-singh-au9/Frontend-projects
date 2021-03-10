import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Timeline.css';

const Timeline = () => {
  return (
    <>
      <div className=""Timeline id="timeline"> <br/> <hr/>
        <small>HIGHLIGHTS</small> <br/>
        <h4>TIMELINE</h4>
        <hr/>

        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h4>Web Developement at Attain-U</h4>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuqfg6LYKcJrnyTksPSRlNOl7MtVMwsWaog&usqp=CAU" alt="pen" height="20px" widht="30px"/>
            <small>2020-present</small>
            <p>I recently have joined the Attain-U as a Web Developer- . My major part of the work has been into the field of creating sustainable and flexible CI/CD (Continuous Integration & Continuous Development) pipelines which enables developers at Juniper to do rapid development. I am also exploring the role of container technology like Docker and container-orchrastation technologies like K8s, Swarm to create industry standard production environments</p>
          </div>
        </div>
        <hr/>

        <div className="row">
          <div className="col-md-10 offset-md-1">
            <span><h4>Undergraduation at NIT-J</h4></span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuqfg6LYKcJrnyTksPSRlNOl7MtVMwsWaog&usqp=CAU" alt="pen" height="20px" widht="30px"/>
            <small>2015-2019</small>
            <p>I am pursuing my under-graduation studies with major in I.C.T.(Information & Communication Technology). I have taken courses like DSA, OOPs, Computer Networks, IOT, Web-Data Management over the years and have better understanding of these subjects.I have also been part of S.B.G.(Student Body Govenance) scince my first year of college.</p>
          </div>
        </div>
        <hr/>

        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h4>Primary and Higher Education </h4>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuqfg6LYKcJrnyTksPSRlNOl7MtVMwsWaog&usqp=CAU" alt="pen" height="20px" widht="30px"/>
            <small>2003-2015</small>
            <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 93 merit. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p>
          </div>
        </div>
        <hr/>
      
      </div>
    </>
  )
}

export default Timeline
