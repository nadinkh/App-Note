import React, { Component } from 'react'

export default class Note extends Component {
    render() {
        return (


            <div className="col-8">
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-8">{this.props.label}</div>
                        </div>
                        <div className="col text-right">
                            <span className="note-item-span">{this.props.date}</span>
                        </div>


                    </li>

                </ul>


            </div>











        )
    }

}
