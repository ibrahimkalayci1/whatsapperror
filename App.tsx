import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigaton from './src/router/rootNavigation';


const App: React.FC = () => {
  return (
    <NavigationContainer>
<RootNavigaton/>

    </NavigationContainer>
  )
}



export default App
