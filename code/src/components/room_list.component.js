//import from library 
import React, {Component} from 'react'

import HeaderListComponent from './common/header_list.component'
import RoomItemComponent from './room_item.component'
import sample_db from '../sample_db/sample_db.json'

const rooms=sample_db.rooms;
export default class RoomListComponent extends Component {

    render(){
        return (

            <div style={styles.container}>
              
                <HeaderListComponent title='Danh sách phòng chơi'/>
                
        

                <div style={styles.body}>
                {
                    rooms.map((item,index)=>
                        <RoomItemComponent room={item}/>
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
        flexDirection: 'column'
    }
}
