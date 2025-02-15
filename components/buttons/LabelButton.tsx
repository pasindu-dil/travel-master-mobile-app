import { Text, TouchableOpacity } from 'react-native'

type Props = {
    name: string,
    handleClick: () => void
}

const LabelButton = ({ name, handleClick }: Props) => {  
  return (
    <TouchableOpacity onPress={handleClick} className='bg-green-800 p-4 rounded-full'>
      <Text className={`text-slate-200 text-base text-center font-semibold`}>{name}</Text>
    </TouchableOpacity>
  )
}

export default LabelButton