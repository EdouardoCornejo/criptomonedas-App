import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {apiType} from '../../types/ApiTypes';

interface CotizacionProps {
  resultado: apiType | undefined;
}

const Cotizacion: FC<CotizacionProps> = ({resultado}) => {
  // if (Object.keys(resultado).length === 0) {
  //   return null;
  // }

  return (
    <View>
      <Text>Cotizacion</Text>
      <Text>El precio del bitcoin es :{resultado?.PRICE}</Text>
    </View>
  );
};

export default Cotizacion;
