CREATE TABLE Username(
    Name_Id     SERIAL PRIMARY KEY,
    Name        varchar(50),
    Password    varchar(2000),
    confirmPassword varchar(50),
    Email       varchar(2000)

);

CREATE TABLE SignUp(
    SignUp_Id SERIAL PRIMARY KEY,
    Name varchar(50),
    Email varchar(2000),
    Password varchar(50),
    confirmPassword varchar(50),
)

CREATE TABLE Algorithms(

    Algorithms_Id   SERIAL PRIMARY KEY,
    Question    varchar(2000),
    Answer      varchar(2000)
    
);

CREATE TABLE Puzzles(
    Puzzles_Id      SERIAL PRIMARY KEY,
    Question    varchar(2000),
    Answer      varchar(2000)
    


);


CREATE TABLE ComputerScience(
    Computerscience_Id  SERIAL PRIMARY KEY,
    Question    varchar(2000),
    Answer      varchar(2000)
    

);

CREATE TABLE Designs(
    Designs_Id  SERIAL PRIMARY KEY,
    Question    varchar(2000),
    Answer      varchar(2000)
   

);







INSERT INTO Username(name, password, email)
VALUES
('Hemal', 'hemal123', 'hemal@gmail.com'),
('John', 'john123', 'john@gmail.com'),
('Jason', 'jason123', 'jason@gmail.com');

INSERT INTO SignUp(name, email, password)
VALUES

('Hemal', 'hemal@gmail.com', 'hemal123'),
('John', 'john@gmail.com', 'john123'),
('Jason', 'jason@gmail.com', 'jason123' );



INSERT INTO Algorithms(question, answer)
VALUES
('What is an algorithm?', 'Informally, an algorithm is any well-defined computational procedure that takes some value, or set of values, as input and produces some value, or set of values, as output. An algorithm is thus a sequence of computational steps that transform the input into the output. '),
('Can Binary Search be used for linked lists?', 'Since random access is not allowed in linked list, we cannot reach the middle element in O(1) time. Therefore Binary Search is not possible for linked lists. There are other ways though, refer Skip List for example.'),
('How to find angle between hour and minute hands at a given time?', 'The idea is to take a reference point as 12. Find the angle moved by hour and minute hands, subtract the two angles to find the angle between them. See angle between hour hand and minute hand for more details.'),
('A sorted array is rotated at some unknown point, how to efficiently search an element in it.', 'A simple approach is linear search, but we can search in O(Logn) time using Binary Search. See Search an element in a sorted and pivoted array for more details.  Other variations of this problem like find the minimum element or maximum element in a sorted and rotated array.'),
('Given an array of size n with range of numbers from 1 to n+1. The array doesn’t contain any duplicate, one number is missing, find the missing number.', 'There can be many ways to solve it. The best among is to use XOR. See Find the missing number for details. There are many variations of this problem like find the two repeating numbers, find a missing and a repeating number, etc.');

INSERT INTO Puzzles(question, answer)
VALUES
('How to measure exactly 4 gallon of water from 3 gallon and 5 gallon jars, Given, you have unlimited water supply from a running tap.', 'Step 1. Fill 3 gallon jar with water. ( 5p – 0, 3p – 3)
Step 2. Pour all its water into 5 gallon jar. (5p – 3, 3p – 0) Step 3. Fill 3 gallon jar again. ( 5p – 3, 3p – 3) Step 4. Pour its water into 5 gallon jar untill it is full. Now you will have exactly 1 gallon water remaining in 3 gallon jar. (5p – 5, 3p – 1) Step 5. Empty 5 gallon jar, pour 1 gallon water from 3 gallon jar into it. Now 5 gallon jar has exactly 1 gallon of water. (5p – 1, 3p – 0) Step 6. Fill 3 gallon jar again and pour all its water into 5 gallon jar, thus 5 gallon jar will have exactly 4 gallon of water. (5p – 4, 3p – 0)'),
('A wants to send a secret message to his friend B in the mail.  But C (A’s Friend), who A don’t trust, has access to all A’s mail. So A put his message in a box with a lock. But A is not allowed to send a key!  How can A send his message through securely?', 'Send the box with the lock to B.  B can’t open it, but can put another lock on the box.  B sends this box with the 2 locks back to A, A unlock his lock and send it back to B again.  So there is just B’s lock on the box and B can now open it.'),
('A horse rider went a mile in 5 minutes with the wind and returned in 7 minutes against the wind. How fast could he ride a mile if there was no wind?', 'Most of us will proceed like that if a rider goes a mile in 2 minutes with the wind, and returns against the wind in 3 minutes, that 2 and 3 equal 5, should give a correct average, so that time taken should be two and half minutes. We find this answer to be incorrect, because the wind has helped him for only 2 minutes, while it has worked adversely for 3 minutes.  If he could ride a mile in 2 minutes with the wind, it is clear that he could go a 1.5 mile 3 minutes, and 1 mile in 3 minutes against the wind.  Therefore 2.5 miles in 6 minutes gives his actual speed, because the wind helped him just as much as it has retarded him, so his actual speed for a single mile without any wind would be (2.5)/6 = 5/12 miles/sec'),
('You’ve got someone working for you for seven days and a gold bar to pay him. The gold bar is segmented into seven connected pieces. You must give them a piece of gold at the end of every day. What and where are the fewest number of cuts to the bar of gold that will allow you to pay him 1/7th each day?', 'Lets split the chain as, Day 1: Give A (+1) Day 2: Get back A, give B (-1, +2) Day 3: Give A (+1) Day 4:Get back A and B, give C (-2,-1,+4) Day 5:Give A (+1) Day 6:Get back A, give B  (-1,+2) Day 7:Give A (+1)'),
('You are on your way to visit your Grandma, who lives at the end of the valley. It’s her anniversary, and you want to give her the cakes you’ve made. Between your house and her house, you have to cross 5 bridges, and as it goes in the land of make believe, there is a troll under every bridge! Each troll, quite rightly, insists that you pay a troll toll. Before you can cross their bridge, you have to give them half of the cakes you are carrying, but as they are kind trolls, they each give you back a single cake.  How many cakes do you have to leave home with to make sure that you arrive at Grandma’s with exactly 2 cakes?', 'The answer is 2 Cakes How?  At each bridge you are required to give half of your cakes, and you receive one back. Which leaves you with 2 cakes after every bridge.');

INSERT INTO Designs(question, answer)
VALUES
('What is a design pattern?', 'In software engineering, a design pattern is a general repeatable solution to a commonly occurring problem in software design. A design pattern isnt a finished design that can be transformed directly into code. It is a description or template for how to solve a problem that can be used in many different situations.'),
('How to design a parking lot using object-oriented principles?', 'For our purposes right now, we’ll make the following assumptions. We made these specific assumptions to add a bit of complexity to the problem without adding too much. If you made different assumptions, that’s totally fine.  1) The parking lot has multiple levels. Each level has multiple rows of spots.  2) The parking lot can park motorcycles, cars, and buses.  3) The parking lot has motorcycle spots, compact spots, and large spots.  4) A motorcycle can park in any spot.  5) A car can park in either a single compact spot or a single large spot.  6) A bus can park in five large spots that are consecutive and within the same row. It cannot park in small spots.');

INSERT INTO ComputerScience(question, answer)
VALUES
('What is a class?', 'A class is a blueprint from which objects are created. A class contains methods and variables associated with an instances of a class.'),
('What is polymorphism?','Polymorphism is the ability of an object to take on multiple forms. Most commonly polymorphism is used in OOP when a parent class reference is used to refer to a child class object.'),
('What is the different type of access modifiers?', 'There are four type of access modifiers as given below: • Visible to the overall package. No modifier needed. • Private – Visible to class only.• Public – Visible to the world.• Protected – Visible to package and subclass.'),
('What is an Interface?', 'The interface is a reference type in Java, similar to the class but its collection of abstract methods. A class can implement multiple interfaces.'),
('What is an abstract class?', 'A class which contains the abstract keyword in a declaration is called abstract class. The properties of the abstract class are as follows:Abstract classes may or may not contain abstract methods but, if a class has at least one abstract method, then it must be declared abstract. The abstract class cannot be instantiated.  To use an abstract class, we have to inherit it from another class.  If we inherit an abstract class, then we have to provide implementations to all the abstract methods in it.');


