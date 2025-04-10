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
      <Button title='Login' onPress={() => navigation.navigate('Contatos')}>
      </Button>
      <Text> </Text>
      <Button title='Cadastre-se' onPress={() => navigation.navigate('Usuário')}>
      </Button>
    </View>
  );
}

function Contatos({ navigation }) {
  return (
    <View style={{ flex: 1, paddingHorizontal: 16, backgroundColor: '#e0e0e0' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar
          rounded
          title='MA'
          size="medium"
          containerStyle={{ backgroundColor: '#007AFF' }}
          onPress={() => navigation.navigate('Contato')}
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
          onPress={() => navigation.navigate('Contato')}
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
          onPress={() => navigation.navigate('Contato')}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Rodrigo Antunes</Text>
          <Text style={{ fontSize: 14 }}>81 987765525</Text>
        </View>
      </View>
    </View>
  );
}

function Usuário({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#e0e0e0' }}>
      <Text> </Text>
      <Input
        placeholder="Nome"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
      />

      <Input
        placeholder="CPF"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
      />
      
      <Input
        placeholder="Email"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
      />

      <Input
        placeholder="Senha"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
        secureTextEntry
      />
      <Button title='Salvar'onPress={() => navigation.navigate('Login')}>
      </Button>
    </View>
  );
}

function Cadastro({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#e0e0e0' }}>
      <Text> </Text>
      <Input
        placeholder="Nome"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
      />
      
      <Input
        placeholder="Email"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
      />

      <Input
        placeholder="Telefone"
        placeholderTextColor="black"
        inputStyle={{ color: 'white' }}
        secureTextEntry
      />
      <Button title='Salvar'onPress={() => navigation.navigate('Contatos')}>
      </Button>
    </View>
  );
}

function Contato({ navigation }) {
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
      <Button title='Alterar'>
      </Button>
      <Button title='Excluir'>
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
        <Stack.Screen name="Contatos" component={Contatos}
                      options={({ navigation }) => ({
                        headerTitleAlign: 'center',
                        headerRight: () => (
                          <Ionicons
                            name="add-outline"
                            size={24}
                            color="black"
                            style={{ marginRight: 10 }}
                            onPress={() => navigation.navigate('Cadastro')}
                          />
                        ),
                      })}
                    />

        <Stack.Screen name="Usuário" component={Usuário}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Contato" component={Contato}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
