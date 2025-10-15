import React from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native'
import defaultStyle from '../../styles/defaultScreenStyle'


const Status: React.FC = () => {
    return (
        <SafeAreaView style={defaultStyle.SafeArea}>
<View style={defaultStyle.container} >
    <Text style={{fontSize:30}} >Status</Text>
</View>
        </SafeAreaView>
    )
}



export default Status
