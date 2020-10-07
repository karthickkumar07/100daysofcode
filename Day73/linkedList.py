class Node:
    def __init__(self,data=None,next=None):
        self.data=data
        self.next=next

class LinkeList:
    def __init__(self):
        self.head=None

    def insert_at_begining(self,data):
        node = Node(data,self.head)
        self.head=node

    def insert_at_end(self,data):
        if self.head is None:
            self.head=Node(data,None)
            return
        itr=self.head
        while itr.next:
            itr=itr.next
        itr.next=Node(data,None)

    def insert_values(self,data_list):
        self.head=None
        for data in data_list:
            self.insert_at_end(data)

    def printf(self):
        if self.head is None:
            print("LinkedList is empty")
            return
        itr=self.head
        llstr = ''
        while itr:
            llstr += str(itr.data) + '--->'
            itr=itr.next
        print(llstr)

    def get_length(self):
        count =0
        itr=self.head
        while itr:
            count+=1
            itr=itr.next
        return count


    def remove_at(self,index):
        if index<0 or index>=self.get_length():
            raise Exception("Invalid Index")
        if index==0:
            self.head=self.head.next
            return
        count =0
        itr =self.head
        while itr:
            if count==index-1:
                itr.next=itr.next.next
                break
            itr=itr.next
            count+=1

    def insert_at(self,index,data):
        if index<0 or index>=self.get_length():
            raise Exception("Invalid Index")
        if index==0:
            self.insert_at_begining(data)
            return

        count=0
        itr=self.head
        while itr:
            if count==index-1:
                itr.next=Node(data,itr.next)
                break
            itr=itr.next
            count +=1
    def insert_after_value(self,data_after,data):
        itr=self.head
        count=0
        while itr:
            if itr.data==data_after:
                self.insert_at(count+1,data)
                return
            itr=itr.next
            count += 1

        raise Exception("value not found ")

    def remove_by_value(self,data):
        itr=self.head
        count=0
        while itr:
            if itr.data==data and count==0:
                self.head=itr.next
                return
            if itr.data==data:
                itr1.next=itr.next
                return
            itr1=itr
            itr=itr.next
            count+=1
        raise Exception("value not found ")




if __name__ =='__main__':
    pass
    ll=LinkeList()
    # ll.insert_at_begining(5)
    # ll.insert_at_begining(89)
    # ll.insert_at_end(4)
    ll.insert_values(["vijay","Raina","spartan" ,"Karthick","sam"])
    ll.printf()
    ll.remove_at(2)
    ll.printf()
    ll.insert_after_value("Raina","Karthi")
    ll.printf()
    ll.remove_by_value("sam")
    ll.printf()
    print("Length of linkedList is: ",ll.get_length())
