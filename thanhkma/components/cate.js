import React from 'react'
import {
	Image,
	View,
	Text,
}
from 'react-native'

import Skill from '../assets/dish.png';

export default	function Cate(props) {
	return <View>
		<Image source={Skill} />
	</View>
}