import React  from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import throttle from 'lodash.throttle';
 

class PagerBox extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickThrottled = throttle(this.handleClick, 1000);
        this.state = {current: 1};
      }
    
      componentWillUnmount() {
        this.handleClickThrottled.cancel();
      }

      handleClick(e,id) {
        e.preventDefault();
        this.setState(state => ({
            current: id
          }));
        this.props.loadNext(id);
      }
    

    render() {

       
        let items = [];
        for (let number = 1; number <= Math.ceil(this.props.recordCount/this.props.pageCount); number++) {
          items.push(
            <Pagination.Item key={number} active={number === this.state.current} onClick={ () => this.handleClickThrottled(this,number)}> 
              {number}
            </Pagination.Item>,
          );
        }







        return(
            <div className="row pager-box">
                  <Pagination>{items}</Pagination>
            </div>
          
           );

    }
}

export default PagerBox;