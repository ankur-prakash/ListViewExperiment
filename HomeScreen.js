import React, { Component } from 'react';
import {
    FlatList, Text, View,
    ImageBackground,
    Button, TouchableOpacity, Image
} from 'react-native';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'React Component',
        headerLeft: (
            <TouchableOpacity
                        onPress={()=>{alert("you clicked me")}}>
                <Image style={{ marginLeft: 12 }}
                    source={require('./resources/images/menu.png')} />

            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity                
                 onPress={()=>{alert("you clicked me")}}
            >
                <Image style={{ marginRight: 12 }}
                    source={require('./resources/images/menu.png')} />

            </TouchableOpacity>
        ),
    };

    _renderItem = ({ item, index }) => {
        return <Text style={{ height: 44, lineHeight: 44, marginLeft: 8, fontWeight: '600' }}>{item}</Text>
    }
    render() {
        return (
            <ImageBackground source={require('./resources/images/background.png')}
                style={{ width: '100%', height: '100%' }}>

                <FlatList
                    data={["FlatList", "SectionList", "GridView With List", "Tab bar",
                        "Button Customization", "Waterfall Layout", "SafeAreaView",
                        "NavigationBar & Item", "Drawer", "Alert", "FetchRequest", "Animation"]}
                    keyExtractor={(item, index) => index}
                    ListEmptyComponent={<Text style={{ height: 44 }}>No Content available</Text>}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={() => <View style={{ flex: 1, height: 1, backgroundColor: '#ECECEC' }} />}
                />
            </ImageBackground>
        );
    }
}

//({item, index}) => <Text>This is row index {item}</Text>