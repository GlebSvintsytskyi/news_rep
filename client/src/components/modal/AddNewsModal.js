import React, { useState } from "react";
import { Modal, Button, Form, Row } from 'react-bootstrap';
import { createNews, updeateNews } from '../../actions/news';
import { useDispatch } from 'react-redux'

const AddNewsModal = ({news, swap, show, onHide}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    return (
        <Modal
            show={show}
            onHide={onHide}
            swap={swap}
            news={news}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               Добавте новость
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    className="mt-2"
                    placeholder={swap ? news.title : "Введите заголовок"} 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <Form.Control
                    className="mt-2"
                    placeholder={swap ? news.description : "Введите заголовок"}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Row>
            {
                swap
                ? 
                <Button variant="outline-danger" onClick={() => dispatch( updeateNews(news.id, title, description)).then(onHide) }>Изменить</Button>
                :
                <Button variant="outline-danger" onClick={() => dispatch( createNews(title, description) ).then(onHide)}>Добавить</Button>
            }
            <Button variant="outline-success" onClick={onHide}>Закрыть</Button>
            </Row>
        </Modal.Footer>
    </Modal>
    )
}

export default AddNewsModal;
