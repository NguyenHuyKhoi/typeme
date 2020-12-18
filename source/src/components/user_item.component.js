//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, TEXT_SIZES } from './../utils/constants'
import { BLACK, BLUE_0, GRAY_1, GRAY_3, WHITE, YELLOW_1 } from './../utils/palette'
import ButtonComponent from './common/button.component'
import InforsBarComponent from './common/infors_bar.component'
import SmallFieldComponent from './common/small_field.component'

export default class UserItemComponent extends Component {
    render(){
        const user=this.props.user
        return (
            <div style={styles.container}>
            
                <img src={user.avatar}  style={styles.avatar}/>

                <text style={styles.user_name}>
                    {user.name}
                </text>

                {/* <text style={styles.user_tagline}>
                    {user.tagline}
                </text> */}

                <div style={styles.fields}>
                    <InforsBarComponent fields={[
                        {
                            key:'Hourly Rate',value:user.hourly_rate
                        },
                        {
                            key:'Done Tasks',value:user.done_tasks
                        },
                        {
                            key:'Income($)',value:user.income
                        }
                    ]}/>
                </div>

                {/* <Link 
                    to={routePaths.user_DETAIL+`/${user.id}`}
                    style={styles.btn_container}>
                    <ButtonComponent label='View Profile '/>
                </Link> */}
               
        
                                                

            </div>


    
        )
    }
}


const styles={
    container:{
        width:'20vw',
        height:180,
        backgroundColor: WHITE,  
        boxShadow:'5px 5px 5px 5px #707070',
        padding:20, 
        marginBottom:30,           
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar:{
        width:80,
        height:80,
        borderRadius:40
    },
    user_name:{
        marginTop:8,
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK
    },
    fields:{
        width: '100%',
        marginTop:20
    },
    btn_container:{
        width: '100%',
        marginTop:10,
        textDecoration:'none'
    }
}