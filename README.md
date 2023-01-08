# Assignment_Module-12
## Filtering UFO sightings
### The purpose of this development is to provide people with the ability to filter through purported UFO sightings. We will briefly describe how to use the website and then provide some commentary on the benefits and drawbacks of the website mechanics.

### 1) Initialized webpage:
The website is simple. It provides a brief description of it's purpose, it's stylized using space themes and it contains a data table with UFO sightings that can be filtered via 5 input fields: Date, City, State, Country and Shape. See a screenshot of the website: ![Initial screen](https://user-images.githubusercontent.com/114181709/211212142-3619d1e5-0e97-425c-8874-49645167b56b.png)

### 2) Website mechanics:
The mechanics of the website revolve around the ability to filter the data table. To filter, first click into the field of your choice, then enter the exact value you wish to filter, finally click out of that field to see the filtering occur on the table. Note that multiple filters can be applied at the same time. The following 2 screenshots show what happens when you filter using 1 and 2 filters respectively: ![City filter](https://user-images.githubusercontent.com/114181709/211212243-1a1d7607-65ba-4ac6-87a1-d547ebff3e2f.png)
![City and shape filter](https://user-images.githubusercontent.com/114181709/211212244-faebad2b-4f67-46de-92d5-52af8586ff2f.png)


### Summary of website usability:
This type of filtering has its disadvantages. Primarily, it's not intuitive for a website user. Not having a button or clear instruction on how to filter the data causes confusion which reduces a person's desire to use the website.
Therefore, we offer 2 proposals to improve the website usabililty:
1) Create a search button that a user can press to effectuate the search once the filtering fields have been filled out.
2) Showing all the data in the initial form of the webpage is not scalable. If you had thousands of UFO sightings your webpage could not be effectively navigated. Therefore, it would be best to store that data in a database and to create an additional script with server-side code which could communicate between the user input on the webpage and the UFO sightings data stored in the database. That way the user only sees what he's filtered. If he wants to see everything then a button can be added which downloads all the database data in csv format.
