import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, ContainerLogin, Input, Row } from '../styles/main';
import { error, success } from '../components/Toastify';
import { ToastContainer } from 'react-toastify';

import api from '../api';

function Login({ history }) {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    api.post('/login', { name: name, pass: password })
    .then(response => {
      const { data } = response;
      history.push({
        pathname: '/profile',
        state: data,
      });
    })
    .catch(err => {
      const { data } = err.response;
      error('Senha ou Nome errados', 'top-left');
      console.log(data);
    });
  }

  return (
    <Container>
      <ContainerLogin>
      <ToastContainer/>
        
       <form onSubmit={event => handleLogin(event)}>
        <Row>
          <h3>Nome: </h3>
          <Input type="text" value={name} onChange={event => setName(event.target.value)}/>
        </Row>

        <Row>
          <h3>Senha: </h3>
          <Input type="text" value={password} onChange={event => setPassword(event.target.value)}/>
        </Row>

        <Row>
        <Input type="submit" value="Logar!" style={{width: '50%'}}/>
        </Row>
        </form>
      </ContainerLogin>
    </Container>
  );
}

export default withRouter(Login);
