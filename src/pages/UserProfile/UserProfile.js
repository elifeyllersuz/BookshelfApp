import React, { useState } from 'react'
import {View,Text,FlatList  } from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './UserProfileStyle';
import database from '@react-native-firebase/database';
import parseContentData from '../../utils/parseContentData';
import FavoritesCard from '../FavoritesCard/FavoritesCard';


const UserProfile = () => {

    const [contentList,setContentList] = useState([]);

    React.useEffect(() => {
        database()
        .ref('favorites/')
        .on('value',snapshot => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData || {});
            setContentList(parsedData);
        })
    },[])

    const userMail = auth().currentUser.email;
    const username = userMail.split('@')[0];

    function handleDelete(item) {
    database()
    .ref(`favorites/${item.id}/`)
    .remove();
    }

    const renderContent = ({item}) => 
    <FavoritesCard favoriteBook={item} deleteFavoriteBook={() => handleDelete(item)}/>
 
    return(
        <View style={styles.container}>
            {/* <Text style={styles.username}> {username}</Text>
            <View style={styles.favorites}>
             <Text style={styles.favorites_text}>Your Favorites</Text>
            </View> */}
            <FlatList
            data={contentList} renderItem={renderContent}/>

        </View>
    )
}

export default UserProfile;

 