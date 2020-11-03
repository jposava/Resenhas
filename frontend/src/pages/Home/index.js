import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from './style';

//COMPONENTS
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ResenhaCard from '../../components/ResenhaCard';

export default function Home({navigation}){

    function New(){
        navigation.navigate('Resenha');
    }

    const [filter, setFilter] = useState('all');

    return(
        <>
        <Header showBack={false} showNotification={true}/>

        <View style={styles.filter}>
            <TouchableOpacity onPress={() => setFilter('all')}>
                <Text style={filter == 'all' ? styles.filterTextActived : styles.filterTextInative}>Todos</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setFilter('today')}>
                <Text style={filter == 'today' ? styles.filterTextActived : styles.filterTextInative}>Hoje</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setFilter('week')}>
                <Text style={filter == 'week' ? styles.filterTextActived : styles.filterTextInative}>Semana</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setFilter('month')}>
                <Text style={filter == 'month' ? styles.filterTextActived : styles.filterTextInative}>Mês</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setFilter('year')}>
                <Text style={filter == 'year' ? styles.filterTextActived : styles.filterTextInative}>Ano</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.pageTitle}>
            <View style={styles.lineTitle}></View>
            <Text style={styles.title}>MINHAS RESENHAS</Text>
        </View>

        <ScrollView style={styles.content} contentContainerStyle={{alignItems: 'center'}}>
            <ResenhaCard />
            <ResenhaCard />
            <ResenhaCard />
            <ResenhaCard />
            <ResenhaCard />
            <ResenhaCard />
            <ResenhaCard />
            <ResenhaCard />
            <ResenhaCard />
            <ResenhaCard />
            <ResenhaCard />
            <ResenhaCard />
            <ResenhaCard />
            <ResenhaCard />
            <ResenhaCard />
        </ScrollView>

        <Footer icon={'add'} onPress={New}/>
        </>
    )
}