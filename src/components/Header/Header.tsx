import React, {FC} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <View>
      <Text style={styles.encabezado}>Criptomonedas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    fontFamily: 'Lato-Black',
    backgroundColor: '#5E49E2',
    paddingBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#fff',
    marginBottom: 30,
  },
});

export default Header;
