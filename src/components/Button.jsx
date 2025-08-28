function Button ({ content }){
  return (
    <button type='button' className='w-full bg-[hsl(0,0%,20%)] text-white py-2 rounded-md font-bold hover:bg-[hsl(75,94%,57%)] hover:text-black ease-in-out duration-150'>
      {content}
    </button>
  )
}

export default Button