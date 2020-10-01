## Written Exam

How and when to use `.forEach`, `.map`, `.filter`, and `.find` in JavaScript?

Please give an as extensive explanation as possible with code examples and potential use cases. Write your answer below and use markdown to format your text.




## Answers

### .forEach
Using a forEach method while example using an array. recalls the array for each element. 

### .map
Using .map in a class component is to map over a function to display a list of similar object of a component. 
For each element in an array, .map provides a method to display each function for each element.

Example: 
teaserList = this.state.data.map((data) => {
    return (
          <div data-id={data.id} data-cy={"data-" + data.id} key={data.id}>

Here we use .map to be able to display each item one by one from the array. So forexample we dont show everything at once. With the crime teaser list we use .map to be able to show all the example description for each report. 

### .filter
We use .filter in javascript to filter away some elements we dont want from the array. Let's say on crime teaser project, we got a data.json that is provided with lots of values inside the array. we could be able to use the .filter function to sorts everything out to just call on id, title and desciption. 

### .find

