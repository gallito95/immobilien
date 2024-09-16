import './navbar.scss'
import Logo from '../../assets/logo.png'
import Toggle from '../../assets/toggle.svg'
import { useState,useEffect } from 'react'

const Navbar = () => {

const [open, setOpen] = useState(false)

useEffect(() => {
  // Funktion, die den Zustand bei Änderungen der Fenstergröße aktualisiert
  const handleResize = () => {
    if (window.innerWidth >= 738) {
      setOpen(false); // Zustand wird umgeschaltet
    }
  };

  // Event Listener für die Fenstergrößenänderung hinzufügen
  window.addEventListener('resize', handleResize);

  // Cleanup-Funktion, um den Event Listener beim Verlassen der Komponente zu entfernen
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []); // Leer, damit es nur einmal hinzugefügt wird

  return(
    <nav>
        <div className="left"> 
          <a className='logoContainer' href='/'>
              <img className='logo'  src={Logo} alt="Logo"/>
             <span> Gallo Estate</span> 
             </a>
          <a href='/'> Home</a>
          <a href='/'> About</a>
          <a href='/'> Contact</a>
          <a href='/'> Agents</a>
        </div>
        <div className="right">
        <a href='/'> Sign In</a>
        <a className="register" href='/'> Sign Up</a>
        <div className="menuicon">
          <img src={Toggle} alt="Toggle Icon" onClick={() => setOpen(!open)}/>
        </div>
        <div className={open? "menu active" :"menu"}>
          <a href='/'> Home</a>
          <a href='/'> About</a>
          <a href='/'> Contact</a>
          <a href='/'> Agents</a>
          <a href='/'> Sign In</a>
          <a href='/'>Sign Up</a>
        </div>
        </div>
       
    </nav>
  )
}

export default Navbar