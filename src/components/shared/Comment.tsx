interface commentsProps {
  nombre: string,
  texto: string
}

export const Comment = ({nombre, texto}: commentsProps) => {
  return (
    <p><b>{nombre}: </b>{texto}</p>
  );
};
