import React, { Component } from 'react'

import Header from '../layout/header'
import Footer from '../layout/footer'
 class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header name_page="BettyWorkShip"/>
        <div className="container">
          <h1>Bienvenidos a la pagina web de tu empresa favorita</h1>
          <h6>BettyWorkShip</h6>
           <div class="row">
             <div class="col s12 m6">
              <div class="card">
                <span class="card-title">Usuarios</span>
              </div>
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                   I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
             <div class="col s12 m6">
              <div class="card">
                <span class="card-title">Usuarios</span>
              </div>
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                   I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
          </div>
          {/* otra card */}
          <div class="row">
            <div class="col s12 m6">
              <div class="card">
                <div class="card-image">
                  <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.insidehighered.com%2Fsites%2Fdefault%2Fserver_files%2Fmedia%2F62786426_thumbnail%2520%25282%2529.jpg&f=1&nofb=1"/>
                  <span class="card-title">Card Title</span>
                </div>
                <div class="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
            </div>
            <div class="col s12 m6">
              <div class="card">
                <div class="card-image">
                  <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fcomunidad.iebschool.com%2Fiebs%2Ffiles%2F2015%2F10%2Fcreatividad-en-la-empresa.jpg&f=1&nofb=1"/>
                  <span class="card-title">Card Title</span>
                </div>
                <div class="card-content">
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