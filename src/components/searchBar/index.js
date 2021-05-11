import React from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default class SearchBarElement extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        containerStyle={styles.searchBarStyle}
        placeholder=""
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}

const styles = StyleSheet.create({
    searchBarStyle: {
        backgroundColor: 'transparent',
        width: '90%',
        height: 10,
        margin: 10,
    },
})