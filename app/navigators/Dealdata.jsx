import React from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { icons } from '../../constants';

const Dealdata = () => {
    const { view } = useLocalSearchParams();
    const router = useRouter();

    const renderContent = () => {
        if (view === 'qualifications') {
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
                                className="flex-1 justify-center items-center  px-64 "
                            >
                                <View className="w-[14vh] h-[4vh] flex flex-row  items-center mb-4 mt-40 -ml-72">
                                    <TouchableOpacity onPress={() => { router.push('deals') }}>
                                        <Image
                                            source={icons.backk}
                                            resizeMode='contain'
                                            tintColor="white"
                                            className="w-4 h-4 mr-2 "
                                        />
                                    </TouchableOpacity>
                                    <Text className="text-[white] text-center ml-1 font-bold">Qualifications</Text>
                                </View>
                                <View className="">


                                    <View className="w-[47vh] h-[14vh] bg-[#D9D9D926] rounded-[8] mb-72">
                                        <Text className="text-[white] px-4 pt-2 pb-1 font-bold ">Benet</Text>
                                        <View className="w-[15.7vh] h-[7vh] ml-4 mb-4 ">
                                            <Text className="text-[white] text-xs">
                                                Benet(Sample)
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                Dain Mathi
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                Ains Own Goul (Sample)
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                $250,000.00
                                            </Text>
                                            <View className="flex flex-row justify-between">
                                                <Text className="text-[red] text-xs mt-2">
                                                    03/07/2024
                                                </Text>
                                                <Image
                                                    source={icons.calendar}
                                                    resizeMode='contain'
                                                    tintColor='red'
                                                    className="w-3.5 h-3.5 ml-80 mt-2"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View className=" flex  flex-row w-[4vh] h-[2vh] ml-96 mt-96  items-center ">
                                        <TouchableOpacity onPress={() => { router.push('/(tabs)/home') }}>
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
                        </View>
                    </SafeAreaView>
                </>
            );

        } else if (view === 'needs-analysis') {
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
                                className="flex-1 justify-center items-center  px-64 "
                            >
                                <View className="w-[14vh] h-[4vh] flex flex-row  items-center mb-4 mt-40 -ml-72">
                                    <TouchableOpacity onPress={() => { router.push('deals') }}>
                                        <Image
                                            source={icons.backk}
                                            resizeMode='contain'
                                            tintColor="white"
                                            className="w-4 h-4 mr-2 "
                                        />
                                    </TouchableOpacity>
                                    <Text className="text-[white] text-center ml-1 font-bold">Needs Analysis</Text>
                                </View>
                                <View className="">
                                    <View className="w-[47vh] h-[14vh] bg-[#D9D9D926] rounded-[8] mb-4">
                                        <Text className="text-[white] px-4 pt-2 pb-1 font-bold ">Tushar and Tosty Attys</Text>
                                        <View className="w-[24vh] h-[7vh] ml-4 mb-4 ">
                                            <Text className="text-[white] text-xs">
                                                Tushar and Tosty Attys(Sample)
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                Dain Mathi
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                Van Halsing (Sample)
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                $45,000.00
                                            </Text>
                                            <View className="flex flex-row justify-between">
                                                <Text className="text-[red] text-xs mt-2">
                                                    03/07/2024
                                                </Text>
                                                <Image
                                                    source={icons.calendar}
                                                    resizeMode='contain'
                                                    tintColor='red'
                                                    className="w-3.5 h-3.5 ml-80 mt-2"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View className="w-[47vh] h-[14vh] bg-[#D9D9D926] rounded-[8] mb-32">
                                        <Text className="text-[white] px-4 pt-2 pb-1 font-bold ">Chansey</Text>
                                        <View className="w-[24vh] h-[7vh] ml-4 mb-4 ">
                                            <Text className="text-[white] text-xs">
                                                Chansey(Sample)
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                Dain Mathi
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                Joy Brock (Sample)
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                $55,000.00
                                            </Text>
                                            <View className="flex flex-row justify-between">
                                                <Text className="text-[red] text-xs mt-2">
                                                    04/07/2024
                                                </Text>
                                                <Image
                                                    source={icons.calendar}
                                                    resizeMode='contain'
                                                    tintColor='red'
                                                    className="w-3.5 h-3.5 ml-80 mt-2"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View className=" flex  flex-row w-[4vh] h-[2vh] ml-96 mt-96  items-center ">
                                        <TouchableOpacity onPress={() => { router.push('/(tabs)/home') }}>
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
                        </View>
                    </SafeAreaView>
                </>
            );
        } else if (view === 'value-proposition') {
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
                                className="flex-1 justify-center items-center  px-64 "
                            >
                                <View className="w-[24vh] h-[4vh] flex flex-row  items-center mb-4  -ml-52">
                                    <TouchableOpacity onPress={() => { router.push('deals') }}>
                                        <Image
                                            source={icons.backk}
                                            resizeMode='contain'
                                            tintColor="white"
                                            className="w-4 h-4 mr-2 "
                                        />
                                    </TouchableOpacity>
                                    <Text className="text-[white] text-center ml-1 font-bold">Value Proposition</Text>
                                </View>
                                <View className="">


                                    <View className="w-[47vh] h-[14vh] bg-[#D9D9D926] rounded-[8] mb-72">
                                        <Text className="text-[white] px-4 pt-2 pb-1 font-bold ">Jonathan</Text>
                                        <View className="w-[15.7vh] h-[7vh] ml-4 mb-4 ">
                                            <Text className="text-[white] text-xs">
                                                Jonathan(Sample)
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                Dave Dutta
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                GodL eSports (Sample)
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                $70,000.00
                                            </Text>
                                            <View className="flex flex-row justify-between">
                                                <Text className="text-[red] text-xs mt-2">
                                                    03/07/2024
                                                </Text>
                                                <Image
                                                    source={icons.calendar}
                                                    resizeMode='contain'
                                                    tintColor='red'
                                                    className="w-3.5 h-3.5 ml-80 mt-2"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View className=" flex  flex-row w-[4vh] h-[2vh] ml-96 mt-96  items-center ">
                                        <TouchableOpacity onPress={() => { router.push('/(tabs)/home') }}>
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
                        </View>
                    </SafeAreaView>
                </>
            );
        } else if (view === 'identifythemarkers') {
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
                                className="flex-1 justify-center items-center  px-64 "
                            >
                                <View className="w-[24vh] h-[4vh] flex flex-row  items-center mb-4 -ml-52">
                                    <TouchableOpacity onPress={() => { router.push('deals') }}>
                                        <Image
                                            source={icons.backk}
                                            resizeMode='contain'
                                            tintColor="white"
                                            className="w-4 h-4 mr-2 "
                                        />
                                    </TouchableOpacity>
                                    <Text className="text-[white] text-center ml-1 font-bold">Identify the Marker</Text>
                                </View>
                                <View className="">


                                    <View className="w-[47vh] h-[14vh] bg-[#D9D9D926] rounded-[8] mb-4">
                                        <Text className="text-[white] px-4 pt-2 pb-1 font-bold ">Eagle</Text>
                                        <View className="w-[15.7vh] h-[7vh] ml-4 mb-4 ">
                                            <Text className="text-[white] text-xs">
                                                Eagle(Sample)
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                Dain Mathi
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                Ains Own Goul (Sample)
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                $250,000.00
                                            </Text>
                                            <View className="flex flex-row justify-between">
                                                <Text className="text-[red] text-xs mt-2">
                                                    03/07/2024
                                                </Text>
                                                <Image
                                                    source={icons.calendar}
                                                    resizeMode='contain'
                                                    tintColor='red'
                                                    className="w-3.5 h-3.5 ml-80 mt-2"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View className="w-[47vh] h-[14vh] bg-[#D9D9D926] rounded-[8] mb-32">
                                        <Text className="text-[white] px-4 pt-2 pb-1 font-bold ">Chansey</Text>
                                        <View className="w-[24vh] h-[7vh] ml-4 mb-4 ">
                                            <Text className="text-[white] text-xs">
                                                Chansey(Sample)
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                Dain Mathi
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                Joy Brock (Sample)
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                $55,000.00
                                            </Text>
                                            <View className="flex flex-row justify-between">
                                                <Text className="text-[red] text-xs mt-2">
                                                    04/07/2024
                                                </Text>
                                                <Image
                                                    source={icons.calendar}
                                                    resizeMode='contain'
                                                    tintColor='red'
                                                    className="w-3.5 h-3.5 ml-80 mt-2"
                                                />
                                            </View>
                                        </View>
                                    </View>

                                    <View className=" flex  flex-row w-[4vh] h-[2vh] ml-96 mt-96  items-center ">
                                        <TouchableOpacity onPress={() => { router.push('/(tabs)/home') }}>
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
                        </View>
                    </SafeAreaView>
                </>
            );
        } else if (view === 'proposalpricing') {
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
                                className="flex-1 justify-center items-center  px-64 "
                            >
                                <View className="w-[14vh] h-[4vh] flex flex-row  items-center mb-4 mt-40 -ml-72">
                                    <TouchableOpacity onPress={() => { router.push('deals') }}>
                                        <Image
                                            source={icons.backk}
                                            resizeMode='contain'
                                            tintColor="white"
                                            className="w-4 h-4 mr-2 "
                                        />
                                    </TouchableOpacity>
                                    <Text className="text-[white] text-center ml-1 font-bold">Proposal/Pricing</Text>
                                </View>
                                <View className="">
                                    <View className="w-[47vh] h-[14vh] bg-[#D9D9D926] rounded-[8] mb-4">
                                        <Text className="text-[white] px-4 pt-2 pb-1 font-bold ">Zhyrx</Text>
                                        <View className="w-[15.7vh] h-[7vh] ml-4 mb-4 ">
                                            <Text className="text-[white] text-xs">
                                                Zhyrx(Sample)
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                Soul Regaltos
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                Sayip OP (Sample)
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                $60,000.00
                                            </Text>
                                            <View className="flex flex-row justify-between">
                                                <Text className="text-[red] text-xs mt-2">
                                                    05/07/2024
                                                </Text>
                                                <Image
                                                    source={icons.calendar}
                                                    resizeMode='contain'
                                                    tintColor='red'
                                                    className="w-3.5 h-3.5 ml-80 mt-2"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View className="w-[47vh] h-[14vh] bg-[#D9D9D926] rounded-[8] mb-32">
                                        <Text className="text-[white] px-4 pt-2 pb-1 font-bold ">Chansey</Text>
                                        <View className="w-[24vh] h-[7vh] ml-4 mb-4 ">
                                            <Text className="text-[white] text-xs">
                                                Chansey(Sample)
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                Dain Mathi
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                Joy Brock (Sample)
                                            </Text>
                                            <Text className="text-[white] text-xs">
                                                $55,000.00
                                            </Text>
                                            <View className="flex flex-row justify-between">
                                                <Text className="text-[red] text-xs mt-2">
                                                    04/07/2024
                                                </Text>
                                                <Image
                                                    source={icons.calendar}
                                                    resizeMode='contain'
                                                    tintColor='red'
                                                    className="w-3.5 h-3.5 ml-80 mt-2"
                                                />
                                            </View>
                                        </View>
                                    </View>

                                    <View className=" flex  flex-row w-[4vh] h-[2vh] ml-96 mt-96  items-center ">
                                        <TouchableOpacity onPress={() => { router.push('/(tabs)/home') }}>
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
                        </View>
                    </SafeAreaView>
                </>
            );
        }
        return <Text className="text-xl">No view selected</Text>;
    };

    return (
        <View className="flex-1 justify-center items-center bg-gray-200">
            {renderContent()}
        </View>
    );
};

export default Dealdata;
