########## single heritance #######

class Javascript:
    def version1(self):
        print("version 1")

    def version2(self):
        print("version 2")


class React(Javascript):
    def version3(self):
        print("version 3")

    def version4(self):
        print("version 4")


R = React()
R.version1()
R.version2()
R.version3()


####### Multiple Inheritance ######


class Javascript:
    def version1(self):
        print("version 1")

    def version2(self):
        print("version 2")


class React(Javascript):
    def version3(self):
        print("version 3")

    def version4(self):
        print("version 4")


class Hooks(React):
    def version5(self):
        print('version 5')

    def version6(self):
        print('version6')


h = Hooks()
h.version1()
h.version3()
h.version5()


########## Multiple inheritance ###########


class Javascript:
    def version1(self):
        print("version 1")

    def version2(self):
        print("version 2")


class React():
    def version3(self):
        print("version 3")

    def version4(self):
        print("version 4")


class Hooks(React, Javascript):
    def version5(self):
        print('version 5')

    def version6(self):
        print('version6')


h = Hooks()
h.version1()
h.version3()
h.version5()
