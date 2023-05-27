import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
// dependency coming from local packages (packages/utils/event-emitter)
import pubsub from 'event-emitter';

// VueLayout component in Vue
import VueComponent from 'vue-layout';

// CSS of the VueLayout
import "vue-layout/dist/style.css";

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [globalMessage, setGlobalMessage] = useState("");
  const vueComponentInstance = useRef<typeof VueComponent | null>(null);


  useEffect(() => {
    pubsub.subscribe("global", (msg, data) => {
      // console.log("Global message:", data);
      setGlobalMessage(data);
    });

    vueComponentInstance.current = VueComponent();

    return () => {
      pubsub.unsubscribe('global');
      vueComponentInstance.current?.unmount();
    }
  }, [])

  return (
    <div className='flex flex-col flex-1 h-full p-4 bg-sky-400 bg-opacity-10'>
      <header className='w-full h-24 shadow-md flex justify-center items-center'>
        <a href="/vue-page" className='text-green-400 hover:text-green-600'>go to vue page</a>
      </header>

      <div id="vue-layout" className='bg-green-400'></div>

      <div className='flex flex-col justify-center h-full items-center'>
        <div className='w-full flex justify-start bg-gray-800 p-4'>Global message: { globalMessage }</div>
        <div className='w-full flex justify-center'>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className='text-4xl my-4'>React application</h1>
        <div className="my-4">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
