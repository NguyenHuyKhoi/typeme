//import from library 
import React, {Component} from 'react'

import HeaderListComponent from './common/header_list.component'
import PaginationComponent from './common/pagination.component';
import FeedbackItemComponent from './feedback_item.component';
import LessonItemComponent from './lesson_item.component';
import RoomItemComponent from './room_item.component'
import sample_db from '../sample_db/sample_db.json'
import ParagraphItemComponent from './paragraph_item.component';
import PracWordItemComponent from './prac_word_item.component';

const words=sample_db.practice_words
export default class PracWordListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            words:words
        }
    }



    render(){
        const words=this.state.words

        return (

            <div style={styles.container}>

                <div style={styles.body}>
                {
                    words.map((item,index)=>
                        <PracWordItemComponent
                            clickItem={this.props.clickItem}
                            word={item} 
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
