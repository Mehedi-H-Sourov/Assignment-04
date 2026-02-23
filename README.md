# Assignment 04 - QnA

---

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### Answer:

- getElementById()
  - Finds a single element by its unique id.
  - Returns one element.

- getElementsByClassName()
  - Finds all elements with a specific class name.
  - Returns an HTMLCollection .

- querySelector()
  - Uses CSS selectors.
  - Returns the first matching element only.

- querySelectorAll()
  - Uses CSS selectors.
  - Returns all matching elements as a NodeList.

---

## 2. How do you create and insert a new element into the DOM?

### Answer:

### Steps of creating and inserting a new element into DOM:
### Step 1: Create an element

`const para = document.createElement("div");`

### Step 2: Set content and attributes

```para.textContent = "I am a new card!";
para.className = "content px-4 py-4 flex justify-between";
para.style.color = "green";
```


### Step 3: Insert into the page

```const container = document.getElementById("container");
container.appendChild(para);
```
---

### Other methods to insert elements:

- appendChild() → Adds at the end of parent  
- prepend() → Adds at the beginning of parent  
- insertBefore() → Inserts before a specific child  
- insertAdjacentHTML() → Inserts at specific positions  

Although innerHTML can also be used, it is less safe.  
It is generally better to use createElement() + textContent.

---

## 3. What is Event Bubbling? How does it work?

### Answer:

When an event occurs on an element (like a click), it doesn’t stop there. The event travels upward through its parent elements until it reaches the document. This upward movement is called Event Bubbling.We can think of it like a bubble rising from bottom to top.

### Example:

```<div id="grandparent">
  <div id="parent">
    <button id="child">Click!</button>
  </div>
</div>
```

If we click the button, the event flows like this:

button → parent → grandparent → document

---

### Event Flow Phases:

1. Capturing Phase: Event travels DOWN from document to the target element.

2. Target Phase:  Event reaches the clicked element.

3. Bubbling Phase: Event travels UP from the target element back to document.

---

### Why Event Bubbling is Useful:

- We don’t need separate listeners for every child element.
- Improves performance.
- Makes code cleaner and more dynamic.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

### Answer:

Event Delegation is a technique where instead of adding event listeners to multiple child elements, we add one listener to the parent and detect which child was clicked using event.target.It works because of Event Bubbling.

---

### Benefits of Event Delegation:

-  Less code (one listener instead of many)
-  Better performance (fewer listeners)
-  Works for dynamically added elements
-  Easier to maintain

---

## 5. What is the difference between preventDefault() and stopPropagation()?

### Answer:

- preventDefault()
  - Stops the browser’s default behavior.
  - Example: Prevent form submission or link navigation.
  - Event bubbling still continues.

- stopPropagation()
  - Stops the event from bubbling up to parent elements.
  - Default  behavior still happens.

---

### Key Differences:

**The Key difference is that preventDefault() stops default browser action whereas stopPropagation() stops event flow in the DOM.**




