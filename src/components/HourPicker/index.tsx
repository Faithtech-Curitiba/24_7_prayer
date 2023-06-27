/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from "react";

// Styles
import { Container, Badge } from "./styles";

// default available hours
import { availableHoursData } from "./hours";

interface AvailableHoursProps {
  hour: string;
  occupied: boolean;
}

const HourPicker = ({
  bookedHours,
  setSelectedHour,
}: {
  bookedHours: string[];
  setSelectedHour: (hour: string) => void;
}) => {
  const [availableHours, setAvailableHours] = useState<AvailableHoursProps[]>([
    ...availableHoursData,
  ]);
  const [selectedIndex, setSelectedIndex] = useState<number>();

  async function handleChangeBookedHours() {
    // Javascript cheat code to create new memory address of array instead of passing same address
    const availableHoursAux: AvailableHoursProps[] = JSON.parse(
      JSON.stringify(availableHoursData)
    );
    for (const [key, value] of Object.entries(availableHoursAux)) {
      bookedHours.forEach((hour) => {
        // 05-30 [AM] to 05:30 AM
        if (
          hour.replace("-", ":").replace("[", "").replace("]", "") ===
          value.hour
        ) {
          availableHoursAux[Number(key)].occupied = true;
        }
      });
    }
    setAvailableHours(availableHoursAux);
  }

  useEffect(() => {
    if (!bookedHours.length) {
      setAvailableHours([...availableHoursData]);
    } else {
      handleChangeBookedHours();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookedHours]);

  return (
    <Container>
      {availableHours.map((hour, index) => (
        <Badge
          selected={selectedIndex === index}
          occupied={hour.occupied}
          onClick={
            () =>
              !hour.occupied &&
              (setSelectedIndex(index), setSelectedHour(hour.hour))
            // eslint-disable-next-line react/jsx-curly-newline
          }
        >
          {hour.hour}
        </Badge>
      ))}
    </Container>
  );
};

export default HourPicker;
