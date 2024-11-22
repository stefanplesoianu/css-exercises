/*
MODIFIERS (access / non access) 
    CLASSES : public / default (Access)
              final / abstract (non access)
    ATTRIBUTES / METHODS / CONSTRUCTORS : public, private, default, protected (access)
                                          final, static, abstract, transient, synchronized, volatile

abstract class Main {
    public String fname = "John"
    public int age = 24
    public abstract void study()
}

class Student extends Main {
    public int graduationYear = 2018
    public void study() {
        System.out.println("studying all day long")
    }
}

class Second {
    public static void main(String[] args) {
        Student myObj = new Student()

        myObj.study()
    }
}

ENCAPSULATION - private classes + get / set
private class Person {
    private String name
    public String getName() { return name }
    public void setName(String newName) { this.name = newName}
}

public class Main {
    public static void main(String[] args) {
        Person myObj = new Person()
        myObj.setName("John")
        System.out.printnl(myObj.getName())
    }
}

INNER CLASSES (just know about them)
POLYMORPHISM - superclass has prop; subclasses can inherit it but change it,depending on needs
ABSTRACTION - process of hiding certain details and showing only essential info to the user
    abstract class = retricted class that cannot be used to create objects (to access it, it must be inherited
    from another class)
    abstract method = can only be used in an abstract class and has no body.body provided by subclass
abstract class Animal{
    public abstract void animalSound()
}
class Pig extends Animal {
    public void animalSound() { body provided here }
}
class Main {
    public static void main(String[] args) {
        Pig myPig = new Pig()
    }
}

INTERFACE - completely abstract class used to group related methods with empty bodies
interface Animal {
    public void animalSound()
    public void sleep()
}
class Pig implements Animal {
    public void animalSound() { ... }
    public void sleep() { ... }
}
class Main {
    public static void main(String[] args) {
        Pig myPig = new Pig()
        myPig.animalSound()
    }
}
        AN INTERFACE cannot create an object, but an object can implement multiple interfaces

ENUMS = class of constants(like final variables)
*/