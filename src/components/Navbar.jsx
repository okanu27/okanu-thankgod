import navLinks from "../data/navLinks";

function Navbar() {   
return (
    <nav className="flex justify-between items-center px-8 py-5 bg-grey text-black" style={{ boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)"}}>
        {/*logo*/}
            <h1 className="text-2x1 font-bold">
                5Cinemas
            </h1>

        {/*Navigation Links*/}
      <ul className="flex gap-8">
        {navLinks.map((link) => (
            <li key={link.id}>
                <a href={link.href} className="hover:text-blue-400 transition-colors duration-300">{link.name}</a>
            </li>
        ))}
      </ul>
    </nav>
    );
}
 export default Navbar;

 