import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Image, StyleSheet, SafeAreaView, View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import BottomSheet, { BottomSheetView, BottomSheetTextInput, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { BottomSheetBackdropProps, BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { Ionicons } from '@expo/vector-icons';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { SharedValue } from 'react-native-reanimated';




function Separator() {
  return (<BottomSheetView style={styles.separator}>
    <View style={styles.line} />
    <Text style={styles.separatorText}>or</Text>
    <View style={styles.line} />
  </BottomSheetView>);
}


function BottomSheetLogin(props: { bottomSheetRef: React.RefObject<BottomSheetMethods> | ((instance: BottomSheetMethods | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | null | undefined; snapPoints: (string | number)[] | SharedValue<(string | number)[]> | Readonly<(string | number)[] | SharedValue<(string | number)[]>> | undefined; handleSheetChanges: ((index: number) => void) | undefined; renderBackdrop: React.FC<BottomSheetBackdropProps> | null | undefined; isPasswordVisible: any; setIsPasswordVisible: (arg0: boolean) => void; }) {
  return (
    <BottomSheet ref={props.bottomSheetRef} index={-1} snapPoints={props.snapPoints} onChange={props.handleSheetChanges} backdropComponent={props.renderBackdrop} enablePanDownToClose={true}>
      <BottomSheetView style={styles.bottomSheetContainer}>
        {
          /** Header */
        }
        <>
          <Image source={require('@/assets/images/react-logo.png')} style={styles.logoLogin} resizeMode='contain' />
          <ThemedText type="title">Welcome !</ThemedText>
        </>
        {
          /** Text Inputs */
        }
        <BottomSheetView style={styles.inputsContainer}>
          <BottomSheetTextInput placeholder="Email" style={styles.textInput} placeholderTextColor={"gray"} />
          <View style={styles.textInput}>
            <BottomSheetTextInput placeholder="Password" secureTextEntry={!props.isPasswordVisible} placeholderTextColor={"gray"} style={{ width: "80%" }} />
            <TouchableOpacity style={{
              alignSelf: 'flex-end'
            }} onPress={() => props.setIsPasswordVisible(!props.isPasswordVisible)}>
              {!props.isPasswordVisible ? <Ionicons name="eye-off" size={24} color="black" /> : <Ionicons name="eye" size={24} color="black" />}
            </TouchableOpacity>
          </View>
        </BottomSheetView>
        {
          /** Login Button */
        }
        <TouchableOpacity style={styles.LoginButton}>
          <ThemedText type="defaultSemiBold">Log in</ThemedText>
        </TouchableOpacity>
        {
          /** Other Login forms (socials) */
        }
        <Separator />
        <BottomSheetView style={styles.socialsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-facebook" size={40} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-google" size={40} color="red" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-apple" size={40} color="black" />
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheetView>
    </BottomSheet>);
}



function BottomSheetSignUp(props: { bottomSheetSignUpRef: React.RefObject<BottomSheetMethods> | ((instance: BottomSheetMethods | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | null | undefined; snapPoints: (string | number)[] | SharedValue<(string | number)[]> | Readonly<(string | number)[] | SharedValue<(string | number)[]>> | undefined; handleSheetChanges: ((index: number) => void) | undefined; renderBackdrop: React.FC<BottomSheetBackdropProps> | null | undefined; }) {
  return (<BottomSheet ref={props.bottomSheetSignUpRef} index={-1} snapPoints={props.snapPoints} onChange={props.handleSheetChanges} backdropComponent={props.renderBackdrop} enablePanDownToClose={true}>
    <BottomSheetView style={styles.bottomSheetContainer}>
      {
        /**  header */
      }
      <>
        <Image source={require('@/assets/images/react-logo.png')} style={styles.logoLogin} resizeMode='contain' />
        <ThemedText type="title">Create an Account</ThemedText>
      </>
      {
        /**  socials buttons */
      }
      <BottomSheetView style={styles.socialSignUpContainer}>
        <TouchableOpacity style={styles.socialButtonSignUp}>
          <Ionicons name="logo-facebook" size={30} color="blue" />
          <ThemedText type="defaultSemiBold" style={{
            color: 'dark',
            marginLeft: 20
          }}>Continue with Facebook</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButtonSignUp}>
          <Ionicons name="logo-google" size={30} color="red" />
          <ThemedText type="defaultSemiBold" style={{
            color: 'dark',
            marginLeft: 20
          }}>Continue with Facebook</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButtonSignUp}>
          <Ionicons name="logo-apple" size={30} color="dark" />
          <ThemedText type="defaultSemiBold" style={{
            color: 'dark',
            marginLeft: 20
          }}>Continue with Facebook</ThemedText>
        </TouchableOpacity>
      </BottomSheetView>
      <Separator />
      {
        /**  Sign in with email option */
      }
      <TouchableOpacity style={styles.socialButtonSignUp}>
        <Ionicons name="mail" size={30} color="dark" />
        <ThemedText type="defaultSemiBold" style={{
          color: 'dark',
          marginLeft: 20
        }}>Sign Up with Email</ThemedText>
      </TouchableOpacity>
    </BottomSheetView>
  </BottomSheet>);
}


export default function LoginModal1() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // ref
  const bottomSheetSignUpRef = useRef<BottomSheet>(null);
  const bottomSheetLoginRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['90%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleLoginPress = useCallback(() => {
    bottomSheetLoginRef.current?.expand();
  }, []);

  const handleSignUpPress = useCallback(() => {
    bottomSheetSignUpRef.current?.expand();
  }
    , []);

  const renderBackdrop = useCallback((props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) =>
    <BottomSheetBackdrop {...props} disappearsOnIndex={-1} />
    , []);

  return (
    <>
      <ImageBackground source={require('@/assets/images/background_image.jpg')} style={styles.backgroundImage}>
        <View style={{ flex: 2 }} />
        <SafeAreaView style={styles.container}>
          <TouchableOpacity onPress={handleLoginPress} style={styles.LoginButton}>
            <ThemedText type="smallTitle">Log in</ThemedText>
          </TouchableOpacity>
          <View style={styles.textView}>
            <ThemedText type="default" style={{ color: "#fff" }}>Don't have an account?</ThemedText>
            <TouchableOpacity onPress={handleSignUpPress}>
              <ThemedText type="defaultSemiBold" style={styles.signUpText}>
                Sign up
              </ThemedText>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <BottomSheetLogin isPasswordVisible={isPasswordVisible} setIsPasswordVisible={setIsPasswordVisible} bottomSheetRef={bottomSheetLoginRef} snapPoints={snapPoints} handleSheetChanges={handleSheetChanges} renderBackdrop={renderBackdrop}></BottomSheetLogin>

      <BottomSheetSignUp bottomSheetSignUpRef={bottomSheetSignUpRef} snapPoints={snapPoints} handleSheetChanges={handleSheetChanges} renderBackdrop={renderBackdrop}></BottomSheetSignUp>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 20
  },
  LoginButton: {
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    aspectRatio: 12 / 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: "center"
  },
  textView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    padding: 10
  },
  signUpText: {
    color: "#fff",
    paddingLeft: 5
  },
  bottomSheetContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logoLogin: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  inputsContainer: {
    width: '100%',
    marginVertical: 20
  },
  textInput: {
    width: '100%',
    padding: 15,
    borderWidth: 2,
    borderColor: '#0F0F0F',
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray'
  },
  separatorText: {
    fontSize: 16,
    marginHorizontal: 10
  },
  socialsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 20
  },
  socialSignUpContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 20
  },
  socialButton: {
    padding: 10,
    borderRadius: 10,
    borderColor: 'dark',
    borderWidth: 2
  },
  socialButtonSignUp: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    borderColor: 'dark',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  }
});


/**
 *     <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
 */