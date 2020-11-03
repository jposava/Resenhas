import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 70,
        backgroundColor: '#D92323',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 5,
        borderBottomColor: '#8C1C1C'
    },
    notification:{
        position: 'absolute',
        right: 20,
    },
    bell:{
        width: 25,
        height: 28 
    },
    circle:{
        width: 18,
        height: 18,
        backgroundColor: '#fff',
        position: 'absolute',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        left: 13,
        bottom: 13
    },
    notificationText:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#8C1C1C'
    },
    back:{
        position: 'absolute',
        left: 20
    }
});

export default styles;