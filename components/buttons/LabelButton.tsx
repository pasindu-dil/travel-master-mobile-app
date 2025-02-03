import useThemeStyles from '@/hooks/useThemeStyles';
import { Text, TouchableOpacity } from 'react-native'

type Props = {
    name: string,
    handleClick: () => void
}

const LabelButton = ({ name, handleClick }: Props) => {
  const { text } = useThemeStyles();
  
  return (
    <TouchableOpacity onPress={handleClick} className='dark:bg-slate-800 bg-gray-300 p-4 rounded-full'>
      <Text className={`${text} text-base text-center`}>{name}</Text>
    </TouchableOpacity>
  )
}

export default LabelButton