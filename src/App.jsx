import style from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  return (
    <>
      <div id={style.calculator}>
        <Display />

        <ButtonsContainer />
      </div>
    </>
  );
}

export default App;
