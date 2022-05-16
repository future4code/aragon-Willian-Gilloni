import { useState } from 'react';

export function Post(props) {
  // Passo5
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [curtido, setCurtido] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [comentarios, setComentario] = useState([])
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios,setNumeroComentarios] = useState(0)

  const onChangeInput = (event) => {
    setInputValue(event.target.value)
  }
  // Passo7
  const onClickCurtida = () => {
    if (curtido) {
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas - 1)
      // useState({ curtido: !this.state.curtido, numeroCurtidas: this.state.numeroCurtidas - 1 });

    } else {
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas + 1)
      // useState({ curtido: !this.state.curtido, numeroCurtidas: this.state.numeroCurtidas + 1 });
    };
  };

  // Passo7
  const onClickComentario = () => {
    const novaLista = [...comentarios, inputValue]
    setComentario(novaLista)
    setInputValue("")
    setComentando(!comentando)
  };

  // Passo7
  const onChangeComentario = (event) => {
    setInputValue(event.target.value);
  };

  // Passo7
  const enviarComentario = (comentario) => {

    // const listaDeComentarios = [...comentarios, comentario]
    // setComentario()


    // set({
    //   comentarios: listaDeComentarios,
    //   comentando: false,
    //   numeroComentarios:numeroComentarios + 1,
    //   inputValue: ""
    // });

  };

  {/* Passo6 */ }
  const caixaDeComentario = comentando ?  (
    <>
      <label htmlFor={"comentario"} >Comente: </label>
      {/* Passo4 */}
      <input
        id={"comentario"}
        value={inputValue}
        onChange={onChangeComentario}
      />
      {/* Passo4 */}
      <button onClick={() => { enviarComentario(inputValue) }}>Enviar</button>
    </>
  ) : (
    // Passo8
    <>Lógica de exibir lista de comentarios</>
    // this.state.comentarios.map((comentario, index) => {
    //   return (
    //     <div key={index}>
    //       <p>{comentario}</p>
    //     </div>
    //   )
    // })
  );

  return (
    <main>
      <header>
        <figure>
          {/* Passo3 */}
          <img src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <span>{props.nomeUsuario}</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          {/* Passo3 */}
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          {/* Passo6 */}
          <span>Número de curtidas: {numeroCurtidas}</span>
          {/* Passo4 */}
          <button onClick={onClickCurtida} >
            {numeroCurtidas === 0 ? "Like" : "Dislike"}
            {/* Passo6 */}
            {true ? "Like" : "Dislike"}
          </button >
        </section>
        <section>
          {/* Passo6 */}
          <span>Número de comentários: {numeroComentarios}</span>
          {/* Passo4 */}
          <button onClick={onClickComentario}>
            {/* Passo6 */}
            {comentando ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};

