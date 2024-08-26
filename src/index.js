import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Note from './components/Note/index';
import CriarArea from './components/CriarArea/index';

function App() {

// useState([])
// useState é um hook do React que permite que você adicione estado a componentes funcionais. Em componentes de classe, o estado é gerenciado com this.state, mas em componentes funcionais, você usa useState.
// O argumento que você passa para useState é o valor inicial do estado. Neste caso, [] (um array vazio) é o valor inicial.
// Desestruturação do array: O useState retorna um array com dois elementos:
// notes: Este é o valor atual do estado. Neste caso, notes será o array que armazenará as notas.
// setNotes: Esta é a função que você chama para atualizar o valor do estado. Sempre que setNotes é chamada, o React re-renderiza o componente para refletir a mudança no estado.
// Quando você usa useState([]) dentro de um componente funcional, você está criando um pedaço de estado que será mantido ao longo da vida do componente.
// Inicialmente, notes será um array vazio, porque você passou [] como argumento para useState.
// À medida que seu componente é usado (por exemplo, quando o usuário adiciona ou remove notas), você pode atualizar o estado chamando setNotes, o que re-renderizará o componente com o novo valor de notes.
  const [notes, setNotes] = useState([]);

//   Função de callback prevNotes: Dentro do setNotes, você passa uma função que recebe o estado anterior (prevNotes). Esta função cria um novo array que:
// [...prevNotes]: Usa o operador spread (...) para copiar todos os itens do array prevNotes (ou seja, as notas que já existem).
// newNote: Adiciona a nova nota ao final do array.
// A função addNote adiciona a nova nota newNote ao final do array notes sem modificar o array original (criando um novo array com o spread operator). Isso atualiza o estado e faz com que o componente seja re-renderizado para mostrar a nova nota.


  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }


  // Função filter:
  // A função filter percorre o array prevNotes e retorna um novo array contendo apenas os itens que passam no teste fornecido.
  // Callback (noteItem, index) => index !== id: Para cada noteItem no array, verifica se o index é diferente de id. Se for, o item é mantido; caso contrário, ele é filtrado (removido).
  // A função deleteNote remove a nota correspondente ao índice id do array notes. Como resultado, o estado é atualizado, removendo a nota específica da lista exibida.


  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <React.StrictMode>
      <Header />

{/* onAdd={addNote}:
Esse é um prop que você está passando para o componente CriarArea. O prop onAdd é associado à função addNote, que foi definida anteriormente no código.
A ideia aqui é permitir que o componente CriarArea chame a função addNote sempre que uma nova nota for criada. Isso faz com que a nova nota seja adicionada ao estado notes no componente pai. */}
{/* notes.map(...):
notes é o array que você está mantendo no estado (inicialmente vazio, mas que vai sendo preenchido conforme novas notas são adicionadas).
O método map é usado para iterar sobre cada item do array notes. Para cada item, ele executa a função de callback que você define, retornando um novo array de elementos JSX. */}
{/* Para cada noteItem no array notes, um componente <Note /> é renderizado com as seguintes props: */}
{/* key={index}: O prop key é uma maneira de o React identificar de forma única cada elemento em uma lista. O valor index é usado como a chave, pois é único para cada item no array.
id={index}: Passa o índice como id para o componente <Note />. Isso pode ser usado posteriormente, por exemplo, para identificar qual nota deve ser deletada.
title={noteItem.title} e content={noteItem.content}: Passam o título e o conteúdo da nota como props para o componente <Note />.
onDelete={deleteNote}: Passa a função deleteNote como prop para que o componente <Note /> possa chamar essa função e deletar a nota quando necessário. */}
      <CriarArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
