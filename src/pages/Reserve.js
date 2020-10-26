import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

const Reserve = (props) => {
  const [isLoading, setLoading] = useState(true);
  const loading = (
    <ActivityIndicator style={{flex: 1}} size="large" color="red" />
  );
  return (
    <View style={{flex: 1}}>
      {isLoading && loading}
      <WebView
        onLoad={() => setLoading(false)}
        onLoadStart={() => setLoading(true)}
        source={{uri: props.route.params.reserv}}
      />
    </View>
  );
};

export {Reserve};

const styles = StyleSheet.create({});
