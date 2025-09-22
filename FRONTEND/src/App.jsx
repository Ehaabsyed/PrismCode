
function App() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100">
      <div className="navbar absolute top-0 left-0 w-full h-16 flex items-center justify-between p-4 bg-black bg-opacity-50">
        <h1 className="text-3xl flex justify-center items-center font-extrabold z-20 text-white gap-2.5">PrismCode <FaCodepen className="z-20 text-3xl text-white" /></h1>
        <button className="z-20 px-3 py-1 hover:scale-109 animate ease-in-out transition cursor-pointer duration-150 bg-white text-black rounded-full border-none font-bold mt-3">Login</button>

      </div>
      <img src="/bg.jpg" className="h-full absolute top-0 left-0 w-full object-cover" alt="" />
      <h1 className=" text-[40px] tracking-tight font-bold z-20 text-white text-center mx-30">Instant, professional code reviews to help you write cleaner, faster, and bug-free code</h1>
      <Link to={"/code"}><button className="z-20 px-10 py-2 bg-white hover:scale-109 animate ease-in-out transition cursor-pointer duration-150 text-black rounded-full border-none text-xl font-bold mt-3">Get Started</button></Link>
    </div>
  );
}

export default App;
