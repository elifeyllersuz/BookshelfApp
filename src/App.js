import React from 'react'
import { Text, SafeAreaView } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import Books from './pages/Books';
import UserProfile from './pages/UserProfile';
import BookDetail from './pages/BookDetail';
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

    const [userSession, setUserSession] = React.useState();

    React.useEffect(() => {
        auth().onAuthStateChanged(user => {
            setUserSession(!!user);
        });
    }, [])

    const AuthStack = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='LoginPage' component={Login} />
                <Stack.Screen name='SignPage' component={Sign} />
            </Stack.Navigator>

        )
    }

    const HomeStackScreen = () => {

        return (
            <Tab.Navigator screenOptions={headerShown = false}>
                <Tab.Screen name='BooksScreen' component={Books}
                    options={{
                        title: 'Books',
                        headerTintColor: '#F57328',
                        tabBarIcon : () => (
                            <Icon name='bookshelf'
                            size={30}
                            color='#F57328'
                            />
                        )
                    }} />
                <Tab.Screen name='ProfileScreen' component={UserProfile}
                    options={{
                        title: 'Profile',
                        headerTintColor: '#F57328',
                        tabBarIcon : () => (
                            <Icon name='human'
                            size={30}
                            color='#F57328'
                            />),
                        headerRight: () => (
                            <Icon name='logout'
                                size={30}
                                color='#F57328'
                                onPress={() => auth().signOut()} />
                        )
                    }}
                />
            </Tab.Navigator>


        )

    }

    // const TabScreen = () => {
    //     <Tab.Navigator>
    //         <Tab.Screen name='BooksScreen' component={Books} />
    //         <Tab.Screen name='ProfileScreen' component={ProfileScreen} />
    //     </Tab.Navigator>
    // }


    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={{ headerShown: false }} >
                {!userSession ? (
                    <Stack.Screen name='AuthStack' component={AuthStack} />
                ) : (
                    <>
                    <Stack.Screen name='HomeStackScreen' component={HomeStackScreen} />
                    <Stack.Screen name='DetailScreen' component={BookDetail} /></>
                )}







            </Stack.Navigator>
            <FlashMessage position='top' />
        </NavigationContainer>
    )

}
export default App;
