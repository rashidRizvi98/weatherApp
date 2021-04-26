import React, { Component } from 'react'
import { Text, View,StyleSheet,Platform } from 'react-native'

export default class Footer extends Component {
    render() {
        return (
            <View>
                <Text style={styles.heading}> Additional info </Text>

                <View style={styles.container}>
                    <Text style={styles.maininfo}>Wind:       <Text 
                    style={styles.ainfo}>{this.props.data.wind.speed}m/h</Text></Text>

                    <Text style={styles.maininfo}>Humidity:     <Text 
                    style={styles.ainfo}>{this.props.data.main.humidity}</Text></Text>
                    
                </View>
                <View style={styles.container}>
                    <Text style={styles.maininfo}>Visibility:      <Text 
                    style={styles.ainfo}>{this.props.data.weather[0].description}</Text></Text>
                    <Text style={styles.maininfo}>UV:       <Text style={styles.ainfo}>1</Text></Text>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        marginVertical:10,
        justifyContent:'space-between',
        marginRight:50
    },
    heading:{
        fontSize:22,
        ...Platform.select({
            android:{
                fontFamily:'Arial',
            }
        }),
        textAlign:'left',
        marginTop:15,
        fontWeight:'900',
    },
    ainfo:{
        fontWeight:'400',
        color:'#333',      
    }
})