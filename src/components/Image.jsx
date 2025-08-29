function Image({ imgSrc, altText, style}){
  return(
    <img 
    src={`${import.meta.env.BASE_URL}${imgSrc}`} 
    alt={altText} 
    className={style} />
  )
}

export default Image;