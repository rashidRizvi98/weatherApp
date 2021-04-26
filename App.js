import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView,ActivityIndicator } from 'react-native'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state={
      report:{
        list:null,
        detail:null,
      },
    }
    this._getWeatherReport=this._getWeatherReport.bind(this);
  }
   async _getWeatherReport(){
     const response=await fetch('url for weather api comes here.use a free api from openweathermap.org')
        const data=await response.json();
        this.setState({
          report:{
            list:[data.list[0],data.list[1],data.list[2],data.list[3]],
            detail:data.city
          }
        }
        )
    }
   async componentDidMount(){
     await this._getWeatherReport();
      console.log(this.state.report)
    }

  render() {
    if(this.state.report.list===null || this.state.report.detail===null){
        return (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator color="red" size="large"/></View>)
    }
    return (
      <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Header data={[this.state.report.list[0],this.state.report.detail]}/>
        <Content data={this.state.report.list}/>
        <Footer data={this.state.report.list[0]}/>
      </View>
      </SafeAreaView>
    )
  }
}
const styles=StyleSheet.create({

  container:{
    flex:1,
    margin:20
  }


})
