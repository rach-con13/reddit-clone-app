   export const createSlug = (name) => {
        let split = name.split(' ');
        let slug = '';
        split.forEach((word,index) => {
            console.log(word);
            if(index !== split.length - 1 ) {
                slug += `${word}_`
            } else {
                slug += word;
            }
            
        })
        return slug;
        
    }

    export const uncodeSlug = (slug) => {
        let split = slug.split('_');
        let name = '';
        split.forEach((word,index) => {
            if(index !== 0) {
                name += ` ${word}`
            } else {
                name += word
            }
        })
        return name;
    }