import "../styles/PostHome.css"

export const PostHome = () => {
  const [getFotoPerfil, setFotoPerfil] = ['/Image_by_LaBruixa_from_Pixabay.png', ''] //TODO

  return (
    <div className="component post">
      <img className="roundedImages" src={getFotoPerfil} alt="Foto de perfil" width='56' height='56'/>
      <b>Matru husky</b> Cortecito pal rey<br/>
      <img src='/Image_by_LaBruixa_from_Pixabay.png' alt="Imagen de la publicación" width='850' height='530'/>
    </div>
  );
};
