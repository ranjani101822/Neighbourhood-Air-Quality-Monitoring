function searchData(list, text) {

    text = text.toLowerCase();

    return list.filter(item =>
        item.locality.toLowerCase().includes(text)
    );

}

function filterData(list, level) {

    if (level === "All")
        return list;

    return list.filter(item =>
        item.level === level
    );

}