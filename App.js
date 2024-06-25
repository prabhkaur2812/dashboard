import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoute from './routes/mainroute/Mainroute';
import Hr from './pages/screen/hrpage/Hrpage';
import CrmPage from './pages/screen/crmpage/Crmpage';
import AddForm from './pages/screen/crmpage/components/detailtable/components/addform/Addform';
import ToDolist from './pages/screen/todolist/ToDolist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRoute />}>
          <Route path='/hr' element={<Hr />} />
          <Route path='/crm' element={<CrmPage />} />
          <Route path='/addform' element={<AddForm />} />
          <Route path='/todo-list' element={<ToDolist />} />
       </Route>
      </Routes>
    </BrowserRouter>
    )
}
export default App
