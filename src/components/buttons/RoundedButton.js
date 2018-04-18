import  React, {Component} from 'react';
import colors from '../../styles/colors';
import PropTypes from 'prop-types';
import {
    Text,
    StyleSheet,
    View,
    TouchableHighlight,
} from 'react-native';

export default class RoundedButton extends Component{
    render(){
        const {text,textColor,background,icon,handleOnPress}=this.props;
        const backgroundColor = background || 'transparent';
        const color = textColor || colors.black;
        return(
            <TouchableHighlight
                style={[{backgroundColor},styles.wrapper]}
                onPress={handleOnPress}
            >
                <View style={styles.buttonTextWrapper}>
                    {icon}
                    <Text style={[{color},styles.buttonText]}>{text}</Text>
                </View>
            </TouchableHighlight>
             );
    }
}

RoundedButton.PropTypes={
    text:PropTypes.string.isRequired,
    textColor:PropTypes.stream,
    backgroundColor:PropTypes.string,
    icon:PropTypes.object,
    handleOnPress:PropTypes.func,
};

const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
        padding:15,
        borderRadius:40,
        borderWidth:1,
        borderColor:colors.white,
        marginBottom:15,
    },
    buttonText:{
        fontSize:16,
        width:'100%',
        textAlign:'center',
    },
    buttonTextWrapper:{
        flexDirection:'row',
        justifyContent:'flex-end',
    }
});
