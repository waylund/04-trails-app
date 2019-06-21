# BOULDER REACT CODING NIGHT
## Trails App

### Mockups
https://docs.google.com/drawings/d/1WIgBM3Nk-TmnEEfSPlwT2iLMjHFbr_tuZHi_pez7u5M/edit


### Generating Containers
* `npm run generate container`
* React.Component
* headers: yes
* actions/constants/selectors/reducer: yes
* sagas: no
* i18n: no
* load async: no


### Generating Components
* `npm run generate component`
* No to all


### Cloud Firestore (database)
https://firebase.google.com/docs/firestore/quickstart


#### Conditions Collection Structure
```
{
  coordinates: [39.965104° N, 105.289354° E],
  date: June 18, 2019 at 12:00:00 PM UTC-6,
  description: "Fallen tree",
  location: "Fern Canyon Trail",
  photo: "", // URL of file in Cloud Storage
  type: 1, // (1- hazard, 2- condition)
}
```

### Cloud Storage (object storage)
https://firebase.google.com/docs/storage/web/start
