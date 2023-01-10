import React from 'react';
import {View, Text, Image} from 'react-native';

const ImageDetail = ({imageSource, title, score}) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

export default ImageDetail;
