function Footer() {
    const today = new Date().getFullYear();
    return (
        <section>
            <h1>
                <p>copyright {today}</p>
            </h1>
        </section>
    );
}
 export default Footer;