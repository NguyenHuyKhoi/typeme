//import from library 
import React, {Component} from 'react'
import FooterBarComponent from '../components/common/footer_bar.component';
import HeaderBarComponent from '../components/common/header_bar.component';
import HomeBannerComponent from '../components/common/home_banner.component';   
import KolReviewListComponent from '../components/kol_review_list.component';
import { BLACK, BLUE_1, GRAY_6, WHITE } from '../utils/palette';
import FunctionListComponent from '../components//function_list.component';
import {connect }from 'react-redux'
import * as action from './../redux/action/user.action'

class HomeScreen extends Component {


   
    render(){
        return (

            <div style={{...styles.container,backgroundColor: this.props.user_infor.background_color}}>
                
              
                <HeaderBarComponent/>

                <div style={styles.body}>

                    <HomeBannerComponent/>

                    <FunctionListComponent/>


                    <KolReviewListComponent/>
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
        backgroundColor:GRAY_6,
        overflowX:'hidden',
        display:'flex',
        flexDirection: 'column'
    },
    body:{
        width:'100vw',
        display:'flex',
        flexDirection: 'column',
        paddingBottom:100
    }
}


const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(HomeScreen)