import React from 'react';
import './GreenKartShopping.scss';
import SearchComponent from  '../components/SearchComponent/SearchComponent';
import CardListComponent from '../components/CardListComponent/CardListComponent';

class GreenKartShoppingPage extends React.Component {
    
    constructor(props) {
        super();
        this.state = {
            products: [
                {
                    "id":"1",
                    "image":"/images/white_clover.jpg",
                    "productName":"Clover",
                    "description":"White Clover Seed",
                    "price":"10.99"
                },
                {
                    "id":"2",
                    "image":"/images/Roza_geranium.jpg",
                    "productName":"Rozanne",
                    "description":"Rozanne Geranium",
                    "price":"30"
                },
                {
                    "id":"3",
                    "image":"/images/allium_bulb.jpg",
                    "productName":"Allium",
                    "description":"This is spray",
                    "price":"9"
                },
                {
                    "id":"4",
                    "image":"/images/Supply_Cart.jpg",
                    "productName":"Cart",
                    "description":"Supply Cart",
                    "price":"30"
                },
                {
                    "id":"5",
                    "image":"/images/Storage_tool.jpg",
                    "productName":"Tool",
                    "description":"Storage Tool",
                    "price":"40"
                },
                {
                    "id":"6",
                    "image":"/images/Pocker_Snips.jpg",
                    "productName":"Snips",
                    "description":"Pocker Snips",
                    "price":"10"
                },
                {
                    "id":"7",
                    "image":"/images/tomato_ladders.jpg",
                    "productName":"Ladder",
                    "description":"Tomato Ladders",
                    "price":"12"
                },
                {
                    "id":"8",
                    "image":"/images/Spray.jpg",
                    "productName":"Spray",
                    "description":"Spray",
                    "price":"15"
                },
                {
                    "id":"8",
                    "image":"/images/HOSES.jpg",
                    "productName":"Hose",
                    "description":"Hose",
                    "price":"30"
                }
            ],
            search: ""
        };
      }

      inputEvent = e =>{
        this.setState({ search : e.target.value});
    }
    
    render() { 
        const filteredMonster = this.state.products.filter(product =>
            product.productName.toLowerCase().includes(this.state.search.toLowerCase())
          );
        return ( <div className= 'shopping-page' style={{"margin": "0px"}}>
                <SearchComponent onInputChange={this.inputEvent}></SearchComponent>
                <CardListComponent products={filteredMonster}></CardListComponent>
            </div> );
    }
}
 
export default GreenKartShoppingPage;