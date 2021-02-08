let recognized_data = [{"language":"ru","location":{"height":34,"width":244,"x":882,"y":2207},"text":"Российская"},{"language":"ru","location":{"height":34,"width":231,"x":1151,"y":2207},"text":"Федерация"},{"language":"ru","location":{"height":47,"width":351,"x":701,"y":2301},"text":"страховое"},{"language":"ru","location":{"height":48,"width":476,"x":1081,"y":2298},"text":"свидетельство"},{"language":"ru","location":{"height":36,"width":318,"x":662,"y":2380},"text":"ОБЯЗАТЕЛЬНОГО"},{"language":"ru","location":{"height":36,"width":302,"x":999,"y":2378},"text":"ПЕНСИОННОГО"},{"language":"ru","location":{"height":36,"width":273,"x":1320,"y":2376},"text":"СТРАХОВАНИЯ"},{"language":"ru","location":{"height":47,"width":284,"x":965,"y":2442},"text":"171-802-963"},{"language":"ru","location":{"height":45,"width":53,"x":1271,"y":2442},"text":"69"},{"language":"ru","location":{"height":34,"width":47,"x":598,"y":2504},"text":"Ф."},{"language":"ru","location":{"height":33,"width":38,"x":653,"y":2504},"text":"И."},{"language":"ru","location":{"height":33,"width":45,"x":699,"y":2504},"text":"О."},{"language":"ru","location":{"height":39,"width":189,"x":851,"y":2506},"text":"ХАЗБАЕВ"},{"language":"ru","location":{"height":41,"width":148,"x":847,"y":2559},"text":"НУМОН"},{"language":"ru","location":{"height":41,"width":318,"x":849,"y":2607},"text":"ЯРМАМАТОВИЧ"},{"language":"ru","location":{"height":25,"width":84,"x":608,"y":2661},"text":"Дата"},{"language":"ru","location":{"height":25,"width":21,"x":713,"y":2661},"text":"и"},{"language":"ru","location":{"height":25,"width":96,"x":749,"y":2660},"text":"место"},{"language":"ru","location":{"height":26,"width":150,"x":861,"y":2659},"text":"рождения"},{"language":"ru","location":{"height":34,"width":43,"x":1191,"y":2664},"text":"16"},{"language":"ru","location":{"height":35,"width":134,"x":1252,"y":2663},"text":"января"},{"language":"ru","location":{"height":34,"width":84,"x":1403,"y":2662},"text":"1968"},{"language":"ru","location":{"height":31,"width":66,"x":603,"y":2899},"text":"Пол"},{"language":"ru","location":{"height":36,"width":166,"x":852,"y":2894},"text":"МУЖСКОЙ"},{"language":"ru","location":{"height":27,"width":86,"x":608,"y":2953},"text":"Дата"},{"language":"ru","location":{"height":27,"width":194,"x":711,"y":2952},"text":"регистрации"},{"language":"ru","location":{"height":28,"width":37,"x":1194,"y":2948},"text":"14"},{"language":"ru","location":{"height":28,"width":53,"x":1247,"y":2947},"text":"мая"},{"language":"ru","location":{"height":28,"width":71,"x":1312,"y":2946},"text":"2012"}];
let personal_data = {
    "passport": {},
    "patent": {},
    "migration_card": {},
    "snils": {}
};


// DefineSnils
let has_insurance = false,
    has_pension = false,
    is_snils = false;


for (let i = 0; i < recognized_data.length; i++) {
    if (/страховое/i.test(recognized_data[i]['text'])) {
        has_insurance = true;
    }

    if (/пенсионного/i.test(recognized_data[i]['text'])) {
        has_pension = true;
    }

    if (has_insurance && has_pension) {
        is_snils = true;
        break;
    }
}

console.log(is_snils)



// RecognizeSnils
let snils_number = null,
    snils_number_data = [];

for (let i = 0; i < recognized_data.length; i++) {
    if (/ПЕНСИОННОГО/i.test(recognized_data[i]['text'])) {
        snils_number = recognized_data[i];
    }
}

for (let i = 0; i < recognized_data.length; i++) {
    if (snils_number
        && recognized_data[i]['location']['x'] >= snils_number['location']['x'] - 150
        && recognized_data[i]['location']['y'] >= snils_number['location']['y'] + 10
        && recognized_data[i]['location']['y'] <= snils_number['location']['y'] + 70) {
        snils_number_data.push(recognized_data[i]['text']);
        console.log(snils_number_data)
    }
}

personal_data['snils']['number'] = snils_number_data.length > 0 ? snils_number_data.join(" ") : " - ";
console.log(personal_data['snils']['number'])