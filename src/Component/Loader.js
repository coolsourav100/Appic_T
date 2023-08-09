import React from 'react'

const Loader = () => {
    const refreshHandler =()=>{
        window.location.reload(false);
    }
  return (
    <>
    <div className='container d-flex justify-content-center mt-4'>
    <div class="spinner-border text-secondary m-2" role="status">
</div>
  <h1 class="">Loading...</h1>
  <div>
  </div>
</div>
<div className='d-flex justify-content-center mt-4'>
    <button className='btn btn-primary mt-4' onClick={refreshHandler} > Refresh Page</button>
</div>
    </>
  )
}

export default Loader