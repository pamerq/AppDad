
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      backgroundColor: '#F5F6F7',
    },
  
    content: {
      padding: 18,
      paddingBottom: 20,
    },
  
    logo: {
      width: 260,
      height: 90,
      alignSelf: 'center',
      marginTop: 14,
      marginBottom: 18,
    },
  
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: 24,
      padding: 15,
  
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 20,
      shadowOffset: {
        width: 0,
        height: 6,
      },
  
      elevation: 5,
    },
  
    label: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 10,
      marginTop: 20,
      color: '#1D1D1F',
    },
  
    input: {
      height: 60,
      borderWidth: 1,
      borderColor: '#D9D9D9',
      borderRadius: 18,
      justifyContent: 'center',
      paddingHorizontal: 18,
      backgroundColor: '#FFF',
    },
  
    placeholder: {
      fontSize: 20,
      color: '#3C3C3C',
    },
  
    button: {
      marginTop: 32,
      height: 60,
      borderRadius: 18,
      backgroundColor: '#0D7A42',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    buttonText: {
      color: '#FFF',
      fontSize: 20,
      fontWeight: '700',
      letterSpacing: 1,
    },
  
    resultCard: {
      marginTop: 14,
      backgroundColor: '#FFFFFF',
      borderRadius: 24,
      paddingVertical: 20,
      alignItems: 'center',
  
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 20,
      shadowOffset: {
        width: 0,
        height: 6,
      },
  
      elevation: 5,
    },
  
    resultTitle: {
      fontSize: 22,
      fontWeight: '700',
      color: '#0D7A42',
      marginBottom: 18,
    },
  
    result: {
      fontSize: 40,
      fontWeight: '800',
      color: '#0D7A42',
    },
  
});