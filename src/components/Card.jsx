import Button from "./Button";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Header from "./Header";

function Card(){
  return(
    <div className="bg-white max-w-[375px] h-fit p-5 rounded-2xl m-auto border-1 shadow-[7px_7px_0px_#000]">
      <Image imgSrc='src\assets\images\illustration-article.svg' style='rounded-xl'/>

      <Button />

      <Paragraph content='Published 21 Dec 2023' style='font-semibold' />

      <Header size='1' content='HTML & CSS foundations' style='text-2xl font-bold my-4' />

      <Paragraph content='These languages are the backbone of every website, defining structure, content and presentation' style='text-gray-500' />

     <div>
      <Image imgSrc='src\assets\images\image-avatar.webp' style='w-10'/>
     </div>

    </div>
  )
}

export default Card;