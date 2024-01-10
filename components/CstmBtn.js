import { TouchableOpacity, Text } from 'react-native';

const CustomBtn = (props) => {
  return (
    <TouchableOpacity 
      onPress={props.onPress}
      style={props.buttonStyle}
    >
      <Text style={props.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default CustomBtn;