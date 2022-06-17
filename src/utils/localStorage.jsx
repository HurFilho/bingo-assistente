import AsyncStorage from '@react-native-async-storage/async-storage';
import themes from '../themes.json'

export const loadTheme = async () => {
    const themeName = await AsyncStorage.getItem('theme')
    const theme = themeName ? themes[`${themeName}`] : themes['Crotilda']
    return theme
}

export const addDrawnNumber = async number => {
    const storedDrawnNumbers = await AsyncStorage.getItem('drawnNumbers')
    let actualDranwnNumbers = storedDrawnNumbers ? await JSON.parse(storedDrawnNumbers) : []
    actualDranwnNumbers.push(number)
    await AsyncStorage.setItem('drawnNumbers', JSON.stringify(actualDranwnNumbers))
}

export const resetDrawnNumbers = async number => {
    await AsyncStorage.setItem('drawnNumbers', '[]')
}

export const removeDrawnNumber = async number => {
    const storedDrawnNumbers = JSON.parse(await AsyncStorage.getItem('drawnNumbers'))
    const actualDranwnNumbers = await storedDrawnNumbers.filter((value) => { return value !== number })
    await AsyncStorage.setItem('drawnNumbers', JSON.stringify(actualDranwnNumbers))
}

export const checkLastDrawnNumber = async () => {
    const storedDrawnNumbers = JSON.parse(await AsyncStorage.getItem('drawnNumbers'))
    return storedDrawnNumbers ? storedDrawnNumbers[storedDrawnNumbers.length - 1] : ''
}

