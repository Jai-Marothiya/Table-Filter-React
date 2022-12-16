import React from 'react';
import Rectsearch from './rect-search';
import DataTable from './Data-table';

class Rectangle extends React.Component{
    render(){
        let data = this.props.data;
        return(
            <div className='rectangle'>
                <h1>Order details</h1>
                <Rectsearch data={data} type={this.props.type} status={this.props.status} payment={this.props.payment} onChange={this.props.onChange}></Rectsearch>
                <DataTable data={data} type={this.props.type} status={this.props.status} payment={this.props.payment}></DataTable>
            </div>
        );
    }
}

export default Rectangle;