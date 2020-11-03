import React, {useState} from 'react';
import {
    TouchableOpacity,
    Image,
    TextInput,
    View,
    Plataform
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './style';

//ICONS
import iconDate from '../../assets/date.png';
import iconHour from '../../assets/hour.png';

export default function DateTimeInputAndroid({type}){


    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode('date');
    };
    const showTimepicker = () => {
        showMode('time');
    };

    async function selectDataOrHour(){
        if(type == 'date'){
            showDatepicker();
        }else{
            showTimepicker();
        }
    }
 
    return (
        <TouchableOpacity onPress={selectDataOrHour} style={{width: '95%'}} >
            <TextInput 
                style={styles.input}
                placeholder={type == 'date' ? 'Data da resenha' : 'Hora da resenha'}
                editable={false}
                onChange={onChange}
            />
            <Image
                style={styles.iconTextInput}
                source={type== 'date' ? iconDate : iconHour} />
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                />
            )}
        </TouchableOpacity>               
    )
}