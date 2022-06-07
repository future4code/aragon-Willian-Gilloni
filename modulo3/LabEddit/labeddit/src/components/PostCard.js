// import { format } from 'date-fns';

function PostCard(props) {

    const { id, userId, title,createdAt, body, voteSum, commentCount } = props.post

    // const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy")
    console.log(props.post)
     const convertDate = (timestamp) => {
        let time = new Date(timestamp)
        let day = time.getDate().toString().padStart(2, '0');
        let month = (time.getMonth() + 1).toString().padStart(2, '0');
        let year = time.getFullYear();
        
        return `${day}/${month}/${year}`
    }
    return (
        <article>
            <h3>{title}</h3>
            <span><b>Autor:</b>{userId}</span>
            {/* <p>Criado em {date}</p> */}
            <img src={"https://picsum.photos/200/300?random=" + id} alt="Imagem aleatória do post" />
            <p><b>Descrição:</b>{body}</p>
            <p>Votos: {voteSum ? voteSum : 0}</p>
            <button>Votar em "Não Gostei</button>
            <br />
            <button>Votar em "Gostei"</button>
            <p>Comentários: {commentCount ? commentCount : 0}</p>
            <button>Ver comentários</button>
            {convertDate(createdAt)}
            <hr />
        </article>

    )
}

export default PostCard