import MoviesData from './MoviesData'
import {Link} from 'react-router-dom'


const Trailer=(props)=>{
    const x =MoviesData
    return(
        <div>
            {console.log(props)}
            <h1>
                {x.find((el)=> props.match.params.name==el.name).name}
                  
            </h1>
            <p>{x.find((el)=> props.match.params.name==el.name).subtitle}</p>
            <br />
            <p>{x.find((el)=> props.match.params.name==el.name).video}</p>
            
            <p>{x.find((el)=> props.match.params.name==el.name).description}</p>
            <Link to='/'>
            <button className="Addbtn">Home</button>
            </Link>
        </div>
    )
}
export default Trailer