import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Button } from 'react-native';
import { Input } from 'react-native-elements';
import { Avatar } from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { Icons } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e0e0e0' }}>
      <Avatar
        size="large"
        rounded
        source={{
          uri: 'https://robohash.org/b4faa298dd94fea676ea797a194cb6e4?set=set4&bgset=&size=400x400',
        }}
      />
      <Input
        placeholder="EMAIL"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
      />
      
      <Input
        placeholder="SENHA"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
        secureTextEntry
      />
      <Button title='Login' onPress={() => navigation.navigate('Lista de Contatos')}>
      </Button>
      <Text> </Text>
      <Button title='Cadastre-se' onPress={() => navigation.navigate('Cadastro de Usuário')}color= '#ff2424'>
      </Button>
    </View>
  );
}

function listaContatos({ navigation }) {
  return (
    <View style={{ flex: 1, paddingHorizontal: 16, backgroundColor: '#e0e0e0' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar
          rounded
          title='MA'
          size="medium"
          containerStyle={{ backgroundColor: '#007AFF' }}
          onPress={() => navigation.navigate('Contatos')}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Marcos Andrade</Text>
          <Text style={{ fontSize: 14 }}>81 988553424</Text>
        </View>
      </View>

      <Text> </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar
          rounded
          title='PT'
          size="medium"
          containerStyle={{ backgroundColor: '#007AFF' }}
          onPress={() => navigation.navigate('Contatos')}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Patrícia Tavares</Text>
          <Text style={{ fontSize: 14 }}>81 998765332</Text>
        </View>
      </View>

      <Text> </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar
          rounded
          title='PT'
          size="medium"
          containerStyle={{ backgroundColor: '#007AFF' }}
          onPress={() => navigation.navigate('Contatos')}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Rodrigo Antunes</Text>
          <Text style={{ fontSize: 14 }}>81 987765525</Text>
        </View>
      </View>
    </View>
  );
}

function Cadastro({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#e0e0e0' }}>
      <Text> </Text>
      <Input
        placeholder="NOME"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
      />

      <Input
        placeholder="CPF"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
      />
      
      <Input
        placeholder="EMAIL"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
      />

      <Input
        placeholder="SENHA"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
        secureTextEntry
      />
      <Button title='Salvar'onPress={() => navigation.navigate('Login')}>
      </Button>
    </View>
  );
}

function CadastroContatos({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#e0e0e0' }}>
      <Text> </Text>
      <Input
        placeholder="NOME"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
      />
      
      <Input
        placeholder="EMAIL"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
      />

      <Input
        placeholder="TELEFONE"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
        secureTextEntry
      />
      <Button title='Salvar'onPress={() => navigation.navigate('Lista de Contatos')}>
      </Button>
    </View>
  );
}

function Contatos({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#e0e0e0' }}>
      <Text> </Text>
      <Input
        placeholder="EMAIL"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
      />
      
      <Input
        placeholder="SENHA"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
        secureTextEntry
      />
      <Button title='Alterar' onPress={() => navigation.navigate('Login')}>
      </Button>
      <Text> </Text>
      <Button title='Excluir' onPress={() => navigation.navigate('Login')}color= '#ff2424'>
      </Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Lista de Contatos" component={listaContatos}
                      options={({ navigation }) => ({
                        headerTitleAlign: 'center',
                        headerRight: () => (
                          <Ionicons
                            name="add-outline"
                            size={24}
                            color="black"
                            style={{ marginRight: 10 }}
                            onPress={() => navigation.navigate('Cadastro de Contatos')}
                          />
                        ),
                      })}
                    />

        <Stack.Screen name="Cadastro de Usuário" component={Cadastro}/>
        <Stack.Screen name="Cadastro de Contatos" component={CadastroContatos}/>
        <Stack.Screen name="Contatos" component={Contatos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;