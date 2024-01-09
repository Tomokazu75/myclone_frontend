import { GridLoader } from 'react-spinners'

type LoaderProps = {
  data: string;
  loading: boolean;
  handleSave: () => Promise<void>;
  handleNext: () => void
}

const Answer: React.FC<LoaderProps> = ({ data, loading, handleSave, handleNext }) => {
  return (
    <>
      {
        loading ? 
        <div className='mt-4'>
          <GridLoader color="#36d7b7" />
        </div>
        :
        <div className='mt-4'>
          <p className='h-auto bg-gray-100 border border-solid border-gray-200 rounded-2xl p-2 text-left tracking-wide leading-8'>{data}</p>
          <div className="lg:space-x-24 p-4">
          <button
            onClick={handleSave}
            className="bg-red-400 rounded-full text-gray-50 hover:bg-red-500 transition duration-300 w-20 p-2 m-2"
          >
            Save
          </button>
          <button
            onClick={handleNext}
            className="bg-green-400 rounded-full text-gray-50 hover:bg-green-500 transition duration-300 w-20 p-2 m-2"
          >
            Next
          </button>
          </div>
        </div>
      }
    </>
  )
}

export default Answer