import React from 'react'

const Home = () => {
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="">
                <img className="imgg w-100" src="images/one.jpg"
                    style={{height:'600px'}}
                />
                </div>
            </div>
        </div>

        <div className="container-fluid p-5">
            <div className="row mt-5" >
                <div className="col-md-6 col-lg-4">
                <div class="p-3 box-with-humber">
                    <h1 style={{color:'#32DBC6'}}>General Purpose</h1>
                    <p>The general purpose of G7 Technology is to develop and promote advanced information technologies for multi-user operation.</p>
                </div>
                </div>
                    <div className="col-md-6 col-lg-4">
                    <div class="p-3 box-with-humber">
                        <h1 style={{color:'#32DBC6'}}>Our Emphasis</h1>
                        <p>Our emphasis is on offering a high degree of product user friendliness through a positive, creative and focused company staff.</p>
                </div>
                </div>
                    <div className="col-md-6 col-lg-4">
                    <div class="p-3 box-with-humber">
                        <h1 style={{color:'#32DBC6'}}>Philosophy</h1>
                        <p>Our business philosophy is to assure the highest quality product, total client satisfaction, timely delivery of solutions and the best quality found in the industry.</p>
                </div>
                </div>
            </div>
        </div>
        <footer className="footer badge-dark text-center" style={{height:'300px'}}>
            <p className="pr" style={{paddingTop:'150px'}} >Copyright ©2020 All rights reserved | This website is made with ❤️  by G7 Technologies</p>
        </footer>    
        
       
        </>
    )
}

export default Home;