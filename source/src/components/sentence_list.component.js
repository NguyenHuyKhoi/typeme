//import from library 
import React, {Component} from 'react'

import HeaderListComponent from './common/header_list.component'
import PaginationComponent from './common/pagination.component';
import FeedbackItemComponent from './feedback_item.component';
import LessonItemComponent from './lesson_item.component';
import RoomItemComponent from './room_item.component'
import sample_db from '../sample_db/sample_db.json'
import SentenceItemComponent from './sentence_item.component';

const sentences=sample_db.practice_sentences
export default class SentenceListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            sentences:sentences
        }
    }



    render(){
        const sentences=this.state.sentences

        const l=this.state.first_item_index;
        const r=this.state.last_item_index;

        return (

            <div style={styles.container}>

                <div style={styles.body}>
                {
                    sentences.map((item,index)=>
                        <SentenceItemComponent
                            clickItem={this.props.clickItem}
                            sentence={item} 
                            index={index+1}/>
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
