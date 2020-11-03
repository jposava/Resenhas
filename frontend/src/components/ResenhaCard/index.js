import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './style';

//ICONS
import beer from '../../assets/beer.png';

export default function ResenhaCard(){
    return (
        <TouchableOpacity style={styles.card}>
        <View style={styles.cardLeft}>
            <Image source={beer} />
            <Text style={styles.cardTitle}>Churrasco em Fael</Text>
        </View>
        <View style={styles.cardRight}>
            <Text style={styles.cardDate}>07/10/2020</Text>
            <Text style={styles.cardTime}>11:00</Text>
        </View>
        </TouchableOpacity>
    )
}