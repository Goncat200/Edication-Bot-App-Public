const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf('TELEGRAM_BOT_TOKEN');

// Обработка текстовых сообщений
bot.on('text', (ctx) => {
    ctx.reply(
        'Привет! Я — твой помощник в обучении! 📚\n\n' +
        'Нажми на кнопку ниже, чтобы получить доступ к нашему учебному приложению и начать учиться уже сейчас!\n\n' +
        '✨ Обучение — это ключ к успеху! ✨', 
        Markup.inlineKeyboard([
            Markup.button.url('Начать Обучение',  'https://t.me/TELEGRAM_BOT_NAME/APP_NAME')
        ])
    );
});

// Команда /help
bot.help((ctx) => ctx.reply('Отправь мне стикер или напиши "hi"!'));

// Обработка стикеров
bot.on('sticker', (ctx) => ctx.reply('👍'));

// Обработка сообщения "hi"
bot.hears('hi', (ctx) => ctx.reply('Привет! Как дела?'));

// Дополнительная команда для показа информации о разработчиках
bot.command('developers', (ctx) => {
    ctx.reply('Мои Разработчики это Гончаров Никита Витальевич, Самойлов Саша, Кельдибеков Ильяс');
});

// Запуск бота
bot.launch();

// Обработка graceful stop (для корректного завершения работы)
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
