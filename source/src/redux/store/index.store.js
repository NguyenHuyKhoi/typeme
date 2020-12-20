import {createStore }from 'redux'
import reducers from '../reducer/index.reducer'

export const store= createStore(reducers)
