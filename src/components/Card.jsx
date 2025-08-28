import Image from './Image'

function Card(){
  return(
    <div className='bg-[hsl(0,0%,12%)] max-w-[375px] h-fit p-4 rounded-2xl flex flex-column items-center'>
      <Image 
        imgSrc={`${import.meta.env.BASE_URL}avatar-jessica.jpeg`}
        altText='Jessica'
        style='rounded-full w-20'
      />
        
    </div>
  )
}

export default Card;