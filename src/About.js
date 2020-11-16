import React from 'react'

const About = () => {
    return(
        <>
        <div className="container">
            <div className="row" >
                <div className="col-6 mt-5">
                <h1 className="h mt-5 font-italic">About Us</h1>
                <p className="abc font-italic font-weight-lighter">At G7 Technologies, we develop innovative and creative products and services that provide total communication and information solutions. Among a plethora of services, web design and development, tailor made applications, ERPs, CRMs, e-commerce solutions, business-to-business applications, business-to-client applications, managed hosting and internet portal management are few that we offer. Satisfied clients around the globe bear testimony to the quality of our work.</p>
                </div>
                <div className="col-6 mt-5">
                <img style={{width:'500px', height:'400px',padding:'10px',}} src="images/about.jpg"/>

                </div>
            </div>
        </div>

        
        </>
    )
}

export default About;