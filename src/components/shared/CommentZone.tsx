import '../../styles/shared/CommentZone.css'
import { useCommentZone } from "../../helpers/hooks/useCommentZone";

interface commentZoneProps {
  id_post: string,
  nuevoComentarioAbajo: boolean,
  maxComentarios: number
}

export const CommentZone = ({id_post, nuevoComentarioAbajo, maxComentarios}: commentZoneProps) => { // TODO API

  const commentsArray = useCommentZone([], maxComentarios, nuevoComentarioAbajo)

  return (
    <div className="commentZone">
      {
        commentsArray.map( (comment, key) => {
          return (
            <p key={key}><b>{comment.name}: </b>{comment.text}</p>
          )
        })
      }
    </div>
  );
};
