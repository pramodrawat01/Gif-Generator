import { Rendom } from './components/Rendom'
import { Tag } from './components/Tag'
import './App.css'

function App() { 

  return (
    <div className='w-full h-auto flex flex-col relative background overflow-hidden items-center' >
      <h1 className='bg-white rounded-sm  w-11/12 text-center mt-[40px] text-3xl  font-bold'>Rendom gifs</h1>
      <div className='flex flex-col w-full items-center'>
        <Rendom/>
        <Tag/>
      </div>
    </div>
  )
}

export default App
