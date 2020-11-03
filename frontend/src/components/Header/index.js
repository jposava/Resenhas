import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './style';

//ICONES
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import back from '../../assets/back.png';

export default function Header({ showNotification, showBack, navigation }){

    function Back(){
        navigation.navigate('Home');
    }
    return(
        <View style={styles.header}>
            <Image source={logo} />

            {showNotification && 
                <TouchableOpacity style={styles.notification}>
                    <Image source={bell} style={styles.bell}/>
                    <View style={styles.circle}>
                        <Text style={styles.notificationText}>3</Text>
                    </View>
                </TouchableOpacity>
            }

            {showBack && 
                <TouchableOpacity style={styles.back} onPress={Back}>
                    <Image source={back} />
                </TouchableOpacity>
            }
        </View>
    )
}