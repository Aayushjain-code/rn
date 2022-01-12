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
           <Button
                title="Go to Color Changer"
                onPress={() => navigation.navigate('ColorChanger')}
           />
           <Button
                title="Go to Text Changer"
                onPress={() => navigation.navigate('TextChanger')}
           />


        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
