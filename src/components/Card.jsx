import Button from "./Button";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Header from "./Header";

function Card(){
  return(
    <div className="bg-white w-fit h-fit p-5 rounded-2xl m-auto border-1 shadow-[7px_7px_0px_#000]">
      <Image imgSrc='src\assets\images\illustration-article.svg' style='rounded-xl'/>

    <Button />

    <Paragraph content='Published 21 Dec 2023' style='font-semibold' />

    <Header size='1' content='HTML & CSS foundations' style='text-3xl font-bold my-4' />
    </div>
  )
}

export default Card;