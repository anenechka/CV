import { useEffect, useState, type ReactNode } from "react";

type IconName =
  | "arrow"
  | "chevron"
  | "download"
  | "graduation"
  | "languages"
  | "mail"
  | "moon"
  | "phone"
  | "pin"
  | "send"
  | "sparkles"
  | "sun"
  | "wrench";

const paths: Record<IconName, ReactNode> = {
  arrow: (
    <>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
  download: (
    <>
      <path d="M12 15V3M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
    </>
  ),
  graduation: (
    <>
      <path d="M21.4 10.9 12.8 5.2a2 2 0 0 0-1.6 0l-8.6 3.9a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.6 0z" />
      <path d="M22 10v6M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </>
  ),
  languages: <path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" />,
  mail: (
    <>
      <path d="m22 7-9 5.7a2 2 0 0 1-2 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </>
  ),
  moon: <path d="M21 12.5a9 9 0 1 1-9.5-9.5c.4 0 .6.5.4.8a6 6 0 0 0 8.3 8.3c.3-.2.8 0 .8.4" />,
  phone: (
    <path d="M13.8 16.6a1 1 0 0 0 1.2-.3l.4-.5A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.5.4a1 1 0 0 0-.3 1.2 14 14 0 0 0 6.4 6.4" />
  ),
  pin: (
    <>
      <path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  send: (
    <>
      <path d="M14.5 21.7a.5.5 0 0 0 1 0l6.5-19a.5.5 0 0 0-.7-.7l-19 6.5a.5.5 0 0 0 0 1l7.9 3.1a2 2 0 0 1 1.2 1.2z" />
      <path d="m21.9 2.1-11 11" />
    </>
  ),
  sparkles: (
    <>
      <path d="M11 2.8a1 1 0 0 1 2 0l1 5.6a2 2 0 0 0 1.6 1.6l5.6 1a1 1 0 0 1 0 2l-5.6 1a2 2 0 0 0-1.6 1.6l-1 5.6a1 1 0 0 1-2 0l-1-5.6A2 2 0 0 0 8.4 14l-5.6-1a1 1 0 0 1 0-2l5.6-1A2 2 0 0 0 10 8.4z" />
      <path d="M20 2v4M22 4h-4" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M5 5l1.3 1.3M17.7 17.7 19 19M2 12h2M20 12h2M6.3 17.7 5 19M19 5l-1.3 1.3" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1c.3-.3.9-.2 1 .2a6 6 0 0 1-8.3 7.1l-7.9 7.9a1 1 0 0 1-3-3l7.9-7.9a6 6 0 0 1 7.1-8.3c.4.1.5.7.2 1z" />
  ),
};

function Icon({ name }: { name: IconName }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const jobs = [
  {
    company: "Сбер Пульс",
    period: "Сентябрь 2024 — настоящее время",
    role: "UX/UI-дизайнер",
    url: "https://developers.sber.ru/portal/products/pulse",
    label: "developers.sber.ru/portal/products/pulse",
    description: "HR-платформа с более 300 000 активных пользователей в день, SaaS B2B / B2C",
    achievements: [
      "Обновила часть функционала в сервисе «BI-аналитика» в соответствии с паттернами и компонентами дизайн-системы;",
      "Адаптировала 2 сервиса под PWA, учитывая особенности продукта и мобильные паттерны;",
      "Сделала новый дизайн отчёта настроения команды. Заменила устаревшие решения;",
      "Разработала интерфейс админки отчёта вовлечённости, которая позволяет больше не привлекать разработчиков при изменении отчёта;",
      "Разработала шаблонные ответы Агента Аналитики.",
    ],
    duties: [
      "Улучшать взаимодействие пользователей с платформой Сбер Пульс в сервисе аналитики;",
      "Анализировать и оптимизировать существующие сценарии и интерфейсные решения;",
      "Разрабатывать интерфейсы и передавать их в разработку;",
      "Разрабатывать и улучшать PWA совместно с разработчиками;",
      "Проверять разработку на дев-стенде на соответствие дизайн-макетам;",
      "Работать с 4 продуктовыми командами;",
      "Обучать младшего дизайнера.",
    ],
  },
  {
    company: "TSQ Consulting",
    period: "Июнь 2023 — август 2024",
    role: "Руководитель отдела дизайна",
    url: "https://tsqconsulting.ru/",
    label: "tsqconsulting.ru",
    description: "HR-консалтинг для среднего и крупного бизнеса, B2B",
    achievements: [
      "Вместе с командой разработали и сверстали на Tilda Publishing 10 продуктовых лендингов, 6 кейсов и 8 лендингов для мероприятий.",
      "Выстроила с нуля отдел дизайна, наладила процессы внутри команды и взаимодействие с другими отделами;",
      "Сформировала команду дизайнеров из 4 человек, проведя найм и отбор кандидатов;",
      "Описала и внедрила систему грейдов для дизайнеров;",
      "Внедрила еженедельные ретро для аналитики отдела, обучала и сопровождала рост дизайнеров.",
    ],
    duties: [
      "Планировала загрузку дизайн-команды, оценивала проекты, готовила сметы и вела коммуникацию с клиентами;",
      "Разрабатывала лендинги продуктов и вебинаров, оформляла кейсы и статьи;",
      "Создавала дизайн-материалы разной сложности;",
      "Оформляла коммерческие предложения и презентации;",
      "Готовила макеты в печать.",
    ],
  },
  {
    company: "Educate Online",
    period: "Сентябрь 2021 — май 2023",
    role: "Продуктовый дизайнер",
    url: "https://educate-online.org/",
    label: "educate-online.org",
    description: "Онлайн-обучение в международных школах, EdTech, B2C",
    achievements: [
      "Разработала дизайн личного кабинета ученика и родителя;",
      "Создала и поддерживала UI-kit продукта;",
      "Разработала новый дизайн сайта для индийского направления совместно с верстальщиком;",
      "Разработала мерч для реферальной программы.",
    ],
    duties: [
      "Проектировала пользовательские сценарии и интерфейсы образовательной платформы;",
      "Проводила UX-исследования, интервью и тестирование решений;",
      "Работала вместе с продуктовой командой и разработчиками.",
    ],
  },
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="bullets">
      {items.map((x) => (
        <li key={x}>
          <i />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  );
}
function Details({ title, items, open }: { title: string; items: string[]; open?: boolean }) {
  return (
    <details open={open}>
      <summary>
        {title}
        <Icon name="chevron" />
      </summary>
      <Bullets items={items} />
    </details>
  );
}
function Heading({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="section-heading">
      <small>{n}</small>
      <h2>{children}</h2>
      <i />
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(() =>
    localStorage.theme
      ? localStorage.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches,
  );
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <div className="page">
      <header>
        <div className="header-inner">
          <a className="identity" href="#top">
            <img src="/avatar.png" alt="Аватар Ани" />
            <span>Анна Ревва · UX/UI-дизайнер</span>
          </a>
          <nav>
            <a
              href="https://t.me/annarevva_design"
              target="_blank"
              rel="noreferrer"
              aria-label="Написать в Telegram"
            >
              <Icon name="send" />
            </a>
            <button onClick={() => setDark(!dark)} aria-label="Переключить тему">
              <Icon name={dark ? "moon" : "sun"} />
            </button>
          </nav>
        </div>
      </header>
      <main>
        <section className="hero" id="top">
          <div className="glow" />
          <div className="container">
            <div className="intro">
              <img src="/avatar.png" alt="Аватар Ани" />
              <div>
                <h1>Привет, меня зовут Аня!</h1>
                <p>UX/UI-дизайнер · Санкт-Петербург</p>
              </div>
            </div>
            <p className="about">
              Я UX/UI-дизайнер с художественным образованием. В своей работе стремлюсь находить
              баланс между интересами пользователя и задачами продукта. Осваиваю новые инструменты и
              технологии — в арсенале есть навыки 3D, монтажа и анимации. Открыта новым задачам и
              всегда рада пообщаться!
            </p>
            <ul className="quick">
              <li>
                <Icon name="pin" />
                Санкт-Петербург
              </li>
              <li>
                <Icon name="phone" />
                <a href="tel:+79019785961">+7 (901) 978-59-61</a>
              </li>
              <li>
                <Icon name="mail" />
                <a href="mailto:wizzartrevva@yandex.ru">wizzartrevva@yandex.ru</a>
              </li>
            </ul>
            <div className="actions">
              <a
                className="button primary"
                href="https://t.me/annarevva_design"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="send" />
                Написать в Telegram
              </a>
              <a className="button secondary" href="/resume.pdf" download>
                <Icon name="download" />
                Скачать резюме
              </a>
            </div>
          </div>
        </section>
        <div className="container content">
          <section>
            <Heading n="01">Опыт работы</Heading>
            <ol className="timeline">
              {jobs.map((job, i) => (
                <li className="job" key={job.company}>
                  <b className="dot" />
                  <div className="job-title">
                    <h3>{job.company}</h3>
                    <time>{job.period}</time>
                  </div>
                  <p className="role">{job.role}</p>
                  <a className="company-link" href={job.url} target="_blank" rel="noreferrer">
                    {job.label}
                    <Icon name="arrow" />
                  </a>
                  <p className="description">{job.description}</p>
                  <div className="detail-list">
                    <Details title="Достижения" items={job.achievements} open={i === 0} />
                    <Details title="Обязанности" items={job.duties} />
                  </div>
                </li>
              ))}
            </ol>
          </section>
          <section>
            <Heading n="02">Инструменты и навыки</Heading>
            <div className="grid">
              <article className="card">
                <h3>
                  <Icon name="wrench" />
                  Инструменты
                </h3>
                <ul className="tags">
                  {[
                    "Figma",
                    "Pixso",
                    "Tilda Publishing",
                    "Framer",
                    "Adobe Photoshop",
                    "Adobe Illustrator",
                    "Cinema 4D",
                    "Spline",
                    "Adobe Premiere Pro",
                    "Adobe After Effects",
                    "Lottie Files",
                    "Procreate",
                  ].map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </article>
              <article className="card">
                <h3>
                  <Icon name="sparkles" />
                  Навыки
                </h3>
                <Bullets
                  items={[
                    "Дизайн веб-интерфейсов и мобильных приложений",
                    "Вёрстка сайтов и лендингов на конструкторах",
                    "UX-исследования, проведение интервью и опросов",
                    "JTBD",
                    "3D-моделирование",
                    "2D-иллюстрация: векторная и растровая",
                    "HTML, CSS — базовые знания",
                  ]}
                />
              </article>
            </div>
          </section>
          <section>
            <Heading n="03">Образование и языки</Heading>
            <ul className="education">
              {[
                ["WNBL Rozov", "Продуктовый дизайн, 2023"],
                [
                  "СПбГУ промышленных технологий и дизайна",
                  "Прикладная информатика в дизайне, 2021",
                ],
                ["Gonzo Design", "Графический дизайн, 2019"],
              ].map(([a, b]) => (
                <li key={a}>
                  <Icon name="graduation" />
                  <div>
                    <strong>{a}</strong>
                    <span>{b}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="language">
              <Icon name="languages" />
              <b>English</b>
              <span> — уровень B1/B2</span>
            </div>
          </section>
          <section>
            <Heading n="04">Контакты</Heading>
            <div className="contacts">
              <h3>Открыта новым задачам — давайте пообщаемся!</h3>
              <ul>
                {(
                  [
                    ["send", "Telegram", "@annarevva_design", "https://t.me/annarevva_design"],
                    ["phone", "Телефон", "+7 (901) 978-59-61", "tel:+79019785961"],
                    ["mail", "Почта", "wizzartrevva@yandex.ru", "mailto:wizzartrevva@yandex.ru"],
                  ] as [IconName, string, string, string][]
                ).map(([icon, label, value, href]) => (
                  <li key={label}>
                    <a href={href}>
                      <i>
                        <Icon name={icon} />
                      </i>
                      <b>{label}</b>
                      <span>{value}</span>
                      <Icon name="arrow" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
      <footer>Аня · UX/UI-дизайнер · Санкт-Петербург</footer>
    </div>
  );
}
