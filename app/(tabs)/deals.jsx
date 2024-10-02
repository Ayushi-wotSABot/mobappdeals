
import { Text, View, TextInput, SafeAreaView, StatusBar, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';  // Import useState for managing search term
import { useRouter } from 'expo-router';
import { icons } from '../../constants';
import { TouchableOpacity } from 'react-native';


export default function App() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState(''); // State for the search term
    const [isAscending, setIsAscending] = useState(true); // State to track sorting order (ascending or descending)

    // Mock deals data with correct route names
    const deals = [
        { id: 1, title: 'Qualifications', view: 'qualifications', amount: '$250,000.00', sno: '1' },
        { id: 2, title: 'Needs Analysis', view: 'needs-analysis', amount: '$100,000.00', sno: '2' },
        { id: 3, title: 'Value Proposition', view: 'value-proposition', amount: '$70,000.00', sno: '1' },
        { id: 4, title: 'Identify The Markers', view: 'identifythemarkers', amount: '$105,000.00', sno: '2' },
        { id: 5, title: 'Proposal/Pricing', view: 'proposalpricing', amount: '$25,000.00', sno: '1' },
    ];

    // Function to filter deals based on the search term
    const filteredDeals = deals.filter(deal =>
        deal.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Function to sort deals based on title
    const sortDealsByTitle = () => {
        const sortedDeals = [...filteredDeals].sort((a, b) => {
            if (isAscending) {
                return a.title.localeCompare(b.title); // Ascending order
            } else {
                return b.title.localeCompare(a.title); // Descending order
            }
        });
        return sortedDeals;
    };

    // Get the sorted deals list
    const sortedDeals = sortDealsByTitle();

    return (
        <>
            <SafeAreaView className="flex-1">
                <StatusBar backgroundColor="black" barStyle="light-content" />

                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View className="flex-1 justify-center">
                            <LinearGradient
                                start={{ x: 0.0, y: 0.25 }}
                                end={{ x: 0.6, y: 1.3 }}
                                locations={[0.0, 0.3, 0.6]}
                                colors={['#000000', '#666666', '#000000']}
                                className="flex-1 justify-center items-center"
                            >
                                {/* Search Deals Bar */}
                                <View className="w-[25.2vh] h-[3.2vh] mt-12 border border-1 rounded-[32] p-px py-px bg-[#FFFFFF17] border-[#00000021]">
                                    <TextInput
                                        placeholder="Search Deals"
                                        placeholderTextColor="#CCCCCC"
                                        value={searchTerm}
                                        onChangeText={setSearchTerm} // Update the search term state on input change
                                        className="text-center text-xs text-[white]"
                                        cursorColor='white'

                                    />
                                </View>

                                {/* Header Menu */}
                                <View className="flex flex-0 flex-row mb-8 mt-4">
                                    <Image
                                        source={icons.menu}
                                        resizeMode="contain"
                                        className="w-[2.4vh] h-[2.4vh] -ml-8"
                                        tintColor="white"
                                    />
                                    <TouchableOpacity onPress={() => router.push('/navigators/Dealform')}>
                                        <Image
                                            source={icons.plus}
                                            resizeMode="contain"
                                            className="w-[2.1vh] h-[2.1vh] ml-80 mr-2"
                                            tintColor="white"
                                        />
                                    </TouchableOpacity>
                                    <Image
                                        source={icons.dots}
                                        resizeMode="contain"
                                        className="w-[2.3vh] h-[2.3vh] -mr-12 ml-4"
                                        tintColor="white"
                                    />
                                </View>

                                {/* Sorting Section */}
                                <View className="w-[47.6vh] h-[4.5vh] bg-[#3E3E3E] mb-2 shadow-[20, 20, 24, 0] rounded-[8] shadow-[#00000040] flex-row items-center justify-between px-4">
                                    <View className="flex flex-1 items-start">
                                        <TouchableOpacity onPress={() => setIsAscending(!isAscending)}>
                                            <Image
                                                source={icons.upanddownarrow}
                                                resizeMode='contain'
                                                className="w-[2.5vh] h-[2.5vh]"
                                                tintColor='white'
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View className="flex flex-1 items-center">
                                        <Text className="text-center text-[white] text-xs">All Deals</Text>
                                        <Image
                                            source={icons.downarrow}
                                            resizeMode='contain'
                                            className="w-5 h-5"
                                            tintColor='white'
                                        />
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

                                {/* Filtered and Sorted Deals List */}
                                <View className="w-[46.5vh] h-[72vh]  rounded-[8] bg-[#D9D9D926] shadow-[0,4,4,0] shadow-[#00000040]">
                                    {sortedDeals.map(deal => (
                                        <TouchableOpacity
                                            key={deal.id}
                                            onPress={() => {
                                                // Correctly route to the proper deal view
                                                router.push(`/navigators/Dealdata?view=${deal.view}`);
                                            }}
                                        >
                                            <View className="w-[46.5vh] h-[8vh] border border-1 border-[#00000008] px-2 py-4 flex-row items-center justify-between">
                                                <View>
                                                    <Text className="text-[white] mb-1 font-bold">{deal.title}   .   {deal.sno}</Text>
                                                    <Text className="text-[white]">{deal.amount}</Text>
                                                </View>
                                                <TouchableOpacity onPress={() => { router.push('/navigators/Dealform') }}>
                                                    <Image
                                                        source={icons.edit}
                                                        resizeMode="contain"
                                                        className="w-[1.4vh] h-[1.4vh]"
                                                        tintColor="white"
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                    {/* If no deals match the search term */}
                                    {sortedDeals.length === 0 && (
                                        <Text className="text-center text-[white] mt-4">No Deals Found</Text>
                                    )}
                                    {/* Back Button */}
                                    <View className="flex flex-row w-[4vh] h-[2vh] ml-80 mt-64 items-center ">
                                        <TouchableOpacity onPress={() => { router.push('/home') }}>
                                            <Image
                                                source={icons.back}
                                                resizeMode="contain"
                                                className="w-[1.2vh] h-[1.2vh] mr-2"
                                                tintColor="white"
                                            />
                                        </TouchableOpacity>
                                        <Text className="text-[white] font-bold text-xs">Back</Text>
                                    </View>
                                </View>

                            </LinearGradient>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    );
}





// import { Text, View, TextInput, SafeAreaView, StatusBar, Pressable, Image } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import "../../global.css"
// import React from 'react';
// import { useRouter } from 'expo-router';
// import { icons } from '../../constants';
// import { TouchableOpacity } from 'react-native';

// export default function App() {
//     const router = useRouter();

//     return (
//         <>
//             <SafeAreaView className="flex-1">
//                 <StatusBar backgroundColor="black" barStyle="light-content" />
//                 <View className="flex-1 justify-center ">
//                     <LinearGradient
//                         start={{ x: 0.0, y: 0.25 }}
//                         end={{ x: 0.6, y: 1.3 }}
//                         locations={[0.0, 0.3, 0.6]}
//                         colors={['#000000', '#666666', '#000000']}
//                         className="flex-1 justify-center items-center"
//                     >
//                         <View className="w-[25.2vh] h-[3.2vh]  border border-1 rounded-[32] p-px py-px  bg-[#FFFFFF17] border-[#00000021]">
//                             <Text className="text-center text-xs  mt-1 text-[white]">Search Deals</Text>
//                         </View>
//                         <View className="flex flex-0 flex-row mb-8 mt-4">
//                             <Image
//                                 source={icons.menu}
//                                 resizeMode='contain'
//                                 className="w-[2.4vh] h-[2.4vh] -ml-8 "
//                                 tintColor='white'
//                             />
//                             <TouchableOpacity onPress={() => router.push('/navigators/Dealform')} >
//                                 <Image
//                                     source={icons.plus}
//                                     resizeMode='contain'
//                                     className="w-[2.1vh] h-[2.1vh]  ml-80 mr-2"
//                                     tintColor='white'

//                                 />
//                             </TouchableOpacity>
//                             <Image
//                                 source={icons.dots}
//                                 resizeMode='contain'
//                                 className="w-[2.3vh] h-[2.3vh]  -mr-12 ml-4"
//                                 tintColor='white'
//                             />
//                         </View>
//                         <View className="w-[47.6vh] h-[4.5vh] bg-[#3E3E3E] mb-2 shadow-[20, 20, 24, 0] rounded-[8] shadow-[#00000040] flex-row items-center justify-between px-4">
//                             <View className="flex flex-1 items-start ">
//                                 <Image
//                                     source={icons.upanddownarrow}
//                                     resizeMode='contain'
//                                     className="w-[2.5vh] h-[2.5vh]"
//                                     tintColor='white'
//                                 />
//                             </View>
//                             <View className="flex flex-1 items-center">
//                                 <Text className="text-center text-[white] text-xs">All Deals</Text>
//                                 <Image
//                                     source={icons.downarrow}
//                                     resizeMode='contain'
//                                     className="w-5 h-5 "
//                                     tintColor='white'
//                                 />
//                             </View>
//                             <View className="flex flex-1 items-end">
//                                 <Image
//                                     source={icons.book}
//                                     resizeMode='contain'
//                                     className="w-[2.5vh] h-[2.5vh]"
//                                     tintColor='white'
//                                 />
//                             </View>
//                         </View>
//                         <View className="w-[46.5vh] h-[72vh] -mb-12 rounded-[8] bg-[#D9D9D926] shadow-[0,4, 4, 0] shadow-[#00000040]">
//                             <TouchableOpacity onPress={() => { router.push('/navigators/Dealdata?view=qualifications') }}>
//                                 <View className="w-[46.5vh] h-[8vh] border border-1 border-[#00000008] px-2 py-4 flex-row items-center justify-between">
//                                     <View>
//                                         <Text className="text-[white] mb-1 font-bold">Qualification   .   1</Text>
//                                         <Text className="text-[white]">$250,000.00</Text>
//                                     </View>
//                                     <TouchableOpacity onPress={() => { router.push('/navigators/Dealform') }}>
//                                         <Image
//                                             source={icons.edit}
//                                             resizeMode='contain'
//                                             className="w-[1.4vh] h-[1.4vh]"
//                                             tintColor='white'
//                                         />
//                                     </TouchableOpacity>
//                                 </View>
//                             </TouchableOpacity>
//                             <TouchableOpacity onPress={() => { router.push('/navigators/Dealdata?view=needs-analysis') }}>
//                                 <View className="w-[46.5vh] h-[8vh] border border-1 border-[#00000008] px-2 py-4 flex-row items-center justify-between">
//                                     <View>
//                                         <Text className="text-[white] mb-1 font-bold">Needs Analysis   .   2</Text>
//                                         <Text className="text-[white]">$100,000.00</Text>
//                                     </View>
//                                     <TouchableOpacity onPress={() => { router.push('/navigators/Dealform') }}>
//                                         <Image
//                                             source={icons.edit}
//                                             resizeMode='contain'
//                                             className="w-[1.4vh] h-[1.4vh]"
//                                             tintColor='white'
//                                         />
//                                     </TouchableOpacity>
//                                 </View>
//                             </TouchableOpacity>
//                             <TouchableOpacity onPress={() => { router.push('/navigators/Dealdata?view=value-proposition') }}>
//                                 <View className="w-[46.5vh] h-[8vh] border border-1 border-[#00000008] px-2 py-4 flex-row items-center justify-between">
//                                     <View>
//                                         <Text className="text-[white] mb-1 font-bold">Value Proposition   .   1</Text>
//                                         <Text className="text-[white]">$70,000.00</Text>
//                                     </View>
//                                     <TouchableOpacity onPress={() => { router.push('/navigators/Dealform') }}>
//                                         <Image
//                                             source={icons.edit}
//                                             resizeMode='contain'
//                                             className="w-[1.4vh] h-[1.4vh]"
//                                             tintColor='white'
//                                         />
//                                     </TouchableOpacity>
//                                 </View>
//                             </TouchableOpacity>
//                             <TouchableOpacity onPress={() => { router.push('/navigators/Dealdata?view=identifythemakers') }}>
//                                 <View className="w-[46.5vh] h-[8vh] border border-1 border-[#00000008] px-2 py-4 flex-row items-center justify-between">
//                                     <View>
//                                         <Text className="text-[white] mb-1 font-bold">Identify The Markers   .   2</Text>
//                                         <Text className="text-[white]">$105,000.00</Text>
//                                     </View>

//                                     <TouchableOpacity onPress={() => { router.push('/navigators/Dealform') }}>
//                                         <Image
//                                             source={icons.edit}
//                                             resizeMode='contain'
//                                             className="w-[1.4vh] h-[1.4vh]"
//                                             tintColor='white'
//                                         />
//                                     </TouchableOpacity>
//                                 </View>
//                             </TouchableOpacity>
//                             <TouchableOpacity onPress={() => { router.push('/navigators/Dealdata?view=proposalpricing') }}>
//                                 <View className="w-[46.5vh] h-[8vh] border border-1 border-[#00000008] px-2 py-4 flex-row items-center justify-between">
//                                     <View>
//                                         <Text className="text-[white] mb-1 font-bold">Proposal/Princing   .   1</Text>
//                                         <Text className="text-[white]">$25,000.00</Text>
//                                     </View>
//                                     <TouchableOpacity onPress={() => { router.push('/navigators/Dealform') }}>
//                                         <Image
//                                             source={icons.edit}
//                                             resizeMode='contain'
//                                             className="w-[1.4vh] h-[1.4vh]"
//                                             tintColor='white'
//                                         />
//                                     </TouchableOpacity>
//                                 </View>
//                             </TouchableOpacity>

//                             <View className=" flex  flex-row w-[4vh] h-[2vh] ml-80 items-center mt-64">
//                                 <TouchableOpacity onPress={() => { router.push('/home') }}>
//                                     <Image
//                                         source={icons.back}
//                                         resizeMode='contain'
//                                         className="w-[1.2vh] h-[1.2vh] mr-2"
//                                         tintColor='white'
//                                     />
//                                 </TouchableOpacity>
//                                 <Text className="text-[white] font-bold text-xs">Back</Text>
//                             </View>

//                         </View>

//                     </LinearGradient>
//                 </View >
//             </SafeAreaView >
//         </>
//     );
// }


