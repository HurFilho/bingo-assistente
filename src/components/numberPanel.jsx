import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Group } from './group';

const createArray = quantity => {
    return Array(quantity).fill().map((_, index) => index)
}

export const NumberPanel = props => {
    const [numberQty, setNumberQty] = useState(createArray(props.children))
    return (
        <View style={{ flex: 5 }}>
            <View style={{ flex: 1 }}>
                {
                    numberQty.map(item => {
                        // return <Group key={item} theme={props.theme ? props.theme : ''}>{item}</Group>
                        return <Group key={item} theme={props.theme} reset={props.reset} setLastDrawnNumber={props.setLastDrawnNumber}>{item}</Group>
                    })
                }
            </View>
        </View>
    );
}

