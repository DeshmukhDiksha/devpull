import React from 'react'

const Toast = ({ message, type}) => {
    
  return (
      <div className="toast toast-top toast-center">
          {type === 'info' && <div className="alert alert-info">
              <span>{message}</span>
          </div>}
          {type === 'success' && <div className="alert alert-success">
              <span>{message}</span>
          </div>}
          {type === 'error' && <div className="alert alert-error">
              <span>{message}</span>
          </div>}
      </div>
  )
}

export default Toast