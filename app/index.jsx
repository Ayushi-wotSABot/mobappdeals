
import { Text, View, Image, StatusBar } from 'react-native'
import React, { Component } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'




export class divider extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor="black" barStyle="light-content" />

                <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.9, y: 1.3 }}
                    locations={[0.0, 0.3, 0.6]}
                    colors={['#000000', '#666666', '#000000']}
                    className="flex-1 px-10 py-10"
                >
                    <View className="flex-1 justify-center items-center">

                        <Link href="/deals" style={{ color: "blue", }} >Deals </Link>
                    </View>
                </LinearGradient>
            </>
        )

    }
}

export default divider