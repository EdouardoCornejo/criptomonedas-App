import React, {FC, useState, useEffect, SetStateAction, Dispatch} from 'react';
import {Alert, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {pickerValues} from '../../data/formularioPicker';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import {Datum} from '../../types/PickerTypes';

interface FormularioProps {
  moneda: string;
  criptoMoneda: string;
  setMoneda: Dispatch<SetStateAction<string>>;
  setCriptoMoneda: Dispatch<SetStateAction<string>>;
  setConsultarApi: Dispatch<SetStateAction<boolean>>;
}

const Formulario: FC<FormularioProps> = ({
  moneda,
  criptoMoneda,
  setMoneda,
  setCriptoMoneda,
  setConsultarApi,
}) => {
  const [criptoMonedas, setCriptoMonedas] = useState<Datum[]>([]);

  useEffect(() => {
    const consultarApi = async () => {
      try {
        const url =
          'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        const resultado = await axios.get(url);

        setCriptoMonedas(resultado.data.Data);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    consultarApi();
  }, []);

  const cotizarPrecio = () => {
    if (moneda.trim() === '' || criptoMoneda.trim() === '') {
      mostrarAlerta();
    }
    setConsultarApi(true);
    return;
  };

  const mostrarAlerta = () => {
    Alert.alert('Error...', 'Ambos campos son obligatorios', [{text: 'OK'}]);
  };

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>

      <Picker onValueChange={setMoneda} selectedValue={moneda}>
        <Picker.Item label="-Seleccione-" value="" />
        {pickerValues.map(picker => (
          <Picker.Item
            key={picker.id}
            label={picker.label}
            value={picker.value}
          />
        ))}
      </Picker>

      <Text style={styles.label}>Criptomoneda</Text>

      <Picker onValueChange={setCriptoMoneda} selectedValue={criptoMoneda}>
        <Picker.Item label="-Seleccione-" value="" />
        {criptoMonedas?.map(cripto => (
          <Picker.Item
            key={cripto.CoinInfo.Id}
            label={cripto.CoinInfo.FullName}
            value={cripto.CoinInfo.Name}
          />
        ))}
      </Picker>

      <TouchableHighlight style={styles.btnCotizar} onPress={cotizarPrecio}>
        <Text style={styles.textoBtnCotizar}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20,
  },
  btnCotizar: {
    backgroundColor: '#5E49E2',
    padding: 10,
    marginTop: 20,
  },
  textoBtnCotizar: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
export default Formulario;
