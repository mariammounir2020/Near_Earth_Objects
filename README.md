1.	The code is written on Node.js using Lambda function through API gateway to retrieve a list of Near earth objects
2.	Get request this  link  https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY by adding start date, end date, and my api key to query specific data
3.	The user will this link https://mfaodyvbpj.execute-api.us-east-1.amazonaws.com/my-function
4.	An html form with starting and ending date (within 7days of the starting date)
5.	The user will get a list of “Near Earth objects” has the following:
1.	The object ID
2.	The object name
3.	The diameter of the Object, in metres
4.	Whether or not the Object is hazardous
5.	The velocity of the object in Kilometres per hour
