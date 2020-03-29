import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Por padrão o router-dom considera a / para todas as rotas, usa-se a propriedade exact na raiz para que leia exatamente a / */}
        <Route path="/" exact component={Logon}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/incidents/new" component={NewIncident}></Route>
      </Switch>
    </BrowserRouter>
  )
}