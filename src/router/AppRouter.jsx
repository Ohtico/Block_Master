import React, { Component } from 'react'
import {
      BrowserRouter as Router,
      Switch,
      Route,
} from "react-router-dom";
import Detalle from '../components/Detalle';
import Login from '../components/Login';
import AppBlock from "../containers/AppBlock";
import Registro from "../components/Registro";
import EditarPer from '../components/EditarPer';

export default class AppRouter extends Component {
      render() {
            return ( 
                  <Router> 
                        <Switch>
                              <Route exact path="/editar" component={EditarPer}/>
                              <Route exact path="/detalle" component={Detalle}/>
                              <Route exact path="/registro" component={Registro}/>
                              <Route exact path="/login" component={Login}/>
                              <Route exact path="/" component={AppBlock}/>
                        </Switch>
                  </Router>
            )
      }
}
