import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native'
import Button from '../components/home_login_signup/button'

class Login extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    badEntry: false,

  }

  submitSignUp = () => {
    let { username, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({ badEntry: true })
    } else if (username === '' || email === '' || password === '' || confirmPassword === '') {
      this.setState({ badEntry: true })
      console.log(this.state.badEntry)
    } else {
      // this.props.signUp({username,  password, confirmPassword});
      this.props.changeScreen('WELCOME');
      let obj = {
        username: this.state.username,
        password: this.state.password
      }
      this.props.userList.push(obj);
      this.setState({
        username: '',
        
        password: '',
        confirmPassword: '',
        badEntry: false,
      })
    }
  }
_onPressButton=() => {
    this.props.navigation.navigate('Welcome')
  }

  render() {
    let { username, email, password, confirmPassword, badEntry } = this.state;
    let { textInput, button, navigationButton, badPassword, container } = styles;
    let isConfirmed = badEntry && { borderColor: 'red' } // there are no class names anymore. 
    return (

      <ImageBackground
        source={require('./../assets/interviewMain.jpg')}
        style={{ width: '100%', height: '100%' }}
      >

        <View style={container}>

          <Text style={{ fontSize: 50, color: 'black', fontFamily: 'Verdana' }}></Text>

          <View>

            <Text style={{ color: 'black' }}>Username</Text>
            <TextInput
              textAlign='center'
              onChangeText={username => { this.setState({ username }) }}
              value={username}
              style={textInput}

            />
      
            <Text style={{ color: 'black' }}>Password</Text>
            <TextInput
              secureTextEntry
              textAlign='center'
              onChangeText={password => { this.setState({ password }) }}
              value={password}
              style={[textInput, isConfirmed]}
            />
            <Text style={{ color: 'black' }}>Confirm Password</Text>
            <TextInput
              secureTextEntry
              textAlign='center'
              onChangeText={confirmPassword => { this.setState({ confirmPassword }) }}
              value={confirmPassword}
              style={[textInput, isConfirmed]}
            />

            {/* Bad Password Message */}
            {badEntry && <Text style={badPassword}>Passwords Do Not Match</Text>}

            <View style={{ alignItems: 'center' }}>
              <Button
                onPress={this._onPressButton}
                style={button}
                text='Submit'
                textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
              />
               </View>
               </View>
              <View style={{ alignItems: 'center'}}>
                <Button
                  onPress={() => { this.props.changeScreen('LOGIN') }}
                  style={navigationButton}
                  text="Login"
                  textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
                />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 100,
    borderRadius: 5,
  },
  navigationButton: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 120,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white'
  },
  badPassword: {
    color: 'red',
    marginBottom: 5
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,
    width: 250,
    borderRadius: 10,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 10
  }
});

export default Login;