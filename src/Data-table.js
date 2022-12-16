import React from 'react';

class ProductRow extends React.Component {
    render() {
      const order = this.props.order;

      const status1 ={
        color: "#E63946",
        background: "rgba(235, 94, 40, 0.1)",
        padding: "6px 8px",
        borderRadius: '6px'
      };
      const status2 ={
        color: "#6F2DBD",
        background: "rgba(111, 45, 189, 0.1)",
        padding: "6px 8px",
        borderRadius: "6px",
      };
      const payment1 ={
        color: "#D90429",
        background: "rgba(217, 4, 41, 0.1)",
        padding: "6px 8px",
        borderRadius: '6px'
      };
      const payment2 ={
        color: "#2FBF71",
        background: "rgba(47, 191, 113, 0.1)",
        padding: "6px 8px",
        borderRadius: "6px",
      };

      let time = new Date(), type , status, payment;
      time = time.toLocaleTimeString()

      const view = <span><img src="./export.png" alt="" style={{width:"40px"}} /></span>;

      if(order.type==='Delivery'){
        type = <span style={{color: "#E63946"}}>
                {order.type}
               </span>
      }else if(order.type==='Dine In'){
        type = <span style={{color: '#4361EE'}}>
                {order.type}
               </span>
      }else{
        type = <span style={{color: '#F7B801'}}>
                {order.type}
               </span>
      }

      if(order.status==='New order'){
        status = <span style={status1}>
                {order.status}
               </span>
      }else{
        // eslint-disable-next-line no-unused-vars
        status = <span style={status2}>
                {order.status}
               </span>
      }

      if(order.payment==='Un-Paid'){
        payment = <span style={payment1}>
                {order.payment}
               </span>
      }else{
        // eslint-disable-next-line no-unused-vars
        payment = <span style={payment2}>
                {order.payment}
               </span>
      }
       
      return (
        <tr>
          <td style={{color: '#4361EE'}}>{order.id}</td>
          <td>{order.table}</td>
          <td>{order.name}</td>
          <td>{type}</td>
          <td className='status'>{status}</td>
          <td>{payment}</td>
          <td>{time}</td>
          <td>{view}</td>
        </tr>
      );
    }
  }

class DataTable extends React.Component{
    render(){
        let data = this.props.data;
        let rows =[];
        let setType = this.props.type;  
        let setStatus = this.props.status;  
        let setPayment = this.props.payment;  

        data.forEach((order)=>{
            //   Checking order-Type
            if(setType[0]===false){
                    if(order.type === 'Dine In'){
                        return;
                    }
            }
            if(setType[1]===false){
                    if(order.type === 'Delivery'){
                    return;
                    }
            }
            if(setType[2]===false){
                    if(order.type === 'Take Away'){
                    return;
                    }
            }

            //   Checking order-Status
            if(setStatus[0]===false){
                    if(order.status === 'New order'){
                    return;
                    }
            }
            if(setStatus[1]===false){
                    if(order.status === 'Updated order'){
                    return;
                    }
            }


            //   Checking order-Payment
            if(setPayment[0]===false){
                    if(order.payment === "Paid"){
                    return;
                    }
            }
            if(setPayment[1]===false){
                    if(order.payment === "Un-Paid"){
                    return;
                    }
            }

            rows.push(
                <ProductRow
                  order={order}
                  key={order.table} />
            );
        });
        return(
            <div className='data-table'>   
                <table className='content-table'>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Table no</th>
                            <th>Customer name</th>
                            <th><span>Order type</span></th>
                            <th>Order status</th>
                            <th>Payment</th>
                            <th>Time</th>
                            <th>View order</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
}

export default DataTable;