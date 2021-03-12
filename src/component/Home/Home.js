import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {


	return (
		<div className='container mt-4 jumbotron'>
			<div className='row'>
				<div className='col-md-12'>
					<h3 className='text-center'>Friends list</h3>
				</div>
				<div className="col-md-12 pb-3">
					<div className="row">
						<div className="col-md-4">
							<div className="card">
								<div className="card-body">
									<h4 className="card-title">
										Friends
									</h4>
									<Link to="/friend">
										<button className="btn btn-info">Friend list</button>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card">
								<div className="card-body">
									<h4 className="card-title">
										Friends
									</h4>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card">
								<div className="card-body">
									<h4 className="card-title">
										Friends
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default Home;
