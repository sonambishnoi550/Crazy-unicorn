const CustomDescription = ({ text, classStyle }) => {
  return (
    <p className={`text-black lg:text-custom-xl text-xl font-normal leading-custom-2xl lg:leading-custom-3xl ${classStyle}`}>{text}</p>
  )
}

export default CustomDescription