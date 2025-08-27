import Button from "./Button";
import Image from "./Image";

function Card(){
  return(
    <div className="bg-white w-fit h-fit p-5 rounded-2xl m-auto border-1 shadow-[7px_7px_0px_#000]">
      <Image imgSrc='src\assets\images\illustration-article.svg' style='rounded-xl'/>

    <Button />
    </div>
  )
}

export default Card;