import * as React from 'react';
// import { Drawer } from 'react-native-paper';
// import { Appbar } from 'react-native-paper';
import { View } from 'react-native';

import { Button, Menu, Divider } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import { Drawer } from "expo-router/drawer";
const DashboardLayout = ({Param}) => {
  const [active, setActive] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <>
    <PaperProvider>
        <Drawer >
          <Drawer.Screen redirect="/student" name='Student'/>
          <Drawer.Screen redirect="/home" name='Home'/>
          <Drawer.Screen redirect="/user" name='User'/>


          </Drawer>
        {Param}
    </PaperProvider>
    </>
  );
};

export default DashboardLayout;