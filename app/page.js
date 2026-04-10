"use client"

import { useState } from "react";

const content = {
  ru: {
    name: " Анна Киряченко",
    title: "Мастер маникюра",
    city: "Холон",
    about: "Привет! Я Анна, начинающий мастер маникюра. Мои работы отличаются превосходным качеством и долгой ноской. Работаю с гелем, акригелем и натуральными ногтями. Создаю дизайны под любой образ.",
    services: "Услуги",
    portfolio: "Мои работы",
    reviews:"Отзывы" ,
    contact: "Записаться" ,
    whatsapp: "Написать в WhatsApp",
    serviceList: [
      { name: "Маникюр", price: "150 ₪", time: "60 мин" },
      { name: "Педикюр", price: "250 ₪", time: "75 мин" },
      { name: "Гель-лак", price: "200 ₪", time: "90 мин" },
      { name: "Наращивание", price: "300 ₪", time: "120 мин" },
    ],
    reviewList: [
      { name: "Мария", text: "Потрясающая работа! Ногти держатся уже 3 недели без сколов." },
      { name: "Светлана", text: "Очень аккуратно и быстро. Буду приходить снова!" },
      { name: "Юля", text: "Анна — настоящий профессионал. Дизайн получился именно таким, как я хотела." },
    ],
  },
  he: {
    name: "אנה",
    title: "מומחית מניקור",
    city: "חולון",
    about: "היי. עובדת עם ג'ל, אקריל וציפורניים טבעיות. יוצרת עיצובים לכל סגנון.",
    services: "שירותים",
    portfolio: "העבודות שלי",
    reviews: "המלצות",
    contact: "לקביעת תור",
    whatsapp: "כתבי לי בוואטסאפ",
    serviceList: [
      { name: "מניקור", price: "80 ₪", time: "60 דקות" },
      { name: "פדיקור", price: "100 ₪", time: "75 דקות" },
      { name: "לק ג'ל", price: "120 ₪", time: "90 דקות" },
      { name: "בניית ציפורניים", price: "200 ₪", time: "120 דקות" },
    ],
    reviewList: [
      { name: "מריה", text: "עבודה מדהימה! הציפורניים מחזיקות כבר 3 שבועות." },
      { name: "יוליה", text: "מאוד מדויק ומהיר. אחזור בהחלט!" },
      { name: "אנה", text: "מקצועית אמיתית. העיצוב יצא בדיוק כפי שרציתי." },
    ],
  },
}

export default function Home() {
  const [lang, setLang ] = useState('ru');
  const t = content[lang];
  const isHebrew = lang === 'he';

  return ( 
  <>
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
            <h1 className="text-3xl font-bold text-rose-700 mb-2">{t.name}</h1>
        <p className="text-rose-400 text-lg mb-6">{t.title} · {t.city}</p>
        
          <a href="https://wa.me/972501234567"
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
        <h2 className="text-2xl font-semibold text-rose-600 text-center mb-8">{t.services}</h2>
        <div className="max-w-xl mx-auto flex flex-col gap-3">
          {t.serviceList.map((s, i) => (
            <div key={i} className="flex justify-between items-center bg-rose-50 rounded-2xl px-5 py-4 shadow-sm">
              <span className="text-rose-700 font-medium">{s.name}</span>
              <div className="text-right text-sm text-rose-400">
                <div className="font-semibold text-rose-600">{s.price}</div>
                <div>{s.time}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
          {/* Портфолио */}
<section className="px-6 py-12 bg-white">
  <h2 className="text-2xl font-semibold text-rose-600 text-center mb-8">{t.portfolio}</h2>
  <div className="max-w-xl mx-auto grid grid-cols-3 gap-3">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-rose-100">
        <img
          src={`https://picsum.photos/seed/nail${i}/300/300`}
          alt=""
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    ))}
  </div>
</section>
      {/* Отзывы */}
      <section className="px-6 py-12 bg-rose-50">
        <h2 className="text-2xl font-semibold text-rose-600 text-center mb-8">{t.reviews}</h2>
        <div className="max-w-xl mx-auto flex flex-col gap-4">
          {t.reviewList.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl px-5 py-4 shadow-sm">
              <p className="text-rose-500 font-semibold mb-1">{r.name}</p>
              <p className="text-rose-600 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Контакты */}
      <section className="px-6 py-12 bg-white text-center">
        <h2 className="text-2xl font-semibold text-rose-600 mb-6">{t.contact}</h2>
        
          <a href="https://wa.me/972501234567"
          target="_blank"
          className="inline-block bg-rose-400 text-white px-10 py-4 rounded-full text-lg font-medium shadow-md hover:bg-rose-500 transition-all"
        >
          {t.whatsapp}
        </a>
      </section>

      {/* Подвал */}
      <footer className="text-center py-6 text-rose-300 text-sm bg-rose-50">
        © 2026 {t.name}
      </footer>
      </main>
  );
{/* Плавающая кнопка WhatsApp */}

  < a href="https://wa.me/972501234567"
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
