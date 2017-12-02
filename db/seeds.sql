USE kidscook_db;

INSERT INTO recipes (recipe_name, image, vegetable_score, wholegrain_score, fruit_score, protein_score, viewed, source) VALUES 
("Butternut Squash Alfredo with Broccoli", "https://shk-images.s3.amazonaws.com/wp-content/uploads/2017/10/Butternut-Squash-Alfredo-2.jpg", 
	1, 1, 0, 0,0,0,0,1,0,0,1,0, "https://www.superhealthykids.com/quinoa-coated-chicken-nuggets-recipe/" );

INSERT INTO recipes (recipe_name, image, vegetable_score, wholegrain_score, fruit_score, protein_score, viewed, source) VALUES
 ("Grilled Cheese With Cauliflower Crust", "https://shk-images.s3.amazonaws.com/wp-content/uploads/2017/01/cauliflower-grilled-cheese-25-1024x1024.jpg",
  1,0,0,1,0,0,0,1,0,0,1,0, "https://www.superhealthykids.com/grilled-cheese-cauliflower-crust/");

INSERT INTO recipes (recipe_name, image, vegetable_score, wholegrain_score, fruit_score, protein_score, viewed, source) VALUES 
 ("Sunny Strawberry & Cantaloupe Salad", "https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/Sunny-Strawberry---Cantaloupe-Salad_exps163718_TH132767A05_03_7bC_RMS.jpg", 
 	0,0,1,0,0,0,0,0,0,0,0,0,"https://www.tasteofhome.com/recipes/sunny-strawberry---cantaloupe-salad");

INSERT INTO recipes (recipe_name, image, vegetable_score, wholegrain_score, fruit_score, protein_score, viewed, source) VALUES 
 ("Banana Blueberry Pancakes", "https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/exps32350_UFZ133197D04_17_7b_WEB.jpg",
  0,1,1,0,0,1,0,1,0,0,1,0,"https://www.tasteofhome.com/recipes/banana-blueberry-pancakes");

INSERT INTO recipes (recipe_name, image, vegetable_score, wholegrain_score, fruit_score, protein_score, viewed, source) VALUES 
 ("Warm Turkey Sliders", "https://shk-images.s3.amazonaws.com/wp-content/uploads/2014/09/Turkey-Sliders-7.jpg", 
 	1,1,0,1,0,1,0,1,0,0,1,0,"https://www.superhealthykids.com/warm-turkey-sliders/");

INSERT INTO recipes (recipe_name, image, vegetable_score, wholegrain_score, fruit_score, protein_score, viewed, source) VALUES 
("Quinoa Coated Chicken Nuggets", "https://www.superhealthykids.com/quinoa-coated-chicken-nuggets-recipe/",
 	    1,1,0,1,0,0,0,0,0,0,0,0, "https://www.superhealthykids.com/quinoa-coated-chicken-nuggets-recipe/");

SELECT * FROM recipes;
