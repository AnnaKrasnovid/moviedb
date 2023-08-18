export const getText = (text, quantityProposal) => {
    const textArr = [];
    const res = text.replace(/(\.+|\:|\!|\?)(\"*|\'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm, '$1$2|').split('|');

    for (let i = 0; i <= res.length; i = i + quantityProposal) {
        textArr.push(res.slice(i, i + quantityProposal));
    }

    return textArr.map((item) => item.join(' '));
};

export const getRoundNumber = (number) => {
    return Math.round(number * 10) / 10
}

export function getTime(number) {
    const minutes = number % 60;
    const hours = (number - minutes) / 60;
    const formatMinutes = minutes < 10 ? `0${minutes}` : minutes

    if (hours <= 0) {
        return `${formatMinutes} мин.`;
    } else {
        return `${hours}ч. ${formatMinutes} мин.`;
    }

}

