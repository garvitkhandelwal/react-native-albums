import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {
	const { title, artist, thumbnail_image, image, url } = album;
	const { textViewContainer, headerText, thumbnailImage, thumbnailContainer, cardBodyImage } = styles;
	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainer}>
					<Image 
						style={thumbnailImage}
						source={{uri: thumbnail_image}} 
					/>
				</View>
				<View style={textViewContainer}>
					<Text style={headerText}>{ title }</Text>
					<Text>{ artist }</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image 
					style={cardBodyImage}
					source={{uri: image}} />
			</CardSection>
			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>
					Buy Now
				</Button>
			</CardSection>
		</Card>
	);
}

const styles = {
	textViewContainer: {
		flexDirection: 'column',
		justifyContent: 'flex-start'
	},
	headerText: {
		fontSize: 15,
		fontWeight: 'bold'
	},
	thumbnailImage: {
		height: 40,
		width: 40,
	},
	thumbnailContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 10,
		marginLeft: 10
	},
	cardBodyImage: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;