import React, { useEffect, useeffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import api from './services/api';

// Não possuem valor semântico (significado)
// Não possuem estilização própria
// Todos componentes possuem por padrão "display: flex"

// View: div, footer, header, main, aside, section
// Text: p, span, h1, h2, h3, strong

export default function App(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
        });
    },[]);

    return (
        <>
            <StatusBar bartsStyle="light-content" backgroundColor="#7159c1" />

            <View style={styles.container}>
                <Text style={styles.title}>Hello GoStack</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    }
})