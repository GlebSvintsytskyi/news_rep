import React, { useState } from "react";
import { Container, Card, Row, Nav, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteNews } from '../actions/news';
import AddNewsModal from "./modal/AddNewsModal";


const NewsItem = () => {
    const newses = useSelector(state => state.content.news);
    const user = useSelector(state => state.auth.currentUser);
    const [newsVisible, setNewsVisible] = useState(false);
    const [swap, setSwap] = useState(false);
    const [news, setNews] = useState({});
    const dispatch = useDispatch();

    const swapFunc = (info) => {
        setNewsVisible(true);
        setSwap(true);
        setNews(info);
    }

    const onHideFanc = () => {
        setNewsVisible(false);
        setSwap(false);
    }
    
    return(
      
       <Row style={{marginRight: 0}}>{newses.map((info) => 
            <Row key={`item/${info.id}`}>
                <Container
                    className="justify-content-center"
                >
                <Card  style={{width: 600}} className="p-4 mt-5 m-auto"> 
                    <Nav className="d-flex flex-column mb-3">
                        <h3>{info.title}</h3>
                        <p>{info.description}</p>
                    </Nav> 
                    <Nav>
                        <Button disabled={info.userId !== user.id} variant="outline-success" onClick={() => swapFunc(info)}>Изменить</Button>
                        <Button disabled={info.userId !== user.id} variant="outline-danger" onClick={() => dispatch( deleteNews(info.id) )}>Удалить</Button>
                    </Nav> 
                </Card>
                <AddNewsModal news={news} swap={swap} show={newsVisible} onHide={() => onHideFanc()}/>
                </Container>
            </Row>
        )}
        </Row>
    )
}

export default NewsItem;