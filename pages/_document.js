import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

//기본 문서 형식을 지정하는 파일
//서버사이드에서 단 1회만 로드
//즉 SPA에서 변경할 수 없는 정적인 부분만 처리해야 함
//ex) 페이지 전체에서 사용할 라이브러리 추가, meta 설정
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <div id="root">
            <Main />
            <NextScript />
          </div>
        </body>
      </html>
    );
  }
}
