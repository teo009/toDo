import React, { useEffect, useState } from 'react'
import { View, TextInput, TouchableOpacity, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

const Homee = () => {

    const [users, setUsers] = useState(['Uno', 'dos'])
    const [text, setText] = useState<string>('')

    const handleAdd = () => {
        const user2: string[] = [text]
        const allUsers = [...users, ...user2]
        setUsers(allUsers)
        setText('')
    }

    const handleRemove = (index: number) => {
        let i = users.indexOf(index.toString())
        if (i !== index) {
            users.splice(index, 1)
            alert('Registro eliminado')
            handleUpdate()
        }
    }

    const handleUpdate = () => {
        setUsers([...users])
    }

    useEffect(handleUpdate, [])

    return (
        
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.addSection}>
                    <TextInput 
                        placeholder='Your text here'
                        onChangeText={text => setText(text)}
                        style={{borderWidth: 2}}
                    />
                    <TouchableOpacity
                        onPress={handleAdd}
                    >
                        <Text>Presionar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listaContainer}>
                    {
                        users.map((user, index) => (
                            <View style={styles.lista}>
                                <Text key={index}>
                                    {index} - {user}
                                        
                                </Text>
                                <TouchableOpacity
                                    onPress={() => handleRemove(index)}
                                >
                                    <FontAwesome name='trash' size={25}/>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </View>

            </View>
        </ScrollView>

    )
}

export default Homee

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    addSection: {
        marginTop: 90,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    listaContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    lista: {
        width: '80%',
        borderWidth: 1,
        backgroundColor: '#a1caf1',
        margin: 10,
        paddingVertical: 13,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',    
        justifyContent: 'space-evenly',    
    },
})
