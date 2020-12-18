//import from library 
import React, {Component} from 'react'

import SettingAccountComponent from '../components/setting/setting_account.component'
import SettingProfileCompanyComponent from '../components/setting/setting_profile_company.component'
import { routePaths, SIDEBAR_RATIO,PADDING_BODY_DASHBOARD, BODY } from '../utils/constants'
import { GRAY_2, GRAY_6,GREEN_1,RED_1,WHITE } from '../utils/palette'
import HeaderListComponent from '../components/common/header_list.component'
import ButtonComponent from '../components/common/button.component'
import { Link } from 'react-router-dom'
import api from '../sample_db/fake_api_responses.json'

import {connect }from 'react-redux'
import * as action from '../redux/action/user.action'
import HeaderBarComponent from '../components/common/header_bar.component'
import TextareaInputComponent from '../components/input/textarea_input.component'
const setting=api.get_setting_company
export default class EditorScreen extends Component {
 

    render(){
        return (

            <div style={styles.container}>
                
                <HeaderBarComponent />
                
                <div style={styles.body}>
                    <div style={{flex:1}}/>
                    <div style={styles.content_body}>
                
                        <HeaderListComponent title='Soạn thảo'/>
           
                        <div style={{flexDirection:'row',height: '80%',display:'flex',
                                backgroundColor: WHITE,padding:20,
                                boxShadow: '5px 5px 5px 5px #707070'}}>
                            <div style={{width: '90%',height:'100%'}}>
                                <TextareaInputComponent/>
                            </div>
                            <div style={{width: '20%',height: '100%',display:'flex',
                                flexDirection:'column',alignItems: 'center'}}>

                                <div style={{width: '80%',marginTop:20}}>
                                    <ButtonComponent label='Sao chép'/>
                                </div>
                             
                                <div style={{width: '80%',marginTop:20}}>
                                    <ButtonComponent label='Lưu nháp'/>
                                </div>

                                <div style={{width: '80%',marginTop:20}}>
                                    <ButtonComponent label='Tra từ' color={GREEN_1}/>
                                </div>

                                <div style={{width: '80%',marginTop:20}}>
                                    <ButtonComponent label='Xóa hết' color={RED_1}/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div style={{flex:1}}/>

     
                </div>
            
                
                

               
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
    content_body:{
        flex:BODY.FLEX,
        display:'flex',
        height:'75vh',
        flexDirection: 'column'
    },
    body:{
        width:'100vw',
        height: '100%',
        display:'flex',
        flexDirection: 'row',
        paddingTop:BODY.PADDING_TOP
    }
}


// const mapStateToProps = state => ({
// 	user_infor: state.user_infor,
// });

// export default connect(mapStateToProps,action)(DashboardSettingCompanyScreen)