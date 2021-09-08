import React, { Component } from 'react'
import axios from 'axios'
import md5 from 'md5'
import {Tasa, Tetera, But, Boligrafo, Voto, Enlace} from '../style/StyledAll'
import {Link} from 'react-router-dom'
const url = 'https://api-sprint-dos.herokuapp.com/usuario'
//  

export default class Login extends Component {

    constructor(){
        super();
        this.state = {
            form:{
                username: '',
                password: ''
            }
        }
    }

    iniciarSesion = async () => {
        await axios.get(url, { params: { username: this.state.form.username, password: md5(this.state.form.password) } })
            .then(response => {
                return response.data;
            })
            .then(response => {
                if (response.length > 0) {
                    var respuesta = response[0];
                    alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                } else {
                    alert('El usuario o la contraseña no son correctos');
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value 
            }
        });
        console.log(this.state.form) //imprimir todo el estado 
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.iniciarSesion();
    }

    render() {
        return (
            <Tasa>
            <form onSubmit={this.handleSubmit} className="form-signin">
                <Boligrafo>Inicio de sesión</Boligrafo>
                    <Tetera>
                        <But
                            type="email"
                            id="inputEmail"
                            className="form-control mt-1"
                            placeholder="Email"
                            required=""
                            name="username"
                            onChange={this.handleChange}/>
                        <But
                            type="Password"
                            id="inputPassword"
                            className="form-control mt-1"
                            placeholder="Contreña"
                            required=""
                            name="password"
                            onChange={this.handleChange}/>
                        <Voto type="submit">Login</Voto>
                    </Tetera>
                    <Tasa>
                        <Link to="/registro" ><Enlace>Create new account </Enlace></Link>
                    </Tasa>
                  
            </form>
        </Tasa>
        )
    }
}
