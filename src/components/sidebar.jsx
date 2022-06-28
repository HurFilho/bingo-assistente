import { StyleSheet, View, Text, TouchableOpacity, Vibration } from 'react-native';

export const Sidebar = (props) => {

    const bingoLetters = ['B', 'I', 'N', 'G', 'O']
    const handlePress = async () => {
        Vibration.vibrate(400, false)
        props.setReset(true)
    }

    return (
        <View style={style['sidebar']}>
            {/* <Text style={style['title']}>Último número</Text> */}
            <View style={style['numberDisplay']}>
                <Text style={style['letter']}>{bingoLetters[Math.ceil(props.children / 15) - 1]}</Text>
                <View style={{ height: 2, backgroundColor: '#2B2D42' }} />
                <Text style={style['number']}>{props.children}</Text>
            </View>
            <TouchableOpacity style={style['button']} onPress={() => { handlePress() }} >
                <Text style={style['buttonTitle']}>Resetar</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    sidebar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginHorizontal: 10,
        marginVertical: 2,
    },
    button: {
        marginTop: 50,
        width: '100%',
        backgroundColor: '#383B56',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: "#FFFFFF",
        shadowOpacity: 0.23,
        elevation: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        }
    },
    buttonTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        margin: 10,
        textAlign: 'center',
        fontWeight: '600',
    },
    numberDisplay: {
        width: '100%',
        marginTop: 10,
        borderRadius: 20,
        justifyContent: 'flex-end',
        padding: 8,
        backgroundColor: '#EDF2F4',
    },
    number: {
        fontSize: 80,
        textAlign: 'center',
        fontWeight: '800',
        color: '#2B2D42',
    },
    letter: {
        fontSize: 80,
        textAlign: 'center',
        fontWeight: '800',
        color: '#505668',
    },
    title: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '600',
        color: '#EDF2F4',
        // color: '#2B2D42',
    }
})