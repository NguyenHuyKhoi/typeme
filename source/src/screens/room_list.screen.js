//import from library 
import React, {Component} from 'react'
import FooterBarComponent from '../components/common/footer_bar.component';

import HeaderBarComponent from '../components/common/header_bar.component';

import { BODY, TEXT_SIZES } from '../utils/constants';
import { BLACK ,GRAY_6} from '../utils/palette';
import RoomListComponent from '../components/room_list.component';
import ButtonComponent from '../components/common/button.component';
import RoomCreateModal from '../components/modal/room_create.modal';
import RoomHistoryModal from '../components/modal/room_history.modal';


export default class RoomListScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            show_create_modal:false,
            show_history_modal:false
        }
    }

    openCreateModal=()=>{
        this.setState({
            show_create_modal:true
        })
    }

    closeCreateModal=()=>{
        this.setState({
            show_create_modal:false
        })
    }

    openHistoryModal=()=>{
        this.setState({
            show_history_modal:true
        })
    }

    closeHistoryModal=()=>{
        this.setState({
            show_history_modal:false
        })
    }


    render(){
        return (

            <div style={styles.container}>
                <RoomCreateModal
                    is_open={this.state.show_create_modal} 
                    clickCancel={this.closeCreateModal}

                    clickOk={()=>{
                        alert('Đã tạo phòng thành công, sau 5p ván đấu sẽ được bắt đầu.')
                        this.closeCreateModal();
                    }}/>

                <RoomHistoryModal  
                    is_open={this.state.show_history_modal} 
                    clickCancel={this.closeHistoryModal}
                    clickOk={()=>{
                        this.closeHistoryModal();
                }}/>

                <HeaderBarComponent />

                <div style={styles.body}>

                    
                    <div style={{flex:1,display:'flex',flexDirection:'column',alignItems: 'center'}}>
                        <div style={{width: '60%'}}>
                            <ButtonComponent
                                onClick={this.openHistoryModal}
                                 label='Lịch sử chơi'/>
                        </div>
                      
                    </div>

                    <div style={{flex:BODY.FLEX}}>
                            <RoomListComponent />
                    </div>
                 
                    <div style={{flex:1,display:'flex',flexDirection:'column',alignItems: 'center'}}>
                        <div style={{width: '60%'}}>
                            <ButtonComponent
                                 onClick={this.openCreateModal}
                                 label='Tạo phòng'/>
                        </div>
                    </div>
                </div>


                {/* footer */}
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
