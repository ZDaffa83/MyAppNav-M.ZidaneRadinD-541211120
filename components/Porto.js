import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  TextInput,
  Linking,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; // Ganti dengan ikon yang Anda inginkan
import CustomImage from '../components/CstmPng';

export default function Portofolio() {
// State untuk section pertama
  const [section1Likes, setSection1Likes] = useState(0);
  const [section1Dislikes, setSection1Dislikes] = useState(0);

  const handleLike1 = () => {
    setSection1Likes(section1Likes + 1);
  };

  const handleDislike1 = () => {
    setSection1Dislikes(section1Dislikes + 1);
  };

  // State untuk section kedua
  const [section2Likes, setSection2Likes] = useState(0);
  const [section2Dislikes, setSection2Dislikes] = useState(0);

  const handleLike2 = () => {
    setSection2Likes(section2Likes + 1);
  };

  const handleDislike2 = () => {
    setSection2Dislikes(section2Dislikes + 1);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <CustomImage
            style={{
              width: 150,
              height: 150,
              marginBottom: 20,
              borderRadius: 10,
            }} // Menambahkan margin bawah
            source={require('../assets/icon/cv.jpeg')}
          />
        </View>
        <Text style={styles.title}>Muhammad Zidane Radin Daffa</Text>
        <Text style={styles.desc}>
          Halo Sepuh...., Saya anak pertama dalam 0 bersaudara, atau disebut
          tunggal. Saya lahir di Pekanbaru. Saya adalah murid SMK Telkom
          Purwokerto dengan jurusan RPL. Saya tinggal di Kota Purwokerto,
          Kabupaten Banyumas, Jawa Tengah.
        </Text>
        <Button
          onPress={() => Linking.openURL('mailto:m.zidanekece@gmail.com')}
          title="Contact Me"
          color="#4B7BF9"
          accessibilityLabel="Lihat Selengkapnya"
        />
        <Text
          style={{
            marginTop: 30,
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
          }}>
          My Recent Project
        </Text>

        <View style={{ marginTop: 20 }}>
          <Image
            source={require('../assets/porto/porto1.png')}
            style={styles.project}
          />
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Sibangkim
              </Text>
              <Text style={{ fontSize: 11, color: 'white' }}>
                Website Design while PKL
              </Text>
            </View>

            <View style={{ paddingLeft: 70, paddingVertical: 20 }}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://www.figma.com/file/D4GP4qnEGBjGXkZhFqniwj/Project-Dinas?type=design&node-id=2-2&mode=design&t=HpJEE5IXwwloRB8w-0'
                  )
                }>
                <Image
                  source={require('../assets/icon/right-arrow.png')}
                  style={{ width: 81, height: 42 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* Menampilkan jumlah likes dan dislikes */}
            <View style={{ flexDirection: 'row', marginTop: -15 }}>
              <TouchableOpacity onPress={handleLike1} style={{ marginLeft: 10, right: 5 }}>
                <Icon name="thumbs-up" size={22} color="white" />
              </TouchableOpacity>
              <Text style={{ color: 'nigga' }}>{section1Likes} Likes</Text>

              <TouchableOpacity onPress={handleDislike1} style={{ marginLeft: 20, right: 5 }} >
                <Icon name="thumbs-down" size={22} color="orange" />
              </TouchableOpacity>
              <Text style={{ color: 'orange' }}>{section1Dislikes} Dislikes</Text>
            </View>
          {/* Akhir Project 1 */}
        </View>

        <View style={{ marginTop: 20 }}>
          <Image
            source={require('../assets/porto/snack-icon.png')}
            style={styles.project}
          />
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                ???????????
              </Text>
              <Text style={{ fontSize: 11, color: 'white' }}>
                Android Design Figma
              </Text>
            </View>
            <View style={{ paddingLeft: 70, paddingVertical: 20 }}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://www.figma.com/file/D4GP4qnEGBjGXkZhFqniwj/Project-Dinas?type=design&node-id=2-2&mode=design&t=HpJEE5IXwwloRB8w-0'
                  )
                }>
                <Image
                  source={require('../assets/icon/right-arrow.png')}
                  style={{ width: 81, height: 42 }}
                />
              </TouchableOpacity>
            </View>
          </View>
         {/* Menampilkan jumlah likes dan dislikes */}
            <View style={{ flexDirection: 'row', marginTop: -15 }}>
              <TouchableOpacity onPress={handleLike2} style={{ marginLeft: 10, right: 5 }} >
                <Icon name="thumbs-up" size={22} color="white" />
              </TouchableOpacity>
              <Text style={{ color: 'white' }}>{section2Likes} Likes</Text>
              
              <TouchableOpacity onPress={handleDislike2} style={{ marginLeft: 20, right: 5 }}>
                <Icon name="thumbs-down" size={22} color="orange" />
              </TouchableOpacity>
              <Text style={{ color: 'orange' }}>{section2Dislikes} Dislikes</Text>
            </View>
         {/* Menampilkan jumlah likes dan dislikes */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#687EFF',
    alignItems: 'center',
    paddingTop: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    marginTop: 20,
  },
  desc: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'justify',
    color: 'white',
    marginBottom: 35,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 40,
    alignItems: 'center',
  },
  project: {
    width: 250,
    height: 180,
    borderRadius: 10,
    marginTop: 10,
  },
  likeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },

});