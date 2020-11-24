
// import React, { Component } from 'react'
import React, { useState, useRef } from 'react';
import Note from './Note'
import uuidv4 from 'uuid/v4'


function Form() {
    const [input, setInput] = useState([])
    const inputNameRef = useRef()
    function handleAddInput(e) {
        const name = inputNameRef.current.value
        if (name === '') return
        console.log(name);
        setInput([...input, name])

        inputNameRef.current.value = null;
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="form-wrapper shadow">
                        <div className="form-group">
                            <input type="text" className="form-control title-input" placeholder="Title" />
                            <textarea className="form-control text-input" placeholder="Your Note" ref={inputNameRef} type="text" />
                            <button type="submit" className="btn btn-primary form-btn" onClick={handleAddInput}>Add</button>
                        </div>

                    </div>
                </div>
            </div>



            <div className="row">
                {/* <div className="col-8"></div> */}

                {input.map(name => {
                    let date = new Date(Date.now());
                    return <Note key={uuidv4()} label={name} date={date.toLocaleDateString()} />
                })}

            </div>



        </div >

    )
}
export default Form;