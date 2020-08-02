import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import ProfileCreated from './screens/ProfileCreated';
import AppShare from './screens/AppShare';
import Home from './screens/Home'


const screens = {
    Home:{
        screen:Home
    },
    CreateProfile: {
        screen: ProfileCreated
    },
    ShareApp:{
        screen: AppShare
    },


} 

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)