import React from "react";

export default function App() {
  const novels = [
    {
      id: 1,
      title: "รักแรกเฮี้ยน",
      genre: "ระทึกขวัญ / ปริศนา",
      category: "investigation",
      coverImage: "https://lh3.googleusercontent.com/d/ใส่_FILE_ID_รูปที่1",
      synopsis: "เรื่องย่อสั้นๆ น่าติดตามของนิยายเรื่องแรก...",
      status: "กำลังเขียน",
      link: "https://www.readawrite.com/a/8c217ba5a844593692709f4e47c9fb4a?r=my_page",
    },
    {
      id: 2,
      title: "เกมทศชาติ",
      genre: "แฟนตาซี / เอาชีวิตรอด",
      category: "investigation",
      coverImage: "https://lh3.googleusercontent.com/d/ใส่_FILE_ID_รูปที่2",
      synopsis: "เรื่องย่อสั้นๆ ของเรื่องที่สอง...",
      status: "จบแล้ว",
      link: "https://www.readawrite.com/a/1887055b30b942d9a49c4657995bbe59?r=my_page",
    },
    {
      id: 3,
      title: "ฉันสลับร่างกับเธอที่เป็นลูกฆาตกรต่อเนื่อง",
      genre: "แฟนตาซี / เอาชีวิตรอด",
      category: "gl",
      coverImage: "https://lh3.googleusercontent.com/d/ใส่_FILE_ID_รูปที่3",
      synopsis: "เรื่องย่อสั้นๆ ของเรื่องที่สาม...",
      status: "จบแล้ว",
      link: "https://www.readawrite.com/a/e89f70261c49cd1209d76bdb7e73d845?r=my_page",
    },
  ];

  const categories = [
    {
      id: "investigation",
      title: "🔍 สืบสวน / สยองขวัญ / ลึกลับ",
      description: "เรื่องราวปริศนา การไขคดี และเรื่องราวระทึกขวัญชวนติดตาม",
    },
    {
      id: "gl",
      title: "🌸 Girl Love (GL)",
      description: "เรื่องราวความรักและความผูกพันของหญิงสาว",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans py-8 px-4 sm:px-6 md:px-12 scroll-smooth">
      {/* Header Section */}
      <header className="max-w-5xl mx-auto text-center my-8 md:my-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
          คลังผลงานนิยาย
        </h1>
        <p className="text-base sm:text-lg text-slate-400 mb-6">
          รวมผลงานเรื่องยาว เรื่องสั้น และบทละคร
        </p>

        {/* --- แถบเมนูบาร์ (Responsive Wrap & Padding) --- */}
        <nav className="inline-flex flex-wrap justify-center gap-2 sm:gap-3 bg-slate-800/80 backdrop-blur-md p-2 rounded-2xl border border-slate-700/80 shadow-lg max-w-full">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-indigo-600 transition-all duration-200"
            >
              {cat.title}
            </a>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto space-y-16">
        {categories.map((cat) => {
          const filteredNovels = novels.filter((n) => n.category === cat.id);

          if (filteredNovels.length === 0) return null;

          return (
            <section
              key={cat.id}
              id={cat.id}
              className="space-y-6 pt-6 scroll-mt-8"
            >
              {/* หัวข้อหมวดหมู่ */}
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-400">
                  {cat.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {cat.description}
                </p>
              </div>

              {/* การ์ดรายการนิยาย (Grid: 1 บนมือถือ, 2 บนแท็บเล็ต, 3 บนคอม) */}
              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {filteredNovels.map((novel) => (
                  <div
                    key={novel.id}
                    className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all duration-300 flex flex-col justify-between shadow-lg"
                  >
                    <div>
                      {/* รูปปกนิยายสัดส่วนคงที่ */}
                      <div className="w-full aspect-[3/4] bg-slate-700 relative overflow-hidden">
                        <img
                          src={novel.coverImage}
                          alt={novel.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/300x400/1e293b/94a3b8?text=No+Cover";
                          }}
                        />
                      </div>

                      {/* เนื้อหาการ์ด */}
                      <div className="p-4 sm:p-5">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-900/60 text-indigo-300 border border-indigo-700/50">
                            {novel.genre}
                          </span>
                          <span className="text-xs text-slate-400">
                            {novel.status}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-1">
                          {novel.title}
                        </h3>
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                          {novel.synopsis}
                        </p>
                      </div>
                    </div>

                    {/* ปุ่มอ่านต่อ */}
                    <div className="p-4 sm:p-5 pt-0">
                      <a
                        href={novel.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block text-center w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm rounded-xl transition-colors shadow-md"
                      >
                        อ่านต่อบน readAwrite
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
