import React from 'react';
import UnorderListComponent from '../UnorderListComponent/UnorderListComponent';

const FooterContentComponent = () =>{
    const listData = ['Contact Us- +1 902-210-9923', 'Email: GreenKart@kart.org', 'Addres: South Park St, Halifax'];
return(
    <div className="col-md-3 col-sm-6">
    <h4>GREENKART</h4>
    <UnorderListComponent data={listData}></UnorderListComponent>
        </div>
)
};

export default FooterContentComponent;