const Pool =require ('../config/db')

const selectDataRecipe = ({limit,offset,sort,sortby,search, page}) => {

    // return Pool.query(`SELECT * FROM recipe`);
    // return Pool.query(`SELECT recipe.id,recipe.title,recipe.ingredients,recipe.vidio,recipe.photo,recipe.description,comment.id as comment FROM recipe JOIN comment ON recipe.comment_id = comment.id WHERE (recipe.title) ILIKE ('%${search}%') ORDER BY recipe.${sortby} ${sort} LIMIT ${limit} OFFSET ${offset} `)
    return Pool.query(`SELECT recipe.id,recipe.title,recipe.ingredients,recipe.vidio,recipe.photo,recipe.description,recipe.comment_id FROM recipe WHERE (recipe.title) ILIKE ('%${search}%') ORDER BY recipe.${sortby} ${sort} LIMIT ${limit} OFFSET ${offset} `)

}

const selectDataRecipeDetail = (id) => {
    // return Pool.query(`SELECT recipe.id,recipe.title,recipe.ingredients,recipe.vidio,recipe.photo,recipe.description,comment.id as comment FROM recipe JOIN comment ON recipe.comment_id = comment.id WHERE recipe.id='${id}' `);  
    return Pool.query(`SELECT * FROM recipe  WHERE recipe.id='${id}'`);  
   
}

const deleteRecipe = (id) => {
    // return Pool.query(`SELECT recipe.id,recipe.title,recipe.ingredients,recipe.vidio,recipe.photo,recipe.description,comment.id as comment FROM recipe JOIN comment ON recipe.comment_id = comment.id WHERE recipe.id='${id}' `);  
    return Pool.query(`DELETE FROM recipe  WHERE recipe.id='${id}'`);  
   
}

const insertDataRecipe = (data) => {
    const {id,title,ingredients,vidio,photo,description,comment_id} = data;
    return Pool.query(`INSERT INTO recipe(id,title,ingredients,vidio,photo,description,comment_id) VALUES ('${id}','${title}','${ingredients}','${vidio}','${photo}','${description}',${comment_id})`);   
}



module.exports = {selectDataRecipe, selectDataRecipeDetail, insertDataRecipe, deleteRecipe}