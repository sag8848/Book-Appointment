import React from 'react'
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
         <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-black text-orange-100">404</div>
                    <h1 className="text-3xl font-bold text-gray-800 mt-2">Page Not Found</h1>
                    <p className="text-gray-500 mt-2 mb-6">The page you're looking for doesn't exist.</p>
                    <Link to= "/" className="btn-primary px-8 py-3">Go Home</Link>
                  </div>
    </div>
  )
}

export default PageNotFound