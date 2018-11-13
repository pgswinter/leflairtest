import React, { Component } from "react";
import Products from "./products";
import { connect } from "react-redux";
import { getProducts,addToCart } from "../redux/actions";
import { Link } from "react-router-dom";

class Home extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            idCart: "",
            itemCart : 0
        }
        this.addToCart = this.addToCart.bind(this);
        this.removeOutOfCart = this.removeOutOfCart.bind(this);
    }

    componentDidMount() {
		this.props.getProducts();
	}

    addToCart(id){
        this.setState({
            idCart: id,
            itemCart: this.state.itemCart+1
        })
    }
    
    removeOutOfCart(id){
        if(this.state.amountItem > 0){
            this.setState({
                idCart: id,
                itemCart: this.state.itemCart-1
            })
        }
	}


	render() {
		return (
            <div className="container">
                <div className="row home">
                    <div className="cart">
                        <Link className="" to="/">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="counter"></span>
                        </Link>
                        <div className="cart-display">
                            <span>{this.state.itemCart}</span>
                        </div>
                    </div>
                    <Products
                        productsList = {this.props.ProductsList}
                        itemCart={this.state.itemCart}
                        addToCart = {this.addToCart}
                        removeOutOfCart = {this.removeOutOfCart}
                    />
                </div>
            </div>
		);
	}
}


const mapStateToProps = state => ({
	ProductsList: state.items
});

const mapDispatchToProps = dispatch => (
    {
        getProducts: () => {
            dispatch(getProducts());
        },
        addToCart: () => {
            dispatch(addToCart());
        }
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);