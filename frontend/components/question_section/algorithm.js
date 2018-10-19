import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
} from 'react-native';


class Algorithms extends Component {

    static navigationOptions = {
        header: null
    };

    render() { 
        return ( 
            <View style = {styles.container}>
                <View>
                <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 15, borderRadius: 5, height: 50, borderWidth: 1, borderColor: 'white'}}>
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 30,paddingRight: 2}}>◄ Back </Text>
                </View>
                </View>
                <View style = {styles.questionCard}>
                    <Text style={styles.cardStyles}>Algorithms</Text>
                </View >
                <View style = {styles.questionCard}>
                    <Text style={styles.cardStyles}>Puzzles </Text>
                </View>
                <View style = {styles.questionCard}>
                    <Text style={styles.cardStyles}>Designs </Text>
                </View >
                <View style = {styles.questionCard}>
                    <Text style={styles.cardStyles}>Computer Science </Text>
                </View >


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
        textAlign: 'center'
    }
})
 
export default Algorithms;