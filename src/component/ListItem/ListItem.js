import React, { Component } from 'react';
import data from '../../data.json';

class ListItem extends Component {
    constructor(props){

        super();
    }
    render() {
        console.log(data);
        return (
            <div className="col">
                Product
                <div className="row">
                { data.map((item) => (
                    <div className="col-4">
                        <div className="card">
                            <img className="card-img-top" src={item.img} alt={true} />
                            <div className="card-body">
                            <h4 className="card-title">{item.name}</h4>
                            <p className="card-text">{item.price}</p>
                            <button  className="btn btn-primary">Add to card</button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>

        );
    }
}

export default ListItem;