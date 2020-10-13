#include <stdio.h>
#include <stdlib.h>
void push();
void pop();
void display();
struct Node
{
    int data;
    struct Node *next;
};
struct Node *head;

void push()
{
    int data;
    struct Node *ptr = (struct Node *)malloc(sizeof(struct Node));
    if (ptr == NULL)
    {
        printf("not able to push the element");
    }
    else
    {
        printf("Insert the data  : ");
        scanf("%d", &data);
        if (head == NULL)
        {
            ptr->data = data;
            ptr->next = NULL;
            head = ptr;
        }
        else
        {
            ptr->data = data;
            ptr->next = head;
            head = ptr;
        }
    }
}
void display()
{
    struct Node *ptr;
    ptr = head;
    if (ptr == NULL)
    {
        printf("Stack is empty\n");
    }
    else
    {
        printf("The elements on stack are :- \n");
        while (ptr != NULL)
        {
            printf("%d\n", ptr->data);
            ptr = ptr->next;
        }
    }
}

void pop()
{
    int item;
    struct Node *ptr;
    if (head == NULL)
    {
        printf("Your stack is empty\n");
    }
    else
    {
        item = head->data;
        ptr = head;
        head = head->next;
        free(ptr);
    }
}

int main()
{
    int choice = 0;
    while (choice != 4)
    {
        printf("\n Enter your choice \n");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
        {
            push();
            break;
        }
        case 2:
        {
            pop();
            break;
        }
        case 3:
        {
            display();
            break;
        }
        default:
        {
            printf("Please Enter valid choice ");
        }
        }
    }
    return 0;
}
