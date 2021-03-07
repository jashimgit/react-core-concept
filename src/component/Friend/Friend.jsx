
import { Link } from 'react-router-dom';
import './Friend.css';



const Friend = (props) => {
    const {id, name} = props.friend;
    
    return (
        <div className="friend-item">
            <b>id : {id}</b>
            <h4>{name}</h4>
            <Link to={`/friend/${id}`}>
                <button>view details of {id}</button>
            </Link>
        </div>
    );
};

export default Friend;