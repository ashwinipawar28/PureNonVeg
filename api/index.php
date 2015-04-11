<?php
//phpinfo();

require 'vendor/autoload.php';

function getDB()
{
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "dvector2";
    $dbname = "nonveg";

    $mysql_conn_string = "mysql:host=$dbhost;dbname=$dbname";
    $dbConnection = new PDO($mysql_conn_string, $dbuser, $dbpass);
    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbConnection;
}


$app = new \Slim\Slim();

$app->get('/', function() use($app) {
    $app->response->setStatus(200);
    echo "Welcome to Pure Non Veg. Keep Refactoring.";
});


/**
 * Show Back-Ground Image on Home Page, Dish can be ordered Directly
 */
$app->get("/popular_dish", function() use($app) {
    try
    {
        $db = getDB();

        $sth = $db->prepare("SELECT a.restaurant_id, a.menu_item_id, b.image_path
            FROM promote_restaurant_menu_item a
            JOIN menu_item b on a.menu_item_id = b.id");

        $sth->execute();

        $popular_dish = $sth->fetch(PDO::FETCH_OBJ);

        if($popular_dish) {
            $app->response->setStatus(200);
            $app->response()->headers->set('Content-Type', 'application/json');
            echo json_encode($popular_dish);
            $db = null;
        } else {
            throw new PDOException('No records found.');
        }

    }catch (Exception $e) {
        $app->response()->setStatus(404);
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});


/**
 * Show Lazy Bone Data
 * Show most frequently ordered Menu Item
 */
$app->get("/lazy_bones", function() use($app) {
    try
    {
        $db = getDB();

        $sth = $db->prepare("SELECT a.*, b.image_path
            FROM promote_restaurant_menu_item a
            JOIN menu_item b on a.menu_item_id = b.id
            where promotion_type ='lazybones' ");

        $sth->execute();

        $popular_dish = $sth->fetch(PDO::FETCH_OBJ);

        if($popular_dish) {
            $app->response->setStatus(200);
            $app->response()->headers->set('Content-Type', 'application/json');
            echo json_encode($popular_dish);
            $db = null;
        } else {
            throw new PDOException('No records found.');
        }

    }catch (Exception $e) {
        $app->response()->setStatus(404);
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});


/**
 * Show Lazy Bone Data
 * Show most frequently ordered Menu Item
 */
$app->get("/confused", function() use($app) {
    try
    {
        $db = getDB();

        $sth = $db->prepare("SELECT a.*, b.image_path
            FROM promote_restaurant_menu_item a
            JOIN menu_item b on a.menu_item_id = b.id
            where promotion_type ='confused' ");

        $sth->execute();

        $popular_dish = $sth->fetch(PDO::FETCH_OBJ);

        if($popular_dish) {
            $app->response->setStatus(200);
            $app->response()->headers->set('Content-Type', 'application/json');
            echo json_encode($popular_dish);
            $db = null;
        } else {
            throw new PDOException('No records found.');
        }

    }catch (Exception $e) {
        $app->response()->setStatus(404);
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});

$app->run();
