
function Header(props) {
  return (
    <div
      className='position-relative'
      style={{
        backgroundImage:
          'url("https://carter.eu/blog/wp-content/uploads/2021/01/JOALI-Malediwy-wakacje.jpg")',
          height: '250px',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'bottom',
          Zindex: 0,
      }}>
        <div style= {{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            Zindex: '-10',
        }}></div>
        {props.children}
    </div>
  );
}
export default Header
