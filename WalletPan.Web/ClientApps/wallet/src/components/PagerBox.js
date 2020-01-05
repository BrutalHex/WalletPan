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

      getMaxPagerNumber()
      {
       return Math.ceil(this.props.recordCount/this.props.pageSize);
      }

      handleClick( id) {
         
        if(id<=0)
         id=1;

         let max=this.getMaxPagerNumber();

         if(id>max)
             {
              id=max;
             }

        this.setState(state => ({
            current: id,
            pageSize: this.state.pageSize,
            pageFrame:1
          }));
        this.props.loadNext(id,this.state.pageSize);
      }
    
      
      getWholeArray()
      {
        let items = [];

        let max=this.getMaxPagerNumber();
console.log(this.props.recordCount);
        for (let number = 1; number <= max; number++) {
          items.push(
            
            <Pagination.Item key={number} active={number === this.state.current} onClick={ () => this.handleClickThrottled(number)}> 
              {number}
            </Pagination.Item>,
          );
        }  
        return items;
      }

    render() {

       
      
     let items=this. getWholeArray();
 
          let low=this.state.current-1;
          if(low-2<2)
            low=2;

            if(low+2>items.length)
            {
              low=items.length-2;
            }

          let bar=items.slice(low-2,low+2)
           

        return(
            <div className="row pager-box">
                  <Pagination>
                
                  <Pagination.Prev  onClick={ () => this.handleClickThrottled(  this.state.current-1)}/>
                       {bar}
                       <Pagination.Next  onClick={ () => this.handleClickThrottled(  this.state.current+1)}/>
                   
                    </Pagination>
            </div>
          
           );

    }
}

export default PagerBox;