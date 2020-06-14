import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './cartPage.scss';
import TableComponent from '../components/TableComponent/TableComponent';
class CartPage extends Component {
    constructor(){
        super();
    this.state = { 
        products: [
            {
                "id":"1",
                "image":"/images/Fertilizer1.jpg",
                "productName":"Soil",
                "description":"This is a fertilizer",
                "price":"10",
                "quantity":1
            },
            {
                "id":"2",
                "image":"/images/Fertilizers2.jpg",
                "productName":"Powder",
                "description":"",
                "price":"10",
                "quantity":1
            }
        ]
     }
    }
     

    render() { 
        const headings = ['Image', 'Product Name', 'Quantity', 'Price', 'Remove'];
        return ( 
            <div className="container">
            <div className="row ">
                <div className="col-md-6">
                <h2 style={{"margin-bottom":"40px","margin-top":"40px"}}>CART ITEMS</h2>
                </div>
                <div className="col-md-12 ">
                <TableComponent tableHeader={headings} products={this.state.products}></TableComponent>
                </div>
            </div>
            <div className='col-md-12' style={{"margin-top": "30px",
                "margin-left": "auto",
                "font-size": "36px"}}>
            <span>Total: $20</span>
            </div>
            <div className="col-md-12 " >
                        <div className="pull-right">
                        <Link className='option' to='/greenKartShopping' >
                        <div className="btn">Back To Shopping</div>
                        </Link>
                        <div onClick={() => alert('CheckOut Clicked')} className="btn btn-success">Checkout</div>
                        </div>
            </div>
          <br></br>
          <br></br>
          <br></br>
            </div>
         );
    }
}
 
export default CartPage;