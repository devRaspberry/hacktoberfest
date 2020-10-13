'''

    sum of the elements of each node(consider carry) in REVERSE ORDER of two given linked lists.
    e.g.
    1->5->6,1->5->6 : 2->0->3->1
    explanation: 651 + 651 = 1302 => 2->0->3->1 in reverse
'''

def sumOfNodes(args1, args2):
    class Node:
        def __init__(self, value=None, next=None):
            self.value = value
            self.next = next


    class LinkedList:
        def __init__(self):
            self.head = None

        def insert(self, data):
            if self.head == None:
                node = Node(value=data)
                self.head = node
            else:
                node = Node(value=data, next=self.head)
                self.head = node

    class SumList:
        def findSum(self, l1, l2):
            sumList = []
            l1_temp = l1.head
            l2_temp = l2.head
            l1_str = ''
            l2_str = ''

            while l1_temp != None or l2_temp != None:
                l1_str += str(l1_temp.value)
                l2_str += str(l2_temp.value)
                l1_temp = l1_temp.next
                l2_temp = l2_temp.next
            temp = str(int(l1_str)+int(l2_str))
            sumList.append(int(temp[-1::-1]))
            return sumList


    # instantiating linked lists
    l1 = LinkedList()
    l2 = LinkedList()

    # inserting nodes
    for arg in args1:
        l1.insert(arg)

    for arg in args2:
        l2.insert(arg)

    # instantiating class SumList
    o = SumList()
    print(o.findSum(l1, l2))


# testing
if __name__ == '__main__':
    sumOfNodes(args1 = [7,4,7], args2 = [7,4,1])
    sumOfNodes(args1=[1,5,6], args2=[1,5,6])
    sumOfNodes(args1=[2,4,1], args2=[1,5,6])
