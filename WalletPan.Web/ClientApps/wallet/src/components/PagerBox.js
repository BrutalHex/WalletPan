import React  from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import throttle from 'lodash.throttle';
 

class PagerBox extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickThrottled = throttle(this.handleClick, 1000);
        this.state = {current: 1,pageSize:this.props.pageSize,pageFrame:1};


       
      }
    
      componentWillUnmount() {
        this.handleClickThrottled.cancel();
      }

      handleClick(e,id) {
        e.preventDefault();
        this.setState(state => ({
            current: id,
            pageSize: this.state.pageSize
          }));
        this.props.loadNext(id,this.state.pageSize);
      }
    
      
      getWholeArray()
      {
        let items = [];

        for (let number = 1; number <= Math.ceil(this.props.recordCount/this.props.pageSize); number++) {
          items.push(
            
            <Pagination.Item key={number} active={number === this.state.current} onClick={ () => this.handleClickThrottled(this,number)}> 
              {number}
            </Pagination.Item>,
          );
        }  
        return items;
      }

    render() {

       
      
     let items=this. getWholeArray();
 
          let low=this.state.current-1;
          
          let bar=items.slice(low,5)
           

        return(
            <div className="row pager-box">
                  <Pagination>
                  <Pagination.First />
                  <Pagination.Prev />
                       {bar}
                       <Pagination.Next />
                       <Pagination.Last />
                    </Pagination>
            </div>
          
           );

    }
}

export default PagerBox;