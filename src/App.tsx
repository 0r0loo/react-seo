import './App.css';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>페이지 제목</title>
        <meta
          name={'description'}
          content={'helmet 과제를 제출하려고 만든 프로젝트 입니다.'}
        />

        <meta property="og:title" content={'og title'} />
        <meta property="og:description" content={'og description'} />
        <meta property="og:image" content={'og image'} />
        <meta property="og:url" content={'og url'} />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={'twitter title'} />
        <meta name="twitter:description" content={'twitter description'} />
        <meta name="twitter:image" content={'twitter image'} />
        <meta name="twitter:card" content="https://assets.weget.kr/weget.svg" />
      </Helmet>
      <div>
        <h1>React SEO 를 바꿔보는 프로젝트</h1>
        React Helmet
      </div>
    </>
  );
}

export default App;
