function Header({ size, style, content}){
  const Tag = `h${size}`;

  return(
    <Tag className={style}>
      {content}
    </Tag>
  )
}

export default Header;