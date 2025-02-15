import { Text, View } from "react-native";

type Props = {
    id: number,
    imageUrl: string;
    title: string;
    country: string;
    location: string;
    rating: number;
    description: string;
}

const Place = ({ id, imageUrl, title, country, location, rating, description }: Props) => {
    console.log(imageUrl, title, country, location, rating, description);
    
  return (
    <View>
        <Text>dgdfgfdg</Text>
    </View>
  )
}

export default Place