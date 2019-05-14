import React, { Component } from 'react';

class card extends Component {
    constructor(props){
        super();
        this.state = {
            card : [{1:1}]
        }
    }
    render() {
        const {card} = this.state;
        return (
            <div className="col-4">
            Shopping Cart
            { 
                card.length === 0 ? (
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Cart is empty</h4>
                        <p className="card-text">Total: 0 EUR</p>
                    </div>
                </div>
            ):(
                <div className="card">
                    <div className="card-body">
                    <div class="cart-item">
                        <div>
                            <button class="btn btn-danger btn-xs">X</button>
                            <span class="cart-item__name">Schlafsessel Rovigo</span>
                        </div>
                        <div class="cart-item__price">239.99 EUR</div>
                        </div>
                        <p className="card-text">Total: 0 EUR</p>
                    </div>
                    
                </div>
            )}
            
            </div>

        );
    }
}

export default card;