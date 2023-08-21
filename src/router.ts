import { createRouter, createWebHistory} from 'vue-router'
import MainPage from './components/MainPage.vue'
import Band from './components/Band.vue'

export const router = createRouter({
    // createRouterの引数のオブジェクトにhistoryとroutesという値を用意する
    history: createWebHistory(),
    routes: [
      {
        path: '/',             // 割り当てるパス
        name: 'mainpage',         // 名前
        component: MainPage, // 割り当てるコンポーネント
      },
      {
        path: '/band',
        name: 'band',
        component: Band,
      }
    ]
  })