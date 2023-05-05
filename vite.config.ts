import { defineConfig , loadEnv } from 'vite'
// vue
import vue from '@vitejs/plugin-vue'
// tsx
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path';


//antd 按需加载
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import'

//svg
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'


// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_ENV, VITE_BASE_DIR } = env;
  return {
    base:
      VITE_ENV === 'production'
        ? VITE_BASE_DIR + '/'
        : VITE_BASE_DIR + '/',
    plugins: [
      vue(),
      vueJsx({
        include: /\.(jsx|tsx)/
      }),
      Components({
        resolvers: [AntDesignVueResolver({importStyle:false})],
      }),
      createStyleImportPlugin({
        resolves: [AntdResolve()]
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs:[path.resolve(process.cwd(),'src/assets/icons')],
        // 指定symbolld格式
        symbolId: 'icon-[dir]-[name]' 
      })
    ],
    // 配置路径别名
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    // 配置IP访问
    server: {
      port: 3030,
      host: true,
      open: false,
      proxy: {
        '/api': {
          target: 'http://www.baidu.com',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/api/, ''),
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "${path.resolve(__dirname, 'src/assets/theme.less')}";`,
          javascriptEnabled: true,
          // 配置变量
          // modifyVars: {
          //   "@primary-color": "#007f99",
          //   "@table-hover-bg": "#ebf5f7"
          // }
        }
      },
    },
  }
})

