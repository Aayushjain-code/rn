import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View>
           <Button
                title="Go to Counter"
                onPress={() => navigation.navigate('Counter')}
           />


        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
