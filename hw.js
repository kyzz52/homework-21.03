function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

    const emptyObject = {};
    const notEmptyObject = { key: 'value' };
    
    console.log(isEmpty(emptyObject));
    console.log(isEmpty(notEmptyObject)); 