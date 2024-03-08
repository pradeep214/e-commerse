


function Allroutes({ props }) {



  return (
    <div className='flex'>
      <h1 onClick={() => props.handle(true)}>Products</h1>
      <h1 onClick={() => props.handle(false)}>Cart</h1>



    </div>
  )
}

export default Allroutes