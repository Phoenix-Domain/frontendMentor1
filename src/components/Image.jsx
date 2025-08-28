function Image({ imgSrc, altText, style}){
  return(
    <img src={imgSrc} alt={`Photo of ${altText}`} className={style}/>
  )
}
export default Image;