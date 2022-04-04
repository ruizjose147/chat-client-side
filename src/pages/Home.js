import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
          <section>
            <div>
              <Header/>
              <section className="container text-center py-5">
                <div >
                  <h1 className="display-6">Bienvenido a Tu CHAT</h1>
                  <p className="lead">Aquí puedes compartir con tus personas favoritas</p>
                </div>
                <div className="md-4 ">
                  <Link className="btn btn-primary px-5 mr-3" to = "/signup">Crea tu Cuenta</Link>
                  <Link className="btn px-5 text-white btn-info" to = "/login">Ingresar</Link>
                </div>
              </section>
            </div>
          </section>
          <Footer></Footer>
      </div>
    )
  }
}