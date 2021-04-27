# Git Cards

## Story

Over at a beer last night you heard that more and more people are using github but what they are lacking is an easy way to keep track of the people they are following.
So you decided to create a site with a github wall (similar to the facebook wall) where you allow the users to choose who to follow.
Turn's out you can use the public api `https://api.github.com/users/${user}` to achieve this. Your designer friend has already made a simple sketch of how the site should look so now you just need to write the code for the logic.

## What are you going to learn?

- JS fetch API
- React UseState hook

## Tasks

1. Implement the `addNewUser` function so that when the user presses the button a new card is added to the `cardList` array. The card is fetched from the url `https://api.github.com/users/${gitUser}` where `gitUser` contains the value inside the input box.
    - When the user enters the value `fabpot` in the input box and presses the button a new card is added similar to the image below ![New Card](media/frontend/git-cards-1.JPG)
    - When the user enters the value `fabpot`, presses the `Add new user` button then enters `andrew` and presses the `Add new user` button 2 cards are added

2. When the user presses the button with the label `Pin top 3 repo's to nav` the first 3 repos from the URL inside the property `repos_url` from the fetched object are displayed
    - When the user enters the value `fabpot` in the input box, presses the button `Add new card` then in the newly created card presses the button `Pin top 3 repo's to nav` all the user's repos are added to the navbar similar to the image below ![New Card](media/frontend/git-cards-2.JPG)
    - If a user has more then 3 repos, only the first 3 repo names are displayed in the navbar
    - If a user has only 2 repos, only 2 repo names are displayed in the navbar (try the user `mihai-radulescu`)

3. The same github user can not be added twice
    - When the user enters the value `fabpot` in the input box and presses the button a new card is added. If you press again on the button, a second card is not added

4. Cards can be deleted
    - When there are 2 cards, pressing the `delete` button in the cards removes that card from the list

## General requirements

None

## Hints

- once you start the project you first need to install the react library with `npm install`
- once all the react libraries are installed, you can start the project  with `npm start`

## Background materials

- <i class="far fa-exclamation"></i> [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- <i class="far fa-exclamation"></i> [JavaScript Fetch API Examples](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)
- <i class="far fa-exclamation"></i> [React Use Effect](https://reactjs.org/docs/hooks-effect.html)
