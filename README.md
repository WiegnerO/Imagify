# Imagify
This application is the back end API of an image repository application called Imagify
This API is written using the Express Node.js web application framework
Imagify is an ecommerce application where users can upload, search, delete, sell and buy images
This API focuses on the search operations of the Imagify application where users have multiple ways of searching for an image or a group of images
## Search operations include:
1. Users can search for a specific image if they know the image name
2. Users can search for a group of images based on its image characteristics (ie If a user searches nature any image that has a nature characteristic will pop up)
3. Users can use an existing image on the site in order to search images with similar characteristics (ie If a user searches using an image that that the characteristics nature, animal, africa than any image with those characteristics will appear in the results)

### Each image has the following characteristics:
- Image_id
- Image 
- Name
- Characteristics
- Image_Poster

#### Each Image will have a single:
- Image_id
- Image 
- Name
- Image_Poster

#### Each Image value must have ONE or more:
- Characteristics

# How to use the backend API =
1. Open the app in a IDE and in the console type yarn start or npm start
2. In order to post new values to the data base it is recommended to use an API Testing Tool such as Postman or Insomnia

### Get the images
- In your API testing tool make a GET request http://localhost:5000/api/search/
- If you are using a browser type in the url http://localhost:5000/api/search/
- You should see a list of images

### Post a new image
- In your API testing tool make a POST request http://localhost:5000/api/images
- The Body of the post request should be in JSON format and will look like:
{
    "image_name": "< image_name_value >",
    "image_object": "< image_object_value >",
    "image_poster": "< image_poster_value >",
    "price": "< image_price_value >",
    "characteristics" : "< an array of characteristics >"
}

 
