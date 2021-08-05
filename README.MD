# 1. Introduction
PetTest project has a test scripts(positive and negative) which covers all the endpoints associated with Pet service.
Project has been implemented in a very simple way.

Fallowing software's has been used to build this project
1)IntelliJ IDEA
2)JAVA(SDks) 11.0.8
3)MAVEN
4)Cucumber-java
5)cucumber-Junit
6)rest-assured
7)Plugin :maven-cucumber-reporting 

How to run tests :
1. clone the repo from github
2.import to IntelliJ IDE
3.make sure you have all mentioned dependencies supported in the IDE
4.Run TestRunner.java class
5. Tests written in the pet.feature should be executed

How to generate tests report :
1. Go to console in the project path(PetTest)
2. Run this maven command : mvn clean install
3.check this path target\reports\html-reports\cucumber-html-reports\overview-features.html
4. open overview-features.html in a chrome 


          