import './styles.css';
export function Home() {
  return ( 
    <div className="app"> 
      <h1>Quem é você?</h1>
      <input type="text" name="nome" id="nome" placeholder="Digite seu nome..." />
      <button id='enviar'>Enviar</button>
    </div> 
  )
}
