function Button({content, style}){
  return(
    <button type='button' className={style}>
      {content}
    </button>
  )
}

export default Button;