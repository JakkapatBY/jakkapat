import React from 'react'

function Title1(props) {
  return (
    <div className="titlePort1">
    <h2> {props.title}</h2>
    {props.children}
        </div>
  )
}

export default Title1