import { useState } from "react";
import './CriarArea.modules.css';



function CriarArea(props) {

// useState: Este hook é usado para manter o estado do componente.
// note: O estado inicial é um objeto com duas propriedades: title (inicialmente uma string vazia) e content (também uma string vazia). Este objeto armazenará os dados da nova nota que o usuário está criando.
// setNote: Esta é a função que você usa para atualizar o estado note. Cada vez que o usuário digita algo nos campos de entrada, o estado note é atualizado.
    const [note, setNote] = useState({
      title: "",
      content: ""
    });
  

//     handleChange: Esta função é chamada sempre que o usuário digita algo nos campos de entrada (título ou conteúdo).
// event.target: Contém o elemento que disparou o evento (ou seja, o campo de entrada onde o usuário digitou).
// name e value: name é o nome do campo de entrada (title ou content), e value é o valor digitado pelo usuário.
// Atualização do estado:
// prevNote: O estado anterior da nota (note).
// ...prevNote: Copia o estado anterior, preservando quaisquer valores já presentes.
// [name]: value: Atualiza a propriedade do objeto (title ou content) com o novo valor digitado pelo usuário.
    function handleChange(event) {
      const { name, value } = event.target;
  
      setNote(prevNote => {
        return {
          ...prevNote,
          [name]: value
        };
      });
    }
  

    // submitNote: Esta função é chamada quando o usuário clica no botão "Add".
    // props.onAdd(note): Chama a função onAdd (passada como prop pelo componente pai), passando o objeto note como argumento. Isso adiciona a nova nota ao estado do componente pai.
    // setNote({ title: "", content: "" }): Após a adição da nota, o estado note é redefinido para o estado inicial, limpando os campos de entrada.
    // event.preventDefault(): Previne o comportamento padrão do formulário HTML de recarregar a página ao ser enviado.

    function submitNote(event) {
      props.onAdd(note);
      setNote({
        title: "",
        content: ""
      });
      event.preventDefault();
    }
  
    return (
      <div>
        <form>
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Título"
          />
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Crie uma nota..."
            rows="3"
          />
          <button onClick={submitNote}>Add</button>
        </form>
      </div>
    );
  }


export default CriarArea;