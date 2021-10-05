import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import ViteComponents, {
  AntDesignVueResolver
} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {        
        // 定制antd主题
          modifyVars: {            
            'primary-color': '#CCFFCC',
            'link-color': '#FFCCCC',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true,            
      },
    },
  },
  plugins: [
    vue(),
    // 按需引入antd组件
    Components({     
      dts: true,
      resolvers: [
        AntDesignVueResolver({importStyle: 'less'})
       ]
    })
  ],
  server: {				
    // 解决Network: use `--host` to expose 无法通过ip访问的问题
    host: '0.0.0.0',
    // 项目启动后自动打开浏览器
    open: true
  }	
})
