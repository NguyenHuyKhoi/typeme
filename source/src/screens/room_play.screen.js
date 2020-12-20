//import from library 
import React, {Component} from 'react'
import FeedbackModal from '../components/feed_back.modal';
import FooterBarComponent from '../components/common/footer_bar.component';

import HeaderBarComponent from '../components/common/header_bar.component';
import {connect }from 'react-redux'
import * as action from './../redux/action/user.action'
import { BODY, routePaths, TEXT_SIZES } from '../utils/constants';
import { BLACK ,GRAY_6} from '../utils/palette';
import RoomListComponent from '../components/room_list.component';
import PracticeComponent from '../components/practice.component';
import RoomWayComponent from '../components/room_way.component';


 class RoomPlayScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            focus_tab_index:0
        }
    }
    

    render(){
        return (

            <div style={{...styles.container,backgroundColor: this.props.user_infor.background_color}}>
                <HeaderBarComponent />

                <div style={styles.body}>

                    <div style={{flex:1}}/>

                    <div style={styles.content_body}>
                        <RoomWayComponent/>
                        
                        <PracticeComponent 
                            game_mode={true}
                            navToResult={()=>this.props.history.push(routePaths.ROOM_RESULT)}
                            practice_mode={this.state.focus_tab_index}/>
                    </div>

                    <div style={{flex:1}}/>
                    
                </div>

                
                <FooterBarComponent/>

                {/* footer */}
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
        flexDirection: 'column',
        backgroundColor: GRAY_6
    },
    body:{
        width:'100vw',
        display:'flex',
        flexDirection: 'row',
        paddingBottom:100,
        paddingTop:20
    },
    content_body:{
        flex:BODY.FLEX,
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}

const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(RoomPlayScreen)