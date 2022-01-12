import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const CounterScreen = () => {
    const[count,setCount] =useState(0);
    return (
        <View>
             <Text style={styles.txt}>{count}</Text>
            <Button
            title='Increase'
            onPress={()=>{setCount(count+1)}}
            />
            <Button
            title='Reset'
            onPress={()=>{setCount(0)}}
            />
            <Button
            title='Decrease'
            onPress={()=>{setCount(count-1)}}
            />
           
        </View>
    )
}

export default CounterScreen

const styles = StyleSheet.create({
    txt:{
        textAlign:'center',
        fontSize:40,
        justifyContent:'center',
        alignItems:'center'
    },
})
