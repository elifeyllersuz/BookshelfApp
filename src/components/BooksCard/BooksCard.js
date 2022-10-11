import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './BooksCardStyle';

const BooksCard = ({ name, author, image, onSelect }) => {

    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: image }} />
                <View style={styles.body_container}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.author}>{author}</Text>
                </View>
            </View>

        </TouchableWithoutFeedback>
    )
}

export default BooksCard;