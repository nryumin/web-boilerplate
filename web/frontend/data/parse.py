import os
import json
import csv

def readFile(path):
    file = open(path)
    lines = list(csv.reader(file, delimiter=",", quotechar="\""))
    lines.reverse()

    fields = {}

    print(path)


    fields['intro'] = lines.pop()[1]
    fields['name'] = lines.pop()[1]
    fields['main_pic'] = lines.pop()[1]
    fields['birth_year'] = lines.pop()[1]
    fields['start_year'] = lines.pop()[1]
    fields['franchise_count'] = lines.pop()[1]
    fields['own_count'] = lines.pop()[1]
    fields['description'] = lines.pop()[1]
    fields['skills'] = lines.pop()[1].split(sep=";")
    fields['payback_period'] = lines.pop()[1]
    fields['month_revenues'] = lines.pop()[1]
    fields['paush_price'] = lines.pop()[1]
    fields['royalty'] = lines.pop()[1]
    fields['price'] = lines.pop()[1]

    fields['opened'] = []

    lines.pop()
    opened_payback = lines.pop()
    opened_payback = list(filter(lambda s: len(s),opened_payback))
    revenues = lines.pop()
    description = lines.pop()
    pics = lines.pop()
    owners = lines.pop()
    positions = lines.pop()
    texts = lines.pop()

    for index in range(1, len(opened_payback)-1):
        fields['opened'].append({
            "payback": opened_payback[index],
            "month_revenues": revenues[index],
            "description": description[index],
            "pics": pics[index].split(sep=";"),
            "owner": owners[index],
            "position": positions[index],
            "text": texts[index]
        })

    lines.pop()
    fields['formats'] = []
    names = lines.pop()
    names = list(filter(lambda s: len(s), names))
    budgets = lines.pop()
    office_sizes= lines.pop()
    equipments= lines.pop()
    revenuess= lines.pop()
    royaltys= lines.pop()
    prices= lines.pop()

    for index in range(1,len(names)-1):
        fields['formats'].append({
            "name": names[index],
            "budget": budgets[index].split(sep="-"),
            "office_size": office_sizes[index].split(sep="-"),
            "equipment": equipments[index].split(sep="-"),
            "revenues": revenuess[index].split(sep="-"),
            "royalty": royaltys[index],
            "price": prices[index],
        })

    fields["steps"] = lines.pop()[1].split(sep=";")

    lines.pop()
    fields['benefits'] = []

    names = lines.pop()
    names = list(filter(lambda s: len(s), names))
    decriptions = lines.pop()

    for index in range(1, len(names)-1):
        fields['benefits'].append({
            "name": names[index],
            "description": decriptions[index],
        })

    fields['similar'] = lines.pop()[1].split(";")
    fields['area'] = lines.pop()[1]
    fields['is_invest'] = lines.pop()[1]
    fields['id'] = lines.pop()[1]

    dest = open(path.replace(".csv", ".json"), 'w+')
    dest.write(json.dumps(fields, ensure_ascii=False))


for file in os.listdir("."):
    if file.endswith(".csv"):
        readFile(file)

