import React from 'react';
import Sdata from "./Sdata";
import Cards from "./Cards";


const App = () => {

    function ncard(val) {
        return (
            <Cards key={val.id} imgsrc={val.imgsrc} title={val.title} sname={val.sname} link={val.link} />
        )
    }
    return (
        <>
            <h1 className='heading_style'>List of top 6 Hindi Webseries </h1>

            {Sdata.map(ncard)}

        </>
    )
}

export default App
