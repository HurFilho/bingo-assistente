import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { resetDrawnNumbers } from '../utils/localStorage';

export const Sidebar = (props) => {

    return (
        <View style={style['sidebar']}>
            <Text style={style['title']}>Último número</Text>
            <View style={style['numberDisplay']}>
                <Text style={style['number']}>{props.children}</Text>
            </View>
            {/* <View style={style['numberDisplay']}> */}
            {/* </View> */}
            <TouchableOpacity style={style['button']} onPress={() => { props.setReset(true) }} >
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
        marginTop: 20,
        width: '100%',
        backgroundColor: '#383B56',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    buttonTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        margin: 10,
        textAlign: 'center',
        fontWeight: '600',
    },
    numberDisplay: {
        // flex: 1,
        // height: '30%',
        width: '100%',
        marginTop: 10,
        // borderColor: '#AAAAAA',
        // borderStyle: 'solid',
        // borderWidth: 1,
        borderRadius: 50,
        justifyContent: 'flex-end',
        padding: 8,
        backgroundColor: '#EDF2F4',
        shadowColor: "#000000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    number: {
        fontSize: 60,
        textAlign: 'center',
        fontWeight: '800',
        // color: '#EDF2F4',
        color: '#2B2D42',
        // color: '#EF233C',
    },
    title: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '600',
        color: '#EDF2F4',
        // color: '#2B2D42',
    }
})