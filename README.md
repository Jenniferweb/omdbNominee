# The Shoppies: Movie awards for entrepreneurs

An application that allows the user to search and add up to 5 nominees to their desired nominated movies. Coded using React JS

## Technical Requirements:
1. Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
2. Each search result should list at least its title, year of release and a button to nominate that film.
3. Updates to the search terms should update the result list
4. Movies in search results can be added and removed from the nomination list.
5. If a search result has already been nominated, disable its nominate button.
6. Display a banner when the user has 5 nominations

## Screenshot of the webpage
![image](https://user-images.githubusercontent.com/25773691/117556939-24642000-b03c-11eb-81af-18908075dd29.png)

## Usage
- Movies can be searched in the search bar by the movie's name. The search results are dynamic and will update based on what text is in the seachbar (no need to press enter)
- Movie posters will appear in the container directly below, the container can be horizontally scrolled to view more results (search results is defaulted as "Avengers" to start)
- Hovering over the movie poster will display the name and year released, as well as a "nominate button" 
![image](https://user-images.githubusercontent.com/25773691/117557008-d4398d80-b03c-11eb-9364-0d5e97cc61ff.png)
- Pressing this button will add the movie to the nominees list below
- Once a movie has been added to the nominees list, the button will be replaced with "added" and will not do anything 
![image](https://user-images.githubusercontent.com/25773691/117557029-fe8b4b00-b03c-11eb-8808-39993635b2ca.png)
- Once a movie is in the nominees list, hovering over it will display a "remove" button, pressing this will remove it from the nominees 
![image](https://user-images.githubusercontent.com/25773691/117557055-31354380-b03d-11eb-9e0b-a4673e539f55.png)
- The banner at the top right of the webpage will change based on whether the user has 5 nominees or not 
![image](https://user-images.githubusercontent.com/25773691/117557070-57f37a00-b03d-11eb-8d94-ea0e0cfe6957.png) 
![image](https://user-images.githubusercontent.com/25773691/117557076-62ae0f00-b03d-11eb-8bdb-038606b34e3c.png)
- Once the user has 5 nominees all buttons on the movie poster except for "remove" will be disabled 

## Extras
- A "clear all" button will appear beside the nominees container once the user has at least one nominee
- The nominees will save locally, meaning they will still be there even after a page refresh
- A hip UI :) 



