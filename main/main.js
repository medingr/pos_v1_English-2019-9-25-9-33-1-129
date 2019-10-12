'use strict';

    const tags = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2.5',
      'ITEM000005',
      'ITEM000005-2',
    ];

function hasQuantityOrWeight( tag ){
return tag.includes('-') ;
}

function getCountOfTag( tag ){
    let dash = tag.indexOf('-');
    let stringCount = tag.length;
    let count = tag.substring(dash+1,stringCount+1);
    return parseInt(count);
}

function getUniqueTags ( tags){
    const listOfUniqueTags = [...new Set(tags)]; 
    return listOfUniqueTags;
};

function setCountOfTags (barCodes){
    let uniqueTags = getUniqueTags(barCodes);
   
    let productList=[];
    for(let unique of uniqueTags){
        
        let product = tags
        .filter(input=>input === unique);

        console.log(product)

        if(hasQuantityOrWeight(unique)){
            let count = getCountOfTag(unique);
            product.count= productCount; 
        }else {
            let productCount = barCodes
        .filter(input=> input === unique).length;
         product.count= productCount; 
        } 
        console.log(count);
           
    }
    
    return productList;
};

