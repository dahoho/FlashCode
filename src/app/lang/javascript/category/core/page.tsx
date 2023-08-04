import { Container } from "@/components/organisms/Container";
import Link from "next/link";

const CATEGORY_ITEMS = [
  {
    title: "ALL",
    discription: "すべてのカテゴリー",
    link: "all",
  },
  {
    title: "String",
    discription: "文字列の処理",
    link: "string",
  },
  {
    title: "Number",
    discription: "数値の処理",
    link: "number",
  },
  {
    title: "Array",
    discription: "配列の処理",
    link: "array",
  },
  {
    title: "Object",
    discription: "オブジェクトの処理",
    link: "object",
  },
  {
    title: "Function",
    discription: "関数の処理",
    link: "function",
  },
  {
    title: "Math",
    discription: "数値の計算",
    link: "math",
  },
  {
    title: "Date",
    discription: "日付の処理",
    link: "date",
  },
  {
    title: "Promise",
    discription: "非同期の処理",
    link: "promise",
  },
  {
    title: "グローバル関数",
    discription: "JavaScriptに組み込まれている内部関数",
    link: "global",
  },
  {
    title: "JSON",
    discription: "JSONの処理",
    link: "json",
  },
];

const Core = () => {
  return (
    <Container>
      <p className="text-center">カテゴリーを選択してください。</p>
      <ul className="grid gap-5 mt-8">
        {CATEGORY_ITEMS.map((item, index) => (
          <li key={index}>
            <Link href={`/lang/javascript/category/core/${item.link}/`}>
              <div className="card">
                <p className="font-medium">{item.title}</p>
                <p className="text-xs mt-2">{item.discription}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Core;
