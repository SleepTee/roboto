let debtor_list = [{"contact":"Абдухалилов Сардор Равшан","date":"31.12.2020","days":1,"subdivision":"Чабыкин ИП"},{"contact":"Азизов Ахлиддин Валиевич","date":"01.01.2021","days":2,"subdivision":"Окна Форте"},{"contact":"Атаджанов Гайрат Аминович","date":"04.01.2021","days":5,"subdivision":"ВентКондиционерСервис"},{"contact":"Бобоев Сафармад Авалбоевич","date":"06.01.2021","days":7,"subdivision":"Фильтровальные материалы"},{"contact":"Бобомуродов Хамидулло Сайпиллоевич","date":"05.01.2021","days":6,"subdivision":"Камышовая 38"},{"contact":"Гулов Джалолидин Рахмоналиевич","date":"02.01.2021","days":3,"subdivision":"Окна Форте"},{"contact":"Джумамуратов Джавланбек Алимбаевич","date":"03.01.2021","days":4,"subdivision":"Окна Форте"},{"contact":"Кабулова Санобар Абдиджапаровна","date":"03.01.2021","days":4,"subdivision":"Браво"},{"contact":"Мавлянова Дилнавоз Мехридиновна","date":"02.01.2021","days":3,"subdivision":"ЛВР АС"},{"contact":"Мамаджонов Дониёр Махматалиевич","date":"31.12.2020","days":1,"subdivision":"Арч Групп"},{"contact":"Маткаримова Саида Кушназаровна","date":"07.01.2021","days":8,"subdivision":"ЛД-ПРИНТ"},{"contact":"Махмадалиев Мухаммадали Ятимович","date":"07.01.2021","days":8,"subdivision":"Полячков ИП"},{"contact":"Мирзарахимов Музаффар Бегмурадович","date":"04.01.2021","days":5,"subdivision":"ЛД-ПРИНТ"},{"contact":"Мусурмонов Зухриддин Зафарович","date":"06.01.2021","days":7,"subdivision":"СоюзХимИнвест"},{"contact":"Наджимова Гулбахор Одиловна","date":"06.01.2021","days":7,"subdivision":"Финфлекс"},{"contact":"Негматова Гуландон Анваровна","date":"06.01.2021","days":7,"subdivision":"Фрегат"},{"contact":"Нематов Фаррухджон Шарифджонович","date":"03.01.2021","days":4,"subdivision":"РЖЕВКА-ХЛЕБ"},{"contact":"Ризаев Анвар Нормахматович","date":"05.01.2021","days":6,"subdivision":"Финфлекс"},{"contact":"Сатторов Наим Валиевич","date":"31.12.2020","days":1,"subdivision":"Авиатор-2"},{"contact":"Толибов Абдукахор Абдуразокович","date":"02.01.2021","days":3,"subdivision":"Окна Форте"},{"contact":"Тураев Ботир Суюнович","date":"05.01.2021","days":6,"subdivision":"РЖЕВКА-ХЛЕБ"},{"contact":"Халилова Дилдорахон Баходировна","date":"04.01.2021","days":5,"subdivision":"ЛВР АС"},{"contact":"Худойбердиев Фаррух Валиевич","date":"06.01.2021","days":7,"subdivision":"Фрегат"},{"contact":"Эшкурбонов Хуррам Норбоевич","date":"02.01.2021","days":3,"subdivision":"Окна Форте"},{"contact":"Эшмуродова Шахноза Бахтиёр Кизи","date":"02.01.2021","days":3,"subdivision":"СоюзХимИнвест"},{"contact":"Юнусов Хабибуло Эгамбердиевич","date":"31.12.2020","days":1,"subdivision":"Кошелев ИП"},{"contact":"Джалилова Ирода Достоновна","date":"05.01.2021","days":6,"subdivision":"Арома-Клининг"},{"contact":"Муминова Дилобар Махкамовна","date":"03.01.2021","days":4,"subdivision":"Сапига ИП"},{"contact":"Рахматова Барчиной Хамидовна","date":"02.01.2021","days":3,"subdivision":"ПерсоналСервис"},{"contact":"Халмирзаев Баходир Сотволдиевич","date":"02.01.2021","days":3,"subdivision":"ПерсоналСервис"},{"contact":"Ходжимуродова Мавджуда Турсиналиевна","date":"05.01.2021","days":6,"subdivision":"ПерсоналСервис"},{"contact":"Холмирзаев Абубакр Баходиржон Угли","date":"05.01.2021","days":6,"subdivision":"ПерсоналСервис"}]
let negative_list = [{"contact":"Абдуллаев Махмудхон Нематханович","days":-437,"subdivision":"Подольск"},{"contact":"Абдумуталов Абдурашид Рузивой Угли","days":-480,"subdivision":"Подольск"},{"contact":"Абдурашидов Илхомжон Иномжон Угли","days":-194,"subdivision":"Трайнет СПБ"},{"contact":"Абдусаматов Аброр Абдусаитович","days":-126,"subdivision":"Трайнет СПБ"},{"contact":"Абдухалилов Сардор Равшан","days":-13,"subdivision":"Чабыкин ИП"},{"contact":"Азизов Ахлиддин Валиевич","days":-12,"subdivision":"Окна Форте"},{"contact":"Азимов Махаммаджон Исмоилджон Угли","days":-75,"subdivision":"Трайнет СПБ"},{"contact":"Азимов Орифджон Одилджон Угли","days":-97,"subdivision":"Трайнет СПБ"},{"contact":"Алиджонов Зойирджон Олимджон Угли","days":-510,"subdivision":"Трайнет СПБ"},{"contact":"Алиджонов Мухаммаджон Азимджон Угли","days":-229,"subdivision":"Трайнет СПБ"},{"contact":"Алиджонов Хаётбек Кахрамон Угли","days":-37,"subdivision":"Окна Форте"},{"contact":"Аминджонов Мухаммаджон Абдулахат Угли","days":-141,"subdivision":"Трайнет СПБ"},{"contact":"Атаджанов Гайрат Аминович","days":-9,"subdivision":"ВентКондиционерСервис"},{"contact":"Ахмедов Иброхимжон Солиевич","days":-82,"subdivision":"Подольск"},{"contact":"Ахроров Ширин Носиржон Угли","days":-276,"subdivision":"Подольск"},{"contact":"Ахунов Музаффарбек Хусанбаевич","days":-451,"subdivision":"Ультра-Сервис"},{"contact":"Ачилов Илхом Маруфович","days":-1,"subdivision":"ЛД-ПРИНТ"},{"contact":"Ашуров Дилшоджон Усмонали Угли","days":-190,"subdivision":"Трайнет СПБ"},{"contact":"Бабажонов Олимжон Тургунович","days":-297,"subdivision":"Подольск"},{"contact":"Бахриев Собирджон Сохибович","days":-37,"subdivision":"Трайнет Ольгино"},{"contact":"Бобоев Сафармад Авалбоевич","days":-7,"subdivision":"Фильтровальные материалы"},{"contact":"Бурхонов Наимджон Нумонович","days":-165,"subdivision":"Трайнет СПБ"},{"contact":"Васильев Александр","days":-558,"subdivision":"Окна Форте"},{"contact":"Вахобхожиев Азимжон Азамжон угли","days":-150,"subdivision":"Подольск"},{"contact":"Гулов Джалолидин Рахмоналиевич","days":-11,"subdivision":"Окна Форте"},{"contact":"Гулямов Илёс Исламович","days":-446,"subdivision":"Трайнет СПБ"},{"contact":"Джумакулова Азиза Хамро Кизи","days":-48,"subdivision":"Фрегат"},{"contact":"Джумамуратов Джавланбек Алимбаевич","days":-10,"subdivision":"Окна Форте"},{"contact":"Джуматов Мансур Махмудович","days":-30,"subdivision":"Трайнет СПБ"},{"contact":"Журабоев Салохиддин Сирожиддин Угли","days":-425,"subdivision":"Подольск"},{"contact":"Зубайдуллаев Хасан Исматиллаевич","days":-278,"subdivision":"Трайнет Ольгино"},{"contact":"Ибрагимов Бобир Шухратджанович","days":-212,"subdivision":"Трайнет СПБ"},{"contact":"Ибрагимов Комилджон Шухратджонович","days":-77,"subdivision":"Трайнет СПБ"},{"contact":"Ибрагимов Мухаммаджон Рустамжон Угли","days":-241,"subdivision":"Подольск"},{"contact":"Ибрахимов Улугбек Атахонович","days":-116,"subdivision":"Трайнет СПБ"},{"contact":"Иброхимов Давлатбек Отабек Угли","days":-236,"subdivision":"Трайнет СПБ"},{"contact":"Икромов Давлатджон Хайрулло Угли","days":-52,"subdivision":"Трайнет СПБ"},{"contact":"Каримов Исломбек Исроил Угли","days":-563,"subdivision":"Подольск"},{"contact":"Каримов Сарварбек Саттор Угли","days":-61,"subdivision":"Трайнет СПБ"},{"contact":"Кенджаева Шоира Сапарбоевна","days":-17,"subdivision":"Окна Форте"},{"contact":"Кодиров Абдулазиз Баходиржон Угли","days":-106,"subdivision":"Подольск"},{"contact":"Комилов Мухаммадсодик Рустам Угли","days":-437,"subdivision":"Подольск"},{"contact":"Косимджонов Абдухошим Азамджон Угли","days":-35,"subdivision":"Трайнет СПБ"},{"contact":"Мадалиев Мухаммадали Мухамадсодик Угли","days":-293,"subdivision":"Подольск"},{"contact":"Мадаминов Юнусхон Сайдумар Угли","days":-125,"subdivision":"Трайнет СПБ"},{"contact":"Мамадалиев Абубакир Дилшоджон Угли","days":-501,"subdivision":"Подольск"},{"contact":"Мардонов Муминджон Зокирович","days":-5,"subdivision":"Эдельвейс"},{"contact":"Маткаримова Саида Кушназаровна","days":-6,"subdivision":"ЛД-ПРИНТ"},{"contact":"Махмадалиев Мухаммадали Ятимович","days":-6,"subdivision":"Полячков ИП"},{"contact":"Махматов Гофир Бекмурод Угли","days":-31,"subdivision":"ВентКондиционерСервис"},{"contact":"Махмудов Неъматилло Рахматилло Угли","days":-57,"subdivision":"Подольск"},{"contact":"Мирзарахимов Музаффар Бегмурадович","days":-9,"subdivision":"ЛД-ПРИНТ"},{"contact":"Мирюсупов Анваржон Ахмад Угли","days":-272,"subdivision":"Подольск"},{"contact":"Мусинов Фазлиддин Фахриддин Угли","days":-89,"subdivision":"Трайнет СПБ"},{"contact":"Мусурмонов Зухриддин Зафарович","days":-7,"subdivision":"СоюзХимИнвест"},{"contact":"Негматова Гуландон Анваровна","days":-7,"subdivision":"Фрегат"},{"contact":"Нематов Фаррухджон Шарифджонович","days":-10,"subdivision":"РЖЕВКА-ХЛЕБ"},{"contact":"Нурмуродов Жамшид Бозорович","days":-503,"subdivision":"Подольск"},{"contact":"Обидов Дониёр Шухратжон Угли","days":-276,"subdivision":"Подольск"},{"contact":"Обидов Муминмирзо Адхамджон Угли","days":-522,"subdivision":"Трайнет СПБ"},{"contact":"Обидов Хакимжон Кобил Угли","days":-276,"subdivision":"Подольск"},{"contact":"Палванов Анварбек Адилбаевич","days":-346,"subdivision":"Трайнет Ольгино"},{"contact":"Ражабов Санжарбек Уткир Угли","days":-272,"subdivision":"Подольск"},{"contact":"Расулов Мухаммадсодик Махматджонович","days":-4,"subdivision":"Трайнет СПБ"},{"contact":"Рахматов Мавлонжон Мукимжонович","days":-474,"subdivision":"Подольск"},{"contact":"Рахматуллаев Ахмадхон Эшанович","days":-206,"subdivision":"Подольск"},{"contact":"Рахматуллаев Неъматилло Лутфулло Угли","days":-259,"subdivision":"Подольск"},{"contact":"Саидкамолов Шерзод Абдикахорович","days":-53,"subdivision":"Трайнет СПБ"},{"contact":"Самиев Сидикжон Сойибжон Угли","days":-168,"subdivision":"Подольск"},{"contact":"Сатторов Наим Валиевич","days":-13,"subdivision":"Авиатор-2"},{"contact":"Собиров Каримжон Рашиджон Угли","days":-149,"subdivision":"Подольск"},{"contact":"Собитов Отабек Алижон Угли","days":-73,"subdivision":"Подольск"},{"contact":"Солиева Нозимахон Хамидулло Кизи","days":-1,"subdivision":"СоюзХимИнвест"},{"contact":"Сотволдиев Хурсанали Нурмухамад Угли","days":-566,"subdivision":"Подольск"},{"contact":"Сохибов Муродил Мухаммадали Угли","days":-17,"subdivision":"Окна Форте"},{"contact":"Тиллаев Алимардон Шухратович","days":-121,"subdivision":"Ультра-Сервис"},{"contact":"Тоджибоев Мирсайид Азимджон Угли","days":-461,"subdivision":"Трайнет СПБ"},{"contact":"Тураев Ботир Суюнович","days":-8,"subdivision":"РЖЕВКА-ХЛЕБ"},{"contact":"Тухтамишев Бехзод Шавкатович","days":-27,"subdivision":"Оборудование для торговли"},{"contact":"Тухтасинов Абдумаджид Адхамджон Угли","days":-126,"subdivision":"Трайнет СПБ"},{"contact":"Тухтасинов Абдусаттор Бахтиёржон Угли","days":-483,"subdivision":"Подольск"},{"contact":"Умурзаков Хасанбой Арапжон Угли","days":-59,"subdivision":"Трайнет СПБ"},{"contact":"Уринбаев Азизбек Кадамбой Угли","days":-35,"subdivision":"Окна Форте"},{"contact":"Урмонов Шукурилло Бахромжон Угли","days":-471,"subdivision":"Подольск"},{"contact":"Урунбаев Зафарджон Алимович","days":-510,"subdivision":"Трайнет СПБ"},{"contact":"Хабибуллаев Отабек Кудратулло Угли","days":-98,"subdivision":"Трайнет СПБ"},{"contact":"Хайдаров Санжарбек Обид Угли","days":-160,"subdivision":"Подольск"},{"contact":"Хакимов Сохибжон Соибжон Угли","days":-82,"subdivision":"Подольск"},{"contact":"Халилова Дилдорахон Баходировна","days":-9,"subdivision":"ЛВР АС"},{"contact":"Халматджанов Дилмуратджон","days":-49,"subdivision":"Трайнет СПБ"},{"contact":"Хамидов Умид Хусанбоевич","days":-48,"subdivision":"Трайнет СПБ"},{"contact":"Хасанбоев Абдурашид Анваржон Угли","days":-137,"subdivision":"Подольск"},{"contact":"Хасанбоев Амирулло Омонжон Угли","days":-61,"subdivision":"Подольск"},{"contact":"Хасанов Махмуд Лолаевич","days":-1,"subdivision":"Окна Форте"},{"contact":"Хасанов Фазлиддин Додобой Угли","days":-116,"subdivision":"Окна Форте"},{"contact":"Хатамов Абдубанноб Азимджон-Угли","days":-172,"subdivision":"Трайнет СПБ"},{"contact":"Хатамов Сардорбек Азимджон Угли","days":-99,"subdivision":"Трайнет СПБ"},{"contact":"Хувайдаев Мавлонбек Махмуджон угли","days":-207,"subdivision":"Трайнет СПБ"},{"contact":"Худоёров Сардор Рустам Угли","days":-55,"subdivision":"Окна Форте"},{"contact":"Шаймуродов Ислом Чориёр Угли","days":-65,"subdivision":"Окна Форте"},{"contact":"Шарипов Илхомджон Адхамович","days":-501,"subdivision":"Трайнет СПБ"},{"contact":"Шарипов Иномджон Ибрагимджанович","days":-334,"subdivision":"Трайнет СПБ"},{"contact":"Шаропов Анваржон Абдулложон Угли","days":-256,"subdivision":"Подольск"},{"contact":"Шарофжонов Комилжон Алижон Угли","days":-256,"subdivision":"Подольск"},{"contact":"Шокиров Мирза-Бахром Гавхарджон Угли","days":-196,"subdivision":"Трайнет СПБ"},{"contact":"Шохобиддинов Бахромджон Бахтиёрджон Угли","days":-187,"subdivision":"Трайнет СПБ"},{"contact":"Эркаева Мухиба Мухторовна","days":-85,"subdivision":"РЖЕВКА-ХЛЕБ"},{"contact":"Эркаева Шакаржон Шоназар Кизи","days":-56,"subdivision":"Окна Форте"},{"contact":"Эшкурбонов Хуррам Норбоевич","days":-11,"subdivision":"Окна Форте"},{"contact":"Эшметов Руслон Куролбоевич","days":-5,"subdivision":"Окна Форте"},{"contact":"Эшмуродова Шахноза Бахтиёр Кизи","days":-11,"subdivision":"СоюзХимИнвест"},{"contact":"Юлдошев Азаматжон Шукуржон Угли","days":-160,"subdivision":"Подольск"},{"contact":"Ярашев Санджар Имом Угли","days":-453,"subdivision":"Трайнет СПБ"},{"contact":"Яхёев Саидумархон Ахмадхон Угли","days":-472,"subdivision":"Подольск"},{"contact":"Алмасов Алишер","days":-36,"subdivision":"Оллила"},{"contact":"Алмосов Икром Нормахонбекович","days":-125,"subdivision":"Оллила"},{"contact":"Аннадурдиева Гуласал Абдикодировна","days":-21,"subdivision":"ПерсоналСервис"},{"contact":"Атоева Заррина Аъллоевна","days":-2,"subdivision":"ПерсоналСервис"},{"contact":"Бозоров Жалолиддин Сапарович","days":-301,"subdivision":"Бочок ИП"},{"contact":"Боходирова Заринабону Бахромджон Кизи","days":-4,"subdivision":"Кизимов ИП"},{"contact":"Джалилова Ирода Достоновна","days":-8,"subdivision":"Арома-Клининг"},{"contact":"Муминова Дилобар Махкамовна","days":-10,"subdivision":"Сапига ИП"},{"contact":"Назаров Баходирджон Гуломович","days":-59,"subdivision":"Оллила"},{"contact":"Палванов Амирали Умбаралиевич","days":-69,"subdivision":"Оллила"},{"contact":"Палвонов Фарухджон Абдурахимович","days":-117,"subdivision":"Оллила"},{"contact":"Полванов Элмурод Камилджонович","days":-104,"subdivision":"Оллила"},{"contact":"Полвонов Файзали Эралиевич","days":-92,"subdivision":"Оллила"},{"contact":"Рахматова Барчиной Хамидовна","days":-11,"subdivision":"ПерсоналСервис"},{"contact":"Рузметов Усмон Джуманиязович","days":-5,"subdivision":"Арома-Клининг"},{"contact":"Собирджонов Азимджон Собирджонович","days":-32,"subdivision":"Оллила"},{"contact":"Собирова Фарида","days":-3,"subdivision":"Шпунюк ИП"},{"contact":"Султонов Дониёр Холмурот Угли","days":-150,"subdivision":"Бочок ИП"},{"contact":"Халмирзаев Баходир Сотволдиевич","days":-11,"subdivision":"ПерсоналСервис"},{"contact":"Ходжимуродова Мавджуда Турсиналиевна","days":-8,"subdivision":"ПерсоналСервис"},{"contact":"Холмирзаев Абубакр Баходиржон Угли","days":-8,"subdivision":"ПерсоналСервис"},{"contact":"Шералиев Акмал Шералиевич","days":-184,"subdivision":"Оллила"}]
let google_sheets_value = [
    ["Арома-Клининг", "hr@aroma-cleaning.ru"],
    ["ПерсоналСервис", "hr@aroma-cleaning.ru"],
    ["Сапига ИП", "hr@aroma-cleaning.ru"],
    ["Шпунюк ИП", "hr@aroma-cleaning.ru"],
    ["Оллила", "vitaly.k@guestworkers.ru"],
    ["Бочок ИП", "arsentevao@forte.su"],
    ["Кизимов ИП", "hr@aroma-cleaning.ru"],
    ["Трайнет СПБ", "komiljon.ibragimov@mail.ru"],
    ["Подольск", "nikolasha-3@mail.ru"],
    ["НПФ Электрик", "babelov@mail.ru"],
    ["Центргаз", "otdkadr@skand.ru"],
    ["ИП Шипулин", "minyaeva.viktoriya@yandex.ru"],
    ["Оллила", "vitaly.k@guestworkers.ru"],
    ["ИП Киселёв", "minyaeva.viktoriya@yandex.ru"],
    ["ИП Кошелев", "minyaeva.viktoriya@yandex.ru"],
    ["ИП Дегтярь", "minyaeva.viktoriya@yandex.ru"],
    ["ИП Полячков", "zhenchik@yandex.ru"],
    ["ИП Чабыкин", "minyaeva.viktoriya@yandex.ru"],
    ["ПЕТРОМЕДЛАБ", "komotdekapital@gmail.com"],
    ["НПФ Анлес", "ask@anles.ru"],
    ["АрчГрупп", "archgroup24@gmail.com"],
    ["Тепловое оборудование", "smirnova.o@guestworkers.ru"],
    ["Авиатор-2", "helenspb@gmail.com"],
    ["ЛД-ПРИНТ", "smokrikova@ldprint.ru"],
    ["СоюзХимИнвест", "hr@aroma-cleaning.ru"],
    ["Эдельвейс", "ilyosbek.xamrakulov@mail.ru"],
    ["ВентКондиционерСервис", "ventkonservice@mail.ru"],
    ["Финфлекс", "elena@finfleks.ru"],
    ["Оборудование для торговли", "odt@odt.ru"],
    ["ПромДетальМаш", "evd01@yandex.ru"],
    ["ПТ ГРУПП", "kudrina@trak-on.ru"],
    ["Бетокон", "shkelev@bk.ru"],
    ["Браво", "lucysarc@mail.ru"],
    ["ЛВР СК", "ep2@lvr-service.ru"],
    ["Окна Форте", "arsentevao@forte.su"],
    ["ЛВР АС", "ep2@lvr-service.ru"],
    ["Вентура", "kudrina@trak-on.ru"],
    ["Мистер ЛиС", "lisbrewbuh@mail.ru, lelikpo@yandex.ru"],
    ["Трайнет Ольгино", "avk0570@yandex.ru"],
    ["Фрегат", "19731703@mail.ru"],
    ["Рускодом Мебель", "ruskodom@mail.ru"],
    ["Лайф", "ilyosbek.xamrakulov@mail.ru"],
    ["РЖЕВКА-ХЛЕБ", "smirnova.o@guestworkers.ru"],
    ["Камышовая 38", "helenspb@gmail.com"],
    ["Ультра-Сервис", "komiljon.ibragimov@mail.ru"],
    ["Фильтровальные материалы", "doroshencoo@mail.ru"]
]
let email_content = [];
let email_address = [];

const google_sheets_values_email = [
    ["hr@aroma-cleaning.ru"],
    ["vitaly.k@guestworkers.ru"],
    ["arsentevao@forte.su"],
    ["komiljon.ibragimov@mail.ru"],
    ["nikolasha-3@mail.ru"],
    ["babelov@mail.ru"],
    ["otdkadr@skand.ru"],
    ["minyaeva.viktoriya@yandex.ru"],
    ["zhenchik@yandex.ru"],
    ["komotdekapital@gmail.com"],
    ["ask@anles.ru"],
    ["archgroup24@gmail.com"],
    ["smirnova.o@guestworkers.ru"],
    ["helenspb@gmail.com"],
    ["ilyosbek.xamrakulov@mail.ru"],
    ["ventkonservice@mail.ru"],
    ["elena@finfleks.ru"],
    ["odt@odt.ru"],
    ["evd01@yandex.ru"],
    ["kudrina@trak-on.ru"],
    ["shkelev@bk.ru"],
    ["lucysarc@mail.ru"],
    ["ep2@lvr-service.ru"],
    ["lisbrewbuh@mail.ru"],
    ["avk0570@yandex.ru"],
    ["19731703@mail.ru"],
    ["ruskodom@mail.ru"],
    ["doroshencoo@mail.ru"]
]

const emailsMap = Object.fromEntries(google_sheets_value);

// Создание массива где присваиваетсяя один электронный адрес для парных подразделений
const a = debtor_list.map(x => ({
    ...x,
    email: emailsMap[x.subdivision]
}));

const b = negative_list.map(x => ({
    ...x,
    email: emailsMap[x.subdivision]
}));


// Группировка
function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);

        }
    });
    return map;
}


const grouped = groupBy(a, pet => pet.email);
const negativegroup = groupBy(b, pet => pet.email);

// Создание тела письма
google_sheets_values_email.forEach(e => {
    const cur = grouped.get(e[0]);
    const neg = negativegroup.get(e[0]);
    if (!cur || !neg ) {
        //   console.log(`По почте ${e[0]} никого нет <br />`)
        return
    } else {
        email_address.push(`${e}`);
        email_content.push(
            `
    <div style="
    font-size: 15px;
    line-height: 1.5">
    <p style="
    font-size: 18px">Доброе время суток!</p> <br>

Напоминаем нашим клиентам о необходимости актуализации информации по оплате патентов. <br>
Все сотрудники, у кого не будет актуальных документов будут отстранены, а заработная плата не будет начисляться и выплачиваться. <br>
Убедительна просьба присылать актуальную информацию до 13го (для начисления аванса) и 28го (для начисления заработной платы) чисел каждого месяца.
 <br>
Так же, при необходимости трудоустройства новых сотрудников и предоставлении их документов по электронной почте, просим в теле письма писать следующую фразу: "Просим трудоустроить сотрудника ФИО" с указанием даты трудоустройства. <br>
Ниже представлена таблица с актуальными данными: <br>
</div>
    <table style="
    text-align: center;
    border-collapse: collapse;
    width: 70%;
    font-size: 13px;
    ">
    <tr style="
    border: 1px solid #000000">
    <td>ФИО сотрудника</td>
<td>Патент оплачен до</td>
<td>Количество дней<div>до истечения оплаты</td>
</tr>
    ${cur.map(c=>`
    <tr style="
    border: 1px solid #000000">
        <td>
        ${c.contact}
        </td>
        <td>${c.date}</td>
        <td>${c.days}</td>
    </tr>`)}
    </table>
    <p style="
    color: red;
    font-size: 17px;
    ">Списох работников, у которых чеки были просрочены:</p>
     <table style="
    text-align: center;
    border-collapse: collapse;
    width: 70%;
    font-size: 13px;
    ">
    <tr style="
    border: 1px solid #000000">
    <td>ФИО сотрудника</td>
<td>Патент оплачен до</td>
<td>Количество дней<div>с момента просрочки</td>
</tr>
     ${neg.map(c=>`
    <tr style="
    border: 1px solid #000000">
        <td>
        ${c.contact}
        </td>
        <td>${c.date}</td>
        <td>${c.days}</td>
    </tr>`)}
    </table>
           `)
    }
});

console.log(email_content)

