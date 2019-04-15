import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/Main';
import Box from './pages/Box';

const AppNavigator = createSwitchNavigator({
    Main,
    Box
});

const Routes = createAppContainer(AppNavigator);

export default Routes;