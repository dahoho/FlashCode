import { Container } from "@/components/organisms/Container";

const CATEGORY_ITEMS = [
  {
    title: "ALL",
    discription: "すべてのカテゴリー",
  },
  {
    title: "DOM",
    discription: "DOMの処理",
  },
  {
    title: "Canvas",
    discription: "Canvas要素による描画処理",
  },
  {
    title: "Window",
    discription: "ウィンドウの処理",
  },
  {
    title: "Event",
    discription: "イベントの処理",
  },
  {
    title: "History",
    discription: "履歴の処理",
  },
  {
    title: "Fetch",
    discription: "リクエストの処理",
  },
  {
    title: "File",
    discription: "ファイルの処理",
  },
  {
    title: "Console",
    discription: "コンソールの処理",
  },
];

const Client = () => {
  return (
    <Container>
      <p className="text-center">カテゴリーを選択してください。</p>
      <ul className="grid gap-5 mt-8">
        {CATEGORY_ITEMS.map((item, index) => (
          <li key={index}>
            <div className="card">
              <p className="font-medium">{item.title}</p>
              <p>{item.discription}</p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Client;
