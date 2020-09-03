import React from 'react';
// 必要なGoogleフォントをinstallする
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
// こちらもimportしておく
import { AppLoading } from 'expo';

import Home from './screens/Home';

export default function App() {
  // フォントを設定
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Home />;
}
