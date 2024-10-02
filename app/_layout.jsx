
import React, { Component } from 'react'
import { Link, Stack } from 'expo-router'


export class Home extends Component {
    render() {
        return (
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name='index' options={{ headerShown: false }} />
                <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
                <Stack.Screen name='navigators/Dealform' options={{ headerShown: false }} />
                <Stack.Screen name='navigators/Dealdata' options={{ headerShown: false }} />

            </Stack>

        )
    }
}

export default Home