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

