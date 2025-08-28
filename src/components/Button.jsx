function Button ({ content }){
  return (
    <button type='button' className='w-full bg-[hsl(0,0%,20%)] text-white py-2 rounded-md font-bold'>
      {content}
    </button>
  )
}

export default Button