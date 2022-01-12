import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View>
           <Button
                title="Go to Counter"
                onPress={() => navigation.navigate('Counter')}
           />
           <Button
                title="Go to Colours"
                onPress={() => navigation.navigate('Colors')}
           />


        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
