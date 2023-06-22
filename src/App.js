import './App.css';
import { TimeseriesChart } from './component/TimeseriesChart';
import data from './data/mockData'

function App() {
  return (
    <div style={{ height: 690 }}>
      <TimeseriesChart data={data}/>
    </div>
  );
}
export default App;
