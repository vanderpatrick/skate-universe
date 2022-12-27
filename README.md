# Skate Universe

## By Patrick Alexander Lucas Van Der Flier

### [Check SkateGram](https://skate-universe.herokuapp.com/)

![Responsive image from the project](/static/images/responsive.png)

# SkateGram :

### Skate Universe was developed as my fifth and final project for CodeInstitute

# Reason :

One of the most important espects of skateboarding is the network that you make with completly random people. No shame no race no status, just tricks, that's what skate universe is about. Skate universe is an web apllication inspired by the current social medias that we have available now a days, a place where you can post videos and pitures about skateboarding, a place where you can follow your favorite users, like their posts/videos, unlike it if you wish, and save it for later

# The User Experience (UX)

## Audience :

- Skaters who want to share their experiences whithin hte Skate Universe.
- Skaters who wants a defined theme for a social media.
- Skaters who wish to create or follow a fanbase based on their own skate interesses.

## User Report :

- first experience

  1. As a user I would like easy navigation across the web application.
  2. As a user I would like access to skateboarding social media.
  3. As a user I would like to share my thoughts with other users in a dynamic way.

- Second experience

  1. I would want to check my post for likes/dislikes,comments and my fanbase.
  2. I would want to edit posts and profiles.
  3. I would want to check the main stream posts and videos for new subjects to discuss.

- As a developer
  1. I want to make it interactive.
  2. I want the site to be easy to fulfill basic forms such as registration, post, and log in.
  3. I want to give a focused themed social media about skateboarding so skaters feel more comfortable with their kind.

# Features :

The Features were designed to distinguish each area with ease so the user can explore the site instinctively. The beautyful thing about react its the component based structure, makeing it cleaner to navigate

- Navigation bar
  - The navigation bar component is responsive and its located across all sections of the page.
  - It consists of intuitive links that tell you precisely what you can do in the application.
  - as it shrinks the navigations become the brand title and a burger menu.
  - The icons have a hover effect that gives a message to the user of what hte icon do.

![navigation bar image](/src/assets/readmePics/navbar-com-user.png)

- Landing page / Home page
  - The landing page is the main page of the application, just like any social media application, the user is able to see it but not interact with it if the user is not authenticated
  - Once the user is authenticated he will be allowed to like/dislike, comment and favorite a post/video of he's, her's choosing.
  - it is simple and intuitivem the user has a clear understanding about the apllication in a whole by just one glance.

![landing / Home page image](/src/assets/readmePics/homepage.png)

- Post Creation
  - The user is allowed after becoming registered to create a post that consists of a unique title, a post image, category and the contents of the post.
  - After submitting, the user is redirected to the post page with the id of the post the user created, so he can access the post with more control options.

![Post creation image](/src/assets/readmePics/post-creation.png)

- Post detail
  - From the home page or profile page the user can click on a post of his choice.
  - There the user can read the content of the post, like, dislike, favorite and comment the post.
  - If the user is the owner of the post he is allowed to choose between deleting and editing the post

![Post detail image](/src/assets/readmePics/post-detail.png)

- Post Deletion
  - The user is allowed if authenticated to delete his post.
  - the same for videos

![Post Delete image](/static/images/deleting.png)

- Log in
  - The user after registration can fill in a form to login into the aplication.

![Login image](/src/assets/readmePics/login.png)

- registration
  - The user fills in a registration form that automatically creates a profile for such a user with a default profilie bio and default profile image.

![registration image](/src/assets/readmePics/register.png)

- Profile
  - user can check and edit his profile info.
  - The profile comes with a default picture and description.
  - The user can also change his/her's password and username

![Profile image](/src/assets/readmePics/Profile.png)

- pagination

  - This application has infinity scrolling, which engages the user to keep looking the application for new posts(Pretty neat if you ask me)

- Video page
  - The video page follows the same structure of the main page but only for videos, where the user has the same exact experience but filterd only by videos, the user can still like/dislike comment and add to favorites whatever video post he/she wishses to.

![Video Page](/src/assets/readmePics/video-page.png)

- Video Detail
  - From the video
    homepage or profile page the user can click on a video post comment icon for more info over that video post.
  - There the user can read the content of the video, like, dislike, favorite and comment the video post.
  - If the user is the owner of the video post he is allowed to choose between deleting and editing the video post by clicking in the 3 dots icon 
![Video Page](/src/assets/readmePics/video-detail.png)

# Future Features :

- Videos and posts in the main page only
- Liking/disliking comments
- Replaying to comments

# Testing :

Testing in this application was made manually, defensive code was implemented to redirect the user to the sign in page when trying to create posts or edit profiles

- Registration
  - The registration form allows the user to create an account if filled correctly.

  - if incorrect the user recivies a message poiting the fields that are incorrect

![registration image](/static/images/test-registration-pass.png)

- Log in
  - After filling in the user credentials the user is redirected to the main page with full access to the application
  - The navbar confirms that the user is logged in by the addition of options that logged in users have
  - The user sees his/hers profile picture with the usernmae on the side, plus post/video crieation, regular posts favorites and video favorites nav icons,

![Login image](/static/images/test-login-pass.png)

- Profile
  - The profile is immediately created with the account registration. Pretty neat if you ask me. It also comes with two default values one for the profile image and another for the description.

![Profiler image](/static/images/test-profile-pass.png)

- Logout
  - Clicking on the logout button the user is logout from his account and sent to the main page, where the user still can see all posts but wont have all the authencticated user functionality

![LogOut image](/static/images/test-logout-pass.png)

- Liking / disliking
  - The user is allowed to like posts when liked shows the number of likes on the page the like button becomes an unlike button reflecting directly to the database.
  - The same applys to video posts

![liking system image](/static/images/test-like-pass.png)

- Unliking / removing dislikes
  - The user is also allowed to unlike the posts reflecting directly to the database.

![Unlikig image](/static/images/test-unlike-pass.png)

- Edit
  - If the user is not happy with his post / video the user is allowed to edit it.

![Editing image](/static/images/test-edit-pass.png)

- Create
  - When logged in the user can create his posts or a video post.

![Creation image](/static/images/test-post-creation-pass.png)

- Delete
  - the user is also allowed to delete his posts in a dynamic way where all tables related to that post are also deleted(likes/comments).

![Deleting image](/static/images/test-delete-pass.png)

# User stories:

## For the user's stories Github Project board was used.

- GitHub kambarm board.

![Kambam Board image](/static/images/kambam-board.png)

-Flow chart

![Miro Flow Chart image](/static/images/flowchart.png)

# Test Validators :

## Since this is a React Full stack project Jsx where used, having no need for a HTML validation.

#

## [Eslint](https://eslint.org/):

- Eslint newest version was first used to fix all issues in hand, then removed due to deployment issues
- in the eslintrc.js "react/prop-types": 0, rule was add to ignore as they are in relation to code that was provided in the Moments Walkthrough project:

## [Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fskategram.herokuapp.com%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- All layouts passed in the jigsaw CSS Validator

## Bugs

- Some where some how the database got corrupted making inpossible for new users to follow other users, and like/dislike posts. The solution was a simple database reset
- Version control was relevante during the development of this project, eslint was an controlled issue, i've decided to use it and correct as much as possible, and then remove it, and leave it as the default version that comes with react-create-app.

## lighthouse

- The rating of the application was acceptable with a good performance rating.

![Light House image](/static/images/light-house.png)

# Deployment :

## Remote Deployment (Heroku) :

- Connect to your GitHub repository by searching the chosen repository and clicking connect.
  ![Heroku deployment registry search](/static/images/heroku-deployment-github.png)

- Chose the proper branch in the manual deployment and click deploy branch.
  ![Heroku manual deployment](/static/images/heroku-deployment-deploy-branch.png)

- Wait for the application to load and then click view.
  ![Heroku deployment loading](/static/images/heroku-deployment-view.png)

- After clicking view your site will be loaded.
  ![image of the project page](/static/images/heroku-deployment-done.png)

## How to fork :

- In the repository, you want to fork, go to the upper right corner and click fork, then click in create fork. (random project image to show how to fork)
  ![image of location from fork](/static/images/forking.png)
- After "forking" wait while GitHub copies the repository into your profile.

## Desktop Deployment :

- In the repository click on code.
  ![Code button from GitHub repository](/static/images/git-code.png)
- Click on a download zip file.
- When that is done, open with your chosen code program and download the requirements.txt with the commend.
- pip install -r requirements.txt.

# External Features :

### In the links below, you will find all the icons and fonts used in the project.

- [Google Fonts](https://fonts.google.com/)
  - Was used to select the font combination for this project.
- [Font Awesome](https://fontawesome.com/)
  - Was used to select the icons used in this project.
- [Bootstrap](https://getbootstrap.com/)
  - Bootstrap was used as the CSS framework for this project.
  # Credits :

1.  [MDBoostrap](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)

- For providing the footer code.

2.  [Codemy](https://www.youtube.com/c/CodingNepal/featured)

- For providing insight into the creation of the profile and comment section.

3.  [Code Institute](https://codeinstitute.net/)

- Code Institute for all the support and care for me and my projects.

## Special thanks

I would like to thank everyone who helped me with this project.

- My mentor.
- Code Institute for giving the best support to develop this project.
- And all friends involved with helping this project.
