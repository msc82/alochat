import React from 'react'
import CopyLink from './copy-link'

export default (props) => {

  return (
    <div id='awaiting-peers' className='hero container'>
      <h3>Waiting for peers...</h3>
      <p>Copy & Share your link to start your video call</p>
      <CopyLink />
    </div>
  )

}
