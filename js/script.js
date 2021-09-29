window.addEventListener("DOMContentLoaded", () => {


    const quotesBlock = document.querySelector('.quotes-content__descr'),
          quotesBtn = document.querySelector('.quotes-content__btn'),
          quotesAuthor = document.querySelector('.quotes-content__title');

    const quotes = {
        "Борис Пастернак": "Жить и сгорать у всех в обычае, Но жизнь тогда лишь обессмертишь, Когда ей к свету и величию Своею жертвой путь прочертишь.",
        "Джордж Бернард Шоу": "Ты не научишься кататься на коньках, если боишься быть смешным. Лед жизни скользок.",
        "Лев Толстой": "Есть ли в моей жизни смысл, который не будет разрушен неминуемой смертью, ожидающей меня?",
        "Альбий Тибулл": "Даже жестокие сердца побеждает ласковая просьба.",
        "Джон Толкин": "Лучше журавль в небе, чем комок в горле.",
        "Уильям Моэм": "Жизнь на десять процентов состоит из того, что вы в ней делаете, а на девяносто – из того, как вы её принимаете.",
        "Владимир Набоков": "Свобода — это возможность сказать, что дважды два — четыре.",
        "Чак Паланик": "Трудно забыть боль, но еще труднее вспомнить радость. Счастье не оставляет памятных шрамов.",
        "Фёдор Достоевский": "Завет писателям: не нужно выдумывать интриги и сюжеты. Пользуйтесь сюжетами, которые предоставляет сама жизнь.",
        "Эрих Ремарк": "Ничто так не подбадривает струсившего, как трусость другого человека.",
        "Энрике Понсела": "То, что читается без труда, было написано с огромным трудом.",
        "Жан Жак Руссо": "Первая и важнейшее качество женщины — кроткость.",
        "Николай Чернышевский": "Прекрасное есть жизнь",
        "Джек Лондон": "Мужчина ни разу не получивший раны от любви к женщине — это половина мужчины.",
        "франц Кафка": "Любой, кто обладает способностью видеть красоту, никогда не стареет.",
        "Пауло Коэльо": "Если тебе не нравится то, что ты получаешь, измени то, что ты даёшь.",
        "Ричард Бах": "Дайте миру жить так, как он посчитает нужным, и он позволит вам жить так, как выберите вы.",
        "Диана Сеттерфилд": "Решения, принятые глухой ночью, обычно теряют силу при свете дня.",
    }

    function showAnimate() {
        quotesBlock.classList.add('fade');
        quotesAuthor.classList.add('fade');
        setTimeout(() => {
            quotesBlock.classList.remove('fade');
            quotesAuthor.classList.remove('fade');  
        }, 400);
    }


    quotesBtn.addEventListener('click', () => {
        let authors = Object.keys(quotes);
        let author = authors[Math.floor(Math.random() * authors.length)];
        let quote = quotes[author];

        quotesBlock.innerHTML = quote;
        quotesAuthor.innerHTML = author;
        showAnimate();
    });


    

    
});
