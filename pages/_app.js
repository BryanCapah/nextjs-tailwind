import 'tailwindcss/tailwind.css'
import 'remixicon/fonts/remixicon.css'
import store from '../services/redux/store'
import '../pages/yansen/detail/[id]/[name]/index.css'
import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux'
import SideBar from '../layout/sidebar';
import Header from '../layout/header';
import Content from '../layout/content';


function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <Provider store={store}>
      <SideBar />
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
    </Provider>
  )
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
