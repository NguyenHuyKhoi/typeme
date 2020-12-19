//import from library 
import React, {Component} from 'react'

import HeaderListComponent from './common/header_list.component'
import PaginationComponent from './common/pagination.component';
import FeedbackItemComponent from './feedback_item.component';
import LessonItemComponent from './lesson_item.component';
import RoomItemComponent from './room_item.component'
import sample_db from '../sample_db/sample_db.json'
import ParagraphItemComponent from './paragraph_item.component';

const paragraphs=sample_db.practice_paragraphs
export default class ParagraphListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            paragraphs:paragraphs
        }
    }



    render(){
        const paragraphs=this.state.paragraphs

        return (

            <div style={styles.container}>

                <div style={styles.body}>
                {
                    paragraphs.map((item,index)=>
                        <ParagraphItemComponent
                            clickItem={this.props.clickItem}
                            paragraph={item} 
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
