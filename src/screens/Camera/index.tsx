import { Camera, CameraType } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, Text, TouchableOpacity, View, Image } from 'react-native';
import { ComponentButtonInterface } from '../../components';
import { styles } from "./styles"
interface iPhoto {
  height: string
  uri: string
  width: string
}

export function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [photo, setPhoto] = useState<iPhoto>()
  const ref = useRef(null)

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Por sua conta e risco, permita a câmera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePicture() {
    if(ref.current) {
      const picture = await ref.current.takePictureAsync()
      console.log(picture)
      setPhoto(picture)
    }
  }

  return (
    <View style={styles.container}>
        <Camera style={styles.camera} type={type} ref={ref}/>
        <ComponentButtonInterface title='Flip' type='secondary' onPressI={toggleCameraType} />
        <ComponentButtonInterface title='Tirar foto' type='secondary' onPressI={takePicture} />
        {photo && photo.uri && (
          <Image source={{uri:photo.uri }} style={styles.img} />
        )}
    </View>
  );
}