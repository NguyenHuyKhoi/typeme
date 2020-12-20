//import from library 
import React, {Component} from 'react'
import FeedbackModal from '../components/feed_back.modal';
import FooterBarComponent from '../components/common/footer_bar.component';
import {connect }from 'react-redux'
import * as action from './../redux/action/user.action'
import HeaderBarComponent from '../components/common/header_bar.component';
import { BODY, TEXT_SIZES } from '../utils/constants';
import { BLACK ,GRAY_6} from '../utils/palette';
import RoomHistoryListComponent from '../components/room_history_list.component';


class RoomHistoryScreen extends Component {

    render(){
        return (

            <div style={{...styles.container,backgroundColor: this.props.user_infor.background_color}}>
                <FeedbackModal
                      is_open={false} />

                <HeaderBarComponent />

                <div style={styles.body}>

                    
                    <div style={{flex:1}}/>

                    <div style={{flex:BODY.FLEX}}>
                            <RoomHistoryListComponent/>
                    </div>
                 
                    <div style={{flex:1}}/>
                </div>


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
        paddingTop:BODY.PADDING_TOP
    }
}
const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(RoomHistoryScreen)