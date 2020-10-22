import React, { useState } from "react";
import { View, Button,Image, ScrollView, Text, StyleSheet } from "react-native";


const Home = ({ navigation }) => {
    // constructor(){
    //     super();
    //     this.state = {
    //         UserName: "",
    //     }
    // }
const UserName = useState("Pawan Kumar");

    let userName = 'Pawan Kuamr';


    return (
        <ScrollView style={
            {
                backgroundColor:"#6A1B9A", bounce:false, alwaysBounceVertical:false,
            }
        }
        >
        <View style={styles.mainContainer}>

        <View style={styles.center}>
          <View style={styles.profileView}>
              <Image style = {styles.UserImage} source={{
                  uri: "https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg" }} />
              <Text style={{ color:'#fff'}} >
                  {UserName}
              </Text>
          </View>
          <View style={styles.Description}>
            <Text style ={styles.descriptionText}>
                Hi, I am Pawan Kumar Working as a Software Developer for last about 3 years. In this period i have gone through various technologies like iOS Development, Android Development, React-Native,Flutter,Python, etc.
            </Text>
          </View>
            <View style={{flex:1,width: '100%',alignItems:'center'}}>
            <Text style={{ fontsize:150 ,fontWeight: "900", color: "#ffffff"}}>
                Skills
            </Text>
                <View style={{height:100, flexDirection:'row',marginTop:20, marginHorizontal:50}}>
                    <Image style = {styles.skillsImage} source={{
                        uri: "https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg" }} />
                    <Image style = {styles.skillsImage} source={{
                        uri: "https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg" }} />

                </View>
                <View style={{height:100, flexDirection:'row',marginTop:20, marginHorizontal:50}}>
                    <Image style = {styles.skillsImage} source={{
                        uri: "https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg" }} />
                    <Image style = {styles.skillsImage} source={{
                        uri: "https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg" }} />

                </View>
                <View style={{height:100, flexDirection:'row',marginTop:20, marginHorizontal:50}}>
                    <Image style = {styles.skillsImage} source={{
                        uri: "https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg" }} />
                    <Image style = {styles.skillsImage} source={{
                        uri: "https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg" }} />

                </View>
                <View style={{height:100, flexDirection:'row',marginTop:20, marginHorizontal:50}}>
                    <Image style = {styles.skillsImage} source={{
                        uri: "https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg" }} />
                    <Image style = {styles.skillsImage} source={{
                        uri: "https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg" }} />

                </View>
            </View>


        {/*<Text>This is the home screen</Text>*/}
          {/*<Button*/}
        {/*    // title="Go to About Screen"*/}
        {/*    // onPress={() => navigation.navigate("About")}*/}
        {/*/>*/}
      </View>
</View>
        </ScrollView>

);
};

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#6A1B9A',
        paddingHorizontal:10,
    },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 20,
      paddingBottom:50,
    backgroundColor:'#7B1FA2',
    shadowColor:'#fff'
  },
    profileView:{
        height: 40,
        marginVertical:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    UserImage:{
        height:50,
        width:50,
        padding:2,
        borderRadius:40,
        borderColor:'#000000',
        borderWidth:3,
    },
    skillsImage:{
        height:100,
        width:100,
        // padding:2,
        borderRadius:100,
        borderColor:'#000000',
        borderWidth:3,
        marginVertical:25,
        marginHorizontal:40,
    },
    Description:{
        height:90,
        marginVertical:10,
        borderTopColor:'#000',
        borderBottomColor:'#000',
        borderTopWidth: 2,
        borderBottomWidth:2,
    },
    descriptionText:{
        color:'#fff',
        paddingVertical:5,
        paddingHorizontal:20,
    },
    Skils:{
        flex:1,
        backgroundColor:'red'
    }
});

export default Home;
