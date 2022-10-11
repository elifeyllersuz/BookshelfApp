export default function (errorCode) {
    switch (errorCode) {
        case 'auth/invalid-email':
            return 'Invalid email';

        case 'auth/email-already-exist':
            return 'Email already exist';

        case 'auth/user-not-found':
            return 'User not found';

        case 'auth/weak-password':
            return 'Weak password';

        case 'auth/wrong-password':
            return 'Wrong password';


        default:
            return errorCode;
    }
}