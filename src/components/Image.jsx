function Image({ imgSrc, altText, style}){
  return(
    <img src={imgSrc} alt={`Photo of ${altText}`} style={style}/>
  )
}
export default Image;