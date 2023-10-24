import React from 'react'

function LoadingSpinner() {
  return (
    <div className="w-full h-16 flex items-center justify-center" style={{position: "absolute",
    top: "50%",
    bottom:" 50%"
}}>
      <div className="w-6 h-6 border-t-2 border-b-2 border-teal-500 rounded-full animate-spin"></div>
    </div>
  )
}

export default LoadingSpinner