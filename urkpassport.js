let recognized_data = [{"language":"ru","location":{"height":20,"width":55,"x":329,"y":273},"text":"ЯКОБ"},{"language":"ru","location":{"height":14,"width":130,"x":308,"y":301},"text":"Прозвище/Фамилия"},{"language":"ru","location":{"height":21,"width":86,"x":312,"y":312},"text":"АНДРЕЙ"},{"language":"ru","location":{"height":25,"width":152,"x":282,"y":349},"text":"николаевич"},{"language":"ru","location":{"height":11,"width":15,"x":300,"y":381},"text":"по"},{"language":"ru","location":{"height":12,"width":118,"x":322,"y":382},"text":"батьковi/отчество"},{"language":"ru","location":{"height":19,"width":27,"x":212,"y":389},"text":"23"},{"language":"ru","location":{"height":21,"width":106,"x":254,"y":390},"text":"февраля"},{"language":"ru","location":{"height":20,"width":63,"x":372,"y":393},"text":"1991"},{"language":"ru","location":{"height":20,"width":57,"x":447,"y":395},"text":"года"},{"language":"ru","location":{"height":12,"width":29,"x":256,"y":423},"text":"Дата"},{"language":"ru","location":{"height":14,"width":119,"x":292,"y":424},"text":"народження/Дата"},{"language":"ru","location":{"height":13,"width":66,"x":418,"y":427},"text":"рождения"},{"language":"ru","location":{"height":14,"width":127,"x":290,"y":463},"text":"народження/Место"},{"language":"ru","location":{"height":12,"width":61,"x":425,"y":467},"text":"рождения"},{"language":"ru","location":{"height":24,"width":150,"x":236,"y":467},"text":"Тячевского"},{"language":"ru","location":{"height":23,"width":88,"x":397,"y":472},"text":"района"},{"language":"ru","location":{"height":23,"width":182,"x":204,"y":509},"text":"Закарпатской"},{"language":"ru","location":{"height":21,"width":100,"x":400,"y":514},"text":"области"},{"language":"ru","location":{"height":21,"width":120,"x":220,"y":549},"text":"чоловiча"},{"language":"ru","location":{"height":18,"width":15,"x":357,"y":553},"text":"/"},{"language":"ru","location":{"height":21,"width":103,"x":384,"y":554},"text":"мужской"},{"language":"ru","location":{"height":15,"width":72,"x":327,"y":583},"text":"Стать/Под"},{"language":"ru","location":{"height":22,"width":147,"x":218,"y":589},"text":"Тячiвським"},{"language":"ru","location":{"height":21,"width":32,"x":378,"y":591},"text":"РВ"},{"language":"ru","location":{"height":21,"width":77,"x":423,"y":592},"text":"ГУДМС"},{"language":"ru","location":{"height":11,"width":28,"x":219,"y":621},"text":"Ким"},{"language":"ru","location":{"height":12,"width":56,"x":254,"y":622},"text":"виданий"},{"language":"ru","location":{"height":14,"width":80,"x":318,"y":623},"text":"паспорт/Кем"},{"language":"ru","location":{"height":12,"width":41,"x":406,"y":626},"text":"выдан"},{"language":"ru","location":{"height":12,"width":51,"x":455,"y":627},"text":"паспорт"},{"language":"ru","location":{"height":21,"width":108,"x":142,"y":626},"text":"Украины"},{"language":"ru","location":{"height":18,"width":15,"x":266,"y":630},"text":"в"},{"language":"ru","location":{"height":24,"width":191,"x":293,"y":630},"text":"закарпатской"},{"language":"ru","location":{"height":20,"width":54,"x":501,"y":636},"text":"обл."},{"language":"ru","location":{"height":23,"width":136,"x":214,"y":668},"text":"Тячевским"},{"language":"ru","location":{"height":21,"width":28,"x":367,"y":671},"text":"РО"},{"language":"ru","location":{"height":21,"width":70,"x":412,"y":672},"text":"ГУГМС"},{"language":"ru","location":{"height":21,"width":100,"x":159,"y":707},"text":"Украины"},{"language":"ru","location":{"height":18,"width":17,"x":275,"y":711},"text":"в"},{"language":"ru","location":{"height":23,"width":180,"x":305,"y":711},"text":"Закарпатской"},{"language":"ru","location":{"height":19,"width":55,"x":501,"y":717},"text":"обл."},{"language":"ru","location":{"height":12,"width":46,"x":185,"y":777},"text":"Подпись"},{"language":"ru","location":{"height":13,"width":63,"x":236,"y":778},"text":"посадової"},{"language":"ru","location":{"height":14,"width":98,"x":304,"y":780},"text":"особи/Подпись"},{"language":"ru","location":{"height":14,"width":92,"x":407,"y":783},"text":"должностного"},{"language":"ru","location":{"height":12,"width":30,"x":506,"y":786},"text":"лица"},{"language":"ru","location":{"height":19,"width":31,"x":197,"y":786},"text":"20"},{"language":"ru","location":{"height":23,"width":193,"x":243,"y":788},"text":"березня/марта"},{"language":"ru","location":{"height":18,"width":58,"x":451,"y":793},"text":"2014"},{"language":"ru","location":{"height":12,"width":46,"x":683,"y":764},"text":"Пiдпис"},{"language":"ru","location":{"height":12,"width":60,"x":737,"y":766},"text":"власника"},{"language":"ru","location":{"height":11,"width":56,"x":805,"y":768},"text":"паспорта"},{"language":"ru","location":{"height":12,"width":55,"x":869,"y":769},"text":"Подпись"},{"language":"ru","location":{"height":12,"width":66,"x":932,"y":771},"text":"владельца"},{"language":"ru","location":{"height":12,"width":56,"x":1005,"y":773},"text":"паспорта"}];

let personal_data = {
    "passport": {},
    "patent": {},
    "migration_card": {}
};

let is_passport = false,
    is_migration_card = false,
    is_patent = false,
    supposed_values = [];
let other_docs_keywords = [
    /страхово[йе]|полис/i,
    /чек|платеж|плательщик/i,
    /перевод/i,
    /опись|расписка|уведомлен/i,
    /visas|владелец|гражданина/i,
    /holder/,   // это слово должно быть всегда чувствительным к регистру
    /анкет[аы]|соискателя/i,
    /работник/i,
];

let includes_passport_keywords = false,
    includes_patent_keywords = false,
    includes_migration_card_keywords = false,
    recognized_data_length = recognized_data.length;

function hasOtherKeywords(recognized_data, reg_exp_list) {
    for (let item of recognized_data) {
        for (let reg_exp of reg_exp_list) {
            if (reg_exp.test(item['text'])) {
                return true;
            }
        }
    }

    return false;
}

for (let item of recognized_data) {
    // отсутствие сравнения кол-ва ключей паспорта
    // с 0 позволяет обнаруживать дополнительные
    // титульные страницы паспортов, если паспорт
    // в документе не один
    if (/passport|паспорт|identity|личности|паспорта/i.test(item['text'])) {
        includes_passport_keywords = true;
    }

    // 12 - общее количество распознаваемых полей паспорта
    if (Object.keys(personal_data['passport']).length > 0
        && Object.keys(personal_data['passport']).length < 12
        && /орган|authority|кем/i.test(item['text'])) {
        includes_passport_keywords = true;
    }

    if (Object.keys(personal_data['migration_card']).length === 0
        && /departure|migrat/i.test(item['text'])) {
        includes_migration_card_keywords = true;
    }

    if (Object.keys(personal_data['patent']).length === 0
        && /патент/i.test(item['text'])) {
        includes_patent_keywords = true;
    }

    // 13 - общее количество распознаваемых  полей патента
    if (Object.keys(personal_data['patent']).length > 0
        && Object.keys(personal_data['patent']).length < 13
        && /кем/i.test(item['text'])) {
        includes_patent_keywords = true;
    }

    if (
        includes_passport_keywords
        || includes_patent_keywords
        || includes_migration_card_keywords
    ) {
        break;
    }
}

let is_other_document = hasOtherKeywords(recognized_data, other_docs_keywords);

is_passport = includes_passport_keywords ? !is_other_document : is_passport;
is_patent = includes_patent_keywords ? !is_other_document : is_patent;
is_migration_card = includes_migration_card_keywords ? !is_other_document : is_migration_card;


// DefinePassportType
let is_paper_passport = false;
for (let i = 0; i < recognized_data_length; i++) {
    if (/type|country|code|личный/i.test(recognized_data[i]['text'])) {
        is_paper_passport = true;
        break;
    }
}
// DefineUKRPaperPassportCyrillicPage ( NEW )
 let has_ukr = false,
     has_state = false,
     has_surname = false,
     is_ukr_cyrillic_page = false;

 for (let i = 0; i < recognized_data_length; i++) {
     if (/Украины/i.test(recognized_data[i]['text'])) {
         has_ukr = true;
     }

     if (/лица/i.test(recognized_data[i]['text'])) {
         has_state = true;
     }

     if (/Фамилия/i.test(recognized_data[i]['text'])) {
         has_surname = true;
     }

     if (has_ukr && has_state && has_surname) {
         is_ukr_cyrillic_page = true;
         break;
     }
 }

 // RecognizeUKRPassport

let date_of_birth = null,
    place_of_birth = null,
    date_of_birth_data = [],
    place_of_birth_data = [];

for (let i = 0; i < recognized_data_length; i++) {
    if (/Отчество/i.test(recognized_data[i]['text'])) {
        date_of_birth = recognized_data[i];

    }

    if (/лица/i.test(recognized_data[i]['text'])) {
        place_of_birth = recognized_data[i];
    }
}

for (let i = 0; i < recognized_data_length; i++) {
    if (date_of_birth
        && recognized_data[i]['location']['y'] <= date_of_birth['location']['y'] + 20
        && recognized_data[i]['location']['y'] >= date_of_birth['location']['y'] - 5) {
        date_of_birth_data.push(recognized_data[i]['text']);
    }
}

personal_data['passport']['date_of_birth'] = date_of_birth_data.length > 0 ? date_of_birth_data.slice(-1 * 4).join(" ") : " - ";

console.log(is_paper_passport)
