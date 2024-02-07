import React from 'react'
import Skeleton from 'react-loading-skeleton'

const LoadingMainPage = () => {
  return (
    <div>
      <Skeleton count={5} height={80}/>
    </div>
  )
}

export default LoadingMainPage
