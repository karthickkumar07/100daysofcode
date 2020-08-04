
###### single inheritance constructor values #####
class Javascript:
    def __init__(self):
        print('Init js class')

    def version1(self):
        print("version 1")


class React(Javascript):
    def __init__(self):
        print('Init React class')

    def version3(self):
        print("version 3")


R = React()  # ====> constructor in react so it takes react constructor  if not in react it will take js ####

###########


class Javascript:
    def __init__(self):
        print('Init js class')

    def version1(self):
        print("version 1")


class React(Javascript):
    def __init__(self):
        super().__init__()
        print('Init React class')

    def version3(self):
        print("version 3")


R = React()

############

#### for multiple inheritance ####


class Javascript:
    def __init__(self):
        print('Init js class')

    def version1(self):
        print("version 1")


class React():
    def __init__(self):
        print('Init React class')

    def version3(self):
        print("version 3")


class Filter(Javascript, React):
    # def __init__(self):
    #     print('Init Filtr class')

    def version4(self):
        print("version4")


f = Filter()

####  It will take js class constructor since it goes with left one or first one  Method refers as Method resolution order ###
