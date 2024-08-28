import React from "react";
import Sdata from "./Sdata";
import Cards from "./Cards";

const Netflix = () => {
    return (
        <>
            <Cards
                key={Sdata[0].id}
                imgsrc={Sdata[0].imgsrc}
                title={Sdata[0].title}
                sname={Sdata[0].sname}
                link={Sdata[0].link} />

            <Cards
                key={Sdata[1].id}
                imgsrc={Sdata[1].imgsrc}
                title={Sdata[1].title}
                sname={Sdata[1].sname}
                link={Sdata[1].link} />
        </>
    )
}
export default Netflix;
