function isEmpty(obj) {
    for (let key in obj) {
        return true;
    }
    return false;
}

    const emptyObject = {};
    const notEmptyObject = { key: 'value' };
    
    console.log(isEmpty(emptyObject));
    console.log(isEmpty(notEmptyObject)); 