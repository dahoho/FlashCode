// JavaScript-String
export const JAVASCRIPT_STRING_ITEMS = [
  {
    questionTitle: "文字数の長さを取得する",
    code: "str.length()",
    sampleCode: `const str = "こんにちは"; str.length; // 5`,
  },
  {
    questionTitle: "文字列を大文字に変換する",
    code: "str.toUpperCase()",
    sampleCode: `const str = "apple"; str.toUpperCase(); // APPLE`,
  },
  {
    questionTitle: "文字列を小文字に変換する",
    code: "str.toLowerCase()",
    sampleCode: `const str = "APPLE"; str.toLowerCase(); // apple`,
  },
  {
    questionTitle: "n番目の文字を取得する",
    code: "str.charAt()",
    sampleCode: `const str = "プログラミング"; str.charAt(3); // ラ`,
  },
  {
    questionTitle: "start〜end-1文字目を取得（start/end入れ替えあり）",
    code: "str.substring()",
    sampleCode: `const str = "プログラミング";
str.substring(1,3); // ログ
str.substring(2); // グラミング

// start>endの場合、startとendを入れ替えて、end〜start-1文字目を抽出。
str.substring(3,1); // ログ
`,
  },
  {
    questionTitle: "start〜end-1文字目を取得（start/end入れ替えなし）",
    code: "str.slice()",
    sampleCode: `const str = "プログラミング";
str.slice(2,-2); // グラミ
str.slice(2); // グラミング
str.slice(2,4); // グラ

// start>endの場合、空文字列を返す。
str.slice(4, 2); // 空文字列
`,
  },
  {
    questionTitle: "n番目の文字を取得する",
    code: "str.charAt()",
    sampleCode: `const str = "プログラミング"; str.charAt(3); // ラ`,
  },
  {
    questionTitle: "文字列を前方から検索する",
    code: "str.indexOf()",
    sampleCode: `const str = "おはようございます";
str.indexOf('おは'); // 0

// 検索文字列が見つからない場合は-1を返す。
str.indexOf('およ'); // -1

// 3文字目から検索した結果、「ござ」にヒット。
str.indexOf('ござ', 3); // 4

// 第一引数が空文字列の場合、無条件に第二引数の位置を返す。
str.indexOf('', 5) // 5

// 第二引数が負数の場合、無条件に0を返す。
str.indexOf('ござ', -1); // 4

// 第二引数が文字列の長さ以上の場合、文字列の末尾が検索の起点となる。
str.indexOf('ござ, 12'); // -1
`,
  },
  {
    questionTitle: "文字列に特定の文字列が含まれているかを判定する（部分一致）",
    code: "str.includes()",
    sampleCode: `const str = "おはようございます";
str.includes('おは'); // true
str.includes('よう',2); // true
`,
  },
];
