# Skate Universe

## By Patrick Alexander Lucas Van Der Flier

### [Check Skate universe](https://skate-universe.herokuapp.com/)

![Responsive image from the project](/src/assets/readmePics/responsive%20img.png)

# SkateGram :

### Skate Universe was developed as my fifth and final project for CodeInstitute

# Reason :

One of the most important aspects of skateboarding is the network that you make with completely random people. No shame no race no status, just tricks, that's what skate universe is about. Skate universe is a web application inspired by the current social media that we have available nowadays, a place where you can post videos and pictures about skateboarding, a place where you can follow your favorite users, and like their posts/videos, unlike it if you wish, and save it for later

# The User Experience (UX)

## Audience :

- Skaters who want to share their experiences within the Skate Universe.
- Skaters who want a defined theme for social media.
- Skaters who wish to create or follow a fanbase based on their skate interests.

## User Report :

- first experience

  1. As a user I would like easy navigation across the web application.
  2. As a user I would like access to skateboarding social media.
  3. As a user I would like to share my thoughts with other users in a dynamic way.

- Second experience

  1. I would want to check my post for likes/dislikes, comments, and fanbase.
  2. I would want to edit posts and profiles.
  3. I would want to check the mainstream posts and videos for new subjects to discuss.

- As a developer
  1. I want to make it interactive.
  2. I want the site to be easy to fulfill basic forms such as registration, post, and login.
  3. I want to give a focused themed social media about skateboarding so skaters feel more comfortable with their kind.

# Features :

The Features were designed to distinguish each area with ease so the user can explore the site instinctively. The beautiful thing about react is the component-based structure, making it cleaner to navigate

- Navigation bar
  - The navigation bar component is responsive and it's located across all sections of the page.
  - It consists of intuitive links that tell you precisely what you can do in the application.
  - as it shrinks the navigations become the brand title and a burger menu.
  - The icons have a hover effect that gives a message to the user about what the icons do.

![navigation bar image](/src/assets/readmePics/navbar-com-user.png)

- Landing page / Home page
  - The landing page is the main page of the application, just like any social media application, the user can see it but not interact with it if the user is not authenticated
  - Once the user is authenticated the user will be allowed to like/dislike, comment, and favorite a post/video of his, or her choosing.
  - it is simple and intuitive the user has a clear understanding of the application as a whole with just one glance.

![landing / Home page image](/src/assets/readmePics/homepage.png)

- Post Creation
  - The user is allowed after becoming registered to create a post that consists of a unique title, a post image, a category, and the contents of the post.
  - After submitting, the user is redirected to the posting page with the id of the post the user created, so he can access the post with more control options.

![Post creation image](/src/assets/readmePics/post-creation.png)

- Post detail
  - From the home page or profile page the user can click on a post of his choice.
  - There the user can read the content of the post, like, dislike, favorite, and comment on the post.
  - If the user is the owner of the post he is allowed to choose between deleting and editing the post

![Post detail image](/src/assets/readmePics/post-detail.png)

- Post Deletion
  - The user is allowed if authenticated to delete his post.
  - the same for videos

![Post Delete image](/src/assets//readmePics/post%20deletion.png)

- Log in
  - The user after registration can fill in a form to login into the application.

![Login image](/src/assets/readmePics/login.png)

- registration
  - The user fills in a registration form that automatically creates a profile for such a user with a default profile bio and default profile image.

![registration image](/src/assets/readmePics/register.png)

- Profile
  - user can check and edit his profile info.
  - The profile comes with a default picture and description.
  - The user can also change his/her's password and username

![Profile image](/src/assets/readmePics/Profile.png)

- pagination

  - This application has infinity scrolling, which engages the user to keep looking at the application for new posts(Pretty neat if you ask me)

- Video page
  - The video page follows the same structure as the main page but only for videos, where the user has the same experience but is filtered only by videos, the user can still like/dislike comments and add to favorites whatever video post he/she wishes to.

![Video Page](/src/assets/readmePics/video-page.png)

- Video Detail
  - From the video
    homepage or profile page the user can click on a video post comment icon for more info about that video post.
  - There the user can read the content of the video, like, dislike, favorite, and comment on the video post.
  - If the user is the owner of the video post he is allowed to choose between deleting and editing the video post by clicking on the 3 dots icon 
![Video Page](/src/assets/readmePics/video-detail.png)

# Future Features :

- Videos and posts on the main page only
- Liking/disliking comments
- Replaying to comments

# Testing :

Testing in this application was made manually, defensive code was implemented to redirect the user to the sign-in page when trying to create posts or edit profiles

- Registration
  - The registration form allows the user to create an account if filled in correctly.

  - if incorrect the user receives a message pointing to the incorrect fields

  - Attempt
![registration image](/src/assets/readmePics/testing-registration.png)
  - result
  ![registration image](/src/assets/readmePics/worked.png)
  - this proves that the user was registered in the database and the nav bar confirms that the user is indeed authenticated

- Log in
  - After filling in the user credentials the user is redirected to the main page with full access to the application
  - The navbar confirms that the user is logged in by the addition of options that logged-in users have
  - The user sees his/hers profile picture with the username on the side, plus post/video creation, regular posts favorites, and video favorites nav icons,
  - attempt
![Login image](/src/assets/readmePics/login-test.png)
  - result 
![Login image](/src/assets/readmePics/login%20worked.png)

- Profile
  - The profile is immediately created with the account registration. Pretty neat if you ask me. It also comes with two default values one for the profile image and another for the description.

![Profiler image](/src/assets/readmePics/profile%20(2).png)
![Profiler image](/src/assets/readmePics/profile%20edit.png)
![Profiler image](/src/assets/readmePics/profile%20bio%20edit.png)
![Profiler image](/src/assets/readmePics/result%20profile%20bio.png)
 - The steps above confirm that account authentication and editing from the profile work fine 

- Logout
  - Clicking on the logout button the user is logout from his account and sent to the main page, where the user still can see all posts but won't have all the authenticated user functionality


- Liking/disliking
  - The user is allowed to like posts when liked shows the number of likes on the page the like button becomes an unlike button reflecting directly to the database.
  - The same applies to video posts
  - attempt
![liking system image](/src/assets/readmePics/testinglikes-dislikes.png)
  - result
![liking system image](/src/assets/readmePics/post%20likes%20owrks.png)
- Unliking / removing dislikes
  - The user is also allowed to unlike the posts reflecting directly to the database.
![Unlikig image](/src/assets/readmePics/testinglikes-dislikes.png)

- Edit
  - If the user is not happy with his post/video the user is allowed to edit it.

![Editing image](/src/assets/readmePics/PostEditform.png)

- Create
  - When logged in the user can create his posts or a video post.

![Creation image](/src/assets/readmePics/Post%20create%20form.png)
  - result

![Creation image](/src/assets/readmePics/posting%20workis.png)

- Delete
  - the user is also allowed to delete his posts in a dynamic way where all tables related to that post are also deleted(likes/comments).

- favorite
  - the user is also allowed to favorite his posts
  - The same applies to video posts
  - before
![Creation image](/src/assets/readmePics/favorites%20before.png)
  - result 
![Creation image](/src/assets/readmePics/favorite%20result.png)


# User stories:

## For the user's stories Github Project board was used.

- GitHub kambarm board.

![Kambam Board image](/src/assets/readmePics/kambamboard.png)


# Test Validators :

## Since this is a React Full stack project Jsx where used, not need HTML validation.

#

## [Eslint](https://eslint.org/):

- Eslint newest version was first used to fix all issues in hand, then removed due to deployment issues
- in the eslintrc.js "react/prop-types": 0, the rule was added to ignore as they are concerning code that was provided in the Moments Walkthrough project:

## Jigsaw CSS Validator
![css validator](/src/assets/readmePics/css%20validator.png)

- All layouts passed in the jigsaw CSS Validator

## Bugs

- Somewhere somehow the database got corrupted making it impossible for new users to follow other users, and like/dislike posts. The solution was a simple database reset
- Version control was relevant during the development of this project, eslint was a controlled issue, I've decided to use it and correct it as much as possible, and then remove it, and leave it as the default version that comes with react-create-app.

## Deployment
The site was deployed to Heroku. The steps to deploy are as follows:
1. Launch the gitpod workspace.
2. Install ReactJS:
```
npx create-react-app . --use-npm
npm start
```
2. Install the following packages using the command `npm install`:
```
react-bootstrap@1.6.3 bootstrap@4.6.0
react-router-dom@5.3.0
Axios
react-infinite-scroll-component
MSW --save-dev
jwt-decode
-g eslint
```
3. Git add, commit, and push changes to gitpod.
4. Create the project app on Heroku, and link the GitHub repository by navigating to the 'Deploy' tab.

### Connecting to the API:
1. Navigated to the Heroku app of the project DRF-API, and under the Settings tab, added the following config vars:
- Key: CLIENT_ORIGIN | Value: https://react-app-name.herokuapp.com
- Key: CLIENT_ORIGIN_DEV | Value: https://gitpod-browser-link.ws-eu54.gitpod.io
2. Check that the trailing slash `\` at the end of both links has been removed, and save the config var pairs.
3. Install the Axios package, & create supporting `axiosDefaults.js` as shown in [Moments Walkthrough](https://github.com/Code-Institute-Solutions/moments/blob/cf955d2f2e6f70f61c92d1f9de85558d8e49f3a8/src/api/axiosDefaults.js).

### Deploy to Heroku:
1. In the `scripts` section of `package.json` in gitpod, added the following command:
```
"Heroku-prebuild": "npm install -g serve",
```
2. Add Procfile to the project root & populate with the following:
```
web: serve -s build
```
3. Repeat the steps of git add/commit/push.
4. Deploy the project via the deploy button on Heroku.

# External Features :

### In the links below, you will find all the icons and fonts used in the project.

- [Google Fonts](https://fonts.google.com/)
  - Was used to select the font combination for this project.
- [Font Awesome](https://fontawesome.com/)
  - Was used to select the icons used in this project.
- [Bootstrap](https://getbootstrap.com/)
  - Bootstrap was used as the CSS framework for this project.
# Credits :

1.  [Code Institute](https://codeinstitute.net/)

- Code Institute for this walkthrough, that gave me insight at the building of this project as a stepping stone, full stack development was never so clear

## Special thanks

I would like to thank everyone who helped me with this project.

- My mentor.
- Code Institute for giving the best support to develop this project.
- And all friends involved with helping this project.

# Media

  - All Media used was found by random google searches, information about the origin of the media is not certain 
