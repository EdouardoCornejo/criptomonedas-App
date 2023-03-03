import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View, ScrollView} from 'react-native';
import {Header, Formulario, Cotizacion} from './src/components/';
import {apiType} from './src/types/ApiTypes';

function App(): JSX.Element {
  const [moneda, setMoneda] = useState('');
  const [criptoMoneda, setCriptoMoneda] = useState('');
  const [consultarApi, setConsultarApi] = useState(false);
  const [api, setApi] = useState<apiType>({
    CHANGE24HOUR: '',
    CHANGEDAY: '',
    CHANGEHOUR: '',
    CHANGEPCT24HOUR: '',
    CHANGEPCTDAY: '',
    CHANGEPCTHOUR: '',
    CIRCULATINGSUPPLY: '',
    CIRCULATINGSUPPLYMKTCAP: '',
    CONVERSIONSYMBOL: '',
    CONVERSIONTYPE: '',
    FROMSYMBOL: '',
    HIGH24HOUR: '',
    HIGHDAY: '',
    HIGHHOUR: '',
    IMAGEURL: '',
    LASTMARKET: '',
    LASTTRADEID: '',
    LASTUPDATE: '',
    LASTVOLUME: '',
    LASTVOLUMETO: '',
    LOW24HOUR: '',
    LOWDAY: '',
    LOWHOUR: '',
    MARKET: '',
    MKTCAP: '',
    MKTCAPPENALTY: '',
    OPEN24HOUR: '',
    OPENDAY: '',
    OPENHOUR: '',
    PRICE: '',
    SUPPLY: '',
    TOPTIERVOLUME24HOUR: '',
    TOPTIERVOLUME24HOURTO: '',
    TOSYMBOL: '',
    TOTALTOPTIERVOLUME24H: '',
    TOTALTOPTIERVOLUME24HTO: '',
    TOTALVOLUME24H: '',
    TOTALVOLUME24HTO: '',
    VOLUME24HOUR: '',
    VOLUME24HOURTO: '',
    VOLUMEDAY: '',
    VOLUMEDAYTO: '',
    VOLUMEHOUR: '',
    VOLUMEHOURTO: '',
  });

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarApi === true) {
        try {
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda},ETH&tsyms=${moneda}`;
          const resultado = await axios.get(url);
          console.log(resultado?.data.DISPLAY[criptoMoneda][moneda]);
          setApi(resultado?.data.DISPLAY[criptoMoneda][moneda]);
        } catch (error: any) {
          console.error(error.message);
        }
      }
      setConsultarApi(false);
    };
    cotizarCriptomoneda();
  }, [moneda, criptoMoneda, consultarApi]);

  return (
    <ScrollView>
      <View>
        <Header />

        <Image
          source={require('./src/assets/img/cryptomonedas.png')}
          style={styles.imagen}
        />

        <View style={styles.contenido}>
          <Formulario
            resultado={api}
            moneda={moneda}
            criptoMoneda={criptoMoneda}
            setMoneda={setMoneda}
            setCriptoMoneda={setCriptoMoneda}
            setConsultarApi={setConsultarApi}
          />
          <Cotizacion resultado={api} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default App;
