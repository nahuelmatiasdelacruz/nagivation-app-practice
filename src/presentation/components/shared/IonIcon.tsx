import Icon from 'react-native-vector-icons/Ionicons';

interface IconProps {
  size?: number;
  name: string;
  color?: string;
}

export const IonIcon = ({name,size = 20,color = 'black'}:IconProps) => {
  return <Icon name={name} size={size} color={color} />;
}