//import from library 
import React, {Component} from 'react'


import RoomHistoryItemComponent from './room_history_item.component'
import sample_db from '../sample_db/sample_db.json'

const rooms=sample_db.rooms;
export default class RoomHistoryListComponent extends Component {

    render(){
        return (

            <div style={styles.container}>
              
                {/* <HeaderListComponent title='Lịch sử chơi'/> */}
                
        

                <div style={styles.body}>
                {
                    rooms.map((item,index)=>
                        <RoomHistoryItemComponent room={item}/>
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
