import React, { useRef, useState } from 'react'
import "@needle-tools/engine";

export default function App() {
  return (
    <>
      <NeedleEngine>
        <Button />
      </NeedleEngine>
    </>
  )
}

function Button() {
  return <>
  <div className='main'>
    <ul className='navbar'>
      <li><PopUp/></li>
      <li><a href='https://majestic-blancmange-0c5b2b.netlify.app' target='_blank'>Contact</a></li>
    </ul>
  </div>
  </>
}

function NeedleEngine(props) {
    return <needle-engine>
        <div className="loading"></div>
        <div className="desktop ar">
          {props.children}
        </div>
      </needle-engine>;
}

function PopUp(){
  const [popup,setPop]=useState(false)
  const handleClickOpen=()=>{
      setPop(!popup)
  }
  const closePopup=()=>{
      setPop(false)
  }
  return(
      <div>
          <a onClick={handleClickOpen}>About</a>
          <div>
              {
                  popup?
                  <div className="main">
                      <div className="popup">
                          <div className="popup-header">
                              <h1>About this web</h1>
                              <h1 onClick={closePopup}>X</h1>
                          </div>
                          <div>
                          <p>Hey there, I hope you are having a great day.</p>
                          <p>This is my part of journey of Three.JS related web things.</p>
                          <p>If you'd like to visit my personal portfolio click on contact.</p>
                          <p>Thank you!</p>
                          </div>
                      </div>
                  </div>:""
              }
          </div>
      </div>
  )
}


declare global {
  namespace JSX {
    interface IntrinsicElements {
      'needle-engine': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}