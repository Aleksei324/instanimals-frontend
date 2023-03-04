interface commentsProps {
  nombre: string,
  texto: string
}

export const CommentsHome = ({nombre, texto}: commentsProps) => {
  return (
    <p><b>{nombre}: </b>{texto}</p>
  );
};
