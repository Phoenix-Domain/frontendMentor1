import Button from "./Button";
import Image from "./Image";

function Card(){
  return(
    <div className="bg-white w-fit h-fit p-3 rounded-xl m-auto">
      <Image imgSrc='src\assets\images\illustration-article.svg' style='rounded-xl'/>

    <Button />
    </div>
  )
}

export default Card;