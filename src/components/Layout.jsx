import React from 'react'

const Loyout = ({children, className=""}) => {
  return (
    <div className={` h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-6  ${className}`}>
      {children}
      
      
    </div>
  )
}

export default Loyout
