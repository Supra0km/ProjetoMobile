import { FlatList, ImageBackground, View } from 'react-native';
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider1({ setIpageI }:IPage) {
    const slide1 = require ("../../assets/slide1.png")
    const slide1Texts = [
        { id: '1', text: 'Localize seu veículo.' },
        { id: '2', text: 'Verifique se está em movimento.'},
        { id: '3', text: 'Veja todo o percurso.'},
    ]
    return (
        <ImageBackground source={slide1} style={styles.container} >
            <View style={styles.panel}>
                <ComponentTitleSlider titleI='Sistema de rastreamento' />
                <FlatList
                    data={slide1Texts}
                    renderItem={({ item }) =>
                        <ComponentListMarker key={item.id} textMarker={item.text} />
                    }
                    keyExtractor={(item) => item.id}
                    />
            </View>
            <View style={styles.buttonSlider}>
                    <ComponentButtonSlider onPressI={() => setIpageI(1)} />
                    <ComponentButtonSlider onPressI={() => setIpageI(2)} />
                    <ComponentButtonSlider onPressI={() => setIpageI(3)} />
                    <ComponentButtonSlider onPressI={() => setIpageI(4)} />
            </View>
        </ImageBackground>    
    );
}