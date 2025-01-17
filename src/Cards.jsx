import React from 'react';

const Cards = (props) => {
    return (
        <>
            <div className='cards'>
                <div className='card'>
                    <img src={props.imgsrc} alt="mypic" className='card__img' />
                    <div className='card__info'>
                        <span className='card__category'>{props.title}</span>
                        <h3 className='card__sname'>
                            {props.sname}
                        </h3>
                        <a href={props.link} target="_blank" rel="noreferrer">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;