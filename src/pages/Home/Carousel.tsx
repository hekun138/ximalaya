import React from 'react';
import SnapCarousel, { AdditionalParallaxProps, ParallaxImage, Pagination } from 'react-native-snap-carousel';
import { viewportWidth, wp, hp } from '@/utils/index';
import { View, StyleSheet } from 'react-native';

const data = [
  "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/121299/40/630/95267/5eb692e2Ed38db542/c81e203bb71e48c4.jpg!cr_1125x445_0_171!q70.jpg.dpg",
  "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/124391/11/707/97179/5eb76f14Ed3dd7e00/ba03c6f845113e8e.jpg!cr_1125x445_0_171!q70.jpg.dpg",
  "https://imgcps.jd.com/ling4/6533301/56m66LCD5paw5qy-6YCf6YCS/5Lq65rCU55av5oqi5Zeo57-75aSp/p-5e7db7679530ce40bad549af/0b5e36be/cr_1125x445_0_171/s1125x690/q70.jpg",
  "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/109579/20/17033/101196/5eb66a1bE7afbfd42/8ff290ae06be6897.jpg!cr_1125x445_0_171!q70.jpg.dpg",
  "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/95842/38/12546/80187/5e4ba3e7E09e0da3b/92aac67aefdf6b6f.jpg!cr_1125x445_0_171!q70.jpg.dpg"
]

const sliderWidth = viewportWidth;
const sideWidth = wp(90);
const sideHeight = hp(26);
const itemWidth = sideWidth + wp(2) * 2;

class Carousel extends React.Component {

  state = {
    activeSlide: 0
  }

  renderItem = ({item}: {item: string}, parallaxProps?: AdditionalParallaxProps) => {
    return (
      <ParallaxImage 
        source={{uri: item}} 
        style={styles.image} 
        containerStyle={styles.imageContainer}
        parallaxFactor={0.8}
        showSpinner
        spinnerColor="rgba(0, 0, 0, 0.25)"
        {...parallaxProps}
      />
    )
  }

  get pagination() {
    const { activeSlide } = this.state;
    return (
      <View style={styles.paginationWrapper}>
        <Pagination 
          containerStyle={styles.paginationContainer} 
          dotsLength={data.length} 
          dotContainerStyle={styles.dotContainer}
          dotStyle={styles.dot}
          activeDotIndex={activeSlide}
          inactiveDotScale={0.7}
          inactiveDotOpacity={0.4}
        />
      </View>
    )
  }

  onSnapToItem = (index: number) => {
    this.setState({ activeSlide: index})
  }

  render() {
    return (
      <View>
        <SnapCarousel 
          data={data} 
          renderItem={this.renderItem} 
          onSnapToItem={this.onSnapToItem}
          /**轮播图宽度 */
          sliderWidth={sliderWidth}
          /**图片宽度 */
          itemWidth={itemWidth}
          hasParallaxImages
          loop
          autoplay
        />
        {this.pagination}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width: itemWidth,
    height: sideHeight,
    borderRadius: 8
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover'
  },
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  paginationContainer: {
    position: 'absolute',
    top: -20,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 8
  },
  dotContainer: {
    marginHorizontal: 6
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.92)'
  }
})

export default Carousel;