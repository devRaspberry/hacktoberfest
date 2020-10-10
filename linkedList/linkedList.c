#include <stdio.h>
#include <stdlib.h>
struct Node
{
    int data;
    struct Node *next;
};
struct Node *first = NULL;
//struct Node *rear;

//push the element at front

void push(int data)
{
    struct Node *p = (struct Node *)malloc(sizeof(struct Node));
    p->data = data;
    p->next = first;
    first = p;
}

//Insert the element at the middle//
void insert(struct Node *prev_node, int data)
{
    struct Node *new_node = (struct Node *)malloc(sizeof(struct Node));
    new_node->data = data;
    if (prev_node == NULL)
    {
        printf("Prevs node is null \n");
        return;
    }
    else
    {
        new_node->next = prev_node->next;
        prev_node->next = new_node;
    }
}
//add element in the end
void add(int data)
{
    struct Node *new_node = (struct Node *)malloc(sizeof(struct Node));
    new_node->data = data;
    struct Node *last = first;
    if (first == NULL)
    {
        first = new_node;
        return;
    }
    while (last->next != NULL)
        last = last->next;
    last->next = new_node;
    return;
}
void display()
{
    struct Node *p;
    p = first;
    if (first == NULL)
    {
        printf("LInked list is empty");
    }
    else
    {
        printf("Elements on linked list is :- \n");
        while (p != NULL)
        {

            printf("%d \n", p->data);
            p = p->next;
        }
    }
}
int main()
{
    push(5);
    push(50);
    push(15);
    push(25);
    insert(first->next, 500);
    //add(200);

    display();
    return 0;
}