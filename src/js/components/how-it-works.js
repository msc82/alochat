import React from 'react'
import {PlusSquare, Send, Video} from 'react-feather'

export default (props) => {

  return (
    <div className='features how-it-works'>
      <div className='container'>
        <h3>How it works</h3>
        <div className='row'>
          <div className='four columns'>
            <div className='feature'>
              <div className='feature-title'>1-Create a room</div>
              <PlusSquare size={35} />
              <div className='feature-text'>Set your room name and then your nickname.</div>
            </div>
          </div>
          <div className='four columns'>
            <div className='feature'>
              <div className='feature-title'>2-Share the link</div>
              <Send size={35} />
              <div className='feature-text'>Copy & Send your link to your guests.</div>
            </div>
          </div>
          <div className='four columns'>
            <div className='feature'>
              <div className='feature-title'>3-Voilà!</div>
              <Video size={35} />
              <div className='feature-text'>Start Chating totaly Safe.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
