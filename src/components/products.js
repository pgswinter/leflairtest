import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainPage extends Component {

	render() {
		const ProductsList  = this.props.productsList;
		if (ProductsList) {
			return (
				<div className="col-lg-12">
					<div className="row">
						{ProductsList.map(Product => (
							<div
								key={Product.id}
								className="col-lg-4 col-md-6 mb-4"
							>
								<div className="card h-100">
									<Link to={`/products/${Product.id}`}>
										<img
											className="card-img-top"
											src={Product.img}
											alt={Product.name}
										/>
									</Link>
									<div className="card-body">
										<h4 className="card-title">
											<Link to={`/products/${Product.id}`}>{Product.name}</Link>
										</h4>
										<p className="card-text">
											<span>
												{Product.stock < 3 && Product.stock > 0  ? "(< 3 items available)" 
												: Product.stock == 0 ? "(0 items available)"
												: "Available Items"}
											</span>
										</p>
										<p>
											{Product.stock > 0 ?
												<div>
													<p>Stock: {Product.stock}</p>
													<button className="btn btn-primary" onClick={() => {this.props.addToCart(Product.id,Product.stock)}}>
														Add to Cart
													</button>
												</div>
												
											: 
												<button className="btn btn-primary" disabled>
													Out of stock
												</button>
											} 
											{	
												this.props.itemCart > 0 && parseInt(this.props.idCart) == Product.id ?
												<button className="btn btn-primary" onClick={() => {this.props.removeOutOfCart(Product.id)}}>
													Remove out of Cart
												</button>
												:
												null
											}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			);
		} else return null;
	}
}

export default MainPage