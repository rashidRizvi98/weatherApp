import React, { Component } from 'react'
import { StyleSheet, Text, View, Image,Platform } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}> Weather Forecast</Text>
                <Image source={{ 
                    uri:`https://openweathermap.org/img/wn/${this.props.data[0].weather[0].icon}@2x.png` }} style={styles.img}/>
                <Text style={styles.temp_text}>{Math.ceil(this.props.data[0].main.temp)}</Text>
        <Text style={styles.city}>{this.props.data[1].name},{this.props.data[1].country}</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    text:{
        ...Platform.select({
            android:{
                fontFamily:'Arial',
            }
        }),
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        color:'#333'
    },
    img:{
        width:100,
        height:100,
        alignSelf:'center', 
    },
    temp_text:{
        ...Platform.select({
            android:{
                fontFamily:'Arial',
            }
        }),
        fontSize:38,
        fontWeight:'900',
        textAlign:'center',
    },
    city:{
        fontSize:24,
        color:'#777',
        textAlign:'center',
    }
})
