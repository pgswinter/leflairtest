import React, { Component } from "react";
import find from 'lodash/find';
import { connect } from "react-redux";
import { getProducts } from "../redux/actions";

class DetailPage extends Component {

    componentDidMount() {
		this.props.getProducts();
	}

	render() {
        const { ProductsList } = this.props;
        const product = find(ProductsList, ['id', parseInt(this.props.match.params.id)]);
        const currentProduct = product;
		if (currentProduct) {
			return (
                <div className="show-product container">
                    <div className="item-wrapper" class="row">
                        <div className="col-md-7">
                            <div className="item-image">
                                <img className="product-image" src={currentProduct.img} alt="product" />
                            </div>
                        </div>
                        <div className="right-pane col-md-5">
                            <div className="item-name">
                                <div className="product-info">
                                <h3 id="product-name">{currentProduct.name}</h3>
                                </div>
                                <div className="product-bio">
                                <p id="product-description">{currentProduct.description}</p>
                                <p id="product-price"><span>Giá: </span>đ{currentProduct.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
			);
		} else return null;
	}
}

const mapStateToProps = state => ({
	ProductsList: state.items
});

const mapDispatchToProps = dispatch => ({
	getProducts: () => {
		dispatch(getProducts());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);