import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
} from 'react-native';
import Button from "./button";
import axios from 'axios';


class HomePage extends Component {

    static navigationOptions = {
        header: null
    };


    grabPuzzleAnswer = () => {
        axios.get("http://localhost:5000/api/puzzles")
        .then(response => {
            let puzzle = response.data;
            console.log(puzzle);
            this.props.navigation.navigate("Puzzle", {puzzle})
            console.log(puzzle[0].question)
        },
    )
    }

    grabAlgorithmAnswer = () => {
        axios.get("http://localhost:5000/api/algorithms")
        .then(response => {
            let algorithm = response.data;
            console.log(algorithm);
            this.props.navigation.navigate("Algorithms", {algorithm})
            console.log(algorithm[0].question)
        },
    )  
    }

    grabComputerScienceAnswer = () => {
        axios.get("http://localhost:5000/api/computerscience")
        .then(response => {
            let computerscience = response.data;
            console.log(computerscience);
            this.props.navigation.navigate("ComputerScience", {computerscience})
            console.log(computerscience[0].question)
        },
    )  
    }

    grabDesignAnswer = () => {
        axios.get("http://localhost:5000/api/designs")
        .then(response => {
            let design = response.data;
            console.log(design);
            this.props.navigation.navigate("Design", {design})
            console.log(design[0].question)
        },
    )  
    }


    // navigateToPuzzle = () => {
    //     this.props.navigation.navigate("Puzzle");
    // }

    render() { 
        return ( 
            <View style = {styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}> CrackTheCode </Text>
                </View>
                <View style={{alignItems: 'center', paddingLeft: 8, marginBottom: 15, borderRadius: 5, borderWidth: 1, width: 60, height: 30, borderColor: 'white', flexDirection: 'row' }}>
                    <Text> Login </Text>
                </View>
                </View>
                <View style = {styles.questionCard}>
                    <Button
                        text = "Algorithms"
                        onPress = {this.grabAlgorithmAnswer}
                        textStyle = {styles.cardStyles}
                    />
                </View >
                <View style = {styles.questionCard}>
                    <Button
                        text = "Computer Science"
                        onPress = {this.grabComputerScienceAnswer}
                        textStyle = {styles.cardStyles}
                    />
                </View >
                <View style = {styles.questionCard}>
                    <Button
                        text = "Design"
                        onPress = {this.grabDesignAnswer}
                        textStyle = {styles.cardStyles}
                    />
                </View >
                <View style = {styles.questionCard}>
                    <Button
                        text = "Puzzle"
                        onPress = {this.grabPuzzleAnswer}
                        textStyle = {styles.cardStyles}
                    />
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
        textAlign: 'center',
        color: 'white'
    }
})
 
export default HomePage;