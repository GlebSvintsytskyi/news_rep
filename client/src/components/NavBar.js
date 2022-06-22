import React from "react";
import { Navbar, Container, Nav, Button, NavLink} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ADD_ROUTE } from "../utills/const";

const NavBar = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth);
    const history = useHistory();
    
    const swapIsAuth = (bool) => {
        dispatch({type: 'SET_AUTH', payload: bool});
    }

    return(
    <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink style={{color:'white'}}>КупиДевайс</NavLink>
                    {isAuth ?
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button
                                variant={"outline-light"}
                                onClick={() => history.push(ADD_ROUTE)}
                            >
                                Добавить
                            </Button>
                            <Button
                                variant={"outline-light"}
                                className="ml-2"
                                onClick={() => swapIsAuth(false)}
                            >
                                Выйти
                            </Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button variant={"outline-light"} onClick={() => swapIsAuth(true)}>Авторизация</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
        );
}

export default NavBar;