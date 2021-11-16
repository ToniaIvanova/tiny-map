To deploy server to heroku:
```cmd
cd server
cd stormy-brook-68283
git add .
git commit -am "make it better"
git push heroku master
```

To deploy client to firebase:
```cmd
cd client
npm run-script build
```
Then replace public/static to build/static, add scripts from build/index.html to public/index.html and run:
```cmd
firebase deploy
```
