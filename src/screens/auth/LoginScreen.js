import React, { useState } from 'react'
import {
  View, Image, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Alert,
} from 'react-native'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import { Text } from '../../components'
import { email, logo, password } from '../../../assets/images'
import { Colors, MessageStyle, TextStyles } from '../../../assets/styles'
import { API_URL, SCREEN_NAME } from '../../configs'
import { userActions } from '../../redux/actions'
import { Helpers, NavigationHelpers } from '../../utils'

const LoginScreen = (props) => {
  const dispatch = useDispatch()
  const [emailUser, setEmailUser] = useState(__DEV__ ? 'bot1@gmail.com' : '')
  const [passwordUser, setPasswordUser] = useState(__DEV__ ? '123456' : '')

  const handlePressSignIn = async () => {
    dispatch(userActions.loginUser({
      email: emailUser,
      password: passwordUser,
    }, (response) => {
      if (response.success) {
        Helpers.showMess('Login success!!!', 'success')
        NavigationHelpers.navigateToScreen(SCREEN_NAME.HomeScreen)
      } else {
        Helpers.showMess(response.message)
      }
    }))
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.backgroundWhite, paddingHorizontal: 16 }}>
      <SafeAreaView />
      <View style={{ alignItems: 'center' }}>
        <Image
          source={logo}
          style={{ width: 72, height: 72, marginTop: 68 }}
          resizeMode="contain"
        />
        <Text style={{
          marginTop: 18,
          marginBottom: 8,
          ...TextStyles.heading4,
          color: Colors.neutralDark,
        }}
        >
          Welcome to Lafyuu
        </Text>
        <Text style={{
          ...TextStyles.bodyNormalTextRegular,
          color: Colors.neutralGrey,
          marginBottom: 28,
        }}
        >
          Sign in to continue
        </Text>
      </View>
      <View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderRadius: 5,
          borderWidth: 2 * StyleSheet.hairlineWidth,
          borderColor: Colors.neutralLight,
        }}
        >
          <Image
            source={email}
            style={{ width: 24, height: 24, marginRight: 10 }}
          />

          <TextInput
            value={emailUser}
            onChangeText={(text) => setEmailUser(text)}
            style={{ color: Colors.neutralGrey, ...TextStyles.bodyNormalTextBold }}
            placeholder="Your Email"
            placeholderTextColor={Colors.neutralGrey}
          />
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderRadius: 5,
          borderWidth: 2 * StyleSheet.hairlineWidth,
          borderColor: Colors.neutralLight,
          marginTop: 8,
        }}
        >
          <Image
            source={password}
            style={{ width: 24, height: 24, marginRight: 10 }}
          />

          <TextInput
            value={passwordUser}
            onChangeText={(text) => setPasswordUser(text)}
            style={{ color: Colors.neutralGrey, ...TextStyles.bodyNormalTextBold }}
            placeholder="Your Password"
            placeholderTextColor={Colors.neutralGrey}
          />
        </View>

        <TouchableOpacity
          onPress={handlePressSignIn}
        >
          <View style={{
            padding: 16,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            backgroundColor: Colors.primaryBlue,
            marginTop: 16,
          }}
          >
            <Text style={{ ...TextStyles.bodyMediumTextBold, color: Colors.backgroundWhite }}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row', alignItems: 'center', marginTop: 21, marginBottom: 16,
        }}
      >
        <View style={{
          flex: 1,
          height: 2 * StyleSheet.hairlineWidth,
          backgroundColor: Colors.neutralLight,
        }}
        />
        <Text style={{ width: 72, textAlign: 'center', ...TextStyles.bodyMediumTextBold }}>OR</Text>
        <View style={{
          flex: 1,
          height: 2 * StyleSheet.hairlineWidth,
          backgroundColor: Colors.neutralLight,
        }}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={handlePressSignIn}
        >
          <View style={{
            padding: 16,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            backgroundColor: 'white',
            marginTop: 16,
            borderColor: Colors.neutralLight,
            borderWidth: StyleSheet.hairlineWidth,
          }}
          >
            <Text style={{ ...TextStyles.bodyMediumTextBold, color: Colors.neutralGrey }}>Log in with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePressSignIn}
        >
          <View style={{
            padding: 16,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            backgroundColor: 'white',
            marginTop: 16,
            borderColor: Colors.neutralLight,
            borderWidth: StyleSheet.hairlineWidth,
          }}
          >
            <Text style={{ ...TextStyles.bodyMediumTextBold, color: Colors.neutralGrey }}>Log in with Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <Text style={{
              ...TextStyles.bodyNormalTextBold, color: Colors.primaryBlue,
            }}
            >
              Forgot Password?
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}
      >
        <Text style={{
          ...TextStyles.bodyNormalTextRegular,
        }}
        >
          Don’t have a account?
        </Text>
        <TouchableOpacity>
          <View>
            <Text style={{
              ...TextStyles.bodyNormalTextBold, color: Colors.primaryBlue,
            }}
            >
              Register
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen
