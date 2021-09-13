import './App.scss';
import Nav from "./components/Nav/Nav"
import Main from "./components/Main/Main"
import SingleNew from './components/SingleNew/SingleNew';
import Featured from "./components/Featured/Featured";
import Programming from './components/Programming/Programming';
import RelatedTopics from './components/RelatedTopics/RelatedTopics';

//Issues : Problems passing images as props
// buggy interaction with same classNames in different scss files. (Overriden?)


const  App = () => {

  const mainInfo = {
    title: "Will OpenAI’s Codex Replace Human Programmers?",
    subtitle: "No, but centaurs might",
    author: "Philly Murray to the world",
    date: "12 august - 8min read"
  }

  const firstArticle = {
    title:"Map, Filter, and Reduce in Swift",
    paragraph:"Do you want to improve your skills in functional programming with Swift? In this article, we will discuss popular higher-order functions…",
    author:"Arman Abkar",
    date:"11 sept - 7 min read"

  }

  const secondArticle = {
    title: "How to Setup Nginx Server On Ubuntu:18.04 /Dockerfile",
    paragraph: "The brand new MapTiler Desktop 11.2 arrived with estimation of rendering time, new default output format, KML for Google Earth, and more!",
    author: "Cedric",
    date:"11 Sept - 5 min read"
  }

  const thirdArticle = {
    title:"The Ultimate Handbook for OpenCV & Pillow",
    paragraph:"In this article, I will list out all the useful codes regarding these libraries. They are listed side by side so that you can compare…",
    author:"Cedric",
    date:"11 Sept - 8 min read"

  }

  const featured = {
    title: "Bill Murray",
    paragraph: "Teacher, coder, long-ago Microsoft MVP. Author of heavy books. Join Young Coder for a creative take on science and technology. Queries: matthew@prosetech.com",
    articleTitle:"Is blazer the future or just another article?",
    articleTime : "7 min read"

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
          title={thirdArticle.title}
          paragraph={thirdArticle.paragraph}
          author={thirdArticle.author}
          date={thirdArticle.date}
          />
          <Featured
          title={featured.title}
          paragraph={featured.paragraph}
          articleTitle={featured.articleTitle}
          />
          <SingleNew
          title={firstArticle.title}
          paragraph={firstArticle.paragraph}
          author={firstArticle.author}
          date={firstArticle.date}
          />
          
        </div>
        <div className="side-bar">
          <Programming/>
          <RelatedTopics/>


        </div>
      </div>
    </>
  );
}

export default App;
