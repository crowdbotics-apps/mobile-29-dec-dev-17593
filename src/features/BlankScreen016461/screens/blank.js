import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_4: "", DateTimePicker_9: new Date("") }

  render = () => (
    <View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Text>Sample text content</Text>
      <Text>Sample text content</Text>
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_9}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_9: selectedDate })
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Button_2: {},
  Text_3: {},
  TextInput_4: {},
  Button_5: {},
  Button_6: {},
  Text_7: {},
  Text_8: {},
  DateTimePicker_9: {}
})
