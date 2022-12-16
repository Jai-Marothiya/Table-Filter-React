import React from 'react';
import Filter from './filter';

class Rectsearch extends React.Component{
    constructor(props){
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(e){
        let filter = e.target.parentNode.nextElementSibling;
        console.log(e.target.parentNode.nextElementSibling);
        filter.classList.toggle('hidden');
    }
    
    render(){
        return(
            <div>
                <div className='rect-search'>
                    <div className='top-search'>
                    <span>search</span> 
                    </div>
                    <button className='filter-button' id="true" onClick={this.handleFilter}>
                        <img src="./filter.png" alt="" />
                        Filters
                    </button>
                    <button className='today'>Today</button>
                </div>
                <Filter type={this.props.type} status={this.props.status} payment={this.props.payment} onChange={this.props.onChange}></Filter>
            </div>
            
        );
    }
}

export default Rectsearch;