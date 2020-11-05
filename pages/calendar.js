import React from "react";
import { ScrollView, Text } from "react-native";
import { Calendar } from "react-native-calendars";

const RootCalendar = () => {
  return (
    <ScrollView>
      <Calendar
        // Collection of dates that have to be marked. Default = {}
        markedDates={{
          "2020-11-16": { selected: true, marked: true, selectedColor: "blue" },
          "2020-11-17": { marked: true },
          "2020-11-18": { marked: true, dotColor: "red", activeOpacity: 0 },
          "2020-11-19": { disabled: true, disableTouchEvent: true },
        }}
      />
    </ScrollView>
  );
};

export default RootCalendar;
