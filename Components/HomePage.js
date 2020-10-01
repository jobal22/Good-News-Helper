import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableHighlight } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

export default class App extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
            title: 'God loves you!',
            text: 'For God so loved the world, that He gave His only Son, that whoever believes in Him should not perish but have eternal life. (John 3:16)',
            url: "https://raw.githubusercontent.com/jobal22/Down-And-Out/master/Components/Images/heart.png",
          },
          {
            title:"You have sinned against God",
            text: "For all have sinned and fall short of the glory of God. (Romans 3:23)",
            url: "https://raw.githubusercontent.com/jobal22/Down-And-Out/master/Components/Images/face.png",
          },
          {
            title:"Jesus died on the cross for our sins",
            text: "For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with Scriptures (1 Corinthians 15:3)",
            url: "https://raw.githubusercontent.com/jobal22/Down-And-Out/master/Components/Images/cross.png",
          },
          {
            title:"On the third day, Jesus rose from the grave!",
            text: "That He was buried, that He was raised on the third day in accordance with the Scriptures (1 Corinthians 13:4)",
            url: "https://raw.githubusercontent.com/jobal22/Down-And-Out/master/Components/Images/tomb.png",
          },
          {
            title:"You must repent of your sins.",
            text: "From that time Jesus began to preach, saying, 'Repent, for the kingdom of heaven is at hand.' (Matthew 4:17)",
            url: "https://raw.githubusercontent.com/jobal22/Down-And-Out/master/Components/Images/turn1.png",
          },
          {
            title:"Believe that Jesus died on the cross and rose from the grave.",
            text: "...and believe in your heart that God raised Him from the dead, you will be saved. For with the heart one believes and is justified... (Romans 10:9-10)",
            url: "https://raw.githubusercontent.com/jobal22/Down-And-Out/master/Components/Images/believe1.png",
          },
          {
            title:"Confess Jesus as your Lord",
            text: "For, if you confess with your mouth that Jesus is Lord...you wil lbe saved...with the mouth one confesses and is saved. (Romans 10:9-10)",
            url: "https://raw.githubusercontent.com/jobal22/Down-And-Out/master/Components/Images/crown1.png",
          },
          {
            title:"And you will be a friend, servant, and child of God.",
            text: "But to all who receive Him, who believed in His name, he gave the right to become children of God. (John 1:12)",
            url: "https://raw.githubusercontent.com/jobal22/Down-And-Out/master/Components/Images/saved1.png",
          },

        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'#fff',
              borderRadius: 10,
              height: 630,
              // padding: 50,
              // marginLeft: 15,
              // marginRight: 15, 
              // marginTop: 0,
              }}
          >
            <View style={{top: '10%', position: 'absolute',}}>
              <Image style={{ width: 300, height: 300, marginLeft: 'auto', marginRight: 'auto' }} source={{uri: item.url}}/>
              <Text style={{fontSize: 33, marginLeft: 'auto', marginRight: 'auto', marginTop: 20, paddingLeft: 20, paddingRight: 30, textAlign: 'center'}}>{item.title}</Text>
              <Text style={{fontSize: 15, marginLeft: 'auto', marginRight: 'auto', marginTop: 40, paddingLeft: 20, paddingRight: 40}}>{item.text}</Text>
            </View>
          </View>
        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'white', paddingTop: 50, flexDirection:'row', alignItems: 'center', justifyContent: 'center',}}>
            <TouchableHighlight
                onPress={
                    () => { this.carousel._snapToItem(this.state.activeIndex-1)}
                }>
                <Image style={{marginLeft: 20}}source={require('./../assets/leftarrow.png')}/>
            </TouchableHighlight>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', position: 'relative',}}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={360}
                  itemWidth={370}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) }
                />
            </View>
            <TouchableHighlight            
                onPress={
                    () => { this.carousel._snapToItem(this.state.activeIndex+1)}
                }>
                <Image style={{marginRight: 20}} source={require('./../assets/rightarrow.png')}/>                
            </TouchableHighlight>
          </SafeAreaView>
        );
    }
}


// import React, {Component} from 'react';
// import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Item, Bullets } from 'react-native';
// import heart from './Images/heart.png';
// import Carousel from 'react-native-snap-carousel';



// export default class HomePage extends Component {
//   _renderItem = ({item, index}) => {
//     return (
//         <View style={styles.slide}>
//             <Text style={styles.title}>{ item.title }</Text>
//         </View>
//     );
// }

// render () {
//     return (
//         <Carousel
//           ref={(c) => { this._carousel = c; }}
//           data={this.state.entries}
//           renderItem={this._renderItem}
//           sliderWidth={sliderWidth}
//           itemWidth={itemWidth}
//         />
//     );
// }
// }


// export default function HomePage() {
//   return (
//     <SafeAreaView>
//       <ScrollView
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         scrollEventThrottle={200}
//         decelerationRate='fast'
//         pagingEnabled
//       >
//         {/* <Item />
//         <Item />
//         <Item />
//         <Bullets /> */}
//       </ScrollView>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create ({
//   container: {
//     flex: 1,
//   },
//   heart: {
//     marginTop: 100,
//     width: 500,
//     height: 500,
//   }
// })
