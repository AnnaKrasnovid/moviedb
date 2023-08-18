export const getText = (text, quantityProposal) => {
    const textArr = [];
    const res = text.replace(/(\.+|\:|\!|\?)(\"*|\'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm, '$1$2|').split('|');

    for (let i = 0; i <= res.length; i = i + quantityProposal) {
        textArr.push(res.slice(i, i + quantityProposal));
    }

    return textArr.map((item) => item.join(' '));
};