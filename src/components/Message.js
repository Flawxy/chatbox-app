import React from 'react'

const Message = ({ content, pseudo, pseudoLog }) => {
  if (pseudo === pseudoLog) {
    return (
      <p className='user-message'>
        {content}
      </p>
    )
  } else {
    return (
      <p className='not-user-message'>
        <strong>{pseudo} :</strong> {content}
      </p>
    )
  }
}

export default Message
