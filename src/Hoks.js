import React, { useState } from 'react'

const Hoks = () => {

    const [num, setNum] = useState(0);
    
    return(
        <>
        <h2>{num}</h2>
        <button onClick={() => setNum(num + 1)}>increament</button>
        <button onClick={() => setNum(num - 1)}>decriment</button>
        </>
    )
}

export default Hoks;