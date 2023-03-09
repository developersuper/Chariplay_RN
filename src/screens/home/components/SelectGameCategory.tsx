import React, { useState, useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import { IGameCategory } from "shared/constants/types";
import { palette } from "@theme/themes";
import RNBIcon from "@shared-components/icon/RNBIcon";
import { IconType } from "react-native-dynamic-vector-icons";

const dynamicStylesFactory = (focused: boolean) => {
  return {
    dropdown: {
      borderBottomRightRadius: focused ? 0 : 20,
      borderBottomLeftRadius: focused ? 0 : 20,
      borderBottomWidth: focused ? 0 : 1,
    },
  };
};

interface SelectGameCategoryProps {
  gameCategories?: Array<IGameCategory> | undefined;
}

const SelectGameCategory: React.FC<SelectGameCategoryProps> = ({
  gameCategories,
}) => {
  const [value, setValue] = useState<string>();
  const [focused, setFocused] = useState(false);
  const dynamicStyles = useMemo(() => dynamicStylesFactory(focused), [focused]);
  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, dynamicStyles.dropdown]}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        containerStyle={styles.dropdownContainer}
        value={value}
        activeColor={palette.yellow}
        renderRightIcon={() => {
          return (
            <RNBIcon
              name={value === undefined ? "chevron-down" : "chevron-up"}
              type={IconType.Ionicons}
              color={palette.primary}
              size={15}
            />
          );
        }}
        renderItem={(item) => {
          console.log(item, item._index);
          return (
            <View
              style={[
                styles.itemContainerStyle,
                item._index === 0 ? styles.itemTop : {},
              ]}
            >
              <Text style={styles.itemTextStyle}>{item.label}</Text>
            </View>
          );
        }}
        data={gameCategories !== undefined ? gameCategories : []}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        valueField="value"
        labelField="label"
        placeholder="Game Categories..."
        onChange={(item) => {
          setValue(item.value);
          setFocused(false);
        }}
      />
    </View>
  );
};

export default SelectGameCategory;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  placeholderStyle: {
    fontSize: 13,
    fontStyle: "italic",
    fontWeight: "300",
    color: palette.placeholder,
  },
  itemTextStyle: {
    color: palette.white,
    fontSize: 13,
    fontWeight: "300",
    fontStyle: "italic",
    lineHeight: 15,
  },
  itemContainerStyle: {
    paddingLeft: 15,
    padding: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  dropdownContainer: {
    bottom: 27,
    paddingBottom: 10,
    borderColor: palette.primary,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderWidth: 1,
    borderTopWidth: 0,
    backgroundColor: palette.yellow,
  },
  dropdown: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: palette.primary,
    borderWidth: 1,
    color: palette.placeholder,
    paddingLeft: 14,
    paddingRight: 14,
    maxWidth: 225,
    width: "100%",
    height: 36,
    backgroundColor: palette.yellow,
    fontSize: 13,
    fontStyle: "italic",
    fontWeight: "300",
  },
  selectedTextStyle: {
    fontSize: 13,
    lineHeight: 15.23,
    fontStyle: "italic",
    fontWeight: "300",
    color: palette.primary,
    backgroundColor: palette.yellow,
  },
  itemTop: {
    borderTopColor: palette.white,
    borderTopWidth: 1,
    paddingTop: 15,
  },
});
