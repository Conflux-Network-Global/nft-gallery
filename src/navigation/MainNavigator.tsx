import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AboutScreen from 'screens/AboutScreen';
import BuyCardScreen from 'screens/BuyCardScreen';
import GalleryScreen from 'screens/GalleryScreen';
import SendCardScreen from 'screens/SendCardScreen';

import MainLayout from 'components/MainLayout';
import ProfileScreen from 'screens/ProfileScreen';
import UiLibScreen from 'screens/UiLibScreen';

const MainNavigator: React.FC = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/about" component={AboutScreen} />
        <Route path="/gallery/:collectionId?" component={GalleryScreen} />
        <Route
          path="/buy-card/:tokenId/:tokenAddress"
          component={BuyCardScreen}
        />
        <Route
          path="/send-card/:tokenId/:tokenAddress"
          component={SendCardScreen}
        />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/ui-lib" component={UiLibScreen} />
        <Route path="">
          <Redirect to="/about" />
        </Route>
      </Switch>
    </MainLayout>
  );
};

export default MainNavigator;
