import React, { Component } from 'react'

import Header from '../layout/header'
import Footer from '../layout/footer'
 class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header name_page="BettyWorkShip"/>
        <div className="container">
          <h1 className="blue-text">Bienvenidos a la pagina web de tu empresa favorita</h1>
          <h6>BettyWorkShip</h6>
          <div className="row">
            <div className="col s12">
              <img
                src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bbvaopenmind.com%2Fwp-content%2Fuploads%2F2015%2F02%2FBBVA-OpenMind-Reinventar-la-empresa-3-Moore1.jpg&f=1&nofb=1"
                style={{width:"100%", height:"500px"}}
                alt="img"
              />
            </div>
          </div>
           <div className="row">
             <div className="col s12 m6">
              <div className="card">
                <span className="card-title">Usuarios</span>
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                   I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
             <div className="col s12 m6">
              <div className="card">
                <span className="card-title">Comentarios</span>
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                   I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
          </div>
          {/* otra card */}
          <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img alt="img" src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.insidehighered.com%2Fsites%2Fdefault%2Fserver_files%2Fmedia%2F62786426_thumbnail%2520%25282%2529.jpg&f=1&nofb=1"/>
                  <span className="card-title">Card Title</span>
                </div>
                <div className="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                <img alt="img" src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.insidehighered.com%2Fsites%2Fdefault%2Fserver_files%2Fmedia%2F62786426_thumbnail%2520%25282%2529.jpg&f=1&nofb=1"/>
                  <span className="card-title">Card Title</span>
                </div>
                <div className="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </React.Fragment>
    )
  }
}
export default Home;