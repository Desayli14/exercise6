import React from 'react'

const Tampilan = (props) => {
    return (
        <div className="firstcomp-wrapper">
            <div className="img-thumb">
                <img src="https://reqres.in/img/faces/8-image.jpg" alt=""/>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
        )
}

export default Tampilan