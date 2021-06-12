import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from 'expo-barcode-scanner';


export default class TransactionScreen extends React.Component {
constructor(){
  super();
  this.state = {
    hasCameraPermission: null,
    Scanned: false,
    scannedData: '',
    buttonState: 'normal'
  }
}


getCameraPermission = async() =>{
  const { status } = await Permissions.askAsync(Permissions.CAMERA);
  this.setState({

  })
  hasCameraPermission: status === 'granted'
}

    render() {
      const hasCameraPermissions = this.state.hasCameraPermissions;
      const scanned = this.state.scanned;
      const buttonState = thid.state.buttonState;

      If {buttonState === "clicked " && hasCameraPermissions}
      return(
      <BarCodeScanner 
        onBarCodeScanner ={scanned ? undefined: handleBarCodeScanned}/>
    else if (buttonState === "normal")
    
      return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Issue or Return</Text>
          <Text styles={styles.displayText}>{
            hasCameraPermissions === true? this.state.scannedData "Request camera permission"
          </Text>
          <TouchableOpacity
          onPress={this.getCameraPermissions}>
            styles={styles.scanButton}
            <Text style = {styles.buutonText}>Scan QR Code</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underLine'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      margin: 10,
      padding:10
    }
  });