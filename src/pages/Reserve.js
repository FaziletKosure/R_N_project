import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const Reserve = (props) => {
  return (
    <View style={{flex: 1}}>
      <WebView source={{uri: props.route.params.reserv}} />
    </View>
  );
};

export {Reserve};

const styles = StyleSheet.create({});
