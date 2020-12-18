//import from library 
import React, {Component} from 'react'
import UserItemComponent from './user_item.component'
import HeaderListComponent from './common/header_list.component'

export default class UserListComponent extends Component {

    render(){
        const users=this.props.users!==undefined?this.props.users:[];
        return (
            <div style={styles.container}>
                
                <HeaderListComponent title='users' is_sort={true}/>
                

                <div style={styles.body}>
                {
                    users.map((item,index)=>
                        <UserItemComponent user={item} key={''+index}/>
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
