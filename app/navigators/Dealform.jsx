// import { Text, View, TextInput, SafeAreaView, StatusBar, Pressable } from 'react-native';
// import { Picker } from '@react-native-picker/picker'; // Import Picker for dropdown
// import { React, useState } from 'react';

// export default function Dealform() {
//     const [leadSource, setLeadSource] = useState(''); // State for Picker
//     const [accountName, setAccountName] = useState(''); // State for Picker
//     const [stage, setStage] = useState(''); // State for Picker
//     const [type, setType] = useState(''); // State for Picker
//     return (
//         <SafeAreaView>
//             <View className="h-full bg-[black]" >

//                 <View className="flex justify-center w-[full] h-[68vh] mt-2  rounded-xl   bg-zinc-800" >
//                     <Text className="text-[white] flex-1 ml-4 mb-4 mt-3 font-semibold ">Deal Information</Text>
//                     <View className="flex-1 flex-row mb-2">
//                         <Text className="flex-1 text-[white]  h-[2.5vh] pt-1  ml-8  text-[13px]">Deal Owner</Text>
//                         <TextInput
//                             className="flex-1 h-[2.5vh] border border-1 border-[white] mr-3 mb-1 rounded-l-[5] rounded-r-[5]"
//                         />
//                     </View>
//                     <View className="flex-1 flex-row mb-2">
//                         <Text className="flex-1  text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Deal Name</Text>
//                         <TextInput
//                             className="flex-1 h-[2.5vh] border border-1 border-[white] mr-3 rounded-l-[5] rounded-r-[5]"
//                         />
//                     </View>
//                     <View className="flex-1 flex-row mb-2">
//                         <Text className="flex-1  text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Account Name</Text>
//                         <View className="flex-1 h-[2.5vh] border border-1 border-[white] rounded-l-[5] rounded-r-[5] mr-3 flex-row items-center relative">
//                             <View className="flex-1 text-[white]">
//                                 <Picker
//                                     selectedValue={accountName}
//                                     style={{ color: 'white' }} // Picker for dropdown
//                                     dropdownIconColor="white" // Set dropdown icon color
//                                     onValueChange={(itemValue) => setAccountName(itemValue)}

//                                 >
//                                     <Picker.Item label="High" value="high" style={{ fontSize: 13 }} />
//                                     <Picker.Item label="Option 1" value="option1" style={{ fontSize: 13 }} />
//                                     <Picker.Item label="Option 2" value="option2" style={{ fontSize: 13 }} />
//                                     <Picker.Item label="Option 3" value="option3" style={{ fontSize: 13 }} />
//                                 </Picker>
//                             </View>
//                         </View>
//                     </View>
//                     <View className="flex-1 flex-row mb-2">
//                         <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Type</Text>
//                         <View className="flex-1 h-[2.5vh] border border-1 border-[white] rounded-l-[5] rounded-r-[5] mr-3 flex-row items-center relative">
//                             <View className="flex-1 text-[white]">
//                                 <Picker

//                                     style={{ color: 'white' }} // Picker for dropdown
//                                     dropdownIconColor="white" // Set dropdown icon color
//                                     selectedValue={type}
//                                     onValueChange={(itemValue) => setType(itemValue)}
//                                 >
//                                     <Picker.Item label="None" value="none" style={{ fontSize: 13 }} />
//                                     <Picker.Item label="Option 1" value="option1" style={{ fontSize: 13 }} />
//                                     <Picker.Item label="Option 2" value="option2" style={{ fontSize: 13 }} />
//                                     <Picker.Item label="Option 3" value="option3" style={{ fontSize: 13 }} />
//                                 </Picker>
//                             </View>
//                         </View>
//                     </View>
//                     <View className="flex-1 flex-row mb-3">
//                         <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Next Step</Text>
//                         <TextInput
//                             className="flex-1 h-[2.5vh] border border-1 border-[white] mr-3 rounded-l-[5] rounded-r-[5]"
//                         />
//                     </View>
//                     <View className="flex-1 flex-row items-center mb-1.5">
//                         <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Lead Source</Text>
//                         <View className="flex-1 h-[2.5vh] border border-1 border-[white] rounded-l-[5] rounded-r-[5] mr-3 flex-row items-center relative">
//                             <View className="flex-1 text-[white]">
//                                 <Picker
//                                     style={{ color: 'white' }} // Picker for dropdown
//                                     dropdownIconColor="white" // Set dropdown icon color
//                                     selectedValue={leadSource}
//                                     onValueChange={(itemValue) => setLeadSource(itemValue)}
//                                 >
//                                     <Picker.Item label="None" value="none" style={{ fontSize: 13 }} />
//                                     <Picker.Item label="Option 1" value="option1" style={{ fontSize: 13 }} />
//                                     <Picker.Item label="Option 2" value="option2" style={{ fontSize: 13 }} />
//                                     <Picker.Item label="Option 3" value="option3" style={{ fontSize: 13 }} />
//                                 </Picker>
//                             </View>
//                         </View>
//                     </View>
//                     <View className="flex-1 flex-row mb-2 ">
//                         <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Contact Name</Text>
//                         <TextInput
//                             className="flex-1 h-[2.5vh] border border-1 border-[white] mr-3 rounded-l-[5] rounded-r-[5]"
//                         />
//                     </View>
//                     <View className="flex-1 flex-row mb-2">
//                         <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Amount</Text>
//                         <TextInput
//                             className="flex-1 h-[2.5vh] border border-1 border-[white] text-[white] mr-3 rounded-l-[5] rounded-r-[5]"
//                             placeholder='  $  '
//                         />
//                     </View>
//                     <View className="flex-1 flex-row mb-2">
//                         <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Closing Date</Text>
//                         <TextInput
//                             className="flex-1 h-[2.5vh] border border-1 border-[white] text-[white] mr-3 rounded-l-[5] rounded-r-[5]"
//                             placeholder='  DD/MM/YYYY   '
//                         />
//                     </View>
//                     <View className="flex-1 flex-row mb-2">
//                         <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Stage</Text>
//                         <View className="flex-1 h-[2.5vh] border border-1 border-[white] rounded-l-[5] rounded-r-[5] mr-3 flex-row items-center relative">
//                             <View className="flex-1 text-[white] ">
//                                 <Picker
//                                     style={{ color: 'white' }} // Picker for dropdown
//                                     dropdownIconColor="white" // Set dropdown icon color
//                                     selectedValue={stage}
//                                     onValueChange={(itemValue) => setStage(itemValue)}

//                                 >
//                                     <Picker.Item label="Qualifications" value="qualifications" style={{ fontSize: 13 }} />
//                                     <Picker.Item label="Option 1" value="option1" style={{ fontSize: 13 }} />
//                                     <Picker.Item label="Option 2" value="option2" style={{ fontSize: 13 }} />
//                                     <Picker.Item label="Option 3" value="option3" style={{ fontSize: 13 }} />
//                                 </Picker>
//                             </View>
//                         </View>
//                     </View>
//                     <View className="flex-1 flex-row mb-2">
//                         <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Probability</Text>
//                         <TextInput
//                             className="flex-1 h-[2.5vh] border border-1 border-[white] text-[white] mr-3 rounded-l-[5] rounded-r-[5]"

//                         />
//                     </View>
//                     <View className="flex-1 flex-row mb-2">
//                         <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Expected Revenue</Text>
//                         <TextInput
//                             className="flex-1 h-[2.5vh] border border-1 border-[white] text-[white] mr-3 rounded-l-[5] rounded-r-[5]"

//                         />
//                     </View>
//                     <View className="flex-1 flex-row ">
//                         <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Campaign Source</Text>
//                         <TextInput
//                             className="flex-1 h-[2.5vh] border border-1 border-[white] text-[white] mr-3 rounded-l-[5] rounded-r-[5]"

//                         />
//                     </View>
//                     <Text className="text-[white]  ml-4  mt-10 font-semibold  ">Description Information</Text>
//                     <View className="flex-1 flex-row mt-8">
//                         <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 ">Description</Text>
//                         <TextInput
//                             className="flex-1 h-[2.5vh] border border-1 border-[white] text-[white] mr-3 rounded-l-[5] rounded-r-[5]"

//                         />

//                     </View>
//                     <View className="flex flex-row mt-12 ml-36 mb-8">
//                         <Pressable className="bg-[#ffffff] rounded-l-[5] rounded-r-[5] px-5 py-1.5 shadow-xl" >
//                             <Text className="font-bold text-[black]  ">Cancel</Text>
//                         </Pressable>
//                         <Pressable className=" bg-gray-400 rounded-l-[5] rounded-r-[5] ml-4  px-5 py-1.5 shadow-xl" >
//                             <Text className="font-bold text-[white]">Save</Text>
//                         </Pressable>
//                     </View>
//                 </View>
//                 <StatusBar
//                     backgroundColor="black"
//                     barStyle="light-content"

//                 />
//             </View>

//         </SafeAreaView>
//     );
// }



import { Text, View, TextInput, SafeAreaView, StatusBar, Pressable, KeyboardAvoidingView, Platform, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import "../../global.css"
import React, { useState, createContext } from 'react';
import { Picker } from '@react-native-picker/picker';
import { icons } from '../../constants';
import { Link, useRouter } from 'expo-router';



export default function Dealform() {
    const [leadSource, setLeadSource] = useState(''); // State for Picker
    const [accountName, setAccountName] = useState(''); // State for Picker
    const [stage, setStage] = useState(''); // State for Picker
    const [type, setType] = useState('');

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
                            start={{ x: 0.0, y: 0.25 }}
                            end={{ x: 0.6, y: 1.3 }}
                            locations={[0.0, 0.3, 0.6]}
                            colors={['#000000', '#666666', '#000000']}
                            className="flex-1 justify-center items-center"
                        >
                            <View className="w-[6.1vh] h-[3vh] flex flex-row -ml-96 -mr-8 mb-8 -mt-32 items-center">
                                <TouchableOpacity onPress={() => router.back()}>
                                    <Image
                                        source={icons.backk}
                                        resizeMode='contain'
                                        tintColor="white"
                                        className="w-4 h-4 mr-2"
                                    />
                                </TouchableOpacity>
                                <Text className="text-[white] font-bold">Deals</Text>
                            </View>
                            <View className="w-[47vh] h-[68vh]  flex rounded-[8]  bg-[#FFFFFF26] shadow-[20,20,24,0] shadow-[#00000040]">
                                <Text className="text-[white] flex-1 ml-4 mb-4 mt-3 font-semibold ">Deal Information</Text>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1 text-[white]  h-[2.5vh] pt-1  ml-8  text-[13px]">Deal Owner</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-s text-[white] mr-3 mb-1 rounded-l-[5] rounded-r-[5]"
                                        selectionColor='white'
                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1  text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Deal Name</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-xs text-[white] mr-3 rounded-l-[5] rounded-r-[5]"
                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1  text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Account Name</Text>
                                    <View className="flex-1 h-[2.5vh] border border-1 border-[white] rounded-l-[5] rounded-r-[5] mr-3 flex-row items-center relative">
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
                                    </View>
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Type</Text>
                                    <View className="flex-1 h-[2.5vh] border border-1 border-[white] rounded-l-[5] rounded-r-[5] mr-3 flex-row items-center relative">
                                        <View className="flex-1 text-[white]">
                                            <Picker

                                                style={{ color: 'white' }} // Picker for dropdown
                                                dropdownIconColor="white" // Set dropdown icon color
                                                selectedValue={type}
                                                onValueChange={(itemValue) => setType(itemValue)}
                                            >
                                                <Picker.Item label="None" value="none" style={{ fontSize: 13 }} />
                                                <Picker.Item label="Option 1" value="option1" style={{ fontSize: 13 }} />
                                                <Picker.Item label="Option 2" value="option2" style={{ fontSize: 13 }} />
                                                <Picker.Item label="Option 3" value="option3" style={{ fontSize: 13 }} />
                                            </Picker>
                                        </View>
                                    </View>
                                </View>
                                <View className="flex-1 flex-row mb-3">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Next Step</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-xs text-[white] mr-3 rounded-l-[5] rounded-r-[5]"
                                    />
                                </View>
                                <View className="flex-1 flex-row items-center mb-1.5">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Lead Source</Text>
                                    <View className="flex-1 h-[2.5vh] border border-1 border-[white] rounded-l-[5] rounded-r-[5] mr-3 flex-row items-center relative">
                                        <View className="flex-1 text-[white]">
                                            <Picker
                                                style={{ color: 'white' }} // Picker for dropdown
                                                dropdownIconColor="white" // Set dropdown icon color
                                                selectedValue={leadSource}
                                                onValueChange={(itemValue) => setLeadSource(itemValue)}
                                            >
                                                <Picker.Item label="None" value="none" style={{ fontSize: 13 }} />
                                                <Picker.Item label="Option 1" value="option1" style={{ fontSize: 13 }} />
                                                <Picker.Item label="Option 2" value="option2" style={{ fontSize: 13 }} />
                                                <Picker.Item label="Option 3" value="option3" style={{ fontSize: 13 }} />
                                            </Picker>
                                        </View>
                                    </View>
                                </View>
                                <View className="flex-1 flex-row mb-2 ">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Contact Name</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] mr-3 text-xs text-[white] rounded-l-[5] rounded-r-[5]"
                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Amount</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-xs text-[white] mr-3 rounded-l-[5] rounded-r-[5]"
                                        placeholder='  $  '
                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Closing Date</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-xs text-[white] mr-3 rounded-l-[5] rounded-r-[5]"
                                        placeholder='  DD/MM/YYYY   '
                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Stage</Text>
                                    <View className="flex-1 h-[2.5vh] border border-1 border-[white] rounded-l-[5] rounded-r-[5] mr-3 flex-row items-center relative">
                                        <View className="flex-1 text-[white] ">
                                            <Picker
                                                style={{ color: 'white' }} // Picker for dropdown
                                                dropdownIconColor="white" // Set dropdown icon color
                                                selectedValue={stage}
                                                onValueChange={(itemValue) => setStage(itemValue)}
                                            >
                                                <Picker.Item label="Qualifications" value="qualifications" style={{ fontSize: 13 }} />
                                                <Picker.Item label="Option 1" value="option1" style={{ fontSize: 13 }} />
                                                <Picker.Item label="Option 2" value="option2" style={{ fontSize: 13 }} />
                                                <Picker.Item label="Option 3" value="option3" style={{ fontSize: 13 }} />
                                            </Picker>
                                        </View>
                                    </View>
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Probability</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-[white] mr-3 rounded-l-[5] rounded-r-[5]"
                                    />
                                </View>
                                <View className="flex-1 flex-row mb-2">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Expected Revenue</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-[white] mr-3 rounded-l-[5] rounded-r-[5]"

                                    />
                                </View>
                                <View className="flex-1 flex-row ">
                                    <Text className="flex-1 text-[center] text-[white] h-[2.5vh] pt-1 ml-8 text-[13px]">Campaign Source</Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border border-1 border-[white] text-[white] mr-3 rounded-l-[5] rounded-r-[5]"

                                    />
                                </View>
                                <Text className="text-[white]  ml-4  mt-10 font-semibold  ">Description Information</Text>
                                <View className="flex-1 flex-row mt-8">
                                    <Text className="flex-none text-[center] text-[white] h-[2.5vh] pt-1 ml-8" style={{ width: '25%' }}>
                                        Description
                                    </Text>
                                    <TextInput
                                        className="flex-1 h-[2.5vh] border w-[60vh]  border-1 border-[white] text-[white] mr-3 rounded-l-[5] rounded-r-[5]"


                                    />
                                </View>

                                <View className="flex flex-row mt-12 ml-36 mb-8">
                                    <Pressable className="bg-[#ffffff] rounded-l-[5] rounded-r-[5] px-5 py-1.5 shadow-xl" onPress={() => { router.back() }}>
                                        <Text className="font-bold text-[black]  ">Cancel</Text>
                                    </Pressable>
                                    <Pressable className=" bg-[#D9D9D967] rounded-l-[5] rounded-r-[5] ml-4  px-5 py-1.5 shadow-xl shadow-[#00000040];"
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