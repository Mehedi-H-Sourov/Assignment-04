#Assignment 04 - QnA

###1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: "getElementbyId" finds the single element by its uniquely assigned 'id'; whereas 'getElementsByClassName' finds all the elements for a specific class name and returns an HTML collection. 'querySelector' allows us
to find element by using CSS selectors and it only returns the fiirst matching element whreas 'querySelectorAll' returns all the matching elements as a Nodelist.

##2. How do you create and insert a new element into the DOM?
Ans: Steps to create and insert a new element into the DOM:
step-1: Create element:
const para = document.createElement("div")

step-2: Set content and attributes:
para.textContent = "I am a new card!"
para.className = "content px-4 py-4 flex justify-between"
para.style.color = "green"

step-3: Insert into the page
const container = document.getElementById("container")
container.appendChild(para)
Other methods to append: appendChild - End of parent; prepend -Beginning of parent; insertBefore - Before a specific child; insertAdjacentHTML - Any position around element;
Also possible to set 'innerHTML' thoough its not the safest option. So, its better to use the combination of 'createElement' + 'textContent'

##3. What is Event Bubbling? And how does it work?
Ans: When we click on an element, the event doesn't just end on that element. It travels upward through all of its parent elements, triggering their event listeners too and it goes all the way up to the document.
This upward travel is called Event Bubbling, its like a bubble rising to the surface from the bottom.
The following represents a model of an event bubbling:

<div id="grandparent">
  <div id="parent">
    <button id="child">Click!</button>
  </div>
</div>
Click the button → the following order of things occur:
>>button >> parent >> grandparent >> document

However the workflow when we trigger an event happens in the following ways :
first, Capturing: travels DOWN from document to the clicked element.
second,  Target: reaches the clicked element, fires the event
third, BUBBLING   →  travels UP from clicked element back to document

Usefulness of 'event bubbling' :
>> Instead of adding eventListener to every single child, we can add it to the parent and let bubbling do the work
>> With bubbling, codes are often dynamic, efficient and produce better performance

##4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a technique where instead of adding event listeners to each child element, we add one listener to the parent and use 'event.target' to figure out which child was clicked.
It works because of Event Bubbling which is - when a child is clicked, the event bubbles and reaches its parents.
Usefulness of Event Delegation:
Less code: One listener instead of many
Better performance: Fewer listeners = less memory
Handles dynamic elements: New children are covered automatically
Easier to manage: One place to control all child events

##5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: stopPropagation(): Stops the event from bubbling up to parent elements — but the default behavior still happens.
stopPropagation(): Stops the browser's built-in default action for that element — but the event still bubbles up normally.
Key Differences between preventDefault() and stopPropagation():

                     preventDefault()                     stopPropagation()
what it stops:       It stopsBrowser's default action     Stops eventvent from bubbling up 
Bubbling:            Bubbling continues as usual          Bubbling stops
Default action:      Blocked further activity             Continues normally
Common use:          Forms, links, checkboxes             Nested click handlers

