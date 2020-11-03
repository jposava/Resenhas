import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    filter:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        height: 70,
        alignItems: 'center'
    },
    filterTextActived:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#8C1C1C'
    },
    filterTextInative:{
        color: '#d92323',
        fontWeight: 'bold',
        fontSize: 18,
        opacity: 0.5
    },
    content:{
        width: '100%',
        marginTop: 30
    },
    pageTitle:{
        alignItems: 'center',
        marginTop: 15
    },
    lineTitle:{
        borderWidth: 0.7,
        borderColor: '#d92323',
        width: '100%'
    },
    title:{
        position: 'absolute',
        bottom: -7,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        color: '#d92323'
    }
});

export default styles;