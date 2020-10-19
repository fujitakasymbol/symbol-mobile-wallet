import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PriceChart from '../components/organisms/PriceChart';
import Gradient from '../components/backgrounds/Gradient';

import translate from "../locales/i18n";
import { Router } from "../Router";


const styles = StyleSheet.create({});

type Props = {};

type State = {};


export default class Dashboard extends Component<Props, State> {
	state = {};

    render() {
		const {} = this.props;
		const {} = this.state;
		
        return (
			<Gradient>
				<PriceChart />
			</Gradient>
        );
    };
}
