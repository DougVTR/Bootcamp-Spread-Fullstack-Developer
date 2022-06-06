import './styles.css';

export function Card(props){
    return(
        <div className='card'>
        <strong>{props.nome}</strong>
        <small>{props.horas}</small>
        </div>
    )
}