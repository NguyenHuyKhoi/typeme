//import from library 
import React, {Component} from 'react'
import { routePaths, TEXT_SIZES } from './../utils/constants'
import { BLACK, BLUE_0, GRAY_1, GRAY_3, WHITE, YELLOW_1 } from './../utils/palette'

import InforsBarComponent from './common/infors_bar.component'

export default class UserItemComponent extends Component {
    render(){
        const user=this.props.user
        const is_result=this.props.is_result
        return (
            <div style={styles.container}>
            
                <img src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random()*100)}.jpg`}  style={styles.avatar}/>

                <text style={styles.user_name}>
                    {user.name}
                </text>

                <div style={styles.fields}>
                    <InforsBarComponent fields={
                        !is_result?
                            [
                                {
                                    key:'Đã chơi',value:user.games+' trận'
                                },
                                {
                                    key:'Tỉ lệ Thắng',value:user.win_rate 
                                }
                            ]
                            :
                            [
                                {
                                    key:'Thứ hạng ',value:user.rank
                                },
                                {
                                    key:'Tốc độ ',value:user.wpm+' wpm' 
                                },
                                {
                                    key:'Chính xác ',value:user.accuracy 
                                }
                            ]
                            
                }/>
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
        width:'18vw',
        height:160,
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
        marginTop:10
    },
    btn_container:{
        width: '100%',
        marginTop:10,
        textDecoration:'none'
    }
}