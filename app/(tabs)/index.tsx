import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
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
        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>Cardápio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>Localização</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>Nossa História</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    alignItems: 'center',       // Centraliza os itens horizontalmente
    padding: 40,
    flex: 1,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 15, // Espaço abaixo da logo
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',  // Texto branco
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#141414',  // Texto branco
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 20, // Ajuste de espaçamento entre linhas
  },
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
    opacity: 1,
    marginVertical: 10, // Espaçamento entre botões
    borderColor: '#fff',
    borderWidth: 1,
  },
  buttonText: {
    color: '#fff', // Texto preto
    fontSize: 16,
    fontWeight: '500',
  }
});
