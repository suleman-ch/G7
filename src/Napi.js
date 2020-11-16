import React from 'react'

class Napi extends React.Component{
    constructor()
    {
        super();
        this.state={
             neww:null
        }
    }
    componentDidMount()
    {
        fetch('https://reqres.in/api/unknown').then((resp)=>{
            resp.json().then((result)=>{
                this.setState({neww:result.data})
            })
        })
    }
    render(){
        return(
           
            <div>
            <h1 className="text-info">
                    Fetch API Data
                </h1>
                {
                    this.state.neww ?
                    this.state.neww.map((item,i)=>
                    <div><p>{i}
                    --- 
                    {item.name}
                    {item.year}
                    ----
                    {item.color}
                    ---
                    {item.pantone_value}
                    </p></div>
                    )
                    :
                    null
                }   
            </div>           
        );
    }
}

export default Napi;