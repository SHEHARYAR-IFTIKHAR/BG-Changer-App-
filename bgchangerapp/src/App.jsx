import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive")

  return (

    <div className="w-full h-screen  "
      style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded px-3 py-2">
          <button onClick={() => setColor("red")}
            className='outline-none px-4 py-1 rounded text-white shadow-sm' style={{ backgroundColor: "red" }}>Red</button>

          <button
            onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded text-white shadow-sm' style={{ backgroundColor: "yellow" }}>Yellow</button>

          <button
            onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded text-white shadow-sm' style={{ backgroundColor: "green" }}>Green</button>

          <button
            onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded text-white shadow-sm' style={{ backgroundColor: "blue" }}>Blue</button>

          <button
            onClick={() => setColor("olive")} className='outline-none px-4 py-1 rounded text-white shadow-sm' style={{ backgroundColor: "olive" }}>Olive</button>

          <button
            onClick={() => setColor("cyan")} className='outline-none px-4 py-1 rounded text-white shadow-sm' style={{ backgroundColor: "cyan" }}>Cyab</button>

          <button
            onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded text-white shadow-sm' style={{ backgroundColor: "orange" }}>Orange</button>

          <button
            onClick={() => setColor("white")} className='outline-none px-4 py-1 rounded text-black shadow-sm' style={{ backgroundColor: "white" }}>White</button>

          <button
            onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded text-white shadow-sm' style={{ backgroundColor: "black" }}>Black</button>

          <button
            onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded text-white shadow-sm' style={{ backgroundColor: "pink" }}>Pink</button>

          <button
            onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded text-white shadow-sm' style={{ backgroundColor: "purple" }}>Purple</button>

          <button
            onClick={() => setColor("orangered")} className='outline-none px-4 py-1 rounded text-white shadow-sm' style={{ backgroundColor: "orangered" }}>Orangered</button>

          <button
            onClick={() => setColor("lime")} className='outline-none px-4 py-1 rounded text-white shadow-sm' style={{ backgroundColor: "lime" }}>Lime</button>
        </div>
      </div>

    </div>

  )
}

export default App
