//import from library 
import React, {Component} from 'react'
import FeedbackModal from '../components/feed_back.modal';
import FooterBarComponent from '../components/common/footer_bar.component';

import HeaderBarComponent from '../components/common/header_bar.component';
import {connect }from 'react-redux'
import * as action from './../redux/action/user.action'
import { BODY, routePaths, TEXT_SIZES } from '../utils/constants';
import { BLACK ,GRAY_6} from '../utils/palette';
import UserListComponent from '../components/user_list.component';

import sample_db from '../sample_db/sample_db.json'
const users=sample_db.users;

class RoomDetailScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            time_remain:10,
            enable_join:false
        }
    };

    componentDidMount=()=>{
        this.timeDown=setInterval(()=>{
            this.setState({
                time_remain:this.state.time_remain-1
            })
        },1000)
    }

    enableJoin=()=>{
        clearInterval(this.timeDown);
        this.setState({
            enable_join:true
        })
    }
    render(){
        if (this.state.enable_join===false && this.state.time_remain<4) {
            this.enableJoin();
        };
        return (

            <div style={{...styles.container,backgroundColor: this.props.user_infor.background_color}}>

                <HeaderBarComponent/>

                <div style={styles.body}>

                    
                    <div style={{flex:1}}/>

                    <div style={{flex:BODY.FLEX}}>
                            <UserListComponent 
                                enableJoin={this.state.enable_join}
                                is_result={false} users={users} time_remain={this.state.time_remain}/>
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

export default connect(mapStateToProps,action)(RoomDetailScreen)