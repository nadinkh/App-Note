import React from 'react'
import './list.css'
function List(props) {
    const items = props.items;
    const listItems = items.map((item, index) => {

        return (
            <div className="note" key={index}>
                <div>
                    <li className="list-group-item note-item">
                        <div className="col-8">
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