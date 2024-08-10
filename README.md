

# LinkedOutReach

You've heard of LinkedIn. Now introducing LinkedOutReach—a platform designed to empower students, industry newcomers, and career transitioners to take the first step in building their professional networks.

Let’s be honest, with everything on your plate, who has the time to craft and format the perfect networking email? LinkedOutReach simplifies the process, helping you make meaningful connections without the stress. Get started with ease, and focus on what really matters—growing your career.

LinkedOutReach leverages state-of-the-art NLP and machine learning techniques to scrape a user's LinkedIn profile data and cross-reference it against LinkedIn's very own dataset of all its public users via its own API to match the user with people with built existing platforms that share similarities and uses these commonalities to craft a personalised example message that the user can send to get to grip with connecting with other people


## Tech Stack & Requirements

**Languages:** 
- `python=3.8.0+`

**Front End:** 
- React (Vite) + Typescript
- React
- Typescript

**Backend End:** 
- Python
- Flask

**Web-Scraping Backend:** 
- `selenium==4.1.3` (webdriver & webDriverManger)
    - `webdriver-manager==3.5.2`
- `beautifulsoup4==4.10.0` (HTML parsing)

**Database**: 
- MongoDB (Atlas or local installation)
- `pymongo==4.0.1`

**Machine Learning:**
- Cohere API's for text embedding, summarization, and generation

## SetUp Instructions

**1. Clone the Repo**

```
git clone https://github.com/yourusername/linkedin-profile-scraper.git
cd linkedin-profile-scraper
```

**2. Install Dependencies (using bestie pip)**

```
pip install selenium==4.1.3 beautifulsoup4==4.10.0 pymongo==4.0.1 webdriver-manager==3.5.2
```

**3. MongoDB SetUp**

MongoDB cluster configured as such:

![Alt Text](https://github.com/shivyam/linkedOutReach/blob/main/readMeImgs/Mongo%20Configuration.JPG))

Ensure MongoDB instance is running. For the purposes of this project, only using one account so password shouldn't need to change. Potentially will need to add more IPs so other devices can access it tho. 

**4. Update Script with Credentials**

Update linkedIn username and password as needed

**5. Run the script**

As shown below

![Alt Text](https://github.com/shivyam/linkedOutReach/blob/main/readMeImgs/Terminal%20ScreenShot.JPG )

Refresh to check scraped data has been added to database:

![Alt Text](https://github.com/shivyam/linkedOutReach/blob/main/readMeImgs/MongoDB%20Update.JPG))

Have fun using 

![Alt Text](https://github.com/shivyam/linkedOutReach/blob/main/readMeImgs/linked%20out(1)(1).png))

