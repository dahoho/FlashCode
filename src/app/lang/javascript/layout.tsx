const JavaScriptLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-center font-medium text-xl">JavaScript</h1>
      {children}
    </div>
  );
};

export default JavaScriptLayout;
