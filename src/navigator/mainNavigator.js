import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen016510Navigator from '../features/BlankScreen016510/navigator';
import BlankScreen416495Navigator from '../features/BlankScreen416495/navigator';
import BlankScreen216488Navigator from '../features/BlankScreen216488/navigator';
import BlankScreen116486Navigator from '../features/BlankScreen116486/navigator';
import BlankScreen016461Navigator from '../features/BlankScreen016461/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen016510: { screen: BlankScreen016510Navigator },
BlankScreen416495: { screen: BlankScreen416495Navigator },
BlankScreen216488: { screen: BlankScreen216488Navigator },
BlankScreen116486: { screen: BlankScreen116486Navigator },
BlankScreen016461: { screen: BlankScreen016461Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
