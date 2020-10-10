class HashTable:
    def __init__(self):
        self.max=100
        self.arr=[None for i in range(self.max)]

    def get_Hash(self,key):
        h=0
        for char in key:
            h += ord(char)
        return h % self.max

    def add(self,key,val):
        h=self.get_Hash(key)
        self.arr[h]=val

    def get(self,key):
        h=self.get_Hash(key)
        return self.arr[h]

    def remove(self,key):
        h=self.get_Hash(key)
        self.arr[h]=None
        

H=HashTable()
H.add('Nov 7',4)
print (H.arr)
print (H.get('Nov 7'))
