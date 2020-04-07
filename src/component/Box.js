import React from 'react'

export default function Box(props) {
    return (
        <div className='box'>
            {props.name}
            {props.info}
        </div>
    )
}

