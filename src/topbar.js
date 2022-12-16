import React from 'react';

class Topbar extends React.Component{
    render(){
        return(
            <div className='topbar'>
                <div className='top-search'>
                   <span>search</span> 
                </div>
                <div className='notification'>
                    <img src="./bell.png" alt="" />

                    <div className='box'></div>
                </div>
            </div>
        );
    }
}

export default Topbar;