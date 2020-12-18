//import from library 
import React, {Component} from 'react'
import { WHITE } from '../../utils/palette'
import HeaderListComponent from '../common/header_list.component'


import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'
import {BUSINESS_AREA_DOMAIN, COMPANY_SIZES_DOMAIN} from '../../utils/constants'

export default class SettingProfileCompanyComponent extends Component {
   

    render(){
        const profile=this.props.profile;
        return (
            <div style={styles.container}>

                <HeaderListComponent title='Profile' height={40}/>

                <div style={styles.body}>

                        <div style={styles.row1}>
                            <div style={styles.row1_col1}>

                                <div style={styles.field_container}>
                                    <LabeledSelectedInputComponent
                                        //  onChange={(value)=>this.props.updateInputs('employee_size',value)} 
                                        label='Employee Size'
                                        domain={COMPANY_SIZES_DOMAIN}
                                        value={profile.employee_size}/>
                                </div>
                                <div style={styles.field_container}>
                                    <LabeledSelectedInputComponent
                                        //  onChange={(value)=>this.props.updateInputs('employee_size',value)} 
                                        label='Employee Size'
                                        domain={COMPANY_SIZES_DOMAIN}
                                        value={profile.employee_size}/>
                                </div>
                            </div>

                            <div style={styles.row1_col2}>

                                <div style={styles.field_container}>
                                    <LabeledSelectedInputComponent
                                        //  onChange={(value)=>this.props.updateInputs('employee_size',value)} 
                                        label='Employee Size'
                                        domain={COMPANY_SIZES_DOMAIN}
                                        value={profile.employee_size}/>
                                </div>

                                <div style={styles.field_container}>
                                    <LabeledSelectedInputComponent 
                                        // onChange={(value)=>this.props.updateInputs('business_area',value)} 
                                        label='Business Area'
                                        domain={BUSINESS_AREA_DOMAIN}
                                        value={profile.business_area} />
                                </div>

                        
                            </div>


                        </div>

                </div>
                  
                
            </div>
                    
           
    )
    }
}

const styles={
    container:{
        flex:1,
        display: 'flex',
        flexDirection:'column',
        backgroundColor:WHITE,
        borderRadius:8,
        boxShadow:'3px 5px 3px 3px #707070'
    },
    body:{
        flex:1,
        padding:50,
        display:'flex',
        justifyContent:'center',
        flexDirection:'column'
    },
    row1:{
        display:'flex',
        flexDirection: 'row'
    },
    row1_col1:{
        display:'flex',
        flex:1,
        flexDirection: 'column'
    },
    field_container:{
        width:'70%',
        marginBottom: 20
    },
    row1_col2:{
        display:'flex',
        flexDirection: 'column',
        flex:1,
        alignItems:'center'
    },
    row2:{
        marginTop:40
    }
}

