import { useState, useRef } from 'react';
import { View, Text, ScrollView, useWindowDimensions } from 'react-native';
import { ProgressBar } from '../../components/ProgressBar';

import { styles } from './styles';

type ScrollProps = {
  layoutMeasurement: {
    height: number
  };
  contentOffset: {
    y: number;
  };
  contentSize: {
    height: number;
  }
}

export function Post() {

  const [percentage, setPercentage] = useState(0);

  const scrollRef = useRef<ScrollView>(null);
  const dimisions = useWindowDimensions();

  function scrollPercentage({ layoutMeasurement, contentOffset, contentSize }: ScrollProps) {
    const visisbleContent = Math.ceil((dimisions.height / contentSize.height) * 100);

    const value = ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;
    setPercentage(value < visisbleContent ? 0 : value);
  }

  function HandleScrollMoveTop() {
    scrollRef.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true
    })
  }

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        onScroll={(event) => scrollPercentage(event.nativeEvent)}
      >

        <Text style={styles.title}>
          Lorem ipsun
        </Text>

        <View>

          <Text style={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt praesentium alias quisquam placeat, nemo vitae illo dolorem qui facilis earum suscipit id harum quam blanditiis, sequi molestiae quis iusto tempore.
          </Text>
        </View>
      </ScrollView>

      <ProgressBar value={percentage}
        onMoveTop={() => HandleScrollMoveTop()}
      />
    </View >
  );
}