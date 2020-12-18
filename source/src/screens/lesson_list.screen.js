//import from library 
import React, {Component} from 'react'
import FeedbackModal from '../components/feed_back.modal';
import FooterBarComponent from '../components/common/footer_bar.component';

import HeaderBarComponent from '../components/common/header_bar.component';
import FeedbackListComponent from '../components/room_list.component';

import api from '../sample_db/fake_api_responses.json'
import { TEXT_SIZES } from '../utils/constants';
import { BLACK } from '../utils/palette';
import LessonListComponent from '../components/lesson_list.component';
import {BODY} from '../utils/constants'

export default class LessonListScreen extends Component {

    render(){
        return (

            <div style={styles.container}>
                <FeedbackModal
                      is_open={false} />

                <HeaderBarComponent />

                <div style={styles.body}>

                    
                    <div style={{flex:1}}/>

                    <div style={{flex:BODY.FLEX}}>
                            <LessonListComponent/>
                    </div>
                 
                    <div style={{flex:1}}/>
                </div>

                <FooterBarComponent/>
            </div>
            
        )
    }
}

const styles={
    container:{
        width:'100vw',
        height:'100vh',
        display:'flex',
        flexDirection: 'column'
    },
    body:{
        width:'100vw',
        display:'flex',
        flexDirection: 'row',
        paddingBottom:100,
        paddingTop:BODY.PADDING_TOP
    }
}
