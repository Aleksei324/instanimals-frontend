import { Link } from 'react-router-dom';
import '../../styles/shared/Footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
      Diamond Dogs team<br/>
      Christian David Posada & Camilo Franco Moya <br/>
      Programación en ambiente web &bull; Universidad Autonoma de Occidente<br/>
      Iconos por Freepik en Flaticon &bull; Imagenes de Pixabay<br/>
      <Link to='/home'>home</Link> &bull; <Link to='/login'>login</Link>
    </footer>
  )
};
