import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f4f4f4', marginBottom: '20px' }}>
      <Link to="/" style={{ marginRight: '10px', textDecoration: 'none', color: '#000' }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: '10px', textDecoration: 'none', color: '#000' }}>
        About
      </Link>
      <Link to="/services" style={{ marginRight: '10px', textDecoration: 'none', color: '#000' }}>
        Services
      </Link>
      <Link to="/contact" style={{ textDecoration: 'none', color: '#000' }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
