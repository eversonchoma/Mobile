import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native';
import api from './services/api';

export default function App(){
    //const [ projects, setProjects ] = useState([]);

    // useEffect(() => {
    //     api.get('projects').then(response => {
    //         // console.log(response.data); 
    //         setProjects(response.data);
    //     });
    // },[]);

    return (
        <>
            <StatusBar bartsStyle="light-content" backgroundColor="#7159c1" />

            {/* <SafeAreaView style={styles.container}>
                <FlatList>
                    data={projects},
                    keyExtractor={project => project.id}
                    renderItem={({ item: project}) => (
                        <Text key={project.id} style={styles.project}>{project.title}</Text>
                    )}
                </FlatList>
            </SafeAreaView> */}

            <View style={styles.container}>
                {/* {projects.map(project => <Text key={project.id} style={styles.project}>{project.title}</Text>)} */}
                <Text style={styles.project}>Isso é um teste</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    project: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold',
    },
});