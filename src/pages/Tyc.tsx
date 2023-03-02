import { Footer } from "../components";
import "../styles/Tyc.css"

export const Tyc = () => {
  return (
      <div>
        <div className="tyc component">
          <h1>Términos y condiciones</h1>

          <h3>Requisitos de edad mínima</h3>

          <p>
            Como persona, empresa, organización sin ánimo de lucro o un centro educativo, si no tienes la edad mínima de 18 años, debes contar con el permiso de tu
            padre, madre o tutor legal para utilizar nuestros servicios. Pide a tu padre, madre o tutor legal que lea estos términos contigo.
            Si eres padre, madre o tutor legal y permites a tu hijo/a que utilice los servicios, se te aplican estos términos y eres muy responsable de la actividad
            que realice en los servicios.
          </p>

          <h3>Respeta a los demás</h3>

          <p>
            Queremos mantener un entorno respetuoso para todos y, por ello, debes seguir estas normas de conducta básicas:
          </p>

            <ul>
              <li>Cumplir la legislación aplicable, incluidas las leyes de control de exportaciones, las de sanciones y las de tráfico de personas.</li>
              <li>Respetar los derechos de los demás, incluidos los de privacidad y propiedad intelectual.</li>

              <li>
                No abusar o causar daños a otras personas ni a uno mismo (ni coaccionar o fomentar tales conductas); por ejemplo, a través del engaño, la estafa,
                la suplantación de identidad ilegal, la difamación, el acoso, la intimidación o el acechamiento.
              </li>

              <li>
                No hacer un uso inadecuado de los servicios ni dañarlos, interrumpirlos o interferir con ellos; por ejemplo, usándolos o accediendo a ellos de
                forma fraudulenta o engañosa, introduciendo software malicioso, enviando spam, realizando ataques de piratería o eludiendo nuestros sistemas o
                medidas de protección.
              </li>
            </ul>

          <h3>Tu contenido</h3>

          <p>
            Algunos de nuestros servicios te dan la oportunidad de hacer que tu contenido esté disponible públicamente. Por ejemplo, puedes publicar una imagen de
            tu perrito en su cumpleaños, o de tu gato mientras tira un vaso al piso. 
            Si crees que alguien está infringiendo tus derechos de propiedad intelectual, puedes notificárnoslo y tomaremos las medidas oportunas. Por ejemplo,
            podemos pedirles amablemente que retire su contenido.
          </p>

          <h3>Garantía</h3>

          <p>
            Ofrecemos nuestros servicios con un nivel de competencia y diligencia razonable. Te pedimos que, si no mantenemos el nivel de calidad que se describe en
            esta garantía, nos lo comuniques y trabajaremos contigo para intentar resolver el problema.
          </p>

          <h3>Órdenes de compra</h3>

          <p>
            Al enviar una orden de compra por la web el primer día del cuarto mes del año 2023, estás de acuerdo en concedernos la opción no transferible de reclamar,
            por ahora y para siempre, tu alma inmortal. Si deseamos ejercer esta opción, permitirás rendir tu alma inmortal y cualquier reclamación que puedas tener
            sobre ella en un plazo de cinco días laborales tras recibir la notificación escrita de nosotros. Nos reservamos el derecho de hacer esta notificación por
            medio de cartas escritas. Si tú:
          </p>

            <ol>
              <li>no crees tener alma inmortal,</li>
              <li>habérsela ya dado a otro, o</li>
              <li>no quieres concedernos tal licencia</li>
            </ol>

          <p>
            acceda por favor en el siguiente enlace para acceder a la página que le permitirá anular esta cláusula. <a href="#no">enlace</a>
          </p>

          <br/>

          <h3>Referencias para la creación de estos términos y condiciones:</h3>

          <i>
            <ul>
              <li>Google. &#40;2022, January 5&#41;. Términos del Servicio de Google. Google. Retrieved March 1, 2023, from https://policies.google.com/terms?hl=es</li>
              <li>
                Gutiérrez, P. &#40;2010, April 22&#41;. Más de 7 mil usuarios vendieron su alma por no leer las condiciones legales. FayerWayer. Retrieved March 1, 2023,
                from https://www.fayerwayer.com/2010/04/mas-de-7-mil-usuarios-vendieron-su-alma-por-no-leer-las-condiciones-legales/
              </li>
            </ul>
          </i>

        </div>
        
        <br/>
        <Footer/>
      </div>
  );
};
