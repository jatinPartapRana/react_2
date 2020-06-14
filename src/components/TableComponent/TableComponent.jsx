import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import './TableComponent.scss';

const TableComponent = (props) =>{
    return(
        <ReactBootStrap.Table striped bordered hover className="table table-bordered text-center table-active " style={{"border": "2px solid black",
        "border-collapse": "collapse", "table-layout":"fixed"}} >
        <thead>
        <tr className="table-bordered text-center" >
        {
            props.tableHeader.map((val) =>(
                <th className="table-bordered text-center" style={{"vertical-align": "middle", "border": "2px solid black",
                "border-collapse": "collapse"}}>{val}</th> 
            )
            )
        }
        </tr>
        </thead> 
        <tbody>
            {
                props.products.map(iterateProducts)
            }
        </tbody>      
        </ReactBootStrap.Table>

    )
};

const iterateProducts = (product, index) =>{
    return(
      <tr key={index}>
          <td  className="table-bordered" style={{"border": "2px solid black",
          "border-collapse": "collapse"}} width="80"><img src={product.image} alt='Product' height="70" ></img></td>
          <td  style={{"vertical-align": "middle", "border": "2px solid black",
          "border-collapse": "collapse"}}>{product.productName} </td>
          <td style={{"vertical-align": "middle", "border": "2px solid black",
          "border-collapse": "collapse",  "text-align": "center"}} width= "80">
          <span className='qty'>
          <div className='incrementValue' onClick={()=>alert('Decrement Quantity')}>&#x2D;</div>
      <span className='qtyValue'>{product.quantity}</span>
      <div className='incrementValue' onClick={()=>alert('Increment Quantity')}>&#x2B;</div>
      </span> 
          </td>
          <td style={{"vertical-align": "middle", "border": "2px solid black",
          "border-collapse": "collapse"}} >${product.price}</td>
          <td style={{"vertical-align": "middle", "border": "2px solid black",
          "border-collapse": "collapse"}} width= "80">
          <span className='qtyValue' style={{"cursor": "pointer"}} onClick={()=>alert('Remove Item')} > &#10005;</span>
         </td>
      </tr>
    )
};

export default TableComponent;