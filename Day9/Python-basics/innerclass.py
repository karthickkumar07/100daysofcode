class Student:

    def __init__(self, name, dept):
        self.name = name
        self.dept = dept
        self.lap = self.Laptop()

    def show(self):
        print(self.name, self.dept)
        self.lap.show()

    class Laptop:

        def __init__(self):
            self.brand = "Hp"
            self.cpu = 'i5'
            self.ram = 8

        def show(self):
            print(self.brand, self.cpu, self.ram)

        def demo(self):
            print("sample")


s1 = Student('karthick', 'IT')
s2 = Student('vijay', 'Csc')

s1.show()
s1.Laptop.demo(s1)
lap1 = s1.lap
lap2 = s2.lap
print(lap1.brand)
