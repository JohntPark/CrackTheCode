import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native'
import Button from '../components/home_login_signup/button'

class SignUp extends Component {
  state = {
    username: '',
    email: '',
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
      // this.props.signUp({username, email, password, confirmPassword});
      this.props.changeScreen('HOME_PAGE');
      let obj = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }
      this.props.userList.push(obj);
      this.setState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        badEntry: false,
      })
    }
  }


  render() {
    let { username, email, password, confirmPassword, badEntry } = this.state;
    let { textInput, button, navigationButton, badPassword, container } = styles;
    let isConfirmed = badEntry && { borderColor: 'red' } // there are no class names anymore. 
    return (

      <ImageBackground
       // source={require('./street.jpg')}
        style={{ width: '100%', height: '100%' }}
      >

        <View style={container}>

          <Text style={{ fontSize: 50, color: 'white', fontFamily: 'Verdana' }}>Danger Zone</Text>

          <View>

            <Text style={{ color: 'white' }}>Username</Text>
            <TextInput
              textAlign='center'
              onChangeText={username => { this.setState({ username }) }}
              value={username}
              style={textInput}

            />
            <Text style={{ color: 'white' }}>Email</Text>
            <TextInput
              textContentType='emailAddress'    // for iOS auto-fill purposes; NOT validation
              textAlign='center'
              onChangeText={email => { this.setState({ email }) }}
              value={email}
              style={textInput}
            />
            <Text style={{ color: 'white' }}>Password</Text>
            <TextInput
              secureTextEntry
              textAlign='center'
              onChangeText={password => { this.setState({ password }) }}
              value={password}
              style={[textInput, isConfirmed]}
            />
            <Text style={{ color: 'white' }}>Confirm Password</Text>
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
                onPress={this.submitSignUp}
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

export default SignUp;