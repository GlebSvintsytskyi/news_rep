import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { logout } from "../../store/userReducer";
import { useDispatch } from 'react-redux';

function Example({show, onHide}) {
  const dispatch = useDispatch();  

  return (
    <>
      <Modal
        size="sm"
        show={show}
        onHide={onHide}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Вы действительно хотите выйти?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Button variant="outline-success"  onClick={onHide}>Отмена</Button>
            <Button variant="outline-danger" onClick={() => dispatch( logout() ).then(onHide)}>Выйти</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;