import React, { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

const ColorScreen = () => {
    const [color, setColor] = useState([]);
    return (
        <View>
            <Button title="Change Color" 
                onPress={() => {
                    setColor([...color, randomColor()])
                }
            }
            />
            <FlatList
                keyExtractor={(item) =>item}
                data={color}
                renderItem={({ item }) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item }} />
                }}
            />
        </View>
    )
}

function randomColor(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`
}

export default ColorScreen

const styles = StyleSheet.create({})
