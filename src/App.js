// https://www.figma.com/file/a3zUnpAJDgEjwWr8YNyl0j/Assignment?node-id=1%3A855&t=Wg6b4WsPvxFdl4EY-0
import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Rectangle from './rectangle'
import React from 'react';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      type: [true,true,true],
      status: [true,true],
      payment: [true,true],
    }
  }

  onChange(prop,id){
    let type=this.state.type;
    let status=this.state.status;
    let payment=this.state.payment;
    if(prop==="status"){
        status[id]=!status[id];
        this.setState({
          [prop]:status,
        })
    }
    if(prop==="type"){
        type[id]=!type[id];
        this.setState({
          [prop]:type,
        })
    }
    if(prop==="payment"){
        payment[id]=!payment[id];
        this.setState({
          [prop]:payment,
        })
    }
    
  }

  render(){
    return (
      <div className="App">
        <Sidebar></Sidebar>
        <div className='right'>
          <Topbar></Topbar>
          <Rectangle data={this.props.data} type={this.state.type} status={this.state.status} payment={this.state.payment} onChange={this.onChange.bind(this)}></Rectangle>
        </div>
      </div>
    )
  }
}

export default App;
