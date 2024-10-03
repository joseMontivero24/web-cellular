import { useEffect, useState } from "react"

export const Header = () => {
    return (
        <>
            <Menu />
            <header className="cabecera" id="home">
                <div className="contenedor caja-header">
                    <div className="logo">
                        <img width="400px" height="400px" src="../public/img/popular_1.png" alt="imagen-celu" />
                    </div>

                    <div className="cabecera-info">
                        <h2>Celulares del Momento</h2>
                        <h1 className="cabecera-titulo degradado">Cell House</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, molestiae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, natus.lorem10 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, voluptas.</p>

                        <button className="btn">Ver Más</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export const Menu = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Manejar el scroll para cambiar el color del menú
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Función para manejar la apertura y cierre del menú en móviles
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`content-menu ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                {/* <i className="fa-solid fa-mobile-screen-button"></i> */}
                <span>CH</span>
            </div>

            {/* Icono de menú hamburguesa para móviles */}
            <i className="fa-solid fa-bars nav" onClick={toggleMenu}></i>

            {/* Links del menú que se ocultan/mostraran en móviles */}
            <nav className={`menu-links ${isMenuOpen ? 'active' : ''}`}>
                <div className="content-links">
                    <a href="#home" onClick={toggleMenu}>Inicio</a>
                    <a href="#hero" onClick={toggleMenu}>Promos</a>
                    <a href="#about" onClick={toggleMenu}>Sobre Nosotros</a>
                    <a href="#android" onClick={toggleMenu}>Android</a>
                    <a href="#apple" onClick={toggleMenu}>Apple</a>
                    <a href="#contact" onClick={toggleMenu}>Contacto</a>

                </div>
            </nav>
        </div>
    )
};
