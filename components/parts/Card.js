import React, { Component } from 'react'
import { StyleSheet, Text, View,Image,Platform } from 'react-native'

export default class Card extends Component {
    render() {
        return (
            <View style={{alignItems:'center',
                        marginTop:10,
                        backgroundColor:this.props.bgcolor,
                        borderRadius:20}}>

                <View style={{...styles.bgcard,
                            backgroundColor:'orange',
                            justifyContent:"flex-start",
                            backgroundColor:this.props.color1,
                            borderTopLeftRadius:10,
                            borderTopRightRadius:10,
                            ...this.props.style}}>

                    <Text style={styles.text}>{(this.props.data.dt_txt).split(' ')[1]}</Text>
                    <Image
                     source={{uri:`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${this.props.data.weather[0].icon}.png` }}
                    style={styles.img}/>
                </View>
                <View style={{...styles.bgcard, 
                            backgroundColor:'pink',
                            zIndex:-1,
                            elevation:-1,
                            justifyContent:"flex-end",
                            backgroundColor:this.props.color2,
                            borderBottomLeftRadius:20,
                            borderBottomRightRadius:20,
                            ...this.props.style
                    }}>
                    <Text style={styles.text}>{Math.ceil(this.props.data.main.temp)}</Text>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    bgcard:{
        ...Platform.select({
            android:{
                width:125,
                height:125,
            }
        }),
        alignItems:'center',
    },
    img:{
        width:70,
        height:70,
        alignSelf:'center',
        ...Platform.select({
            android:
            {
                marginTop:40,    
            }
        })
    },
    text:{
        color:'#fff',
        fontSize:18,
        textAlign:'center',
        marginVertical:10,
        fontWeight:'900'
    }
})