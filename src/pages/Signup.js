import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { signup, signInWithGoogle, signInWithGitHub } from '../helpers/auth';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.googleSignIn = this.googleSignIn.bind(this);
		this.githubSignIn = this.githubSignIn.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async handleSubmit(event) {
		event.preventDefault();
		this.setState({ error: ''});
		try {
			await signup(this.state.email, this.state.password);
		} catch (error) {
			this.setState({ error: error.message });
		}
	}

    
	async googleSignIn() {
		try {
			await signInWithGoogle();
		} catch (error) {
			this.setState({ error: error.message });
		}
	}

	async githubSignIn() {
    	try {
      		await signInWithGitHub();
    	} catch (error) {
      		this.setState({ error: error.message });
    	}
  	}


	render() {
		return (
			<div className="container">
                <form 
				className="mt-5 py-5 px-5"
				autoComplete= "off"
				onSubmit={this.handleSubmit}>
                    <h1>Crea tu cuenta en <Link className="title ml-4" to="/">Tu Chat</Link></h1>
                    <p>Complete el siguiente formulario para iniciar sesión en su cuenta.</p>
                    <div className="form-group">
                        <input className="form-control" placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
                    </div>
                    <div>
                        <input className="form-control"placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
                    </div>
                    <div className="form-group">
                        {this.state.error ? <p>{this.state.error}</p> : null}
                        <button className="btn btn-dark px-5" type="submit">Registrarse</button>
						<hr></hr>
						<p>También puede iniciar sesión con cualquiera de estos servicios</p>
						<button className="btn mr-3 text-white" onClick={this.googleSignIn} type="button">
						Ingresar con Google
						</button>
						<button className="btn mr-3 text-white" onClick={this.githubSignIn} type="button">
						Ingresar con GitHub
						</button>
                        <hr></hr>
                        
                    </div>
                </form>
				<Footer></Footer>
			</div>
		)
	}
}