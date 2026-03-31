export default function Homepage() {
  return (
    <div className="p-5">
        {/* CATEGORIES */}
      <div className="p-3">
        <h1 className="font-bold">CATEGORIES</h1>
        <div className="p-2 flex" style={{overflowX:"scroll"}}>
          <div className="bg-amber-500 p-4 rounded">
            <img src="/vite.svg" alt="" />
          </div>
        </div>
      </div>
      {/* RECENTLY VIEWED */}
      <div className="p-3">
        <h1 className="font-bold">MOST VIEWED</h1>
<div className="grid grid-cols"></div>
      </div>
    </div>
  );
}
