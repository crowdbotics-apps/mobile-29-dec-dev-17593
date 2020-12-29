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

  state = { Switch_2: true, Switch_19: true }

  render = () => (
    <View>
      <View>
        <View style={styles.View_5}>
          <Switch
            trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
            style={styles.Switch_2}
            value={this.state.Switch_2}
            onValueChange={nextChecked =>
              this.setState({ Switch_2: nextChecked })
            }
          />
          <Image
            source={{
              uri:
                "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/2_5PdFYcN.jpg"
            }}
            style={styles.Image_3}
          />
        </View>
        <View style={styles.View_6}>
          <Text>Sample text content</Text>
          <Switch
            trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
            style={styles.Switch_19}
            value={this.state.Switch_19}
            onValueChange={nextChecked =>
              this.setState({ Switch_19: nextChecked })
            }
          />
          <Image
            source={{
              uri:
                "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/2_5PdFYcN.jpg"
            }}
            style={styles.Image_9}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_4: {},
  View_5: { width: 200, height: 100 },
  Switch_2: { alignSelf: "flex-start" },
  Image_3: { width: 100, height: 100 },
  View_6: { width: 300, height: 200 },
  Text_8: {},
  Switch_19: { alignSelf: "flex-start" },
  Image_9: { width: 100, height: 100 }
})
