import Nav from "./../src/components/Nav";

export default function getStarted() {
  return (
    <>
      <Nav />
      <div className="container">
        <h1>시작하기</h1>
        <p>npm을 통해 CLI를 설치합니다.</p>
        <code>npm i -g codelab-2nd-cli</code>
      </div>
    </>
  );
}
