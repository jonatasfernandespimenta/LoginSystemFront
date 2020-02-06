import React from 'react';
import api from '../api';
import { useLocation, withRouter } from 'react-router-dom';

import { Container, Text, Row, Button } from '../styles/main';
import { error, success } from '../components/Toastify';
import { ToastContainer } from 'react-toastify';

function Profile({ history }) {
    
    const data = useLocation().state;

    function handleDelete() {
        api.delete('/delete', {
            headers: { _id: data.User._id }
        })
        .then(response => {
            console.log(response.data);
            history.push('/');
            error('Usuário deletado com sucesso!', 'top-left');
        })
        .catch(err => {
            error('Ocorreu um erro');
        });
    }

    function returnHome() {
        history.push('/');
    };

    return (
        <Container>
            <ToastContainer
			position="top-center"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnVisibilityChange
			draggable
			pauseOnHover
			/>
            <Row>
               
                <Text size={50} color={'#fafafa'}>
                    { data.type === 'Login' ? 'Você fez o Login!' : 'Você fez o Registro!'}
                </Text>
            </Row>

            <Row>
                <Text size={25} color={'#FFF'}>
                   Olá {data.User.nome}!
                </Text>
            </Row>

            <Row>
                <Button size={20} color={'#F00'} onClick={() => handleDelete()}>
                  DELETAR USUÁRIO
                </Button>

                <Row>
                    <Button size={20} color={'#f90'} onClick={() => returnHome()}>
                        Voltar ao menu principal
                    </Button>
                </Row>

            </Row>
            
        </Container>
    );
}

export default withRouter(Profile);
