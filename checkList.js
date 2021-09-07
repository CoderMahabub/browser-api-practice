// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে।

// Recap setInterval()
// setInterval(() => console.log('Mahabub Azam'), 5000);

/* console.log('Start');
setTimeout(() => console.log("Coder Mahabub"), 3500); */

// ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও

/* const data = prompt('Provide Your Roll Number');
const result = parseInt(data) + 200;
alert(result); */


// ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও

/* const confimation = confirm('Do you want to see the website location?');
if (confimation) {
    console.log(location.href);
} */

// ৪. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে লিখে ফেলো। 

/* JavaScript Cookies
A cookie is an amount of information that persists between a server-side and a client-side. A web browser stores this information at the time of browsing.

A cookie contains the information as a string generally in the form of a name-value pair separated by semi-colons. It maintains the state of a user and remembers the user's information among all the web pages.

How Cookies Works?
When a user sends a request to the server, then each of that request is treated as a new request sent by the different user.
So, to recognize the old user, we need to add the cookie with the response from the server.
browser at the client-side.
Now, whenever a user sends a request to the server, the cookie is added with that request automatically. Due to the cookie, the server recognizes the users.

JavaScript Cookies
How to create a Cookie in JavaScript?
In JavaScript, we can create, read, update and delete a cookie by using document.cookie property.*/


// ৫. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে। (নিজের মতো করে লিখবে )
/* Local storage
Local storage stores a larger amount of data on the client's computer in a key-value pair format and has no expiration date. Data is never transferred to the server and is accessible via JavaScript and HTML5.

Capacity: 10MB
Accessible from: Any window
Expiration: Never
Storage location: Browser only
Sent with requests: No
Blockable by users: Yes
Editable by users: Yes */

/* Session storage
Session storage stores a larger amount of data on the client's computer only for the current session, expiring the data on tab close. Data is never transferred to the server and is accessible client-side from the same tab.

Capacity: 5MB
Accessible from: Same tab
Expiration: On tab close
Storage location: Browser only
Sent with requests: No
Blockable by users: Yes
Editable by users: Yes */


