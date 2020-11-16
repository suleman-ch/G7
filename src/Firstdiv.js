import React from 'react'


const FirstDiv = () => {
    return(
        <>
       
            <div className="row p-2 text-center bg-dark text-light">
                <div className="col-7">
                <p className="text-center font-12 p-0 m-0"><strong>Phone:</strong> <a href="tel://#" style={{color:'#2AA186'}}>+92 331 6583 106</a></p>
                {/* </div> */}
                {/* <div className="col-4"> */}
              <p className="text-center font-12  p-0 m-0"><strong>Email:</strong> <a href="#" style={{color:'#2AA186'}}>numantariq@g7technologies.com</a></p>
                </div>
                <div className="col-5">
                
                   <a href=""><img className="m m-2" src="images/facebook.png"></img></a> &nbsp;
                   <a href=""><img className="m m-2" src="images/Twitter.png"></img></a>&nbsp;
                   <a href=""><img className="m m-2" src="images/Youtube.png"></img></a>&nbsp;                  
                   <a href=""><img className="m m-2" src="images/soci.png"></img></a>&nbsp;
                
                </div>
            </div>
        </>
    )
}

export default FirstDiv;