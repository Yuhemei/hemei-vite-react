/*
 * @Author: Hemei yuhemei8088@163.com
 * @Date: 2023-02-17 00:05:13
 * @FilePath: /vite-react-project/src/screens/ViteReactDemo/index.tsx
 * @Description: Do not edit
 */
import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import './index.css'
import { Counter } from '../Counter/index.js'

function ViteReactDemo() {
    const [count, setCount] = useState(0)

    return (
        <div className="App page">
            <Counter />
        </div>
    )
}

export default ViteReactDemo
