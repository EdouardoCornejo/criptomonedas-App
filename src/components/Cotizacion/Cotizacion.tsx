import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {apiType} from '../../types/ApiTypes';

interface CotizacionProps {
  resultado: apiType;
}

const Cotizacion: FC<CotizacionProps> = ({resultado}) => {
  if (Object.keys(resultado).length === 0) {
    return null;
  } else {
    return (
      <View style={styles.resultado}>
        <Text style={[styles.text, styles.precio]}>
          <Text style={styles.span}>{resultado?.PRICE}</Text>
        </Text>
        <Text style={styles.text}>
          Precio mas alto del dia{' '}
          <Text style={styles.span}>{resultado?.HIGHDAY}</Text>
        </Text>
        <Text style={styles.text}>
          Precio mas bajo del dia{' '}
          <Text style={styles.span}>{resultado?.LOWDAY}</Text>
        </Text>
        <Text style={styles.text}>
          Ultimas 24 horas{' '}
          <Text style={styles.span}>{resultado?.CHANGEPCT24HOUR}</Text>
        </Text>
        <Text style={styles.text}>
          Ultima actualizacion{' '}
          <Text style={styles.span}>{resultado?.LASTUPDATE}</Text>
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  resultado: {
    backgroundColor: '#5E49E2',
    marginTop: 20,
    padding: 20,
    marginBottom: 30,
  },
  text: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginBottom: 10,
  },
  span: {
    fontFamily: 'Lato-Black',
  },
  precio: {
    fontSize: 38,
  },
});

export default Cotizacion;
