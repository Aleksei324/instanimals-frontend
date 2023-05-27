import { Link } from 'react-router-dom';
import '../../styles/shared/Footer.css'
import { useFooter } from '../../helpers';

export const Footer = () => {

  const onLogout = useFooter()
  return (
    <footer className='footer'>
      Diamond Dogs team<br/>
      Christian David Posada & Camilo Franco Moya <br/>
      Programación en ambiente web &bull; Universidad Autonoma de Occidente<br/>
      Iconos por Freepik en Flaticon &bull; Imagenes de Pixabay<br/>
      <Link to='/home'>Home</Link> &bull; <Link to='/login'>Login</Link> &bull; <a onClick={() => onLogout()}>Logout</a>
    </footer>
  )
};
