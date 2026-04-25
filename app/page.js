"use client"

import { useState } from "react";
import { InlineWidget } from "react-calendly";
import Vine from "./components/Vine"

const content = {
  ru: {
    name: " Анна Киряченко",
    title: "Мастер маникюра",
    city: "Холон",
    about: "Привет! Я Анна. Маникюр — моя страсть, и каждая работа для меня важна. Я в начале пути, но уже сейчас вкладываю в каждый ноготок максимум внимания и аккуратности. Работаю с гелем, акригелем и натуральными ногтями — и очень люблю, когда клиентка уходит довольной 🌸",
    services: "Услуги",
    portfolio: "Мои работы",
    reviews:"Отзывы" ,
    contact: "Запись" ,
    whatsapp: "Написать в WhatsApp",
   serviceList: [
  { name: "Маникюр + Гель", desc: "Замачивание, придание формы, полировка и нанесение гель-лака.", price: "200 ₪", time: "60 мин" },
  { name: "Экспресс маникюр", desc: "Форма, шлифовка и покрытие.", price: "100 ₪", time: "20 мин" },
  { name: "Традиционный маникюр", desc: "Замачивание, придание формы, полировка и шлифовка. Идеально для еженедельного ухода.", price: "200 ₪", time: "30 мин" },
  { name: "Наращивание + маникюр гель", desc: null, price: "450 ₪", time: "120 мин" },
  { name: "Коррекция наращенных + маникюр гель", desc: null, price: "300 ₪", time: "80 мин" },
  { name: "Снятие гель-лака", desc: null, price: "50 ₪", time: "15 мин" },
  { name: "Снятие гель-конструктора / акригеля", desc: null, price: "90 ₪", time: "25 мин" },
  { name: "Французский маникюр", desc: "Дополнительная стоимость к любой услуге.", price: "50 ₪", time: "20 мин" },
  { name: "Спа-маникюр", desc: "Натуральный скраб, омолаживающий пилинг, интенсивный бальзам для кутикулы, парафиновая процедура и увлажняющий массаж.", price: "300 ₪", time: "120 мин" },
  { name: "Традиционный педикюр", desc: "Ванночка, скраб-пилинг, придание формы, уход за кутикулой и полировка.", price: "250 ₪", time: "50 мин" },
  { name: "Экспресс-педикюр", desc: "Замачивание, придание формы, нанесение лака и покрытие.", price: "150 ₪", time: "15 мин" },
  { name: "Медицинский педикюр", desc: null, price: "300 ₪", time: "120 мин" },
  { name: "Экспресс-педикюр + гель-лак", desc: "Пилирование и гель-лак.", price: "200 ₪", time: "45 мин" },
  { name: "Традиционный педикюр + гель-лак", desc: null, price: "280 ₪", time: "60 мин" },
],
showMore: "Показать все услуги",
showLess: "Скрыть",
    reviewList: [
      { name: "Мария", text: "Потрясающая работа! Ногти держатся уже 3 недели без сколов." },
      { name: "Светлана", text: "Очень аккуратно и быстро. Буду приходить снова!" },
      { name: "Юля", text: "Анна — настоящий профессионал. Дизайн получился именно таким, как я хотела." },
    ],
  book: "Записаться онлайн",
  },
  he: {
    name: "אנה קיריאצ'נקו",
    title: "מומחית מניקור",
    city: "חולון",
    about: "היי! אני אנה. מניקור זו התשוקה שלי, וכל עבודה חשובה לי. אני בתחילת הדרך, אבל כבר עכשיו אני משקיעה בכל ציפורן את מלוא תשומת הלב והדיוק שלי. עובדת עם ג'ל, אקריג'ל וציפורניים טבעיות — ואני פשוט אוהבת כשהלקוחה עוזבת עם חיוך 🌸",
    services: "שירותים",
    portfolio: "העבודות שלי",
    reviews: "המלצות",
    contact: "לקביעת תור",
    whatsapp: "כתבי לי בוואטסאפ",
    serviceList: [
  { name: "מניקור + ג'ל", desc: "השריה, עיצוב צורה, ליטוש ומריחת לק ג'ל.", price: "200 ₪", time: "60 דקות" },
  { name: "מניקור אקספרס", desc: "עיצוב צורה, ליטוש וציפוי.", price: "100 ₪", time: "20 דקות" },
  { name: "מניקור מסורתי", desc: "השריה, עיצוב צורה, ליטוש וחידוד. הטיפול האידיאלי לטיפוח שבועי.", price: "200 ₪", time: "30 דקות" },
  { name: "בניית ציפורניים + מניקור ג'ל", desc: null, price: "450 ₪", time: "120 דקות" },
  { name: "תיקון ציפורניים מוארכות + מניקור ג'ל", desc: null, price: "300 ₪", time: "80 דקות" },
  { name: "הסרת לק ג'ל", desc: null, price: "50 ₪", time: "15 דקות" },
  { name: "הסרת ג'ל בונדר / אקריג'ל", desc: null, price: "90 ₪", time: "25 דקות" },
  { name: "מניקור צרפתי", desc: "עלות נוספת לכל שירות.", price: "50 ₪", time: "20 דקות" },
  { name: "ספא מניקור", desc: "סקראב טבעי, פילינג מחדש, בלסם אינטנסיבי לקוטיקולה, טיפול פרפין ועיסוי לחות.", price: "300 ₪", time: "120 דקות" },
  { name: "פדיקור מסורתי", desc: "אמבטיה, פילינג סקראב, עיצוב צורה, טיפול בקוטיקולה וליטוש.", price: "250 ₪", time: "50 דקות" },
  { name: "פדיקור אקספרס", desc: "השריה, עיצוב צורה, מריחת לק וציפוי.", price: "150 ₪", time: "15 דקות" },
  { name: "פדיקור רפואי", desc: null, price: "300 ₪", time: "120 דקות" },
  { name: "פדיקור אקספרס + לק ג'ל", desc: "פילינג ולק ג'ל.", price: "200 ₪", time: "45 דקות" },
  { name: "פדיקור מסורתי + לק ג'ל", desc: null, price: "280 ₪", time: "60 דקות" },
],
showMore: "הצג את כל השירותים",
showLess: "הסתר",
    reviewList: [
      { name: "מריה", text: "עבודה מדהימה! הציפורניים מחזיקות כבר 3 שבועות." },
      { name: "יוליה", text: "מאוד מדויק ומהיר. אחזור בהחלט!" },
      { name: "אנה", text: "מקצועית אמיתית. העיצוב יצא בדיוק כפי שרציתי." },
    ],
 book: "קביעת תור אונליין"
  },
}

export default function Home() {
  const [lang, setLang ] = useState('ru');
  const [showAllServices, setShowAllServices] = useState(false);
  const t = content[lang];
  const isHebrew = lang === 'he';

  const workImages = [
  "1-1.png",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
 
  ];

  // Генерируем ровно 6 картинок — если файлов меньше, повторяем
const galleryImages = Array.from({ length: 6 }, (_, i) => workImages[i % workImages.length])

  return ( 
  <>
       <Vine side="left" />
  <Vine side="right" />

      <main dir={isHebrew ? 'rtl' : 'ltr'}
        className = "min-h-screen bg-rose-50 font-sans" >
    
        {/* Toggle language*/}
        <div dir="ltr" className="fixed top-4 right-4 z-50 flex gap-2">
          <button onClick={() => setLang('ru')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
            lang === "ru" ? "bg-rose-300 text-white" : "bg-white text-rose-400 border border-rose-200"
          }`}>
             RU 
          </button>
          <button onClick={() => setLang('he')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
            lang === "he" ? "bg-rose-300 text-white" : "bg-white text-rose-400 border border-rose-200"
          }`}>
             HE
          </button>
        </div>

        {/* Hero */}
          <section className='flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 bg-gradient-to-b from-rose-100 to-rose-50'>
            
            <div className="w-32 h-32 rounded-full bg-rose-200 mb-6 overflow-hidden">
              <img
            src="AnnaK-logo.jpeg"
            alt="Фото мастера"
            className="w-full h-full object-cover"
          />
            </div>
            <h1 className={`font-bold text-rose-700 mb-2 ${
  lang === "ru"
    ? "font-[family-name:var(--font-great-vibes)] text-5xl"
    : "font-[family-name:var(--font-frank-ruhl)] text-3xl"
}`}>
  {t.name}
</h1>
        <p className="text-rose-400 text-lg mb-6">{t.title} · {t.city}</p>
        
          <a href="https://wa.me/972509222832"
          target="_blank"
          className="bg-rose-400 text-white px-8 py-3 rounded-full text-base font-medium shadow-md hover:bg-rose-500 transition-all"
        >
          {t.whatsapp}
        </a>
       </section>
        
          {/* О себе */}
      <section className="max-w-xl mx-auto px-6 py-12 text-center">
        <p className="text-rose-600 text-base leading-relaxed">{t.about}</p>
      </section>
               {/* Услуги */}
<section className="bg-white px-6 py-12">
  <h2 className={`font-bold text-rose-700 mb-2 ${
  lang === "ru"
    ? "font-[family-name:var(--font-great-vibes)] text-5xl"
    : "font-[family-name:var(--font-frank-ruhl)] text-3xl"
}`}>{t.services}</h2>

  <div className="max-w-xl mx-auto flex flex-col gap-3">
    {(showAllServices ? t.serviceList : t.serviceList.slice(0, 5)).map((s, i) => (
      <div key={i} className="bg-rose-50 rounded-2xl px-5 py-4 shadow-sm">
        <div className="flex justify-between items-start gap-4">
          <span className="text-rose-700 font-semibold">{s.name}</span>
          <div className={`text-sm text-rose-400 shrink-0 ${isHebrew ? "text-left" : "text-right"}`}>
            <div className="font-semibold text-rose-600">{s.price}</div>
            <div>{s.time}</div>
          </div>
        </div>
        {s.desc && (
          <p className="text-rose-400 text-xs mt-1 leading-relaxed">{s.desc}</p>
        )}
      </div>
    ))}
  </div>

  <div className="text-center mt-6">
    <button
      onClick={() => setShowAllServices(!showAllServices)}
      className="text-rose-400 text-sm border border-rose-200 px-6 py-2 rounded-full hover:bg-rose-50 transition-all"
    >
      {showAllServices ? t.showLess : t.showMore}
    </button>
  </div>
</section>

      {/* Портфолио */}
    <section className="px-6 py-12 bg-white">
      <h2 className={`font-bold text-rose-700 mb-2 ${
  lang === "ru"
    ? "font-[family-name:var(--font-great-vibes)] text-5xl"
    : "font-[family-name:var(--font-frank-ruhl)] text-3xl"
}`}>{t.portfolio}</h2>
      <div className="max-w-xl mx-auto grid grid-cols-3 gap-3">
        {galleryImages.map((img, i) => (
          <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-rose-100">
            <img
              src={`/works/${img}`}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
      {/* Отзывы */}
      <section className="px-6 py-12 bg-rose-50">
        <h2 className={`font-bold text-rose-700 mb-2 ${
  lang === "ru"
    ? "font-[family-name:var(--font-great-vibes)] text-5xl"
    : "font-[family-name:var(--font-frank-ruhl)] text-3xl"
}`}>{t.reviews}</h2>
        <div className="max-w-xl mx-auto flex flex-col gap-4">
          {t.reviewList.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl px-5 py-4 shadow-sm">
              <p className="text-rose-500 font-semibold mb-1">{r.name}</p>
              <p className="text-rose-600 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

    {/* Запись */}
<section className="px-6 py-12 bg-white">
  <h2 className={`font-bold text-rose-700 mb-2 ${
  lang === "ru"
    ? "font-[family-name:var(--font-great-vibes)] text-5xl"
    : "font-[family-name:var(--font-frank-ruhl)] text-3xl"
}`}>{t.book}</h2>
  <div className="max-w-xl mx-auto rounded-2xl overflow-hidden shadow-sm">
     <InlineWidget
      url="https://calendly.com/ninorichi-israel/30min"
      styles={{ height: "650px" }}
    />
  </div>
</section>

      {/* Подвал */}
      <footer className="text-center py-6 text-rose-300 text-sm bg-rose-50">
        © 2026 Made with💕to Anna's works <a href="https://www.instagram.com/_mrs_ekaterina_smith_/" className={`font-bold`}>by Ekaterina Morzhakova</a>
      </footer>
      </main>
  );
{/* Плавающая кнопка WhatsApp */}

  < a href="https://wa.me/972509222832"
  target="_blank"
  className="fixed bottom-6 left-6 z-50 bg-green-400 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-green-500 transition-all hover:scale-110"
  aria-label="WhatsApp"
>
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.525 5.845L.057 23.552a.75.75 0 0 0 .906.921l5.857-1.533A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.523-5.188-1.427l-.372-.22-3.843 1.006 1.006-3.741-.242-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
</a>
</>
  )
}
