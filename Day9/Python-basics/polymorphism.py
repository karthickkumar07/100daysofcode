
###### Duck typing ####
class Pycharm:

    def execute(self):
        print("Compiling")
        print("Running")


class MyEditor:
    def execute(self):
        print("Spell Check")
        print("Convention Check")
        print("Compiling")
        print("Running")


class Laptop:

    def code(self, ide):
        ide.execute()


ide = MyEditor()

lap1 = Laptop()
lap1.code(ide)


##### operator overloadibg ######

class Student:

    def __init__(self, m1, m2):
        self.m1 = m1
        self.m2 = m2

    def __add__(self, other):
        m1 = self.m1 + other.m1
        m2 = self.m2 + other.m2
        s3 = Student(m1, m2)

        return s3

    def __gt__(self, other):
        r1 = self.m1 + self.m2
        r2 = other.m1 + other.m2
        if r1 > r2:
            return True
        else:
            return False

    def __str__(self):
        return '{} {}'.format(self.m1, self.m2)


s1 = Student(58, 69)
s2 = Student(69, 65)

s3 = s1 + s2

if s1 > s2:
    print("s1 wins")
else:
    print("s2 wins")

a = 9
print(a.__str__())

print(s2)


##### method overriding #######

class dad:
    def show(self):
        print("Nokia")


class son(dad):
    pass


a = son()
a.show()


class dad:
    def show(self):
        print("Nokia")


class son(dad):
    def show(self):
        print("realme")


a = son()
a.show()


#################
