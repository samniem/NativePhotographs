import React, { Component } from 'react'
import {AppRegistry, Image, ScrollView, StyleSheet} from 'react-native'
export default class Photos extends Component{

    render(){
        return(
        <ScrollView style={styles.container}>
            <Image
                style={styles.imageStyle}
                source={require('./pictures/adult-architecture-casual-2109124.jpg')}
            />
            <Image
                style={styles.imageStyle}
                source={require('./pictures/adult-beautiful-closed-eyes-2108918.jpg')}
            />
            <Image
                style={styles.imageStyle}
                source={require('./pictures/amusement-park-daylight-denim-jacket-2102545.jpg')}
            />
            <Image
                style={styles.imageStyle}
                source={require('./pictures/aqua-blue-blue-water-1147124.jpg')}
            />
            <Image
                style={styles.imageStyle}
                source={require('./pictures/architecture-art-blue-699466.jpg')}
            />
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    imageStyle:{
        height: 600,
        width: 430,
        borderWidth:5,
        borderColor: 'black'
    },
})

AppRegistry.registerComponent('Photos', () => Photos)
