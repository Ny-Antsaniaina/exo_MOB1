import { FC } from "react";
import { Image, Pressable, Text } from "react-native";

const numberColors: any = {
  1: "#00A2FF",
  2: "#00B300",
  3: "#FFD500",
  4: "#FF8C00",
  5: "#FF3B3B",
  6: "#B80000",
};

type Props = {
  x: number;
  y: number;
  cell: {
    isBomb: boolean;
    revealed: boolean;
    count: number;
  };
  onPress: (x: number, y: number) => void;
};

const Box: FC<Props> = ({ x, y, cell, onPress }) => {
  let bg = "#1bb5fc";

  if (cell.revealed) {
    bg = "#858889";
  }

  return (
    <Pressable
      onPress={() => onPress(x, y)}
      style={{
        width: 20,
        height: 20,
        backgroundColor: bg,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
      }}
    >
      {cell.revealed && cell.isBomb && (
        <Image
          source={require("../../assets/images/bomb.png")}
          style={{ width: 18, height: 18 }}
        />
      )}

      {cell.revealed && !cell.isBomb && cell.count > 0 && (
        <Text style={{ color: numberColors[cell.count], fontSize: 13 }}>
          {cell.count}
        </Text>
      )}
    </Pressable>
  );
};

export default Box;
