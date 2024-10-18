import React from 'react'

const Index = () => {
  const NavigateToLogin = () => {
    window.location.href = '/login'
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="bg-white rounded-lg p-8 shadow-lg shadow-blue-500/50 text-center">
      <h1 className="text-2xl font-bold mb-4">Chat App</h1>
      <button className="btn btn-primary" onClick={NavigateToLogin}>
        Press Here to Login
      </button>
    </div>
  </div>
  )
}

export default Index
