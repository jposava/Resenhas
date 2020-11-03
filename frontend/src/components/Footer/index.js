import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import styles from './style';

//ICONES
import add from '../../assets/add.png';
import save from '../../assets/save.png';
import send from '../../assets/send.png';
import question from '../../assets/question.png';


export default function Footer({ icon, onPress }){

    const setIcon = {
        add: add,
        save: save,
        send: send,
        question: question,
    };
    const img = setIcon[icon];
    
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Image source={img} />
            </TouchableOpacity>
        </View>
    )
}