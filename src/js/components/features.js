import React from 'react'
import {Shield, Users, Lock} from 'react-feather'

export default (props) => {

  return (
    <div className='features'>
      <div className='container'>
        
        <div className='row'>
          <div className='four columns'>
            <div className='feature'>
              <div className='feature-title'>Secure rooms</div>
              <Shield size={35} />
              <div className='feature-text'>Data are generated with a unique encrypted hash.</div>
            </div>
          </div>
          <div className='four columns'>
            <div className='feature'>
              <div className='feature-title'>No limit on room size</div>
              <Users size={35} />
              <div className='feature-text'>Invite as many people to the room as you want.</div>
            </div>
          </div>
          <div className='four columns'>
            <div className='feature'>
              <div className='feature-title'>End-to-end encryption</div>
              <Lock size={35} />
              <div className='feature-text'>All data is sent via an end-to-end encrypted.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
