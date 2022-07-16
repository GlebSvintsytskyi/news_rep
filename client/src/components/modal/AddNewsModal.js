import React from "react";
import { Modal, Button, Form } from 'react-bootstrap';

const AddNewsModal = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
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
                    placeholder="Введите заголовок"
                />
                <Form.Control
                    className="mt-2"
                    placeholder="Введите описание"
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Добавить</Button>
            <Button variant="outline-success" onClick={onHide}>Закрыть</Button>
        </Modal.Footer>
    </Modal>
    )
}

export default AddNewsModal;
