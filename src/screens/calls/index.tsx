import React from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native'
import defaultStyle from '../../styles/defaultScreenStyle'


const Calls: React.FC = () => {
    return (
        <SafeAreaView style={defaultStyle.SafeArea}>
<View style={defaultStyle.container} >
    <Text style={{fontSize:30}} >Calls</Text>
</View>
        </SafeAreaView>
    )
}



export default Calls
