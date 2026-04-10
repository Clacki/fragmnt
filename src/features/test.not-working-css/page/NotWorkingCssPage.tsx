const NotWorkingCssPage = () => {
  return (
    <div>
      <div className="bg-amber-500 p-5 w-200">p-5 w-200</div>
      <div className="bg-amber-500 p-[100px] w-[800px]">
        p-[100px] w-[800px]
      </div>
      <div className="bg-amber-500 p-5 w-xl">p-5 w-xl</div>
      <div className="bg-amber-500 p-[100px] w-lg">p-[100px] w-lg</div>
    </div>
  )
}

export default NotWorkingCssPage
