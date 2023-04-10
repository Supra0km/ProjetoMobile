import { FlatList, ImageBackground, View, Text } from 'react-native';
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider, ComponentButtonInterface } from '../../components';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
export function Slider4({ setPageI }: IPage) {
    const slide1 = require("../../assets/slide1.png")
    const slide1Texts = [
        { id: '1', text: 'Papa Emeritus I – vocais (2008–2012)'},
        { id: '2', text: 'Papa Emeritus II – vocais (2012–2014)'},
        { id: '3', text: 'Papa Emeritus III – vocais (2015–2017)'},
        { id: '4', text: 'Papa Emeritus Zero/Papa Nihil – (por volta do final dos anos 60)'},
    ]
    return (
        <View style={styles.container} >
            <View style={styles.panel}>
                <ComponentTitleSlider titleI='Papas:' />
                <FlatList
                    data={slide1Texts}
                    renderItem={({ item }) =>
                        <ComponentListMarker key={item.id} textMarker={item.text} />
                    }
                    keyExtractor={(item) => item.id}
                />
                <TouchableOpacity style={styles.buttonEntrar} onPress={
                    () => setPageI(5)
                }>
                    <Text style={styles.buttonEntrarText}> Entrar </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonSlider}>
                <ComponentButtonSlider onPressI={() => setPageI(1)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(2)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(3)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(4)} cor={true}/>
                <ComponentButtonSlider onPressI={() => setPageI(5)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(6)} cor={false}/>
            </View>
        </View>
    );

}