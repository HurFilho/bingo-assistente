import { Number } from './number';
import { StyleSheet, View } from 'react-native';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

export const Group = (props) => {
    const tens = props.children
    return (
        <View style={styles(props.theme.appBgColor !== '' && props.theme.appBgColor ? props.theme.appBgColor : '')}>
            {numbers.map(unit => {
                return <Number key={prepareNumber(tens, unit)} theme={props.theme} reset={props.reset} setLastDrawnNumber={props.setLastDrawnNumber} >{prepareNumber(tens, unit)}</Number>
            })}
        </View >
    )
}

const prepareNumber = (tens, unit) => {
    const number = parseInt(`${tens === 0 ? '' : tens}${unit}`)
    return number % 10 === 0 ? number + 10 : number
}

const styles = (bgColor) => {
    return StyleSheet.create({
        flex: 1,
        flexDirection: 'row',
        backgroundColor: bgColor,
    })
}