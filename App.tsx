import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import darkTheme from 'src/configs/theme/darkTheme';
import lightTheme from 'src/configs/theme/lightTheme';
import { ThemeProvider } from 'styled-components';
import { Provider } from "react-redux"
import { store } from 'src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from 'src/navigation';


function App(): React.JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <ThemeProvider theme={colorScheme === 'light' ? lightTheme : darkTheme}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
