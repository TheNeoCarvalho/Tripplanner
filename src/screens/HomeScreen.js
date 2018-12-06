import React, { Component } from 'react'
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableWithoutFeedback
} from 'react-native'

class HomeScreen extends Component {
  state = {
    conta: 0
  }

  handleConta = () => {
    this.setState({
      conta: this.state.conta + 1
    })
  }

  handleLongPress = () => {
    this.setState({
      conta: 0
    })
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/bg.png')}
        imageStyle={{ resizeMode: 'stretch' }}
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'space-between'
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image source={require('../../assets/logo.png')} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingBottom: 32
          }}
        >
          <Image source={require('../../assets/logo-dev.png')} />
        </View>
        <TouchableWithoutFeedback
          onPress={this.handleConta}
          onLongPress={this.handleLongPress}
        >
          <View
            style={{
              backgroundColor: '#FFFFFF',
              paddingBottom: 16,
              paddingTop: 16
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                fontSize: 24,
                color: '#24C6DC'
              }}
            >
              Começar {this.state.conta}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    )
  }
}

export default HomeScreen
