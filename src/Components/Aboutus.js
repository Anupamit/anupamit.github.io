import React from 'react'
import '../Styles/Aboutus.css'

function Aboutus() {
  const Github = (
    <a
      className="aboutLink"
      href="https://github.com/Anupamit">
      on Github
    </a>
  );
  const Linkdin = (
    <a
      className="aboutLink"
      href="https://www.linkedin.com/in/anupamit/">
      on Linkdin
    </a>
  );
  return (
      <div className="main" id='homeNav'>
          <div>
          <img className="avatar" src="https://avatars.githubusercontent.com/u/38889415?v=4" alt="Personal Avatar" />
            <h1 className="name">Anupam Kumar</h1>
            <p className="nameSub">
              I am a software engineer on Earth. I
              learned to code at {Github} and connect with my journey {Linkdin}.
              You can find all the projects I built below.
              Thanks for visiting and good luck coding!
            </p>
          </div>
      </div>  
  )
}

export default Aboutus