import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
} from 'react-native';
import Button from '../home_login_signup/button'


class ComputerScienceQuestion extends Component {

    static navigationOptions = {
        header: null
    };
    navigateToComputerScience = () => {
        this.props.navigation.navigate("ComputerScience");
    }
    

    render() { 
        let computerscience = this.props.navigation.getParam('computerscience', 'Couldnt get computerscience');
        let index = this.props.navigation.getParam('index', 'Couldnt get index');
        return ( 
            <View style = {styles.container}>
                <View>
                <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 15, borderRadius: 5, height: 50, borderWidth: 1, borderColor: 'white'}}>
                    <Button 
                    style={{ paddingRight: 2}}
                    text = "◄ Back "
                    onPress = {this.navigateToComputerScience}
                    textStyle={{color: 'white', fontSize: 30,textAlign: 'center',}}
                    />
                </View>
                </View>


          <View>
            <View style={styles.questionCard} >
              <Text style={styles.cardStyles}> Question: {computerscience[index].question} </Text>
            </View>
            <View style={styles.questionCard}>
              <Text style={styles.cardStyles}> Answer: {computerscience[index].answer} </Text>
            </View>
          </View>



            </View>
         );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#36485f',
        paddingTop: 80,
        paddingLeft: 60,
        paddingRight: 60,
        alignSelf: 'stretch'
    },
    questionCard:  {
        marginBottom: 35,
        borderWidth: 1,
        height: 'auto',
        borderColor: 'white',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardStyles: {
        fontSize: 25,
        alignItems: 'center',
        textAlign: 'center',
        color: 'white'
    }
})
 
export default ComputerScienceQuestion;