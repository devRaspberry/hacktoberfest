#include <stdio.h>
#include <stdlib.h>
struct Node {
   int data;
   struct Node* next;
};
void push(struct Node** nodeH, int nodeval) {
   struct Node* new_node =(struct Node *)malloc(sizeof(struct Node));
   new_node->data = nodeval;
   new_node->next = (*nodeH);
   (*nodeH) = new_node;
}
int main() {
   struct Node* head = NULL;
   int sum = 0;
   push(&head, 95);
   push(&head, 60);
   push(&head, 87);
   push(&head, 6);
   push(&head, 12);
   struct Node* ptr = head;
   while (ptr != NULL) {
      sum += ptr->data;
      ptr = ptr->next;
   }
   printf("Sum of node = %d ",sum);
   return 0;
}