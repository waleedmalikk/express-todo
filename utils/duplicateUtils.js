async function duplicateFound(attributeVal, attribute, Model){
    const whereCondition = { [attribute]: attributeVal };
    const existing = await Model.findOne({ where: whereCondition });
    if(existing===null){
        return false;
    }else{
        return true;
    }
}

module.exports={duplicateFound}