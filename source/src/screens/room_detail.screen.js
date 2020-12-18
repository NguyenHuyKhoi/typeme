//import from library 
import React, {Component} from 'react'
import FeedbackModal from '../components/feed_back.modal';
import FooterBarComponent from '../components/common/footer_bar.component';

import HeaderBarComponent from '../components/common/header_bar.component';

import { BODY, TEXT_SIZES } from '../utils/constants';
import { BLACK } from '../utils/palette';
import UserListComponent from '../components/user_list.component';

import sample_db from '../sample_db/sample_db.json'
const users=sample_db.users;

export default class RoomDetailScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            time_remin:60
        }
    };


    render(){
        console.log('time :',this.state.time_remin)
        return (

            <div style={styles.container}>
                <FeedbackModal
                      is_open={false} />

                <HeaderBarComponent />

                <div style={styles.body}>

                    
                    <div style={{flex:1}}/>

                    <div style={{flex:BODY.FLEX}}>
                            <UserListComponent users={users} time_remain={this.state.time_remin}/>
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
