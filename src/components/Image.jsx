function Image({ imgSrc, style, altText }){
  return(
    <img src={imgSrc} className={style} alt={`Photo of ${altText}`} />
  )
}

export default Image;