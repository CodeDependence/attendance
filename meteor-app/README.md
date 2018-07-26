# Back2Bikes - Ordering Parts

Deployed Application: http://www.depechecode.com.au

Application Github Page: https://github.com/Back2bikes/attendance

(Go inside meteor-app folder at above link)

# Project Management

### 1. Record interactions with your client in a diary format
---
Interactions details with the client were recorded in trello on trello cards which are also available in PDF in a diary format. These diary entries contain details such as:
* Agenda of the meeting
* Brief summary of discussions
* Plans moving forward


![b2b_diary_png](./assets/b2b_diary.png)
![b2b_diary_png](./assets/b2b_meetings.png)


### 2. Plan information gathering activities to determine project requirements, constraints and risks
---
Our initial week of planning and completing appropriate documentation through part A of the assignment provided us with most of the information we would need for the next two weeks. 

We visited the workshop on the Tuesday of the first week, which allowed us to gain insight of how the application would be used by the store manager. 

Mike (our client) and his junior developer Matt met up with us a few times during the three weeks, which allowed us to focus in on the scope of the project. There were multiple google hangout calls and meetings which can be seen in the meeting minutes section.

Running our daily standups and allowing about 30-45 minutes for organising our day let us focus on what we needed to do, without much questioning involved. Whenever we were to implement something new, we would have a chat with another team member to see if it was a necessity, or if something else could be more important to work on first.

We found risks involving a broad scope early. Once our meetings began, we found there were many features that were 'nice-to-haves' rather than a necessity for the MVP. In the beginning of coding, we discussed not spending time on unimportant features, which lowered our risk of not completing the MVP on time. 


### 3. Develop project charter, including preliminary statement of project scope and obtain sign-off
---
The week on the 09th and 10th of July we had meetings to discuss the MVP. With approval from our client, we agreed the primary problem was customer’s seeing the merchant wholesale pricing and our solution would be to create a skin to only display retail pricing. This was completed fairly early on and we then began discussions for further scope. We discussed these further functions with our client and agreed on a search function, shopping cart, and admin section.
During our morning sprints we broke down tasks into smaller sections and organized them on trello. Who chose which task happened fairly organically, with team members choosing tasks based on what they wanted to learn more of or what they enjoyed working on in the past. Throughout the group project it emerged that we were a lot more productive with a tech lead. This was Eryk’s role. He would work on his own components but have his finger in every pie to help out other team members. Erin settled in on the search component,  Meng worked on testing and schema, Jacob was heavily involved in the semantic UI, and Glenn ran the cart and retail price functions.


### 4. Prepare project work breakdown and schedule
---
Our team didn't use an official work breakdown or schedule, but instead we actively used Trello and morning stand-ups to break down our work load between the group members. We did have a loose aim to start coding on the Monday of week 2, and be finished the MVP as soon as possible in the third week of the project, so we could work on our documentation and allow time for errors and fixing said errors.

The first week was dedicated to completing part A of the assignment, which was almost all the documentation needed to begin coding. We sat down together and divided the questions up to different team members and set up a git repository with our README.md file.

The next two weeks were dedicated to coding and followed a very similar pattern to the first week. We decided what had to be done in our morning stand-ups and then imported these ideas to our Trello board, then picked what we would like to work on from there.


### 5. Allocate roles and responsibilities to team members, based on project solution requirements
---
We initially thought that all members of the team would get some time in all environments of the code. Our plan was to each individually pick pieces of code to work on from the Trello board, work on them until completion, then perform a PR. This changed quickly as each member got comfortable working in their own sections of code. Each member became specialised in their section of code, rather than understanding everything going on at once. We were quick to realise that individual coding at all times wasn't as efficient as working either with a partner, or our "floating" member. We continued with this practise for the duration of the project.

The roles of each member was typically the same, each of us were to code as much as possible and help each other out when we could. Upon the first day of coding we found that Eryk would be a "floating" coder. He had put in a fair few hours understanding the meteor framework on the first weekened of the project. This allowed the rest of us to more easily understand the intricacies involved. The intimidation of playing around with an already established code base was eliminated quickly when we had someone who was fairly familiar with it.


### 6. Monitor each other’s assigned work
---
We used agile-styled stand-ups in the morning of each day, where we'd discuss what work we had done the day before, our progress on what we were working on, and how we would approach the day ahead. 

Trello was a useful tool when tracking the team's work. Each team member would assign themselves to a task and that would be visible on the team's Trello board. There was also a trello board that Back2Bikes could view, which we kept updated at the same time as our team's personal board. We used different lists to determine the progress each task was at.

Internal Team Trello Board: 
* Tasks filled on cards are required for planning phase.
* List down all tasks that needs to be completed.
* Use trello color labels to allocate task to each team member.
* Dedicated columns (swim lanes) for completed tasks.
* Summaries of Agile standups.

Back2Bikes (Client) Trello Board:
* Collaborative board with client.
* Consist of tasks of the development phase.
* Tasks include features that are inspired from user stories and user pains.
* Columns (swin lanes): Backlog, Ready, In-progress, Dev Done, QA, Done


### 7. Reassess ongoing project scope changes, risks and issues
---
Filtering through parts / the database and displaying markup prices were original MVP. Creating orders OOS
uploading xcel file, parsing to json, shop view on order screen

Our first discussion with Mike set the MVP for our project clearly.
At it's most basic, the app should:
* Mark prices up according to mike's specifications
* Be able to search the database by part numbers

These two simple goals provided a solid baseline for an MVP, and not a huge margin for failure. We hit these goals fairly early on in development, but not working perfectly, so we continued to define some extra features.

After determining the MVP scope, we brainstormed ideas with Mike and Matt from B2b to assume some more features that would form a more developed app:
* Upload the wholesaler's database and updating ours so it can continue to be used once we have finished development
* Have an order cart where we can store parts in orders, and have a summary including a total price of the order that may be placed
* Print or save an order for later reference

With these goals in mind, we had a lot more work ahead of us. The risks involved with increasing our work load were not completing these newly set goals, but Mike was heavily invested in the completion of these features.


### 8. Manage system testing and hand over activities. Prepare maintenance or support plans for client
---
Throughout the project we were consistent in using descriptive commit messages on github, and using readable code by following our clients coding standards to the best of our abilities.

We included one feature that would allow the shop manager or client himself to continue to update the database when a new catalog would come out. This was in the form of a file-uploading section on the part search page. Uploading the new .xlsx file will update the database without removing anything previously, so we don't have any erased data. This was important to our client, to ensure there's no missing information after an update. To make sure there's no repeats in the data, the uploading function cross-checks with the existing database and doesn't add an item if it already exists.


### 9. Obtain final project sign-off
---
He signed off on us starting on the Friday of the first week which let us begin coding. We had many meetings in the first week which can be seen in the meeting minutes section, which allowed us to get clarity on our MVP goals.

### 10. As a team, conduct post project review
---
As a team, we discussed the highs and lows of the group project. What we had learned and what we might have done differently next time. From the beginning, planning out our app and realising the scope. We talked about features that did not make it into the MVP, such a mailer. We spoke of the challenge of learning a new framework in a couple of days. How that fit into react. And how much more concrete our react and javascript has come in these last 3 weeks. We discussed how beneficial it was to have a lead dev float around each project, helping and tinkering where they could. We were all very proud of what we had accomplished in such a short amount of time and how much we had grown as devs.


### 11. Create a questionnaire for the client to ascertain the satisfaction with your products and services
---
See attached file _b2b_feedback.pdf_ for client response


# Application Design

### 1. A 350 word summary of your application including problem definition and solution
---
Our App seeks to solve the problems caused by the current process of ordering parts in a charity bike shed. 

The current problems with the ordering process result in wholesale prices being visible to the customer, there is no option to display retail recommended prices. This can cause unnecessary conflict between the merchant and customer as the merchant then has to explain markup calculations. Which can lead to an awkward situation and potential loss of sale for the bike shed. These are both important for Back 2 Bike’s ongoing success in the community as well as their financial viability.

The solution is to create a full stack application that will pull the data from the supplier and render it on Back 2 Bike’s own app in the workshop. This will fix the problem of customer’s being able to see the wholesale prices by only rendering the retail recommended prices in front of the customer. 

We’ve also added an admin view, shopping cart, and search feature to give added functionality to the app. The admin view gives the merchant the option to see the wholesale prices away from customer so that they have the ability to order parts for the shop which would not need a markup price. The shopping cart enables the merchant to select parts that they would like to order and store them in the shopping cart until such time as they see fit to send the order out. The search function will filter through a database of over 17,000 in search of a part number, name, and description (volunteers currently search through a physical catalogue for the part number).

### 2. Review the conceptual design with the client and edit based on their feedback
---

As we were integrating our app into an existing app we leaned heavily on the styling choices already at hand. Our client advised us to use Semantic-UI which took away most styling decisions on our part. Semantic-UI provides specific hues and shades but for the particular color for each feature we relied on convention. Red for delete, green for add quantity for example. 

### 3. User stories for the whole application
---
#### Volunteer Stories

- As a bike mechanic, I need to be able to order parts quickly and easily so I have more time to fix bikes and help others learn to fix bikes

- As a unemployed cycling lover I like to volunteer at back2bikes to learn to fix bikes so that I can improve my skills and help the community. I get left alone while parts get ordered on our slow computer when I'd rather have help

#### Shop Manager

- As an experienced manager I don't want my process to change too much so I can continue building relationships with customers

- As an experienced manager I dislike our slow ordering process, accessing a slow website on a slow computer as it takes too much time out of my day

- As an experienced manager I find it difficult to explain the price we charge to customers as they can see the wholesale price when we are putting an order through

- As a shop manager, I would like to save parts that need to be ordered throughout a day everyday so I can confirm the order with the wholesaler only once or twice a week at max

- As a shop Manager, I would like to review the order before I confirm it, so I can amend quantity and be able to remove items if they are not needed anymore

- As a shop manager, I would like to be able to quickly distinguish whether I am on searching parts page or reviewing order list so I don't waste my time looking for a parts in the wrong place

- As a shop manager I would like to be able to see the total wholesale price for the order, so that I can see if I am within spending budget

- As a new assistant manager I would like to quickly search for an item using item number and add it to shop ordering cart, so I don't forget to order it later

#### back2bikes Owner

- As the owner of the business, I would like to be able to see both the net price and wholesale price within the ordering system, so money in and out can be tracked easily

- As a business we need to earn money to pay our employed manager and cover costs such as delivery and gst so we can continue to survive and grow

#### Customer

- As a bike rider I enjoy the quality and friendliness of the back2bikes volunteers but feel like their ordering system is slow and confusing

- As an owner of many bikes I like to get my bikes fixed quickly and cheaply. I get confused when I see on the back2bikes ordering website that a price is $30 but they charge me $60

- As a customer, I would like to see the final price that it will cost me to fix/service my bicycle so I don't have to do any additional calculations myself

- As a customer I like transparent costing so I don't encounter any hidden costs later on

<img src="./assets/userstories.png" alt="alt text" width="250px" height="500px">

### 4. A workflow diagram of the user journey/s
---

![workflow diagram of the user journey](./assets/wireframe1.png)


### 5. Wireframes for all main pages of your app
---
#### Search result with shaded hover-over/add to cart

 ![other buttons used throughout app](./assets/wireframe1.png)


#### Card/item components based on current attendance app volunteer cards

 ![card/item components based on current attendance app volunteer cards](./assets/wireframe2.png)

#### Buttons/nav bar component

 ![buttons/nav bar component](./assets/wireframe3.png)

#### Other buttons used throughout app

 ![other buttons used throughout app](./assets/wireframe4.png)

#### Complete page with list of orders

 ![other buttons used throughout app](./assets/wireframe5.png)


#### List of orders - shop view(showing wholesale prices)


 ![list of orders - shop view(showing wholesale prices)](./assets/wireframe6.png)

#### Single item view - one card - mobile

 ![single item view - one card - mobile](./assets/wireframe7.png)

#### Item list/search results - alternative view

 ![item list/search results - alternative view](./assets/wireframe8.png)


### 6. Entity Relationship Diagram (ERD)
---
During the early stages of the project, there have been minor adjustments to the schemas. Taking full advantage of a document database we created at sub-schema for "ordered parts" field which makes scalability more manageable and any changes to be more transparent.

![document_db_schema](./assets/b2b_schema.png)


### 7. Project plan and effort estimation
---
Project Plan:

* Discuss project strategies and tools 
* Discuss timeline and prio
* Understanding project scope and deliverables
* Inspire and deliver features based on user stories
* Use Trello project management and task allocation
* Adopt Agile methodology to track progress and key milestone goals
* Run daily standups with team
* Maintain transparency and open communication with client
* Adjust to changes
* Conduct risks assessment
* Define roles and responsibilities


Effort Estimation: 

As a lot of what we did was pair programming we were constantly reviewing and tweaking each others code. Originally the plan was to have to pairs coding with the 5th person (Eryk) working on his own but also jumping into each pair to help out when needed. As the team discovered their strenths we would sometimes code on our own but still often reviewed each others code. When something was particularly tricky or taking time we would pair program again until the problem was solved. 


# Tools & Methodologies

### 1. Trello or similar project management tool to be used for Kanban process to track progress of build
---
We used Trello and used a specific Trello board layout, as it is used quite extensively in agile software development.

Below are how the lists / columns have been organized:

#### Backlog

These are items that need to be done, but perhaps they depend on something like;

* It depends on another card being completed first.
* You have not worked out the details of how to do it.
* It's not in the current sprint, or it's not a high priority.

#### Ready

These are items that are ready to go, and have details filled in on the card. Create a checklist of the things that needs to be completed.


#### In progress

When you start a task, move the card into "In Progress" and put your name on it. It's best to only have one card for each person in this list - make it a habit to complete a task before grabbing another one.

#### Dev done

When you have completed work on the task, create a pull request, update the changelog, and move it to "Dev Done".

Someone other than the dev should review the Pull Request for code quality, ask for changes if needed, and finally approve and merge it

When the PR is merged, it will be moved into QA for someone to test it.

#### QA (Quality Assurance)

All items should be tested in the staging environment by someone other than the person who did the work. Someone else will test it differently, and that perspective is useful.

#### Done

We move cards to done after it has been through all of the steps above. There are some exceptions, but all development cards will need to go through the process.

Once we have made a release of the software to production, we will archive the cards.

![document_db_schema](./assets/updateb2btrello.png)

![document_db_schema](./assets/updateteamtrello.png)


### 2. GitHub Demonstrate use of frequent commits, feature branches (based on user stories), pull requests and merges

Git Commits 
![git commits](./assets/gitcommits1.png)

Git Stats
![git stats](./assets/gitstats.png)

Git Branches
![git branches](./assets/branches.png)


---
#### Back2Bike Git Strategy

Joining Back2Bike's (client) repo, there were house rules we had to comply with and expectations to be met when creating branches, making commits and pull requests. These standards and conventions were communicated through _Nuclino_

![repo_strategy](./assets/b2b_branch_strategy.png)

It was a completely different experience joining "someone else's" repo. Naming convention, standards and git strategies that we thought would be acceptable simply were not for the client. It challenged us in a way that we understand how vital it is to name things _meaningful_ and ensures quality control accross the entire repo. 

#### Back2Bike branches

![b2b_branch](./assets/b2b_branches.png)

#### Snippets of activity on Github

![b2b_commits](./assets/team_commits.png)

#### Pull Requests

![team_PR](./assets/b2b_pr.png)
### 3. Use Agile development methodologies
---
We will work as an agile team. This means:

Sprints (2 weeks)
Aim for Minimal Viable Product (MVP)
From the Agile Manifesto:

Working code over documentation
Individuals and Interactions Over Processes and Tools
Customer Collaboration Over Contract Negotiation
Responding to Change Over Following a Plan
Other agile gems:

Frequent delivery of working software
Fail quickly (or don't be afraid to fail and change course)
How do we do this:

Use Trello as our Kanban board for the sprint
Work on one thing at a time
Talk about what it is, and how to do it
Challenge the story


### 4. Code review. Demonstrate that you have had your code reviewed by other students and that you have provided a code review for others

As a lot of what we did was pair programming we were constantly reviewing and tweaking each others code. Originally the plan was to have to pairs coding with the 5th person (Eryk) working on his own but also jumping into each pair to help out when needed. As the team discovered their strenths we would sometimes code on our own but still often reviewed each others code. When something was particularly tricky or taking time we would pair program again until the problem was solved. 

Our code was also constantly overseen and reviewed by our client as we were pushing to the organisations Github. This means that often our pull requests would be rejected and more work required before the work was accepted by the client. 


### 5. Show evidence of client communication, e.g. meeting minutes, emails, or other communication tools
#### Slack 
Main tool for communicating with the client was _Slack;_
The client invited our team to their slack channel, we also had our own sub-channel dedicated for the the project.
Slack was the most convenient and well rounded platform for communication.

#### Google Hangouts 
This was our group's first experience using Google Hangouts, we used it for Video calls and screenshare with the client. 

![b2b_slack](./assets/hangouts.png)

#### Face to Face 
* Numerous times we met face to face with the client during the duration of the project. It was really the best method of communication, we took advantage of these meetings to clarify any questions and was an opportunity for the client to mentor us. We all felt grateful that the client was able to meet with us on numerous occassions.


![b2b_slack](./assets/b2b_slack.png)