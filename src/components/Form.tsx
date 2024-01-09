type FormProps = {
  value: string;
  handleChange: any;
  handleSubmit: any;
}
const Form: React.FC<FormProps> = ({value, handleChange, handleSubmit}) => {
  return (
    <>
      <input
          type='text'
          value={value}
          placeholder='Ask here...'
          onChange={(e) => {handleChange(e)}}
          className='bg-gray-200 rounded-l-full text-sm md:text-base w-9/12 md:w-11/12 p-2'
        />
        <button
        onClick={handleSubmit}
        className="bg-blue-400 rounded-r-full text-gray-50 text-sm md:text-base hover:bg-blue-500 transition duration-300 w-3/12 md:w-1/12 p-2"
        >
          Submit
        </button>
    </>
  )
}

export default Form