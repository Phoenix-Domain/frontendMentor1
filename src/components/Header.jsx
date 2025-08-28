function Header({ size, content, style }){
  const Tag = `h${size}`;

  return(
    <Tag className={style}>
      {content}
    </Tag>
  )
}

export default Header;