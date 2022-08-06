import React, { useState } from 'react';
import { Container, Card, Form, Row, Button} from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { registration, login } from '../actions/auth';
import { REGISTRATION_ROUTE } from '../utills/const';
import { LOGIN_ROUTE, NEWS_ROUTE } from '../utills/const';
import { useDispatch } from 'react-redux';


const Auth = () => {
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const pushRegistration =  () => {
        return async dispatch => {
            dispatch(registration(email, password));
            history.push(NEWS_ROUTE);
        }
    }

    const pushLogin =  () => {
        return async dispatch => {
            dispatch(login(email, password));
            history.push(NEWS_ROUTE);
        }
    }


    return(
        <Container
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
    >
        <Card style={{width: 600}} className="p-5">
            <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
            <Form className="d-flex flex-column">
                <Form.Control
                    className="mt-3"
                    placeholder="Введите ваш email..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Введите ваш пароль..."
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                />
                <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    {isLogin ?
                        <Row>
                            <div>
                                   Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            <Button
                                variant={"outline-success"}
                                onClick={() => dispatch( pushLogin() )}
                            >
                                Войти
                            </Button>
                        </Row>
                        :
                        <Row>
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                                
                            <Button
                                variant={"outline-success"}
                                onClick={() => dispatch( pushRegistration() )}
                            >
                                Регистрация
                            </Button>
                        </Row>   
                    }
                </Row>

            </Form>
        </Card>
    </Container>
    )
}

export default Auth;