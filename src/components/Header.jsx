function Header({ size, content }){
  const Tag = `h${size}`;

  return(
    <Tag>
      {content}
    </Tag>
  )
}

export default Header;