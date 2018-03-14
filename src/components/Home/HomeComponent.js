import React from 'react';
import {View, StyleSheet} from 'react-native';
import MatchCardComponent from "../MatchCard/MatchCardComponent";
import rm from './../../assets/rm.png';
import psg from './../../assets/psg.png';
import manutd from './../../assets/manutd.png';
import mancity from './../../assets/mancity.png';

class HomeComponent extends React.Component {
    render() {
        return (
            <View style={homeStyles.homeContainer}>
                <View style={homeStyles.cardContainer}>
                    <MatchCardComponent
                        tournament={'Champions League'}
                        homeLogo={rm}
                        awayLogo={psg}
                        homeScore={3}
                        awayScore={1}
                        homeScorers={'Ronaldo 45(p) 83\nMarcelo 86'}
                        awayScorers={'Rabiot 33'}
                    />
                </View>
                <View style={homeStyles.cardContainer}>
                    <MatchCardComponent
                        tournament={'English Premier League'}
                        homeLogo={manutd}
                        awayLogo={mancity}
                        homeScore={1}
                        awayScore={2}
                        homeScorers={'Rashford 45+2'}
                        awayScorers={'David Silva 43\nOtamendi 54'}
                    />
                </View>
            </View>
        );
    }
}

const homeStyles = StyleSheet.create({
    homeContainer: {
        flex: 1
    },
    cardContainer: {
        height: '50%',
        padding: 5
    }
});

export default HomeComponent;