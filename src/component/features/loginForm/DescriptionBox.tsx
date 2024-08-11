const DescriptionBox = () => {
  return (
    <div className=" w-4/6 mx-auto text-center mt-32 ">
      <h2 className="text-xl w-full font-bold mt-7 text-white bg-blue-900 py-5 shadow-md rounded-sm tracking-widest">
        企業をカード形式で管理
      </h2>
      <div className="w-full flex  items-center mt-3 font-bold gap-1">
        <p className="w-1/2 py-4 bg-white shadow-md rounded-sm hover:-translate-y-2 duration-500 tracking-wider text-blue-900 border-2 border-blue-900">
          視覚的なデザイン
        </p>
        <p className="w-1/2 py-4 bg-white shadow-md rounded-sm hover:-translate-y-2 duration-500 tracking-widr text-blue-900 border-2 border-blue-900">
          シンプルな管理画面
        </p>
      </div>
      <div className="w-full flex  items-center mt-2 font-bold gap-1">
        <p className="w-1/2 py-4 bg-white shadow-md rounded-sm hover:-translate-y-2 duration-500 tracking-wider text-blue-900 border-2 border-blue-900">
          ボタンで進捗管理
        </p>
        <p className="w-1/2 py-4 bg-white shadow-md rounded-sm hover:-translate-y-2 duration-500 tracking-wider text-blue-900 border-2 border-blue-900">
          カンタン登録・編集
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
