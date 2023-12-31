import { Container } from "@/components/organisms/Container";
import { JAVASCRIPT_STRING_ITEMS } from "@/data";
import Link from "next/link";

const CATEGORY_ITEMS = [
  // {
  //   title: "ALL",
  //   discription: "すべてのカテゴリー",
  //   link: "all",
  // },
  {
    title: "String",
    discription: "文字列を操作する",
    link: "string",
    itemsLength: JAVASCRIPT_STRING_ITEMS.length,
  },
  // {
  //   title: "Number",
  //   discription: "数値リテラルを操作する",
  //   link: "number",
  // },
  // {
  //   title: "Date",
  //   discription: "日付/時刻値を操作する",
  //   link: "date",
  // },
  // {
  //   title: "Array",
  //   discription: "値の集合を管理/操作する",
  //   link: "array",
  // },
  // {
  //   title: "Mapオブジェクト",
  //   discription: "連想配列を操作する",
  //   link: "map",
  // },
  // {
  //   title: "Setオブジェクト",
  //   discription: "重複しない値の集合を操作する",
  //   link: "set",
  // },
  // {
  //   title: "その他のオブジェクト",
  //   link: "other",
  // },
];

const BuiltIn: React.FC = () => {
  return (
    <Container>
      <p className="text-center text-sm mt-10">カテゴリーを選択してください。</p>
      <ul className="grid gap-5 mt-8">
        {CATEGORY_ITEMS.map((item, index) => (
          <li key={index}>
            <Link href={`/lang/javascript/category/built-in/${item.link}/`}>
              <div className="card flex justify-between items-end">
                <div>
                  <p className="font-medium text-lg">{item.title}</p>
                  <p className="text-xs mt-2">{item.discription}</p>
                </div>
                <p className="text-xs mt-2">全{item.itemsLength}問</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default BuiltIn;
