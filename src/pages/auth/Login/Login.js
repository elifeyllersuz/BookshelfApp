import React, { useState } from 'react'
import { View, Text, Image } from 'react-native';
import styles from './LoginStyle';
import { showMessage } from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import Input from '../../../components/Input';
import Button from '../../../components/Button/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import { Formik } from 'formik';


const initialFormValues = {
    usermail: '',
    password: ''
}

const Login = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    function handleSignUp() {
        navigation.navigate('SignPage');
    }

    async function handleFormSubmit(formValues) {
     
        try{
            setLoading(true);
            await auth().signInWithEmailAndPassword(
                formValues.usermail,
                formValues.password
            );
          navigation.navigate('BooksScreen');
          setLoading(false);
        }catch(error){

            console.log(error);
            showMessage({
                message:authErrorMessageParser(error.code),
                type:'danger'
            })
            setLoading(false);
        }


    }


    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/images/trabook.jpg')} />
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        {/* <View style={{margin:10,
            padding:10,
            }}>
                <Icon name='bookshelf' size={50} />
            </View> */}
                        <Input
                            value={values.usermail}
                            onType={handleChange('usermail')}
                            placeholder='enter your email...' />
                        <Input
                            value={values.password}
                            onType={handleChange('password')}
                            placeholder='enter your password...'
                            isSecure />
                        <Button text='Login' onPress={handleSubmit} loading={loading} />
                    </>
                )}
            </Formik>
            <Button text='Sign Up' theme='secondary' onPress={handleSignUp} />

        </View>
    )
}

export default Login;