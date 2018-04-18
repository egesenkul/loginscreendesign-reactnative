import React, { Component } from 'react';
import colors from '../styles/colors';
import {
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import RoundedButton from '../components/buttons/RoundedButton'
export default class GirisEkrani extends Component{
    onFacebookPress(){
        alert('Facebook butonuna bastınız.');
    }
    onUyelikPress(){
        alert('Üyelik oluştur butonuna bastınız.');
    }
    moreOptionsPress(){
        alert('Diğer seçeneklere bastınız.')
    }
    render(){
        return (
            <View style={styles.wrapper}>
                <View style={styles.welcomeWrapper}>
                    <Image source={require('../img/logo.png')}
                           style={styles.logo}/>
                    <Text style={styles.welcomeText}>Hoşgeldiniz !</Text>
                    <RoundedButton text='Facebook ile giriş yap'
                                   textColor={colors.green01}
                                   background={colors.white}
                                   icon={<Icon name='facebook' size={20} style={styles.facebookButtonIcon
                                   }/>}
                                   handleOnPress={this.onFacebookPress}
                    />
                    <RoundedButton text='Üyelik oluştur'
                                   textColor={colors.white}
                                   handleOnPress={this.onUyelikPress}
                    />
                    <TouchableHighlight style={styles.moreOptionsButton} onPress={this.moreOptionsPress}>
                        <Text style={styles.moreOptionsText}>
                            Diğer seçenekler
                        </Text>
                    </TouchableHighlight>
                    <View style={styles.termsText}>
                        <Text style={styles.termsEntry}>Facebook ile giriş yaparak ya da yeni bir üyelik oluşturarak bazı şartları kabul etmiş olursunuz.</Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsEntry}>Yeni Üyelik Şartları</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    wrapper:{
        flex:1,
        display:'flex',
        backgroundColor:colors.green01,
    },
    moreOptionsButton:{
      marginTop:15,
    },
    linkButton:{
        borderBottomWidth:1,
        borderBottomColor:colors.white,
    },
    termsText:{
        flexWrap: 'wrap',
        alignItems:'flex-start',
        flexDirection:'row',
        marginTop:30,
    },
    moreOptionsText:{
      color:colors.white,
      fontSize:16,
    },
    logo:{
        width:290,
        height:100,
        marginTop:10,
        marginBottom:40,
    },
    welcomeWrapper:{
        flex:1,
        display: 'flex',
        marginTop:30,
        padding:20,
    },
    welcomeText:{
        fontSize:30,
        color: colors.white,
        fontWeight:'300',
        marginBottom:40
    },
    facebookButtonIcon:{
        color:colors.green01,
        position:'relative',
        left:20,
        zIndex:8,
    },
    termsEntry:{
        color:colors.white,
        fontSize:13,
        fontWeight:'600',
    },

});