import { SafeAreaView, Text, StyleSheet, Button, View } from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default function Home(){
    const navigation = useNavigation();

    function Cadastrar(){
        navigation.navigate('Cadastrar')
    }

    function ExibirRegistros(){
        navigation.navigate('ExibirRegistros')
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Tela Home</Text>
            <View style={styles.button}>
                <Button title='Cadastrar Filme' onPress={Cadastrar}></Button>
                <Button title='Exibir Registro dos filmes' onPress={ExibirRegistros}></Button>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 30,
    },

    button:{
        width: '90%',
        gap: 10,
    }

  });