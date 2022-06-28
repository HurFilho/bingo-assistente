import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, Vibration } from 'react-native';
import { useState } from 'react'
import { addDrawnNumber, removeDrawnNumber, checkLastDrawnNumber } from '../utils/localStorage';

export const Number = (props) => {
    const [pressed, setPressed] = useState(false)
    const [style, setStyle] = useState(createStyle(props.theme, pressed))

    useEffect(() => {
        setStyle(createStyle(props.theme, pressed))
    }, [pressed])

    useEffect(() => {
        setPressed(false)
    }, [props.reset])

    const handlePress = async (number) => {
        Vibration.vibrate(100, false)
        pressed ? await removeDrawnNumber(number) : await addDrawnNumber(number)
        props.setLastDrawnNumber(await checkLastDrawnNumber())
        setPressed(!pressed)
    }

    return (
        <TouchableOpacity data-key={props.children} style={style['card']} onPress={() => { handlePress(props.children) }} >
            <Text data-key={props.children} style={style['number']}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const createStyle = (theme, pressed) => {
    bgColor = pressed ? theme.btnBgSelected : theme.btnBgNotSelected
    color = pressed ? theme.btnFontColorSelected : theme.btnFontColorNotSelected
    return StyleSheet.create({
        card: {
            flex: 1,
            backgroundColor: bgColor,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            marginHorizontal: 10,
            marginVertical: 2,
            shadowColor: "#EDF2F4",
            shadowOpacity: 0.23,
            shadowRadius: 2,
            elevation: 2,
        },
        number: {
            fontSize: 26,
            fontWeight: '800',
            color: color,
        }
    })
}