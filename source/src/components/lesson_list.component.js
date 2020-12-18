//import from library 
import React, {Component} from 'react'

import HeaderListComponent from './common/header_list.component'
import PaginationComponent from './common/pagination.component';
import FeedbackItemComponent from './feedback_item.component';
import LessonItemComponent from './lesson_item.component';
import RoomItemComponent from './room_item.component'
import sample_db from '../sample_db/sample_db.json'

const lessons=sample_db.lessons
export default class LessonListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            lessons:lessons,
            first_item_index:0,
            last_item_index:Math.min(4,lessons.length-1)
        }
    }

    switchPage=(l,r)=>{
        this.setState({
            first_item_index:l,
            last_item_index:r
        })
    }

    render(){
        const lessons=this.state.lessons

        const l=this.state.first_item_index;
        const r=this.state.last_item_index;

        const arr=lessons.slice(l,r+1)
        console.log('arr:',l,r,arr);
        return (

            <div style={styles.container}>
              
                <HeaderListComponent title='Các bài học luyện gõ âm' is_sort={true}/>
                
        

                <div style={styles.body}>
                {
                    arr.map((item,index)=>
                        <LessonItemComponent lesson={item} index={l+index+1}/>
                    )
                }
                </div>

                <PaginationComponent    
                    onClickPage={(l,r)=>this.switchPage(l,r)}
                    items={lessons.length} items_per_page={5} />
          
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
