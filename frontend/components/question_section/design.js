import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ImageBackground,
    TextInput,
} from 'react-native';
import Button from '../home_login_signup/button'


class Design extends Component {

    static navigationOptions = {
        header: null
    };
    navigateToHome = () => {
        this.props.navigation.navigate("Home");
    }
    navigateToQuestion = (index) => {
        let design = this.props.navigation.getParam('design', 'Couldnt get design');
        this.props.navigation.navigate("DesignQuestion", {design, index});
    }

    render() {
        let design = this.props.navigation.getParam('design', 'Couldnt get design');
        return (
            <View style={styles.container}>
            <ScrollView>
                <View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, borderRadius: 5, height: 50, borderWidth: 1, borderColor: 'white' }}>
                        <Button
                            style={{ paddingRight: 2 }}
                            text="◄ Back "
                            onPress={this.navigateToHome}
                            textStyle={{ color: 'white', fontSize: 30, textAlign: 'center', }}
                        />
                    </View>
                </View>

                {design.map((x, index) => (

                    <View style={styles.questionCard} key={index}>
                        <Button
                            style={{ paddingRight: 2 }}
                            text={x.question}
                            onPress={() => { this.navigateToQuestion(index) }}
                            textStyle={{ color: 'white', fontSize: 25, textAlign: 'center', }}
                        />
                    </View >


                ))}
                <View style ={{marginTop: 15}}>
                    <Text style ={{color: 'whitesmoke', fontWeight: 'bold', textAlign: 'center', fontSize: 20}}> Submit Your Own Question and Answer! </Text>
                <TextInput
                placeholder='Question'
                textAlign ='center'
                OnChangeText={this.questionInputChange}
                value= {this.userQuestion}
                style={styles.textInput}
                />
               < TextInput
                placeholder= 'Answer'
                textAlign ='center'
                OnChangeText={this.answerInputChange}
                value= {this.userAnswer}
                style={styles.textInput}
                />
                <Button 
                text = "Submit!"
                textStyle = {{color: 'whitesmoke', fontSize: 30, textAlign: 'center', borderRadius: 1, borderWidth: 1, borderColor: 'white', marginTop: 9}}
                />
                </View>


                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#36485f',
        paddingTop: 80,
        paddingLeft: 60,
        paddingRight: 60,
        alignSelf: 'stretch'
    },
    questionCard: {
        marginBottom: 35,
        borderWidth: 1,
        height: 150,
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
    },
    textInput: {
        backgroundColor: "transparent",
        height: 200,
        width: '100%',
        borderRadius: 15,
        borderWidth: 2,
        paddingLeft: 5,
        borderColor: "white",
        color: "white",
        marginTop: 0,
        fontFamily: 'AmericanTypewriter-Bold'
      }
})

export default Design;