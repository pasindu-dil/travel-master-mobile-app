import { View, Text, Image, TouchableWithoutFeedback, Button, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign, Feather } from '@expo/vector-icons'

type Props = {}

const ProfileScreen = (props: Props) => {
  return (
    <View className='flex-1 items-center justify-start bg-white'>
      <View className='w-full h-[30%] items-center'>
        <Image source={require('../../assets/images/places/china_wall_ssk500.jpeg')} resizeMethod='resize' resizeMode='cover' className='w-full h-full' />
        <TouchableWithoutFeedback>
          <AntDesign name="pluscircle" size={28} color="green" className='absolute bottom-2 right-2 bg-white rounded-full p-[0.1rem]' />
        </TouchableWithoutFeedback>
      </View>
      <View className='absolute top-[20%] left-1/2 -translate-x-1/2 w-32 h-32 rounded-full items-center'>
        <Image source={require('../../assets/images/profiles/my-profile.jpg')} resizeMethod='resize' resizeMode='cover' className='w-40 h-40 rounded-full p-1 bg-white' />
        <TouchableWithoutFeedback>
          <AntDesign name="pluscircle" size={28} color="green" className='absolute -bottom-4 -right-3 bg-white rounded-full p-[0.1rem]' />
        </TouchableWithoutFeedback>
      </View>
      <View className='top-[10%] w-full items-center'>
        <Text className='text-2xl font-semibold'>Dilshan Chathuranga</Text>
        <Button title='Edit Profile' />
        <View className='flex-row items-center justify-between gap-2'>
          <View className='items-center mt-2'>
            <Text className='text-2xl font-bold'>125</Text>
            <Text className='text-xl font-base'>Following</Text>
          </View>
          <View className='items-center mt-2'>
            <Text className='text-2xl font-bold'>125</Text>
            <Text className='text-xl font-base'>Followers</Text>
          </View>
          <View className='items-center mt-2'>
            <Text className='text-2xl font-bold'>125</Text>
            <Text className='text-xl font-base'>Likes</Text>
          </View>
        </View>
        <View className='w-full'>
          <Text className='text-2xl'>Stories</Text>
          <ScrollView horizontal={true}>
            <View>
              <TouchableWithoutFeedback>
                <View className='bg-green-800 p-5 rounded-xl'>
                  <Feather name="plus" size={36} color="white" />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default ProfileScreen