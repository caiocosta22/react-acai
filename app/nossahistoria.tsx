import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function NossaHistoria() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#7c47b9', '#00d4ff']}
        style={styles.background}
      >
        <Text style={styles.title}>Nossa História</Text>
        <Text style={styles.text}>
          Bem-vindo ao Recanto Açaí! Localizado no coração de Fortaleza - CE, no bairro Maraponga,
          nascemos com a missão de oferecer a melhor experiência gastronômica para os amantes de açaí.
          Nossa jornada começou em 2015, com uma pequena loja e um grande sonho: levar o verdadeiro sabor
          paraense para o máximo de pessoas possível.
          {'\n\n'}
          Desde então, trabalhamos incansavelmente para trazer o que há de melhor no preparo do açaí,
          utilizando apenas ingredientes frescos e autênticos. Nosso cardápio foi desenvolvido com muito
          carinho, combinando receitas tradicionais com toques modernos que agradam a todos os paladares.
          {'\n\n'}
          Hoje, somos mais do que uma loja de açaí. Somos um ponto de encontro para amigos, famílias e
          apaixonados por uma boa sobremesa. Venha nos visitar e descubra por que o Recanto Açaí é o lugar
          certo para viver momentos especiais. Estamos ansiosos para recebê-lo!
        </Text>
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
    paddingHorizontal: 20,
    paddingVertical: 40,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'justify',
    lineHeight: 24,
    marginBottom: 20,
  },
  image: {
    flex: 1, // Preenche o espaço restante
    width: '100%',
    borderRadius: 10,
  },
});
