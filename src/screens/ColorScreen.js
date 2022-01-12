import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const ColorScreen = () => {
    const [color, setColor] = useState([]);
    return (
        <View>
            <Button title="Change Color" 
                onPress={() => {
                    setColor([Math.random() * 255, Math.random() * 255, Math.random() * 255])
                }
            }
            />
            <View style={{height:100,weight:100,backgroundColor:randomColor()}}></View>
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
