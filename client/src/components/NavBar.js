import React, {useState} from "react";
import { Navbar, Container, Nav, Button, NavLink} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import AddNewsModal from "./modal/AddNewsModal";
import { useHistory } from 'react-router-dom'
import {REGISTRATION_ROUTE} from '../utills/const'

const NavBar = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const history = useHistory()
    const [newsVisible, setNewsVisible] = useState(false);

    return(
    <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink style={{color:'white'}}>NavBar</NavLink>
                    {isAuth ?
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button
                                variant={"outline-light"}
                                onClick={() => setNewsVisible(true)}
                            >
                                Добавить
                            </Button>
                            <Button
                                variant={"outline-light"}
                                className="ml-2"
                            >
                                Выйти
                            </Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button variant={"outline-light"} onClick={() => history.push(REGISTRATION_ROUTE)}>Авторизация</Button>
                        </Nav>
                    }
                    <AddNewsModal show={newsVisible} onHide={() => setNewsVisible(false)}/>
                </Container>
            </Navbar>
        );
}

export default NavBar;