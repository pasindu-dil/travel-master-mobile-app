import { TouchableOpacity, View } from "react-native";
import Apple from "./social-media-buttons/Apple";
import Google from "./social-media-buttons/Google";
import Facebook from "./social-media-buttons/Facebook";

type Props = {
  handleApplePress: () => void;
  handleGooglePress: () => void;
  handleFacebookPress: () => void;
};

const SocialMediaSignUp = ({
  handleApplePress,
  handleGooglePress,
  handleFacebookPress,
}: Props) => {
  return (
    <View className="flex flex-row gap-8 m-4 z-50">
      <TouchableOpacity>
        <Apple onPress={handleApplePress} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Google onPress={handleGooglePress} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Facebook onPress={handleFacebookPress} />
      </TouchableOpacity>
    </View>
  );
};

export default SocialMediaSignUp;
