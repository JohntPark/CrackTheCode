import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    ScrollView,
    TextInput,
} from 'react-native';
import Button from '../home_login_signup/button'


class Algorithms extends Component {

    static navigationOptions = {
        header: null
    };
    navigateToHome = () => {
        this.props.navigation.navigate("Home");
    }
    navigateToQuestion = (index) => {
        let algorithm = this.props.navigation.getParam('algorithm', 'Couldnt get algorithm');
        console.log(algorithm)
        this.props.navigation.navigate("AlgorithmQuestion", {algorithm, index});
    }

    render() { 
        let algorithm = this.props.navigation.getParam('algorithm', 'Couldnt get algorithm');
        return ( 
            <View style = {styles.container}>
                <ScrollView>
                <View>
                <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 15, borderRadius: 5, height: 50, borderWidth: 1, borderColor: 'white'}}>
                    <Button 
                    style={{ paddingRight: 2}}
                    text = "◄ Back "
                    onPress = {this.navigateToHome}
                    textStyle={{color: 'white', fontSize: 30,textAlign: 'center',}}
                    />
                </View>
                </View>

                
                {algorithm.map((x, index) => (
                    
                    <View style = {styles.questionCard} key = {index}>
                    <Button
                    style={{ paddingRight: 2}}
                    text = {x.question}
                    onPress = {() => {this.navigateToQuestion(index)}}
                    textStyle={{color: 'white', fontSize: 25,textAlign: 'center',}}
                    />
                    </View >
                    

                ))}
               
               
               
                {/* <View style = {styles.questionCard}>
                    <Button 
                    style={{ paddingRight: 2}}
                    text = "Question 1 "
                    onPress = {this.navigateToQuestion}
                    textStyle={{color: 'white', fontSize: 30,textAlign: 'center',}}
                    />
                </View > */}


                </ScrollView>
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
        height: 150,
        borderColor: 'white',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardStyles: {
        fontSize: 40,
        alignItems: 'center',
        textAlign: 'center',
        color: 'white'
    }
})
 
export default Algorithms;