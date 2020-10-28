import BasicBarChart from './charts/BasicBarChart';
import DonutChart from './charts/DonutChart';
import MultipleYAxisChart from './charts/MultipleYAxisChart';
import ColumnChart from './charts/ColumnChart';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="block">
          <MultipleYAxisChart />
          <DonutChart />  
          <MultipleYAxisChart />
        </div>
        <div className="block borderLeft">
          <MultipleYAxisChart />
          <ColumnChart />
          <BasicBarChart />
        </div>
      </div>
    </div>
  );
}

export default App;
