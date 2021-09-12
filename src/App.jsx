import './App.scss';
import Nav from "./components/Nav/Nav"
import Main from "./components/Main/Main"

const  App =()=> {

  







  return (
    <>
      <Nav/>
      <div className="screen-container">
        <main>
        <Main/>

        </main>
        <aside>

        </aside>
      </div>
    </>
  );
}

export default App;
