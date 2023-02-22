import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
    const publicConfig = {
        plugins: [react()],
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),//标记'@'代表的路径
                '@utils': resolve(__dirname, 'src/utils')
            }
        }
    }
    if (command === 'serve') {
        return {
            // dev 独有配置
            ...publicConfig
        }
    } else {
        // command === 'build'
        return {
            // build 独有配置
            ...publicConfig
        }
    }
})
