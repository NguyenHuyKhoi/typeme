//import from library 
import React, {Component} from 'react'
import UserItemComponent from './user_item.component'
import HeaderListComponent from './common/header_list.component'
import { routePaths } from '../utils/constants';

export default class UserListComponent extends Component {

    render(){
        const users=this.props.users;
        const is_result=this.props.is_result;
        return (
            <div style={styles.container}>
                
                <HeaderListComponent 
                    title={is_result?'Kết quả trận đấu':'Danh sách người chơi' }
                    des_screen={routePaths.ROOM_PLAY}
                    right_title={
                        is_result?'':
                        this.props.enableJoin?
                        "Vào trận":
                        'Vào trận trong : '+this.props.time_remain +' s'}/>
                

                <div style={styles.body}>
                {
                    users.map((item,index)=>
                        <UserItemComponent is_result={is_result} user={item} key={''+index}/>
                    )
                }
                </div>
            </div>
                    
    
        )
    }
}

const styles={
    container:{
        width:'100%',
        display:'flex',
        flexDirection: 'column'
    },
    body:{
        width:'100%',
        display:'flex',
        marginTop:20,
        flexDirection: 'row',
        justifyContent:'space-between',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    }
}
