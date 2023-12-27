import './App.css';
import WorkCard from './component/work-card/WorkCard';

function App() {
  return (
    <>
      <WorkCard work={{name:'Deneme', description:'asddsasdsd', amount:'18', start:'12/12/2023', finish:"13/12/2023"}}/>
    </>
  );
}

export default App;
