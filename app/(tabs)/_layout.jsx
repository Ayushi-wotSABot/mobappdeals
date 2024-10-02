import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from "../../constants"


const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="justify-center items-center gap-2 ">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"

            />
            <Text
                className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
                style={{ color: color }}>
                {name}
            </Text>

        </View>
    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveBackgroundColor: "black",
                    tabBarInactiveBackgroundColor: "black",
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: "#161622",
                        borderTopWidth: 1,
                        borderTopColor: "#161622",
                        height: 52,
                    },
                }}


            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                focused={focused}
                                name="Home"
                            />)
                    }}

                />
                <Tabs.Screen
                    name='accounts'
                    options={{
                        title: "Accounts",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.accounts}
                                color={color}
                                focused={focused}
                                name="Accounts"
                            />)

                    }}
                />
                <Tabs.Screen
                    name='deals'
                    options={{
                        title: "Deals",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.deals}
                                color={color}
                                focused={focused}
                                name="Deals"
                            />)

                    }}
                />
                <Tabs.Screen
                    name='contacts'
                    options={{
                        title: "Contacts",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.contacts}
                                color={color}
                                focused={focused}
                                name="Contacts"
                            />)

                    }}
                />
                <Tabs.Screen
                    name='leads'
                    options={{
                        title: "Leads",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.leads}
                                color={color}
                                focused={focused}
                                name="Leads"
                            />)

                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout