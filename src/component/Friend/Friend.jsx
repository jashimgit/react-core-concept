import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
	// console.log(props.friend);
	const { id, name } = props.friend;
	return (
		<div className='col-md-4'>
			<div className='card mb-3'>
				<div className='card-body'>
					<h3 className='card-title'>{name}</h3>
					<h5>{props.friend.company.name}</h5>
					<Link to={`/friend/${id}`}>
						<button className='btn btn-info'>view details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Friend;
