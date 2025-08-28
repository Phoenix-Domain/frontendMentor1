import Image from './Image'
import Header from './Header'
import Text from './Text';
import Button from './Button'

function Card(){
  return(
    <div className='bg-[hsl(0,0%,12%)] max-w-[375px] h-fit p-10 rounded-xl flex flex-col items-center'>
      <Image 
        imgSrc={`${import.meta.env.BASE_URL}avatar-jessica.jpeg`}
        altText='Jessica'
        style='rounded-full w-20 mb-4'
      />

      <section className='flex flex-col items-center mb-4'>
        <Header 
          size='1'
          style='font-semibold text-white text-3xl'
          content='Jessica Randall'
        />  

        <Header 
          size='2'
          style='font-bold text-md text-[hsl(75,94%,57%)]'
          content='London, United Kingdom'
        />
      </section>

      <Text 
        style='text-white mx-2'
        content='"Front-end developer and avid reader."'
      />

      <section className='flex flex-col gap-3 w-full mt-5'>
        <Button content='Github' />
        <Button content='Frontend Mentor' />
        <Button content='LinkedIn' />
        <Button content='Twitter' />
        <Button content='Instagram' />
      </section>

    </div>
  )
}

export default Card;