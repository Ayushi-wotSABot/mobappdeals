
import { Text, View, TextInput, SafeAreaView, StatusBar, Pressable, KeyboardAvoidingView, Platform, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import "../../global.css"
import React, { useState } from 'react';
import { icons } from '../../constants';
import { Link, useRouter } from 'expo-router';

export default function Contactform() {

    const router = useRouter();
    return (
        <>
            <SafeAreaView className="flex-1">
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <View className="flex-1 justify-center ">
                        <LinearGradient
                            start={{ x: 0.0, y: 0.29 }}
                            end={{ x: 0.8, y: 1.3 }}
                            locations={[0.0, 0.3, 0.6]}
                            colors={['#000000', '#666666', '#000000']}
                            className="flex-1 justify-center items-center"
                        >
                            <View className="w-[7.5vh] h-[3vh] flex flex-row -ml-96 -mr-8 mb-4 -mt-8 items-center">
                                <TouchableOpacity onPress={() => router.back()}>
                                    <Image
                                        source={icons.backk}
                                        resizeMode='contain'
                                        tintColor="white"
                                        className="w-4 h-4 mr-2"
                                    />
                                </TouchableOpacity>
                                <Text className="text-[white] font-bold">Contacts</Text>
                            </View>
                            <View className="w-[47vh] h-[84vh]  flex rounded-[8]  bg-[#FFFFFF26] shadow-[20,20,24,0] shadow-[#00000040]">
                                <Text className="text-[white] flex-1 ml-4 mb-4 mt-3 font-semibold ">Contact Information</Text>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1 text-[white]  h-[2.5vh] pt-1  ml-8  text-[13px]">Contact Owner</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-xs text-[white] mr-3 mb-1 rounded-l-[5] rounded-r-[5]"

                                        placeholder='        Sabu John Bosco '
                                        placeholderTextColor="white"
                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1  text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">First Name</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-xs text-[white] mr-3 rounded-l-[5] rounded-r-[5]"
                                        placeholder='        Kriss '
                                        placeholderTextColor="white"
                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1  text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Account Name</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-xs text-[white] mr-3 rounded-l-[5] rounded-r-[5]"
                                        placeholder='        King(Sample) '
                                        placeholderTextColor="white"
                                    />
                                    {/* <View className="flex-1 h-[2.5vh] border border-1 border-[white] rounded-l-[5] rounded-r-[5] mr-3 flex-row items-center relative">
                                        <View className="flex-1 text-[white]">
                                            <Picker
                                                selectedValue={accountName}
                                                style={{ color: 'white' }} // Picker for dropdown
                                                dropdownIconColor="white" // Set dropdown icon color
                                                onValueChange={(itemValue) => setAccountName(itemValue)}
                                            >
                                                <Picker.Item label="High" value="high" style={{ fontSize: 13 }} />
                                                <Picker.Item label="Option 1" value="option1" style={{ fontSize: 13 }} />
                                                <Picker.Item label="Option 2" value="option2" style={{ fontSize: 13 }} />
                                                <Picker.Item label="Option 3" value="option3" style={{ fontSize: 13 }} />
                                            </Picker>
                                        </View>
                                    </View> */}
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1  text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Email</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-xs text-[white] mr-3 rounded-l-[5] rounded-r-[5]"
                                        placeholder='        krissmarrier@noemail.com '
                                        placeholderTextColor="white"
                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1  text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Phone</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-xs text-[white] mr-3 rounded-l-[5] rounded-r-[5]"
                                        placeholder='        555-555-5555 '
                                        placeholderTextColor="white"
                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1  text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Other Phone</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-xs text-[white] mr-3 rounded-l-[5] rounded-r-[5]"
                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Mobile</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-xs text-[white] mr-3 rounded-l-[5] rounded-r-[5]"
                                        placeholder='        555-555-5555 '
                                        placeholderTextColor="white"
                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Assistant</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-xs text-[white] mr-3 rounded-l-[5] rounded-r-[5]"
                                    />
                                </View>
                                <View className="flex-1 flex-row items-center mb-2">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Lead Source</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] mr-3 text-xs text-[white] rounded-l-[5] rounded-r-[5]"
                                        placeholder='        Trade Show '
                                        placeholderTextColor="white"
                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2 ">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Last Name</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] mr-3 text-xs text-[white] rounded-l-[5] rounded-r-[5]"
                                        placeholder='        Marrier(Sample) '
                                        placeholderTextColor="white"
                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2 ">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Vendor Name</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] mr-3 text-xs text-[white] rounded-l-[5] rounded-r-[5]"
                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2 ">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Title</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] mr-3 text-xs text-[white] rounded-l-[5] rounded-r-[5]"
                                        placeholder='        Quality Engineer '
                                        placeholderTextColor="white"
                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Department</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-xs text-[white] mr-3 rounded-l-[5] rounded-r-[5]"

                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Home Phone</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-xs text-[white] mr-3 rounded-l-[5] rounded-r-[5]"

                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Fax</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-xs text-[white] mr-3 rounded-l-[5] rounded-r-[5]"
                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Date Of Birth</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-xs text-[white] mr-3 rounded-l-[5] rounded-r-[5]"
                                        placeholder='        DD/MM/YYYY   '
                                        placeholderTextColor="white"
                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Asst Phone</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-[white] mr-3 rounded-l-[5] rounded-r-[5]"
                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2 ">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Email Opt Out</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-[white] mr-3 rounded-l-[5] rounded-r-[5]"
                                    />

                                </View>
                                <View className="flex-1 flex-row ">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Skype ID</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white]  text-xs text-[white] mr-3 rounded-l-[5] rounded-r-[5]"
                                        placeholder='        Kris_marrier '
                                        placeholderTextColor="white"
                                    />
                                </View>
                                <View className="flex-1 flex-row mt-8" />
                                <View className="flex flex-row mt-12 ml-32 mb-8">
                                    <Pressable className="bg-[#ffffff] rounded-l-[8] rounded-r-[8] px-5 py-1.5 shadow-xl" onPress={() => { router.back() }}>
                                        <Text className="font-bold text-[black]  ">Cancel</Text>
                                    </Pressable>
                                    <Pressable className=" bg-[#D9D9D967] rounded-l-[8] rounded-r-[8] ml-4  px-5 py-1.5 shadow-xl shadow-[#00000040];"
                                        onPress={() => alert("Submitted")}
                                    >
                                        <Text className="font-bold text-[white]">Save</Text>
                                    </Pressable>
                                </View>
                            </View>

                        </LinearGradient>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    )
}