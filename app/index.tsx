import React from 'react';
import { Link } from 'expo-router';
import { Linking } from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const handleOpenMaps = () => {
    Linking.openURL('https://maps.app.goo.gl/B7jBe2J3JcYsVsMo8');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#7c47b9', '#00d4ff']}
        style={styles.background}
      >
        {/* Logo no topo */}
        <Image 
          source={require('@/assets/images/logo.png')}  
          style={styles.logo} 
        />
        
        {/* Título */}
        <Text style={styles.title}>Recanto Açaí</Text>

        {/* Botões */}
        <Link href="/cardapio" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cardápio</Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity style={styles.button} onPress={handleOpenMaps}>
          <Text style={styles.buttonText}>Localização</Text>
        </TouchableOpacity>
        <Link href="/nossahistoria" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Nossa História</Text>
          </TouchableOpacity>
        </Link>

        {/* Texto Final */}
        <Text style={styles.footer}>Funcionamos de Seg a Sexta 08:00 - 18:00</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    alignItems: 'center',
    padding: 40,
    flex: 1,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
    opacity: 1,
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 20
  }
});
