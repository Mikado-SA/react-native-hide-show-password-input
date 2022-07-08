import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import PropTypes from "prop-types";
import { TextField } from "react-native-material-textfield";

const PasswordInputText = ({
  iconSize,
  iconColor,
  label,
  style,
  iconStyle,
  fieldStyle,
  getRef,
  ...rest
}) => {
  const [eyeIcon, setEyeIcon] = useState("visibility-off");
  const [isPassword, setIsPassword] = useState(true);

  const changePwdType = () => {
    setEyeIcon(isPassword ? "visibility" : "visibility-off");
    setIsPassword((prevState) => !prevState);
  };

  const passReference = (ref) => {
    if (getRef) getRef(ref);
  };

  return (
    <View style={style}>
      <TextField
        {...rest}
        ref={passReference}
        secureTextEntry={isPassword}
        label={label}
        style={fieldStyle}
      />
      <Icon
        style={iconStyle}
        name={eyeIcon}
        size={iconSize}
        color={iconColor}
        onPress={changePwdType}
      />
    </View>
  );
};

PasswordInputText.defaultProps = {
  iconSize: 25,
  label: "Password",
  iconColor: "#222222",
  iconStyle: {
    position: "absolute",
    top: 33,
    right: 0,
  },
  fieldStyle: {
    margin: 0,
    padding: 0,
  }
};

PasswordInputText.propTypes = {
  iconSize: PropTypes.number,
  label: PropTypes.string,
  iconColor: PropTypes.string,
  iconStyle: PropTypes.object,
  fieldStyle: PropTypes.object,
};

export default PasswordInputText;
