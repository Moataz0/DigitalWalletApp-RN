import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { COLORS, FONTS, icons, images, SIZES } from '../constants';
import LinearGradient from 'react-native-linear-gradient';
const SignUp = () => {
  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: SIZES.padding * 3,
          paddingHorizontal: SIZES.padding * 2,
        }}
        onPress={() => console.log('Sign up')}>
        <Image
          source={icons.back}
          resizeMode="contain"
          style={{ height: 20, width: 20, tintColor: COLORS.white }}
        />
        <Text
          style={{
            marginLeft: SIZES.padding * 1.5,
            color: COLORS.white,
            ...FONTS.h4,
          }}>
          Sign Up
        </Text>
      </TouchableOpacity>
    );
  }

  function renderLogo() {
    return (
      <View style={{ marginTop: SIZES.padding * 5, height: 100, alignItems: "center", justifyContent: "center" }}>
        <Image source={images.wallieLogo} resizeMode='contain' style={{ width: "60%" }} />
      </View>
    )
  }
  function renderForm() {
    return (
      <View style={{ marginTop: SIZES.padding * 3, marginHorizontal: SIZES.padding * 3 }}>
        <View style={{ marginTop: SIZES.padding * 3 }}>
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Full Name</Text>
          <TextInput style={{
            marginVertical: SIZES.padding,
            borderBottomColor: COLORS.white,
            borderBottomWidth: 1,
            height: 40,
            color: COLORS.white,
            ...FONTS.body3
          }}
            placeholder='Enter full name'
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
          />
        </View>
        <View style={{ marginTop: SIZES.padding * 2 }}>
          <Text style={{ color: COLORS.lightGreen }}>Phone number</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={{
              width: 100,
              height: 50,
              marginHorizontal: 5,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              flexDirection: "row",
              ...FONTS.body2
            }}
              onPress={() => console.log("Show Modal")}
            >
              <View style={{ justifyContent: "center" }}>
                <Image source={icons.down} style={{ width: 10, height: 10, tintColor: COLORS.white }} />
              </View>
              <View style={{ justifyContent: "center", marginLeft: 5 }}>
                <Image source={images.usFlag} resizeMode='contain' style={{ width: 30, height: 30 }} />
              </View>
              <View style={{ justifyContent: "center", marginLeft: 5 }}>
                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>US+1</Text>
              </View>

            </TouchableOpacity>
            <TextInput style={{
              flex: 1,
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
              ...FONTS.body3
            }}
              placeholder='Enter phone number'
              placeholderTextColor={COLORS.white}
              selectionColor={COLORS.white}
            />
          </View>

        </View>

      </View>
    )
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}>
      <LinearGradient colors={[COLORS.lime, COLORS.emerald]} style={{ flex: 1 }}>
        <ScrollView>
          {renderHeader()}
          {renderLogo()}
          {renderForm()}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
