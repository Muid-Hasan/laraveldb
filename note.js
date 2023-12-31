/*
👌Important Commands For migration:
1. php artisan db:show
2. php artisan make:migration create_posts_table
3. php artisan migrate
4. php artisan migrate:status
5. php artisan migrate --pretend
6. php artisan migrate:reset
7. php artisan migrate --force
8. php artisan migrate:rollback
9. php artisan migrate:rollback --step=2
10.php artisan migrate:refresh
11.php artisan migrate:refresh --step=2
12.php artisan migrate:fresh
13.php artisan schema:dump  //not working
14.php artisan schema:dump --prune // not working
15.php artisan make:migration add_soft_deletes_in_posts_table --table=posts
16. composer require doctrine/dbal  //if we use mysql older version
17.php artisan make:migration rename_description_to_content_on_posts_table --table=posts
18.php artisan make:migration drop_deleted_at_from_posts_table --table=posts

👌Import commands for Factory :
19.php artisan make:factory PostFactory
20.php artisan make:seeder PostSeeder
21. php artisan db:seed --class=PostSeeder
22.php artisan db:seed

23. php artisan tinker
24.App\Models\Post::factory(5)->create()




*/
