import React from "react";
import {Text} from "react-native";
import {ThemeContext} from "./ThemeContext";


type Props = {
    name: string;
}
export const Profile = (props:Props) => {
    const {theme} = React.useContext(ThemeContext);
    return <Text style={theme.label}> {props.name} </Text>
};
