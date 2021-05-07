/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/*
¿Qué tal tu día hoy? - How was your day today?

Olvidé mi contraseña - I forgot my password

Token móvil - Mobile Token

Operación  -{Operation QR + CoDi}  
QR + CoDi

Línea BBVA - BBVA line    

Contraseña - Password

Oportunidades- Opportunities

Transferir- To transfer

Retiro sin tarjeta- Cardless withdrawal

Pagar servicio- Pay service

Tus tarjetas- Your cards

Tarjeta digital- Digital card

Desactivar- Deactivate

Últimos movimientos- Last movements

Su pago en efectivo- Your payment in cash

Spei enviado azteca- Aztec envoy spei

2 enero- January 2

6 más- 6 more

Apagar tarjeta- Turn off card

Detalle de tarjeta- Card detail

Saldo disponible- Available balance

Cuenta *37265- Account * 37265

Movimiento BBVA - BBVA movement

Transferencia interbancaria-Interbank transfer


*/

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DetailsAccount from './screens/DetailsAccount';
import Login from './screens/Login';
import Splash from './screens/Splash';
import Home from './screens/Home';
import MiddleMenus from './screens/MiddleMenus';
import TransactionList from './screens/TransactionList';

const App: () => Node = () => {
  const [splash, showSplash] = useState(true);
  setTimeout(() => {
    showSplash(false);
  }, 1200);
  return (
    <SafeAreaView>
      <StatusBar />
      {/* {splash ? <Splash /> : <Login />} */}
      {/* <Home /> */}
      {/* <MiddleMenus /> */}
      <DetailsAccount />
      {/* <TransactionList /> */}
    </SafeAreaView>
  );
};

export default App;
