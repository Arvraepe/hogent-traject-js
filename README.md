hogent-traject-js
=================

Welkom op de github pagina van de presentatie gegeven op Hogeschool Gent over Restful Web Services in NodeJS
met behulp van de restify NPM package. De presentatie bestaat uit **3** delen. In het eerste delen bespreken we 
welke rol **JavaScript** speelt in de huidige business en hoe deze eventueel kan evolueren. Het tweede deel is
helemaal aan **NodeJS** en het NPM-pakket genaamd **Restify**. Met het Restify framework kunnen we gemakkelijk 
Rest Web Service maken voor NodeJS die CORS compatibel is. In het laatste en vrijwel grootste deel van de presentatie
wordt er gedemonstreerd hoe je nu zelf een framework kan maken in JavaScript. Waar moeten we op letten? Hoe gaan we 
met scopes om? What zijn closures? Hoe encapsuleer ik mijn code zodat de impact op andere code minimaal is? Dit zijn 
de vragen dat we ons moeten stellen tijdens het maken van frameworks.

## Doel van de presentatie
Op het einde van de presentatie zou iedereen een web service moeten geschreven hebben in NodeJS met behulp van Restify 
waar er minstens een GET en een POST request worden afgehandeld. De API die we gaan maken heet MovieTrivia of in het 
kort, **Movia**. Op een GET pad gaan we een random vraag ophalen en op een POST pad gaan we het antwoord op een vraag
posten. De Service laat de user dan weten als de vraag juist of fout beantwoord was. 

Het tweede luik van het eind prototype is het front-end gedeelte. We gaan een snippet gebruiken of zelf schrijven
(aan de hand van het aantal tijd dat we hebben) dat een abstracte service voorstelt die onze requests zal afhandelen.
Daarbovenop schrijven we een Framework. Hier zijn de studenten volledig vrij in. Ze kunnen kiezen om GUI, CONTROL, etc 
te scheiden, of gewoon een minder gestructureerde Framework te ontwikkelen. Gebruikmakend van **Closures** en **The Module 
Pattern** zal het framework een component zijn dat niet met andere code interageert tenzij anders aangegeven.

Het doel is om een werkende Movie Trivia applicatie te maken.
