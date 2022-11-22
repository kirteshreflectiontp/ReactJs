import './Mainfrontbg.css';
import React, { Component } from 'react'

class Mainfrontbg extends Component {
  render(){
  return (
    <div className='mainfrontbg'>
        <div className='heading'>
         <h1>{this.props.heading}</h1>
         <p>{this.props.text}</p>
        </div>
    </div>
  )
}
}

export default Mainfrontbg