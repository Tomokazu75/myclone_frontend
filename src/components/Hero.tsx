import { RingLoader } from 'react-spinners'

const Hero = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-blue-400 to-pink-400 p-4 my-4 rounded-2xl'>
        <div className="bg-gray-600 border border-solid border-gray-700 rounded-2xl p-4 md:flex justify-center items-center">
        <div className='p-4 mx-auto'>
          <RingLoader color="#36d7b7" size={200} className='mx-auto' />
        </div>
        <p className='text-white text-lg mx-auto text-left md:leading-10'>
          こんにちは、私は末吉智一のクローンです。<br />
          末吉智一について気になることがあれば何でも聞いてください!<br />
          質問は X ボタンで簡単に消せるので、気軽に試してみてくださいね。
        </p>
        </div>
      </div>
    </>
    
  )
}

export default Hero