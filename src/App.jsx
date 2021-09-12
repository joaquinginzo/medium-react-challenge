import './App.scss';
import Nav from "./components/Nav/Nav"
import Main from "./components/Main/Main"

const  App = () => {

  const mainInfo = {
    title: "Will OpenAI’s Codex Replace Human Programmers?",
    subtitle: "No, but centaurs might",
    author: "Philly Murray to the world",
    date: "12 august - 8min read"
    //problem passing images as props
  }

  const firstArticle = {

  }

  const secondArticle = {

  }

  const thirdArticle = {

  }

  const fourthArticle = {

  }

  const fifthArticle = {
    
  }



  return (
    <>
      <Nav/>
      <div className="screen-container">
        <div className="main">
          <Main
          title={mainInfo.title}
          subtitle={mainInfo.subtitle}
          author={mainInfo.author}
          date={mainInfo.date}
          />
          <div className ="latest">
          <h4>LATEST</h4>
          </div>


        </div>
        <aside>

        </aside>
      </div>
    </>
  );
}

export default App;
