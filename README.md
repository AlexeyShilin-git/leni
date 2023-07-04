# Сборка приложения с нуля:
1. Сперва проинициализируем проект добавив файл package.json выполнив команду `npm init` 
2. Установка зависимостей: `npm i -D webpack webpack-cli typescript ts-loader webpack-dev-server html-webpack-plugin`: эти уходят в devDependencies
3. Далее `npm i react react-dom cross-env`: эти в dependencies
4. Добавляем файл 'webpack.config.js'

## Подключаем к проекту HMR и SSR
1. Установка зависимостей `npm i -D webpack-dev-middleware webpack-hot-middleware react-hot-loader @hot-loader/react-dom`
2. В файле конфигурации webpack добавить:
module.exports = {
resolve: {
extensions: [".js", ".jsx", ".tsx", ".json"],
alias: { "react-dom": IS_DEV ? "@hot-loader/react-dom" : "react-dom" }
}
}
3. sdaa