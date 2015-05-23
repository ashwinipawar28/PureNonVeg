FORMAT: 1A
HOST: http://api.purenonveg.com/

# PureNonVeg APIs

PureNonVeg is a simple API allowing consumers to manage, search and order food online.


## Restuarant [/restuarant/{id}]

### Get Restuarant [GET]

+ Response 200 (application/json)

       
            {
                "address" : "Baner Road, Baner, Pune, 411045",
                "city_id" : "1",
                "latitude" : "55.53",
                "longitude" : "134.84",
                "name" : "EatSome",
                "pincode" : "411045",
                "restuarant_chain_id" : "1"
            }

## Get Restuarant Menu [/restuarant/{id}/menu]
### Get Restuarant Menu [GET]

+ Response 200 (application/json)
[
            {
                "menu_item_type" : "Breakfast",
                "menu_item_id"   : "1",
                "menu_items" : [
                    {
                        "id" : 1,
                        "image_path" : "asset/img/menuitems/item1.jpg",
                        "menu_item_name" : "Egg Omlette"
                    },
                    {
                        "id" : 2,
                        "image_path" : "asset/img/menuitems/item1.jpg",
                        "menu_item_name" : "Chicken Sandwich"
                    }
                ]
            },
            {
                "menu_item_type" : "Beverages",
                "menu_item_id"   : "5",
                "menu_items" : [
                    {
                        "id" : 3,
                        "image_path" : "asset/img/menuitems/item3.jpg",
                        "menu_item_name" : "Cold Cola"
                    },
                    {
                        "id" : 4,
                        "image_path" : "asset/img/menuitems/item4.jpg",
                        "menu_item_name" : "Port Wine"
                    }
                ]
            },
            {
                "menu_item_type" : "Starter",
                "menu_item_id"   : "2",
                "menu_items" : [
                    {
                        "id" : 5,
                        "image_path" : "asset/img/menuitems/item4.jpg",
                        "menu_item_name" : "Mutton Keema"
                    },
                    {
                        "id" : 6,
                        "image_path" : "asset/img/menuitems/item5.jpg",
                        "menu_item_name" : "Chicken Visfotak"
                    }
                ]
            },
            {
                "menu_item_type" : "Main Course",
                "menu_item_id"   : "3",
                "menu_items" : [
                    {
                        "id" : 7,
                        "image_path" : "asset/img/menuitems/item6.jpg",
                        "menu_item_name" : "Mutton Keema"
                    },
                    {
                        "id" : 8,
                        "image_path" : "asset/img/menuitems/item7.jpg",
                        "menu_item_name" : "Chicken Visfotak"
                    }
                ]
            }
        ]
        
        

        
## Menu Item [/menu_item/{id}]
### Get Menu Item [GET]

+ Response 200 (application/json)

        {
            "image_path" : "/assets/img/menuitems/item1.jpg",
            "item_type" : "starter",
            "menu_item_name" : "Tandoori Chicken"
        }
        
## Search [/search?type={type}&keyword={keyword}&long={long}&lat={lat}&pin={pin}]
### Search [GET]

+ Response 200 (application/json)

         [
            {
                "address" : "Baner Road, Baner, Pune, 411045",
                "city_id" : "1",
                "latitude" : 18.54,
                "longitude" : 73.9,
                "name" : "EatSome",
                "pincode" : "411045",
                "restuarant_chain_id" : "1"
            },
            {
                "address" : "Level 9, Icon Tower, Baner, Pune, 411045",
                "city_id" : "2",
                "latitude" : 18.53,
                "longitude" : 73.84,
                "name" : "Post 91 - Infinity Rooftop Restaurant",
                "pincode" : "411045",
                "restuarant_chain_id" : "1"
            }
        ]



