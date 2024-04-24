const InputBox = ({todo, onChange, onCreate}) => {
  return (
    <div className=" mb-3 flex justify-center">
      <input type="text" className=" border-solid border-[1px] border-black p-1 rounded" value={todo} onChange={onChange}/>
      <button className=" border-solid border-[1px] bg-[#9EC8B9]  ml-2 p-1 rounded text-white " onClick={onCreate}>สร้าง</button>
    </div>
  );
};

export default InputBox;
