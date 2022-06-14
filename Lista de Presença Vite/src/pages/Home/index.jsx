import React from 'react';
import './styles.css';
import { Card } from '../../components/Card'
const { useState } = React;

export function Home() {

  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);
  
  function handleAddStudent (e){

    e.preventDefault();
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };
    setStudents(prevState => [...prevState,newStudent]);
    const limparNome = document.getElementById('nome');
    limparNome.value='';
  }
  
  return (
    <div className="app">
      <h1>Lista de Presença</h1>
      <form onSubmit={handleAddStudent}>
      <input type="text" name="nome" id="nome" placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)} />
      <button id='enviar'>Enviar</button>
      </form>

      {
        students.map(student => <Card nome={student.name} horas={student.time} /> )
      }
    </div>
    
  )
  
}
