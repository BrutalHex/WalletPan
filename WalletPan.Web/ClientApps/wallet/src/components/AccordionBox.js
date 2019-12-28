import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionBoxItem from './AccordionBoxItem';
 

class AccordionBox extends React.Component {


    constructor(props) {
        super(props);
      
    }

    

    render() {



        const items = this.props.list;
      
        const listItems = items.map((item, index) => {
            return (
                <AccordionBoxItem item={item} index={index} />
                );
        }

        );






        return (

            <Accordion   className={`${this.props.defclass}`}>

         
                                    {listItems}
           

            </Accordion>

        )
        ;
    }
}


export default AccordionBox;