import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        height: 70,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: '#EBEBEB',
        borderRadius: 10,
        padding: 10
    },
    cardLeft:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardTitle:{
        marginLeft: 10,
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16
    },
    cardRight:{
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    cardDate:{
        fontSize: 12,
        fontWeight: 'bold',
        color: '#8C1C1C'
    },
    cardTime:{
        color: '#8D8D8D',
        fontSize: 12,
        fontWeight: 'bold'
    }
});

export default styles;