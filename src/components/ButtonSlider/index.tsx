import { TouchableOpacity } from 'react-native'
import { styles } from './styles'
export interface IBSlider {
    onPressI: () => void
    cor: boolean
}
export function ButtonSlider({ onPressI, cor }: IBSlider) {
    return (
        <TouchableOpacity style = {cor ? styles.ballCor : styles.ball} onPress={onPressI} />
    )
}