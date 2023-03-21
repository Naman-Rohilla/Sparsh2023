// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import "./newsCard.css"

const NewsCard=(props)=> {
  return (
    <div class="card">
        <img className='img' src={props.image}/>
          <div className='content'>
             <div className='heading'>
                 {props.heading}
             </div>
             <div className='text'>
                {props.text}
             </div>
             <div className='date'>
                 {props.date}
             </div>
          </div>
        </div>
  );
}

export default NewsCard;