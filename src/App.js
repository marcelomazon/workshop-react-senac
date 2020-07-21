import React from 'react';
import Header from './Header';
import './App.css';


function App() {

  const [ todoList, setTodoList ] = React.useState( ['Arrumar cama', 'escovar dentes', 'fazer café']);

  // 0 - todoList (nome da variavel)
  // 1 - metodo para atualização da variavel

  function addItem(i) {
    setTodoList([ ... todoList, `Nova tarefa ` ])
  }

  return(
    <>
      <h1>Lista de Tarefas</h1>
      <ul>
        {
          todoList.map(item => {
            return <li> {item} </li>;
          })
        }
      </ul>
      <button type="button" onClick={addItem}>Add item</button>
    </>
  );
}

export default App;
