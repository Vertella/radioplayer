#### What is OWASP and what is its primary mission as described in the article?

OWASP står för Open Web Application Security Project och är en internationell organisation som fokuserar på internet-säkerhet. Huvudprincipen hos välgörenhets-organisationen är att göra det enkelt för utvecklare att hämta och använda material som används till att förbättra säkerheten på ens egna webbsidor. 

#### Explain the concept of "Injection". Provide an example of how an injection attack could compromise a web application's security.

En "Injection" attack går till så att opålitlig data skickas genom någon sorts "data submiddion", till exempel där man loggar in på en webbsida. Istället för att skriva in användarnamnet så skickar personen bakom attacken en rad kod, t.ex. SQL kod som sedan  körs på webbsidan om den inte är försäkrad och skyddad från utomstående hot. Det kan leda till att attackeraren får ut information som de egentligen inte ska ha tillgång till, exempelvis andra användares uppgifter m.m.


#### Explain two strategies to prevent Broken Authentication vulnerabilities.
Ett mycket vanligt sätt att förhindra svagheter i autentisering av användare är att kräva 2FA vid inloggning. 2FA står för "two-factor authentication" och innebär att användaren bekräftar sin identitet på två olika sätt, exempelvis genom användarnamn + lösenord samt genom att fylla i en kod hen fick på sms.

Ett annat sätt kan vara "rate limiting", vilket innebär att man bara får ett visst antal försök att logga in på sitt konto innan det flaggas för misstänksamt beteende. Vanligtvis behöver personen återställa sitt lösenord eller skapa ett nytt genom att trycka på en länk som skickas till epost addressen som angavs vid inloggningsförsöket. Detta för att se till så att det är ägaren av kontot som försöker få tillgång och ingen annan. 

#### Describe the potential consequences of Insecure Deserialization in web applications. How can developers protect against such attacks?
Två möjliga konsekvenser av "insecure deserialization" är exempelvis DDoS attacker och REC (remote code executions). 

Det finns flera sätt att förebygga dessa attacker från att ske och det absolut bästa sättet är att förhindra att data från opålitliga källor tas emot på webbsidan. Dessutom kan man övervaka "deserialization" av data samt implementera olika metoder för att dubbelkolla datan som hanteras.


#### Briefly define Cross-Site Scripting (XSS) as outlined in the article and list two methods suggested in the article to prevent XSS attacks in web applications.

"Cross-site scripting" betyder att en webbsida inte är skyddad mot att användare lägger till kod i url-länken som kan visas av andra användare. Det betyder att någon kan skicka ett mail med en länk som ser pålitligt ut, (t.ex. från banken) men att länken innehåller farlig javascript-kod som körs när användaren trycker på länken. Ett sätt att förhindra XSS attacker inkluderar att undvika/förebygga opålitliga HTTP requests, validering av data, medan ett annat förslag är implementering av Ruby on Rails eller ReactJS som har inbyggt skydd mot XSS attacker. 