//import from library 
import React, {Component} from 'react'
import { BOX_SHADOW, TEXT_SIZES } from '../utils/constants'
import { BLACK, BLUE_1, BLUE_2, GRAY_1, GRAY_2, GRAY_3, GRAY_5, WHITE } from '../utils/palette'
import SmallFieldComponent from './common/small_field.component';

import run_logo from '../assets/images/run_logo.png'
const number_items=21;
class Partner extends Component{
    render(){
        const user=this.props.user;
        if (user!=='') console.log('User :',user)
        return (
            <div style={{width: 40,height: 50,
                flexDirection:'column',display:'flex',alignItems: 'center'}} >
                {
                    user!==''?
                    <SmallFieldComponent label={user}/>
                    :
                    null
                }
                {
                    user!==''?
                    <img src={run_logo} style={{width: 10,height: 30}}/>

                    :
                    null
                }
            </div>
        )
    }
}

export default class RoomWayComponent extends Component {
    constructor(props){
        super(props);   
        this.state={
            users:['Tôi','Tuấn','Đạt','Hiếu'],
            show_index:[10,9,11,8],
            interval:null
        };
    }   

    random=(limit)=>{
        return Math.floor(Math.random()*limit);
    }

    insideArr=(arr)=>{
        for (let i=1;i<arr.length;i++){
            if (arr[i]<0) arr[i]=1;
            if (arr[i]>21) arr[i]=20
        };
        return arr;
    }
    componentDidMount=()=>{
        this.interval=setInterval(()=>{
            const pivot=Math.floor(number_items/2);
            let arr=this.state.show_index;
            arr[1]=arr[1]+this.random(3)*(this.random(2)===0?-1:1);
            arr[2]=arr[2]+this.random(3)*(this.random(2)===0?-1:1);
            arr[3]=arr[3]+this.random(3)*(this.random(2)===0?-1:1);

            if (arr[1]===arr[0]) arr[1]++;
            if (arr[2]===arr[0]) arr[2]--;
            if (arr[2]===arr[1]) arr[2]--;

            if (arr[3]===arr[0]) arr[3]++;
            if (arr[3]===arr[1]) arr[3]++;
            if (arr[3]===arr[2]) arr[3]++;

             arr=this.insideArr(arr)
            console.log('arr:',arr)
            this.setState({
                show_index:arr
            });
        },1000)
    }

    mapUserWithIndex=(index)=>{
        const arr=this.state.show_index;
        const users=this.state.users;
        console.log('Map_User :',index,arr,users)
        for (let i=0;i<arr.length;i++){
            if (index===arr[i]) return users[i];
        };
        return '';
    }

    componentWillUnmount=()=>{
        clearInterval(this.interval)
    }



    render(){
        const arr=[];
        for (let i=0;i<number_items;i++) arr.push(i);
        return (
    

            <div style={styles.container}>
                <div style={{width: '100%',flex:1,flexDirection:'row',display:'flex'}}>

                    <div style={{flex:1,height: '100%',
                        display:'flex',flexDirection:'row',justifyContent:'center',alignItems: 'flex-start'}}>
                        {
                            arr.map((item,index)=>{
                                const user=this.mapUserWithIndex(index);
                                if (user!=='') console.log('User ',user,index)
                                return (
                                    <Partner 
                                        user={user}/>    
                                )
                            })
                        }
                    </div>

                </div>
                <div style={{width: '100%',height: 6,backgroundColor: BLUE_1}}>
                    .
                </div>
                    

            
            </div>

        )
    }
}

const styles={
    container:{
        display:'flex',
        width: '100%',
        height: 60,
        backgroundColor: WHITE,
        boxShadow: BOX_SHADOW,
        flexDirection: 'column'
    },
    label:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK
    },
    body:{
        marginTop:5,
        width:'100%',
        alignSelf: 'baseline',
        display:'flex',
        lexDirection: 'row',
        flexWrap:'wrap',
        alignItems: 'flex-start'
    },
    normal_text:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK
    },
    small_text:{
        fontSize:TEXT_SIZES.SMALL,
        color:GRAY_2
    },
    item_container:{
        display:'flex',
        marginRight:10,
        marginTop:7,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:3,
        padding: 7
    },
    item_name:{
        fontSize:TEXT_SIZES.SMALL
    }
}
