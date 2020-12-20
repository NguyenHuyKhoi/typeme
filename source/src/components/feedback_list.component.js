//import from library 
import React, {Component} from 'react'

import HeaderListComponent from './common/header_list.component'
import FeedbackItemComponent from './feedback_item.component';

import sample_db from '../sample_db/sample_db.json'
const feedbacks=sample_db.feedbacks;
export default class FeedbackListComponent extends Component {

    render(){
        return (

            <div style={styles.container}>
              
                <HeaderListComponent title='Các góp ý từ người dùng'/>
                
        

                <div style={styles.body}>
                {
                    feedbacks.map((item,index)=>
                        <FeedbackItemComponent feedback={item} />
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
        flexDirection: 'column'
    },
    body:{
        width:'100%',
        display:'flex',
        flexDirection: 'column'
    }
}
