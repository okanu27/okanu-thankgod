
import navLinks from "../data/navLinks";


function Navbar() {
    
return (
    <nav className="bg-black nav-list">
        <div>
            <h1 className="logo">
                5Cinemas
            </h1>
        </div>
      <ul className="nav-list">
        {navLinks.map((link) => (
            <li key={link.id} className="nav-item">
                <a href={link.href}>{link.name}</a>
            </li>
        ))}
      </ul>
    </nav>
    );
}
 export default Navbar;

 