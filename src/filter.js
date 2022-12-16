import React from 'react';

class Filter extends React.Component{
    constructor(props) {
        super(props);
        this.handleCheckChange = this.handleCheckChange.bind(this);
    }
    
    handleCheckChange(e) {
        // this.props.onInStockChange(e.target.checked);
        console.log(e);
        let target = e.target.id;
        let name,id;

        if(target === "new" || target==="updated"){
            name = "status";
            if(target === "new"){
                id = 0;
            }else{
                id= 1;
            }
        }

        if(target === "paid" || target==="unpaid"){
            name = "payment";
            if(target === "paid"){
                id = 0;
            }else{
                id= 1;
            }
        }

        if(target === "dine" || target==="delivery" || target==="away"){
            name = "type";
            if(target === "dine"){
                id = 0;
            }else if(target==="delivery"){
                id= 1;
            }else{
                id=2;
            }
        }


        this.props.onChange(name,id);
    }
    
    render(){
        return(
            <div className='filter'>
                <h1>Order status</h1>
                <input type="checkbox" className='checkbox' id="new" name="new" checked={this.props.status[0]} onClick={this.handleCheckChange}></input>
                <label htmlFor="new" className='content'>New order</label><br></br>
                <input type="checkbox" className='checkbox' id="updated" name='updated' checked={this.props.status[1]} onClick={this.handleCheckChange}></input>
                <label htmlFor="updated" className='content'>Updated order</label><br></br>

                <h1>Payment</h1>
                <input type="checkbox" className='checkbox' id="paid" name="paid" checked={this.props.payment[0]} onClick={this.handleCheckChange}></input>
                <label htmlFor="paid" className='content'>Paid</label><br></br>
                <input type="checkbox" className='checkbox' id="unpaid" name="unpaid" checked={this.props.payment[1]} onClick={this.handleCheckChange}></input>
                <label htmlFor="unpaid" className='content'>Un-Paid</label><br></br>

                <h1>Order type</h1>
                <input type="checkbox" className='checkbox' id="dine" name="dine" checked={this.props.type[0]} onClick={this.handleCheckChange}></input>
                <label htmlFor="dine" className='content'>Dine In</label><br></br>
                <input type="checkbox" className='checkbox' id="delivery" name="delivery" checked={this.props.type[1]} onClick={this.handleCheckChange}></input>
                <label htmlFor="delivery" className='content'>Delivery</label><br></br>
                <input type="checkbox" className='checkbox' id="away" name="away" checked={this.props.type[2]} onClick={this.handleCheckChange}></input>
                <label htmlFor="away" className='content'>Take Away</label><br></br>
            </div>
        );
    }
}

export default Filter;