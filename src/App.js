import GlobalStyles from './Main/GlobalStyles';
import Main from './Main/Main';
import Layout from './Main/Layout';
import RandColor from './Practice/basic/random_color/RandColor';
import FormInput from './Practice/basic/FormInput';
import IterationSample from './Practice/basic/IterationSample';
import ValidationSample from './Practice/basic/ValidationSample';
import ScrollBox from './Practice/basic/ScrollBox';
import ContextPrac from './Practice/context/ContextPrac';
import FormInputAsReduce from './Practice/hook/FormInput';
import Info from './Practice/hook/Info';
import Counter from './Practice/hook/Counter';
import Average from './Practice/hook/Average';
import Immer from './Practice/immer/Immer';
import ReduxTodoList from './Practice/redux_todo_list/ReduxTodoList';
import NotFound from './Practice/NotFound';
import ReactCss from './Practice/styling/ReactCss';
import TodoUpgrade from './Practice/todo_list/TodoUpgrade';
import News from './Practice/news_viewer/News';

import {
  Link,
  Route,
  Routes,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/randcolor" element={<RandColor />} />
            <Route path="/inputform" element={<FormInput />} />
            <Route path="/iteration" element={<IterationSample />} />
            <Route path="/validation" element={<ValidationSample />} />
            <Route path="/scroll" element={<ScrollBox />} />
            <Route path="/immer" element={<Immer />} />
            <Route path="/context" element={<ContextPrac />} />
            <Route path="/inputbyreduce" element={<FormInputAsReduce />} />
            <Route path="/customreduce" element={<Info />} />
            <Route path="/reducecounter" element={<Counter />} />
            <Route path="/averageuseallhook" element={<Average />} />
            <Route path="/reduxtodolist" element={<ReduxTodoList />} />
            <Route path="/reactcss" element={<ReactCss />} />
            <Route path="/todoupgrade" element={<TodoUpgrade />} />
            <Route path="/news/*" element={<News />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
