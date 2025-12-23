import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Game from './components/Game';

function index() {

  return (
    <GestureHandlerRootView style={{flex:1}}>
      <Game />
    </GestureHandlerRootView>
  );
}


export default index
