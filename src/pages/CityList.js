import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {CityItem, SearchBar} from '../components';

let originalList = [];

const CityList = (props) => {
  const [cityList, setCityList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // ASYNC-AWAIT
  const fetchCityData = async () => {
    setLoading(true);
    const {data} = await axios.get(
      'https://opentable.herokuapp.com/api/cities',
    );
    setCityList(data.cities);
    originalList = [...data.cities];
    setLoading(false);
  };

  useEffect(() => {
    fetchCityData();
  }, []);

  const renderCities = ({item}) => {
    return (
      <CityItem
        cityName={item}
        onSelect={() =>
          props.navigation.navigate('Restaurants', {selectedCity: item})
        }
      />
    );
  };

  const renderSeperator = () => (
    <View style={{borderWidth: 1, borderColor: '#e0e0e0'}} />
  );

  function searchCity(search) {
    const filteredCities = originalList.filter((city) => {
      const text = search.toUpperCase();
      const cityName = city.toUpperCase();

      return cityName.indexOf(text) > -1;
    });

    setCityList(filteredCities);
  }

  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            margin: 5,
            fontWeight: 'bold',
            fontSize: 30,
            color: 'blue',
            textAlign: 'center',
          }}>
          Cities
        </Text>
        <SearchBar
          placeholder="Search a city..."
          onSearch={(value) => searchCity(value)}
        />
        {isLoading ? (
          <ActivityIndicator
            style={{justifyContent: 'center', alignItems: 'center'}}
            size="large"
            color="#80d6ff"
          />
        ) : (
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={cityList}
            renderItem={renderCities}
            ItemSeparatorComponent={renderSeperator}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export {CityList};
