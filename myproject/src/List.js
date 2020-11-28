import React, { useState } from 'react'
import './list.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-70%, -50%)',

    }
};
function List(props) {

    const [modalIsOpen, setIsOpen] = useState(false)
    function toggleModal() {
        setIsOpen(!modalIsOpen);
    }
    const items = props.items;


    const listItems = items.map((item, index) => {

        return (
            <div className="note" key={index}>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={toggleModal}
                    style={customStyles}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <span className="note-time-span">{item.key}</span>
                    <button onClick={toggleModal}>Close</button>
                </Modal>
                <div onClick={toggleModal}>
                    <li className="list-group-item note-item" >
                        <div className="col-8" >
                            <div className="list-item-text">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                        <div className="col text-right">
                            <span className="note-time-span">
                                {item.key}
                            </span>
                        </div>
                        <div className="col-auto text-right">
                            <button className="btn btn-primary form-btn" onClick={() => props.deleteItem(item.key)}>delete</button>
                        </div>
                    </li>
                </div>
            </div>
        )

    })

    return (
        <ul className="row list-group notes-list">{listItems}</ul>
    )

}
export default List;