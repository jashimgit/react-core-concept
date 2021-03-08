
import { Link } from 'react-router-dom';
import './Friend.css';



const Friend = (props) => {

    const {id, name, address} = props.friend;
   
    return (
        <div className="friend-item">
            <b>id : {id}</b>
            <h4>{name}</h4>
            <p>{address.street}</p>
            <Link to={`/friend/${id}`}>
                <button>view details of {id}</button>
            </Link>
        </div>
    );
};

export default Friend;