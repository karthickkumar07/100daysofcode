#######  Basic class #####
class karthick:
    def programmer(self):
        print("I'm a programmer")


guy = karthick()

guy.programmer()


# init method ######  (similar like constructor uses even without calling)

class karthick:

    def __init__(self):
        print("Init method running without calling")

    def programmer(self):
        print("I'm a programmer")


guy = karthick()

guy.programmer()


class Mobile:

    def __init__(self, ram, processor):
        self.ram = ram
        self.processor = processor
        print("Poco Specs")

    def specs(self):
        print("Ram is: "+self.ram + "\nProcessor is: "+self.processor)


Poco = Mobile('6gb', 'snapdragon730G')
Poco.specs()


#####################

class Hero:
    def __init__(self):
        self.name = "Vijay"
        self.Profession = "Actor"

    def Update(self):
        self.name = "Raina"
        self.Profession = "Cricketer"

    def comparison(self, h2):
        if(self.Profession == h2.Profession):
            print("same profession")
        else:
            print("Different profession")


h1 = Hero()
h2 = Hero()

if(h1.name == h2.name):
    print("they are  same")
h1.comparison(h2)
h1.Update()

h1.comparison(h2)
print(h1.name)
print(h2.name)

#########################
