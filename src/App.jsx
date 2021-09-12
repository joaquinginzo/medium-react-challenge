import './App.scss';
import Nav from "./components/Nav/Nav"
import Main from "./components/Main/Main"
import SingleNew from './components/SingleNew/SingleNew';

const  App = () => {

  const mainInfo = {
    title: "Will OpenAI’s Codex Replace Human Programmers?",
    subtitle: "No, but centaurs might",
    author: "Philly Murray to the world",
    date: "12 august - 8min read"
    //problem passing images as props
  }

  const firstArticle = {
    title:"Map, Filter, and Reduce in Swift",
    paragraph:"Do you want to improve your skills in functional programming with Swift? In this article, we will discuss popular higher-order functions…",
    author:"Arman Abkar",
    date:"11 sept - 7min read"

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
          <SingleNew
          title={firstArticle.title}
          paragraph={firstArticle.paragraph}
          author={firstArticle.author}
          date={firstArticle.date}
          />
          <SingleNew
          title={secondArticle.title}
          paragraph={secondArticle.paragraph}
          author={secondArticle.author}
          date={secondArticle.date}
          />
          <SingleNew
          title={secondArticle.title}
          paragraph={secondArticle.paragraph}
          author={secondArticle.author}
          date={secondArticle.date}
          />
          <SingleNew
          title={thirdArticle.title}
          paragraph={thirdArticle.paragraph}
          author={thirdArticle.author}
          date={thirdArticle.date}
          />
          <SingleNew
          title={firstArticle.title}
          paragraph={firstArticle.paragraph}
          author={firstArticle.author}
          date={firstArticle.date}
          />
          



        </div>
        <aside>

        </aside>
      </div>
    </>
  );
}

export default App;
