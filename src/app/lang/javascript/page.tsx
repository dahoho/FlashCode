import { Container } from "@/components/organisms/Container";

const CATEGORY_ITEMS = [
  {
    title: "ALL",
    discription: "すべてのカテゴリー",
  },
  {
    title: "String",
    discription: "文字列の処理",
  },
  {
    title: "Number",
    discription: "数値の処理",
  },
  {
    title: "Array",
    discription: "配列の処理",
  },
  {
    title: "Object",
    discription: "オブジェクトの処理",
  },
  {
    title: "Function",
    discription: "関数の処理",
  },
  {
    title: "Math",
    discription: "数値の計算",
  },
  {
    title: "Date",
    discription: "日付の処理",
  },
  {
    title: "Promise",
    discription: "非同期の処理",
  },
  {
    title: "グローバル関数",
    discription: "JavaScriptに組み込まれている内部関数",
  },
  {
    title: "JSON",
    discription: "JSONの処理",
  },
];

const JavaScript = () => {
  return (
    <Container>
      <ul className="grid gap-5">
        {CATEGORY_ITEMS.map((item, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </Container>
  );
};

export default JavaScript;
