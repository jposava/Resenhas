import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    ScrollView,
    TextInput
    } from 'react-native';

import styles from './style';

//COMPONENTS
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DateTimeInput from '../../components/DateTimeInput/index.android';

import typeIcons from '../../utils/typeIcons';

export default function Resenha({navigation}){
    return (
        <>
        <Header showBack={true} showNotification={false} navigation={navigation}/>
        <KeyboardAvoidingView behavior='padding' style={styles.form}>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical: 15, width: '100%'}}>
            {
            typeIcons.map(icon => (
                icon != null &&
                <TouchableOpacity>
                    <Image source={icon} style={styles.imageIcon}/>
                </TouchableOpacity>
                ))
            }
            </ScrollView>

            <TextInput style={styles.input} placeholder='Nome do(a) organizador(a)' maxLength={30}/>
            <TextInput style={styles.input} placeholder='Nome da resenha' maxLength={25}/>
            <TextInput style={styles.inputArea} placeholder='Descrição da resenha...' maxLength={200} multiline={true}/>
            <TextInput style={styles.input} placeholder='Localização da resenha' maxLength={50}/>
            <DateTimeInput type={'date'} />
            <DateTimeInput type={'hour'} />

        </KeyboardAvoidingView>
        <Footer icon={'save'} />
        </>
    )
}