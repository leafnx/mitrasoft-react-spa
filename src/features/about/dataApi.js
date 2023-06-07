const full_description = `Имею опыт разработки приложений на NodeJS (expressjs, telegraf). Работал с базами данных MongoDB и MySQL, есть небольшой опыт работы с PostgreSQL. Работал с внешними API, имею базовые знания TypeScript.

Занимался разработкой приложений на React (redux-toolkit, redux-saga, react-router), работал с Electron. Есть опыт использования reactstrap и react-bootstrap.

Мне нравится заниматься разработкой, и я хочу развиваться в этом направлении. Надеюсь найти хорошую команду, в которой смогу реализовать свои возможности.`

const short_description = `Junior-разработчик. Занимаюсь разработкой на React и NodeJS`

const aboutMe = {
  email: process.env.REACT_APP_MY_EMAIL,
  full_name: process.env.REACT_APP_MY_FULL_NAME,
  short_description,
  full_description,
  avatar_url: process.env.REACT_APP_USER_AVATAR_URL,
  links: [
    {
      name: 'Telegram',
      url: process.env.REACT_APP_MY_TELEGRAM_URL
    },
    {
      name: 'GitHub',
      url: process.env.REACT_APP_MY_GITHUB_URL
    }
  ]
}

export default function getAboutData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(aboutMe), 50)
  })
}