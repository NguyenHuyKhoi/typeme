//import from library 
import React, {Component} from 'react'

import HeaderListComponent from './common/header_list.component'
import PaginationComponent from './common/pagination.component';
import FeedbackItemComponent from './feedback_item.component';
import LessionItemComponent from './lession_item.component';
import RoomItemComponent from './room_item.component'

export default class LessionListComponent extends Component {

    render(){
        return (

            <div style={styles.container}>
              
                <HeaderListComponent title='Tasks' is_sort={true}/>
                
        

                <div style={styles.body}>
                {
                    [1,2,3,4].map((item,index)=>
                        <LessionItemComponent/>
                    )
                }
                </div>
          
            </div>
                    
    
        )
    }
}


const styles={
    container:{
        width:'100%',
        display:'flex',
        flexDirection: 'column',
        backgroundColor: '#974589'
    },
    body:{
        width:'100%',
        display:'flex',
        flexDirection: 'column'
    }
}
