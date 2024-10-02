
import { Text, View, TextInput, SafeAreaView, StatusBar, Pressable, Image, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import "../../global.css"
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { icons } from '../../constants';
import { TouchableOpacity } from 'react-native';
import { Modal } from 'react-native';


export default function Contacts() {
    const router = useRouter();
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <>
            <SafeAreaView className="flex-1">
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <View className="flex-1 justify-center ">
                    <LinearGradient
                        start={{ x: 0.0, y: 0.25 }}
                        end={{ x: 0.6, y: 1.3 }}
                        locations={[0.0, 0.3, 0.6]}
                        colors={['#000000', '#666666', '#000000']}
                        className="flex-1 justify-center items-center"
                    >
                        <View className="w-[25.2vh] h-[3.2vh]  border border-1 rounded-[32] p-px py-px  bg-[#FFFFFF17] border-[#00000021]">
                            <Text className="text-center text-xs  mt-1 text-[white]">Search Contacts</Text>
                        </View>
                        <View className="flex flex-0 flex-row mb-8 mt-4">
                            <Image
                                source={icons.menu}
                                resizeMode='contain'
                                className="w-[2.4vh] h-[2.4vh] -ml-8 "
                                tintColor='white'
                            />

                            <Image
                                source={icons.plus}
                                resizeMode='contain'
                                className="w-[2.1vh] h-[2.1vh]  ml-80 mr-2"
                                tintColor='white'

                            />

                            <Image
                                source={icons.dots}
                                resizeMode='contain'
                                className="w-[2.3vh] h-[2.3vh]  -mr-12 ml-4"
                                tintColor='white'
                            />
                        </View>
                        <View className="w-[47.6vh] h-[4.5vh] bg-[#3E3E3E] mb-2 shadow-[20, 20, 24, 0] rounded-[8] shadow-[#00000040] flex-row items-center justify-between px-4">
                            <View className="flex flex-1 items-start ">
                                <Image
                                    source={icons.upanddownarrow}
                                    resizeMode='contain'
                                    className="w-[2.5vh] h-[2.5vh]"
                                    tintColor='white'
                                />
                            </View>
                            <View className="flex flex-1 items-center">
                                <Text className="text-center text-[white] text-xs">All Contacts</Text>

                                {/* Modal for contact views */}
                                <Modal
                                    animationType="none"
                                    transparent={true}
                                    visible={modalVisible}
                                    onRequestClose={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                        {/* Up Arrow */}
                                        <Image
                                            source={icons.uparrow}
                                            resizeMode="contain"
                                            className="w-3.5 h-4 ml-56 mt-36 mb-5"
                                            tintColor="white"
                                        />
                                        {/* Modal Content */}
                                        <View className="w-[46.2vh] ml-2 rounded-[8] h-[66.4vh] bg-[#D9D9D926] shadow shadow-[24] shadow-[#00000040]">
                                            <View className="w-[46.3vh] h-[3.2vh] bg-[#3E3E3E] border border-[#80808030]" />
                                            <View className="w-[46.3vh] h-[6.5vh] bg-[#3E3E3E] border border-[#80808030]">
                                                <Text className="text-[white] font-bold mt-4 ml-4">Public View</Text>
                                            </View>
                                            <View className="w-[46.3vh] h-[6.5vh] bg-[#3E3E3E] border border-[#80808030]">
                                                <Text className="text-[white] font-bold mt-4 ml-4">All Contacts</Text>
                                            </View>
                                            <View className="w-[46.3vh] h-[6.5vh] bg-[#3E3E3E] border border-[#80808030]">
                                                <Text className="text-[white] font-bold mt-4 ml-4">All Locked Contacts</Text>
                                            </View>
                                            <View className="w-[46.3vh] h-[6.5vh] bg-[#3E3E3E] border border-[#80808030]">
                                                <Text className="text-[white] font-bold mt-4 ml-4">Mailing Labels</Text>
                                            </View>
                                            <View className="w-[46.3vh] h-[6.5vh] bg-[#3E3E3E] border border-[#80808030]">
                                                <Text className="text-[white] font-bold mt-4 ml-4">My Contacts</Text>
                                            </View>
                                            <View className="w-[46.3vh] h-[6.3vh] bg-[#3E3E3E] border border-[#80808030]">
                                                <Text className="text-[white] font-bold mt-4 ml-4">New Last Week</Text>
                                            </View>
                                            <View className="w-[46.3vh] h-[6.3vh] bg-[#3E3E3E] border border-[#80808030]">
                                                <Text className="text-[white] font-bold mt-4 ml-4">New This Week</Text>
                                            </View>
                                            <View className="w-[46.3vh] h-[6.3vh] bg-[#3E3E3E] border border-[#80808030]">
                                                <Text className="text-[white] font-bold mt-4 ml-4">Recently Created Contacts</Text>
                                            </View>
                                            <View className="w-[46.3vh] h-[6.4vh] bg-[#3E3E3E] border border-[#80808030]">
                                                <Text className="text-[white] font-bold mt-4 ml-4">Recently Modified Contacts</Text>
                                            </View>
                                            <View className="w-[46.3vh] h-[6.2vh] bg-[#3E3E3E] border border-[#80808030]">
                                                <Text className="text-[white] font-bold mt-4 ml-4">Unread Contacts</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </Modal>

                                {/* Down Arrow only visible when modal is closed */}
                                {!modalVisible && (
                                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                                        <Image
                                            source={icons.downarrow}
                                            resizeMode="contain"
                                            className="w-5 h-5"
                                            tintColor="white"
                                        />
                                    </TouchableOpacity>
                                )}
                            </View>
                            <View className="flex flex-1 items-end">
                                <Image
                                    source={icons.book}
                                    resizeMode='contain'
                                    className="w-[2.5vh] h-[2.5vh]"
                                    tintColor='white'
                                />
                            </View>
                        </View>
                        <View className="w-[46.5vh] h-[72vh] -mb-12 rounded-[8] bg-[#D9D9D926] shadow-[0,4, 4, 0] shadow-[#00000040]">
                            <TouchableOpacity onPress={() => { router.push('/navigators/Dealdata?view=qualifications') }}>
                                <View className="w-[46.5vh] h-[6.5vh] border border-1 border-[#00000008] px-2 py-4 flex-row items-center justify-between">
                                    <View>
                                        <Text className="text-[white] mb-1 font-bold">Kris Marrier (Sample)</Text>
                                        <Text className="text-[white]">King (Sample)</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => { router.push('/navigators/Dealform') }}>
                                        <Image
                                            source={icons.edit}
                                            resizeMode='contain'
                                            className="w-[1.4vh] h-[1.4vh]"
                                            tintColor='white'
                                        />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { router.push('/navigators/Dealdata?view=needs-analysis') }}>
                                <View className="w-[46.5vh] h-[6.5vh] border border-1 border-[#00000008] px-2 py-4 flex-row items-center justify-between">
                                    <View>
                                        <Text className="text-[white] mb-1 font-bold">Sage Wieser (Sample)</Text>
                                        <Text className="text-[white]">Truhlar and Truhlar (Sample)</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => { router.push('/navigators/Dealform') }}>
                                        <Image
                                            source={icons.edit}
                                            resizeMode='contain'
                                            className="w-[1.4vh] h-[1.4vh]"
                                            tintColor='white'
                                        />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { router.push('/navigators/Dealdata?view=value-proposition') }}>
                                <View className="w-[46.5vh] h-[6.5vh] border border-1 border-[#00000008] px-2 py-4 flex-row items-center justify-between">
                                    <View>
                                        <Text className="text-[white] mb-1 font-bold">Leota Diliard (Sample)</Text>
                                        <Text className="text-[white]">Commercial Press(Sample)</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => { router.push('/navigators/Dealform') }}>
                                        <Image
                                            source={icons.edit}
                                            resizeMode='contain'
                                            className="w-[1.4vh] h-[1.4vh]"
                                            tintColor='white'
                                        />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { router.push('/navigators/Dealdata?view=identifythemakers') }}>
                                <View className="w-[46.5vh] h-[6.5vh] border border-1 border-[#00000008] px-2 py-4 flex-row items-center justify-between">
                                    <View>
                                        <Text className="text-[white] mb-1 font-bold">Mitsue Tollner (Sample)</Text>
                                        <Text className="text-[white]">Morlong Associates (Sample)</Text>
                                    </View>

                                    <TouchableOpacity onPress={() => { router.push('/navigators/Dealform') }}>
                                        <Image
                                            source={icons.edit}
                                            resizeMode='contain'
                                            className="w-[1.4vh] h-[1.4vh]"
                                            tintColor='white'
                                        />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { router.push('/navigators/Dealdata?view=proposalpricing') }}>
                                <View className="w-[46.5vh] h-[6.5vh] border border-1 border-[#00000008] px-2 py-4 flex-row items-center justify-between">
                                    <View>
                                        <Text className="text-[white] mb-1 font-bold">Simon Morasca (Sample)</Text>
                                        <Text className="text-[white]">Chapman (Sample)</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => { router.push('/navigators/Dealform') }}>
                                        <Image
                                            source={icons.edit}
                                            resizeMode='contain'
                                            className="w-[1.4vh] h-[1.4vh]"
                                            tintColor='white'
                                        />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { router.push('/navigators/Dealdata?view=proposalpricing') }}>
                                <View className="w-[46.5vh] h-[6.2vh] border border-1 border-[#00000008] px-2 py-4 flex-row items-center justify-between">
                                    <View>
                                        <Text className="text-[white] mb-1 font-bold">Donette Foller (Sample)</Text>
                                        <Text className="text-[white]">Printing Dimensions (Sample)</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => { router.push('/navigators/Dealform') }}>
                                        <Image
                                            source={icons.edit}
                                            resizeMode='contain'
                                            className="w-[1.4vh] h-[1.4vh]"
                                            tintColor='white'
                                        />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { router.push('/navigators/Dealdata?view=proposalpricing') }}>
                                <View className="w-[46.5vh] h-[6.2vh] border border-1 border-[#00000008] px-2 py-4 flex-row items-center justify-between">
                                    <View>
                                        <Text className="text-[white] mb-1 font-bold">Capla Paprocki (Sample)</Text>
                                        <Text className="text-[white]">Feltz Printing Services (Sample)</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => { router.push('/navigators/Dealform') }}>
                                        <Image
                                            source={icons.edit}
                                            resizeMode='contain'
                                            className="w-[1.4vh] h-[1.4vh]"
                                            tintColor='white'
                                        />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { router.push('/navigators/Dealdata?view=proposalpricing') }}>
                                <View className="w-[46.5vh] h-[6.2vh] border border-1 border-[#00000008] px-2 py-4 flex-row items-center justify-between">
                                    <View>
                                        <Text className="text-[white] mb-1 font-bold">Machael Ruta (Sample)</Text>
                                        <Text className="text-[white]">Christopher machlead (Sample)</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => { router.push('/navigators/Dealform') }}>
                                        <Image
                                            source={icons.edit}
                                            resizeMode='contain'
                                            className="w-[1.4vh] h-[1.4vh]"
                                            tintColor='white'
                                        />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { router.push('/navigators/Dealdata?view=proposalpricing') }}>
                                <View className="w-[46.5vh] h-[6.2vh] border border-1 border-[#00000008] px-2 py-4 flex-row items-center justify-between">
                                    <View>
                                        <Text className="text-[white] mb-1 font-bold">Theola Frey (Sample)</Text>
                                        <Text className="text-[white]">Christopher machlead (Sample)</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => { router.push('/navigators/Dealform') }}>
                                        <Image
                                            source={icons.edit}
                                            resizeMode='contain'
                                            className="w-[1.4vh] h-[1.4vh]"
                                            tintColor='white'
                                        />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { router.push('/navigators/Dealdata?view=proposalpricing') }}>
                                <View className="w-[46.5vh] h-[6.2vh] border border-1 border-[#00000008] px-2 py-4 flex-row items-center justify-between">
                                    <View>
                                        <Text className="text-[white] mb-1 font-bold">Jesica Fernado (Sample)</Text>
                                        <Text className="text-[white]">Christopher machlead (Sample)</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => { router.push('/navigators/Dealform') }}>
                                        <Image
                                            source={icons.edit}
                                            resizeMode='contain'
                                            className="w-[1.4vh] h-[1.4vh]"
                                            tintColor='white'
                                        />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>


                            <View className=" flex  flex-row w-[4vh] h-[2vh] ml-80 items-center mt-12">
                                <TouchableOpacity onPress={() => { router.push('/home') }}>
                                    <Image
                                        source={icons.back}
                                        resizeMode='contain'
                                        className="w-[1.2vh] h-[1.2vh] mr-2"
                                        tintColor='white'
                                    />
                                </TouchableOpacity>
                                <Text className="text-[white] font-bold text-xs">Back</Text>
                            </View>

                        </View>

                    </LinearGradient>
                </View >
            </SafeAreaView >
        </>
    );
}


