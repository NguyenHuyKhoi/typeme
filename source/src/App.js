import React ,{Component,Fragment} from 'react'
import { BrowserRouter,Route, Link, NavLink, Switch } from "react-router-dom";
import {Provider} from 'react-redux'
import {store,persistor} from './redux/store/index.store'

import './App.css';
import { PersistGate } from 'redux-persist/integration/react'

import {routePaths} from './utils/constants'
import HomeScreen from './screens/home.screen';
import PracticeScreen from './screens/practice.screen';
import FeedbackScreen from './screens/feedback.screen';
import RoomListScreen from './screens/room_list.screen';
import RoomDetailScreen from './screens/room_detail.screen';
import RoomResultScreen from './screens/room_result.screen';
import SettingScreen from './screens/setting.screen';
import LessonListScreen from './screens/lesson_list.screen';
import EditorScreen from './screens/editor.screen';
import RoomHistoryScreen from './screens/room_history.screen';
import RoomPlayScreen from './screens/room_play.screen';



export default class  App extends Component {
	render (){
		return (
			<Provider store={store}>
				 <PersistGate loading={null} persistor={persistor}>

			
						<BrowserRouter>	
						<Switch>

							<Route path={routePaths.PRACTICE} component={PracticeScreen}/>
							<Route path={routePaths.FEEDBACK} component={FeedbackScreen}/>
							<Route path={routePaths.ROOM_LIST} component={RoomListScreen}/>
							<Route path={routePaths.ROOM_DETAIL} component={RoomDetailScreen}/>
							<Route path={routePaths.ROOM_RESULT} component={RoomResultScreen}/>
							<Route path={routePaths.SETTING} component={SettingScreen}/>
							<Route path={routePaths.LESSON_LIST} component={LessonListScreen}/>
							<Route path={routePaths.EDITOR} component={EditorScreen}/>
							<Route path={routePaths.ROOM_HISTORY} component={RoomHistoryScreen}/>
							<Route path={routePaths.ROOM_PLAY} component={RoomPlayScreen}/>



							<Route path={routePaths.HOME} component={HomeScreen}/>

							

						</Switch>
				</BrowserRouter>
				</PersistGate>
			</Provider>
			
		);
  	}
}
