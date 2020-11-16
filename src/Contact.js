import React from 'react'
import Form from './contact/Form'
import Block from './contact/Block' 

const Contact = () => {
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-7">
                <Form/>
                </div>
                <div className="col-5">
                <Block/>
                </div>
            </div>
        </div>

        
        </>
    )
}

export default Contact;