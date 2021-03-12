import { Link } from 'react-router-dom';
import './Friend.css';
import { useState, useEffect } from 'react';

const Friend = () => {

	const [friends, setFriends] = useState([]);

	useEffect(() => {
		const url = 'https://jsonplaceholder.typicode.com/users';
		fetch(url)
			.then((res) => res.json())
			.then((data) => setFriends(data));

	});

	return (
		<div className="container">
			<div className="row mt-4">
				<div className="col-md-9">
					<div className="row">
						{
							friends.map(friend =>
								<div className="col-md-4 pb-4">
									<div class="card pb-4">
										<div class="card-body">
											<h4 class="card-title">{friend.name}</h4>
											<p class="card-text">Username: {friend?.username}</p>
											<p>Email: {friend?.email}</p>
											<p>Address:
												{friend?.address?.street},
												{friend?.address?.city}<br />
												{friend?.address?.zipcode}
											</p>
										</div>
									</div>
								</div>
							)
						}

					</div>
				</div>


				<div className="col-md-3">
					<div className="card">
						<div className="card-body">
							<div className="card-title">
								Friends Details
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Friend;
