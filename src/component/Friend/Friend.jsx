import { Link } from "react-router-dom";
import "./Friend.css";

const Friend = (props) => {
  const { id, name, address } = props.friend;
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
            <h3 className="card-title">{name}</h3>

        <Link to={`/friend/${id}`}>
          <button className="btn btn-info">view details of {id}</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Friend;
