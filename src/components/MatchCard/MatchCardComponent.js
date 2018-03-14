import React from 'react';
import {View, StyleSheet, Text, Image, Button} from 'react-native';

class MatchCardComponent extends React.Component {
    handleButtonPress = () => {
        return;
    };
    render() {
        return (
            <View style={matchCardStyles.matchCardContainer}>
                <View style={matchCardStyles.tournamentDisplay}>
                    <Text style={matchCardStyles.tournamentName}>{this.props.tournament}</Text>
                </View>
                <View style={matchCardStyles.clubLogosDisplay}>
                    <Image style={matchCardStyles.logoDisplay} source={this.props.homeLogo}/>
                    <Image style={matchCardStyles.logoDisplay} source={this.props.awayLogo}/>
                </View>
                <View style={matchCardStyles.scoreDisplayContainer}>
                    <Text style={matchCardStyles.scoreTextDisplay}>{this.props.homeScore}</Text>
                    <Text style={matchCardStyles.scoreTextDisplay}>{this.props.awayScore}</Text>
                </View>
                <View style={matchCardStyles.timeContainer}>
                    <Text style={matchCardStyles.versusTextDisplay}>Full Time</Text>
                </View>
                <View style={matchCardStyles.scorersDisplayContainer}>
                    <View style={matchCardStyles.homeScorersDisplay}>
                        <Text style={matchCardStyles.scorersText}>{this.props.homeScorers}</Text>
                    </View>
                    <View style={matchCardStyles.awayScorersDisplay}>
                        <Text style={matchCardStyles.scorersText}>{this.props.awayScorers}</Text>
                    </View>
                </View>
                <View style={matchCardStyles.buttonContainer}>
                    <Button style={matchCardStyles.detailsButton} title={'View Details'} onPress={this.handleButtonPress}/>
                </View>
            </View>
        );
    }
}

const matchCardStyles = StyleSheet.create({
    matchCardContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#29b6f6',
    },
    tournamentDisplay: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#002f6c',
        padding: 5
    },
    tournamentName: {
        color: '#ffffff',
        fontSize: 22
    },
    clubLogosDisplay: {
        width: '100%',
        padding: 5,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    logoDisplay: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    versusTextDisplay: {
        fontSize: 10,
        color: '#ffffff'
    },
    scoreDisplayContainer: {
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    scoreTextDisplay: {
        fontSize: 48,
        color: '#01579b'
    },
    timeContainer: {
        alignItems: 'center',
        width: '100%'
    },
    scorersDisplayContainer: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    homeScorersDisplay: {
        width: '50%',
        alignItems: 'center'
    },
    awayScorersDisplay: {
        width: '50%',
        alignItems: 'center'
    },
    scorersText: {
        fontSize: 12,
        color: '#ffffff'
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        marginTop: 'auto'
    },
    detailsButton: {
        width: '50%',
        height: 30
    }
});

export default MatchCardComponent;